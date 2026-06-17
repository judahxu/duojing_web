import { NextResponse } from 'next/server'

const AP_API_BASE = process.env.AP_API_BASE_URL ?? 'https://ap-api.henanduojing.com'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file')
    const fileType = formData.get('fileType')?.toString() ?? 'supplier'

    if (!(file instanceof File)) {
      return NextResponse.json({ code: 400, msg: '请选择要上传的文件' }, { status: 400 })
    }

    const upstream = new FormData()
    upstream.append('file', file)
    upstream.append('fileType', fileType)

    const response = await fetch(`${AP_API_BASE}/system/supplier/uploadFile`, {
      method: 'POST',
      body: upstream,
    })

    const data = await response.json()
    return NextResponse.json(data, { status: response.ok ? 200 : response.status })
  } catch {
    return NextResponse.json({ code: 500, msg: '上传失败，请稍后重试' }, { status: 500 })
  }
}
