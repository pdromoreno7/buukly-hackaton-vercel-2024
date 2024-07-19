import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
import "./globals.css"
import { Providers } from './providers'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kiwibook",
  description: "A description..."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>
          <main className='flex flex-col min-h-screen py-2'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
