import { NextResponse } from 'next/server'
import { z } from 'zod'
import { buildSystemPrompt, FALLBACK_REPLY, loadKnowledgeBase } from '@/lib/knowledge-base'

const DEEPSEEK_API_URL = 'https://api.deepseek.com/chat/completions'

const chatMessageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  content: z.string().min(1).max(2000),
})

const chatRequestSchema = z.object({
  message: z.string().min(1).max(500),
  history: z.array(chatMessageSchema).max(10).default([]),
})

export async function POST(request: Request) {
  const apiKey = process.env.DEEPSEEK_API_KEY

  if (!apiKey) {
    return NextResponse.json({ reply: FALLBACK_REPLY }, { status: 200 })
  }

  try {
    const body = chatRequestSchema.parse(await request.json())
    const knowledge = loadKnowledgeBase()
    const systemPrompt = buildSystemPrompt(knowledge)

    const messages = [
      { role: 'system' as const, content: systemPrompt },
      ...body.history.map((msg) => ({ role: msg.role, content: msg.content })),
      { role: 'user' as const, content: body.message },
    ]

    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages,
        temperature: 0.2,
        max_tokens: 512,
      }),
    })

    if (!response.ok) {
      return NextResponse.json({ reply: FALLBACK_REPLY }, { status: 200 })
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>
    }

    const reply = data.choices?.[0]?.message?.content?.trim() ?? FALLBACK_REPLY

    return NextResponse.json({ reply })
  } catch {
    return NextResponse.json({ reply: FALLBACK_REPLY }, { status: 200 })
  }
}
