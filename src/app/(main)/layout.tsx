'use client'

import { PageBackground } from '@/components/common/PageBackground'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <PageBackground />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
