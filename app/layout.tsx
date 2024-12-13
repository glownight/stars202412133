import './globals.css'
import { Montserrat } from 'next/font/google'
import Header from './components/Header'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: '星垂平野 - AI驱动好句摘抄平台',
  description: '发现世界名著中的精彩好句，AI深度解析，激发您的文学灵感',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={`${montserrat.className} bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen`}>
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}

