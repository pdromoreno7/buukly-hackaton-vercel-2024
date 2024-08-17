'use client'
import { PATHNAMES } from '@/conts'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

import { GithubButton } from '../commons/githubButton/GithubButton'

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

      <div className='flex flex-col items-center gap-2 md:flex-row'>
        <GithubButton link />

        <Link
          href={PATHNAMES['terms-privacy']}
          className='text-sm text-neutral-600 transition-colors hover:text-black hover:underline dark:text-neutral-300'
        >
          Políticas de privacidad, Términos y Condiciones
        </Link>
      </div>
    </footer>
  )
}
