'use client'
import { PATHNAMES } from '@/conts'
import Wrapper from '@components/layouts/Wrapper'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { LibraryButton } from '../commons/libraryButton/LibraryButton'
import Profile from '../profile/Profile'
import ToggleTheme from '../provider/ToggleTheme'
import { Button } from '../ui/button'

export default function Header() {
  const { theme, systemTheme } = useTheme()
  console.log('🚀 ~ Header ~ theme:', theme)
  const [logoSrc, setLogoSrc] = useState('/resources/full-logo.svg')
  const path = usePathname()
  const renderAuthBtn =
    path.startsWith('/sign') ||
    path.startsWith('/reset') ||
    path.startsWith('/faq') ||
    path.startsWith('/about') ||
    path === '/'

  useEffect(() => {
    // Verificar el tema actual
    const currentTheme = theme === 'system' ? systemTheme : theme
    setLogoSrc(
      currentTheme === 'dark'
        ? '/resources/full-logo-white.svg'
        : '/resources/full-logo.svg',
    )
  }, [theme, systemTheme])

  return (
    <header>
      <Wrapper className='lg:max-w-full'>
        <nav className='flex flex-row items-center justify-between py-3'>
          <Link href='/'>
            <img
              src={logoSrc}
              alt='Buucly Logo'
              title='Buucly Logo'
              className='h-8'
            />
          </Link>
          <div className={renderAuthBtn ? 'inline-flex gap-2' : 'hidden'}>
            <Button asChild variant='outline' className='rounded-full'>
              <Link href={PATHNAMES['sign-in']}>Inicia sesión</Link>
            </Button>
            <Button asChild className='rounded-full font-semibold'>
              <Link href={PATHNAMES['sign-up']}>Registrate</Link>
            </Button>
          </div>

          <div className={!renderAuthBtn ? 'inline-flex gap-3' : 'hidden'}>
            <LibraryButton>
              <Link href='/library'>Biblioteca</Link>
            </LibraryButton>
            <ToggleTheme />
            <Profile />
          </div>
        </nav>
      </Wrapper>
    </header>
  )
}
