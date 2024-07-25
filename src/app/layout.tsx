import type { Metadata } from 'next'
import { Onest } from 'next/font/google'

import './globals.css'
import Header from '@/components/header/Header'

const onest = Onest({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kiwibook',
  description: 'A description...',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es' className='dark'>
      <body className={onest.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
