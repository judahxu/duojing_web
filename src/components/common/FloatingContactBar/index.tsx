'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { contactInfo } from '@/data/site-content'

interface ContactItem {
  id: string
  label: string
  detail: string
  detailLabel: string
  href?: string
  qrCodeSrc?: string
  Icon: () => React.ReactNode
}

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path
      d="M8 3.5a1.5 1.5 0 011.5 1.5c0 .8-.4 2.2 1.2 4.4 1.6 2.2 3.6 3.2 4.4 3.2a1.5 1.5 0 011.5 1.5v2.8a1.5 1.5 0 01-1.2 1.5 11 11 0 01-9.3-3.9A11 11 0 013.5 9.7 1.5 1.5 0 015 8.5V5.5A2 2 0 017 3.5h1z"
      stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.15"
    />
  </svg>
)

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <rect x="2" y="5" width="20" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.12"/>
    <path d="M2 7.5l10 7 10-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const WechatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path
      d="M8.5 4C5.5 4 3 6.1 3 8.7c0 1.4.7 2.6 1.8 3.5L4 15l2.9-1.1c.7.2 1.5.3 2.3.3.2 0 .4 0 .6-.1-.3-.9-.5-1.8-.5-2.8 0-3.1 2.8-5.6 6.2-5.6.3 0 .7 0 1 .1C16.1 4.8 12.5 4 8.5 4z"
      stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15"
    />
    <path
      d="M15.5 10.5c-2.8 0-5 1.9-5 4.3 0 .8.3 1.6.8 2.2l-.5 1.8 1.9-.7c.6.2 1.3.3 2 .3 2.8 0 5-1.9 5-4.3s-2.2-4.3-5.2-4.3z"
      stroke="currentColor" strokeWidth="1.4" fill="currentColor" fillOpacity="0.15"
    />
  </svg>
)

const ICON_COL_WIDTH = 72
const DETAIL_WIDTH = 240

export const FloatingContactBar = () => {
  const [activeId, setActiveId] = useState<string | null>(null)

  const items: ContactItem[] = [
    {
      id: 'phone',
      label: '电话',
      detailLabel: '联系电话',
      detail: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
      Icon: PhoneIcon,
    },
    {
      id: 'email',
      label: '邮箱',
      detailLabel: '电子邮箱',
      detail: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      Icon: EmailIcon,
    },
    {
      id: 'wechat',
      label: '公众号',
      detailLabel: '微信公众号',
      detail: '扫码关注，获取最新资讯',
      qrCodeSrc: '/qrcode.jpg',
      Icon: WechatIcon,
    },
  ]

  const activeItem = items.find((item) => item.id === activeId)
  const isExpanded = activeId !== null

  const handleEnter = useCallback((id: string) => setActiveId(id), [])
  const handleLeave = useCallback(() => setActiveId(null), [])

  return (
    <div
      className="fixed right-0 top-1/2 -translate-y-1/2 z-[70]"
      aria-label="快捷联系方式"
      onMouseLeave={handleLeave}
    >
      <div
        className={cn(
          'flex flex-row items-stretch rounded-l-xl overflow-hidden',
          'bg-gray-900/95 backdrop-blur-md',
          'shadow-[0_8px_32px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.1)]',
          'transition-[width] duration-300 ease-out',
        )}
        style={{
          width: isExpanded ? ICON_COL_WIDTH + DETAIL_WIDTH : ICON_COL_WIDTH,
        }}
      >
        {/* 左侧统一详情区 — 仅展开时显示 */}
        <div
          className={cn(
            'shrink-0 overflow-hidden transition-all duration-300 ease-out border-r border-white/10',
            isExpanded ? 'opacity-100' : 'w-0 opacity-0 border-r-0',
          )}
          style={{ width: isExpanded ? DETAIL_WIDTH : 0 }}
        >
          {activeItem && (
            <div className="flex h-full items-center px-5 py-4 min-h-[228px]">
              <div className="min-w-0">
                <p className="text-xs font-medium text-brand mb-1.5">{activeItem.detailLabel}</p>
                {activeItem.qrCodeSrc ? (
                  <>
                    <Image
                      src={activeItem.qrCodeSrc}
                      alt={activeItem.label}
                      width={160}
                      height={160}
                      className="rounded-lg bg-white p-1"
                    />
                    <p className="mt-2 text-xs text-gray-400 leading-relaxed">{activeItem.detail}</p>
                  </>
                ) : (
                  <>
                    <p className="text-[15px] font-medium text-white leading-relaxed break-all">
                      {activeItem.detail}
                    </p>
                    {activeItem.href && (
                      <a
                        href={activeItem.href}
                        className="inline-block mt-3 text-xs text-brand hover:text-brand-foreground transition-colors underline underline-offset-2"
                      >
                        {activeItem.id === 'phone' ? '点击拨打' : '点击发送邮件'}
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* 右侧固定图标列 */}
        <div
          className="relative shrink-0 flex flex-col"
          style={{ width: ICON_COL_WIDTH }}
        >
          {/* 左侧品牌光条 */}
          <div className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-gradient-to-b from-brand/80 via-brand to-brand-subtle/80 shadow-[0_0_12px_hsl(var(--brand)/0.4)]" />

          {items.map((item, index) => {
            const isActive = activeId === item.id

            return (
              <div
                key={item.id}
                className={cn(
                  'relative flex flex-col items-center justify-center gap-1 flex-1 min-h-[76px]',
                  'cursor-pointer transition-colors duration-200',
                  index > 0 && 'border-t border-white/10',
                  isActive ? 'bg-brand/[0.08]' : 'hover:bg-white/[0.04]',
                )}
                onMouseEnter={() => handleEnter(item.id)}
                onClick={() => setActiveId((prev) => (prev === item.id ? null : item.id))}
              >
                <div
                  className={cn(
                    'flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200',
                    'ring-1 text-white',
                    isActive
                      ? 'bg-brand/25 ring-brand/60 shadow-[0_0_14px_hsl(var(--brand)/0.4)]'
                      : 'bg-brand/10 ring-brand/25 hover:ring-brand/45 hover:bg-brand/18',
                  )}
                >
                  <item.Icon />
                </div>
                <span
                  className={cn(
                    'text-[11px] font-semibold tracking-wide transition-colors',
                    isActive ? 'text-brand' : 'text-gray-400',
                  )}
                >
                  {item.label}
                </span>

                {item.href && (
                  <a
                    href={item.href}
                    className="absolute inset-0 z-10"
                    aria-label={`${item.label}：${item.detail}`}
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
