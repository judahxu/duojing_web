import { NextResponse } from 'next/server'

const AP_API_BASE = process.env.AP_API_BASE_URL ?? 'https://ap-api.henanduojing.com'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const response = await fetch(`${AP_API_BASE}/system/cooperation`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    const data = await response.json()
    return NextResponse.json(data, { status: response.ok ? 200 : response.status })
  } catch {
    return NextResponse.json({ code: 500, msg: '提交失败，请稍后重试' }, { status: 500 })
  }
}
