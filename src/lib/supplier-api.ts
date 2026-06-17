import type { SupplierSubmitPayload } from '@/data/supplier-content'

interface ApiResponse<T = unknown> {
  code: number
  msg?: string
  data?: T
}

export async function submitSupplier(data: SupplierSubmitPayload) {
  const response = await fetch('/api/supplier', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  const result = (await response.json()) as ApiResponse

  if (result.code !== 200) {
    throw new Error(result.msg || '提交失败，请重试')
  }

  return result
}

export async function uploadSupplierFile(file: File, fileType: string): Promise<string> {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('fileType', fileType)

  const response = await fetch('/api/supplier/upload', {
    method: 'POST',
    body: formData,
  })

  const result = (await response.json()) as ApiResponse<string>

  if (result.code !== 200 || !result.data) {
    throw new Error(result.msg || '上传失败')
  }

  return result.data
}
