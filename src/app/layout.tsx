import type { Metadata } from 'next'
import { Onest } from 'next/font/google'

import './globals.css'

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
        <main>{children}</main>
      </body>
    </html>
  )
}
