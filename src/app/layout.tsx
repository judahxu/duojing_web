import { Header } from '@/components/common/Header'
import { Footer } from '@/components/common/Footer'
import { ChatWidget } from '@/components/chat/ChatWidget'
import '~/styles/globals.css'

export const metadata = {
  title: '多鲸科技 - AI数据服务和应用落地解决方案提供商',
  description: '河南多鲸信息技术有限公司专注于人工智能数据要素服务、AI应用落地和行业人才培养',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <ChatWidget />
        <Footer />
      </body>
    </html>
  )
}