import type { CooperationFormData } from '@/data/cooperation-content'

interface ApiResponse {
  code: number
  msg?: string
}

export async function submitCooperation(
  data: Omit<CooperationFormData, 'cooperationType'> & { cooperationType: string },
) {
  const response = await fetch('/api/cooperation', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  const result = (await response.json()) as ApiResponse

  if (result.code !== 200) {
    throw new Error(result.msg ?? '提交失败，请重试')
  }

  return result
}
