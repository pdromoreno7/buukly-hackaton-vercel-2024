import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import { Toaster } from 'sonner'

import './globals.css'
import Header from '@/components/header/Header'
import { ThemeProvider } from '@/components/theme-provider'

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
        {/* no remover backgrounds */}
        {/* <div className="absolute -z-30 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
        </div> */}
        {/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
        <Header />
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main>{children}</main>
        </ThemeProvider>
        <Toaster position='top-center' richColors />
      </body>
    </html>
  )
}
