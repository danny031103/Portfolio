import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Daniel Brito',
  description:
    'Software Engineer & Founder — building intelligent systems at the intersection of engineering and real-world impact.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-[#0a0a0a] text-[#f5f5f5] antialiased">
        {children}
      </body>
    </html>
  )
}
