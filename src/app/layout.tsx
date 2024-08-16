import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import { Toaster } from 'sonner'

import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import { ThemeProvider } from '@/components/provider/ThemeProvider'
import './globals.css'

import { server } from '../mocks/server'

const onest = Onest({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Buucly',
  description: 'A description...',
}

if (process.env.NODE_ENV === 'development') {
  server.listen()
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body className={onest.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster position='top-center' richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
