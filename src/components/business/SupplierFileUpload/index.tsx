'use client'

import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { uploadSupplierFile } from '@/lib/supplier-api'
import { cn } from '@/lib/utils'

interface SupplierFileUploadProps {
  value: string
  onChange: (value: string) => void
  fileType: string
  multiple?: boolean
  limit?: number
  accept?: string
  tip?: string
  maxSize?: number
  disabled?: boolean
}

function getFileNameFromUrl(url: string) {
  const parts = url.split('/')
  return parts[parts.length - 1] || '文件'
}

function checkFileType(file: File, accept: string) {
  const acceptTypes = accept.split(',').map((type) => type.trim())
  return acceptTypes.some((type) => {
    if (type.startsWith('.')) {
      return file.name.toLowerCase().endsWith(type.toLowerCase())
    }
    return file.type.includes(type)
  })
}

export function SupplierFileUpload({
  value,
  onChange,
  fileType,
  multiple = false,
  limit = 1,
  accept = '',
  tip,
  maxSize = 10 * 1024 * 1024,
  disabled = false,
}: SupplierFileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  const urls = value ? value.split(',').filter((url) => url.trim()) : []

  const handleSelectFiles = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files ?? [])
    event.target.value = ''

    if (selectedFiles.length === 0) return

    const remaining = limit - urls.length
    if (remaining <= 0) {
      setError(`最多上传 ${limit} 个文件`)
      return
    }

    const filesToUpload = multiple ? selectedFiles.slice(0, remaining) : [selectedFiles[0]!]

    for (const file of filesToUpload) {
      if (file.size > maxSize) {
        setError(`文件大小不能超过 ${(maxSize / 1024 / 1024).toFixed(1)}MB`)
        return
      }
      if (accept && !checkFileType(file, accept)) {
        setError('文件类型不支持')
        return
      }
    }

    setUploading(true)
    setError('')

    try {
      const uploadedUrls = [...urls]
      for (const file of filesToUpload) {
        const url = await uploadSupplierFile(file, fileType)
        if (multiple) {
          uploadedUrls.push(url)
        } else {
          onChange(url)
          setUploading(false)
          return
        }
      }
      onChange(uploadedUrls.join(','))
    } catch (err) {
      setError(err instanceof Error ? err.message : '上传失败')
    } finally {
      setUploading(false)
    }
  }

  const handleRemove = (urlToRemove: string) => {
    const nextUrls = urls.filter((url) => url !== urlToRemove)
    onChange(nextUrls.join(','))
    setError('')
  }

  const canUpload = !disabled && urls.length < limit

  return (
    <div className="space-y-3">
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept={accept}
        multiple={multiple}
        onChange={handleSelectFiles}
      />

      {urls.length > 0 && (
        <ul className="space-y-2">
          {urls.map((url) => (
            <li
              key={url}
              className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/5 px-3 py-2"
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="truncate text-sm text-brand-foreground hover:underline"
              >
                {getFileNameFromUrl(url)}
              </a>
              <button
                type="button"
                disabled={disabled || uploading}
                onClick={() => handleRemove(url)}
                className="shrink-0 text-xs text-red-400 hover:text-red-300"
              >
                删除
              </button>
            </li>
          ))}
        </ul>
      )}

      {canUpload && (
        <Button
          type="button"
          disabled={disabled || uploading}
          onClick={() => inputRef.current?.click()}
          className="h-10 bg-brand/20 hover:bg-brand/30 text-brand-foreground border border-brand/30"
        >
          {uploading ? '上传中...' : multiple ? '选择文件' : '点击上传'}
        </Button>
      )}

      {tip && <p className="text-xs text-gray-500">{tip}</p>}
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  )
}
