'use client'
import { PATHNAMES } from '@/conts'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

export default function Footer() {
  const path = usePathname()
  const renderFooter =
    path.startsWith('/legal') || path === '/' ? 'flex' : 'hidden'

  return (
    <footer
      className={cn(
        'flex-col items-center justify-around gap-2 pb-16 pt-12 lg:flex-row lg:gap-0 lg:py-4',
        renderFooter,
      )}
    >
      <img
        src='/resources/full-logo-bw.svg'
        alt='Buucly Logo'
        className='h-8'
      />
      <Link
        href={PATHNAMES['terms-privacy']}
        className='text-sm text-neutral-600 transition-colors hover:text-black hover:underline dark:text-neutral-300'
      >
        Políticas de privacidad, Términos y Condiciones
      </Link>
      <span className='text-sm text-neutral-600 dark:text-neutral-300'>
        Diseñado y Desarrollado por “Bollo Limpio Dev” 💚️
      </span>
    </footer>
  )
}
