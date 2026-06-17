'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface CustomerServiceChatProps {
  open: boolean
  onClose: () => void
}

const WELCOME_MESSAGE = '您好！我是多鲸智能在线客服，可为您解答公司业务、服务与联系方式等问题。'

export const CustomerServiceChat = ({ open, onClose }: CustomerServiceChatProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: WELCOME_MESSAGE },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    if (open) {
      scrollToBottom()
      inputRef.current?.focus()
    }
  }, [open, messages, scrollToBottom])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return

    const userMessage: ChatMessage = { role: 'user', content: text }
    const nextMessages = [...messages, userMessage]

    setMessages(nextMessages)
    setInput('')
    setLoading(true)

    try {
      const history = nextMessages
        .slice(0, -1)
        .filter((msg) => msg.content !== WELCOME_MESSAGE)
        .slice(-8)

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history }),
      })

      const data = (await response.json()) as { reply?: string }
      const reply = data.reply?.trim() ?? '请联系商务'

      setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: '请联系商务' }])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      void sendMessage()
    }
  }

  if (!open) return null

  return (
    <div
      className={cn(
        'fixed right-[72px] top-1/2 -translate-y-1/2 z-[70]',
        'w-[320px] h-[420px] flex flex-col',
        'rounded-xl overflow-hidden',
        'bg-gray-900/95 backdrop-blur-md',
        'shadow-[0_8px_32px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.1)]',
        'animate-in fade-in slide-in-from-right-2 duration-200',
      )}
    >
      {/* 头部 */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-brand/[0.08]">
        <div>
          <p className="text-sm font-semibold text-white">在线客服</p>
          <p className="text-[11px] text-gray-400 mt-0.5">智能问答 · 基于官方资料</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex items-center justify-center w-7 h-7 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="关闭聊天"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* 消息区 */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 scrollbar-thin">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={cn('flex', msg.role === 'user' ? 'justify-end' : 'justify-start')}
          >
            <div
              className={cn(
                'max-w-[85%] px-3 py-2 rounded-xl text-[13px] leading-relaxed',
                msg.role === 'user'
                  ? 'bg-brand/80 text-white rounded-br-sm'
                  : 'bg-white/10 text-gray-200 rounded-bl-sm',
              )}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="px-3 py-2 rounded-xl rounded-bl-sm bg-white/10 text-gray-400 text-[13px]">
              <span className="inline-flex gap-1">
                <span className="animate-bounce [animation-delay:0ms]">·</span>
                <span className="animate-bounce [animation-delay:150ms]">·</span>
                <span className="animate-bounce [animation-delay:300ms]">·</span>
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* 输入区 */}
      <div className="border-t border-white/10 p-3">
        <div className="flex gap-2 items-end">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="请输入您的问题..."
            rows={2}
            disabled={loading}
            className={cn(
              'flex-1 resize-none rounded-lg px-3 py-2 text-[13px]',
              'bg-white/5 text-white placeholder:text-gray-500',
              'border border-white/10 focus:border-brand/50 focus:outline-none',
              'disabled:opacity-50',
            )}
          />
          <button
            type="button"
            onClick={() => void sendMessage()}
            disabled={!input.trim() || loading}
            className={cn(
              'shrink-0 px-3 py-2 rounded-lg text-[13px] font-medium transition-colors',
              'bg-brand text-white hover:bg-brand/90',
              'disabled:opacity-40 disabled:cursor-not-allowed',
            )}
          >
            发送
          </button>
        </div>
      </div>
    </div>
  )
}
