'use client'
import { PATHNAMES } from '@/conts'
import Wrapper from '@components/layouts/Wrapper'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { LibraryButton } from '../commons/libraryButton/LibraryButton'
import Profile from '../profile/Profile'
import ToggleTheme from '../provider/ToggleTheme'
import { Button } from '../ui/button'

export default function Header() {
  const path = usePathname()
  const renderAuthBtn =
    path.startsWith('/sign') ||
    path.startsWith('/reset') ||
    path.startsWith('/faq') ||
    path.startsWith('/about') ||
    path === '/'

  return (
    <header>
      <Wrapper className='lg:max-w-full'>
        <nav className='flex flex-row items-center justify-between py-3'>
          <Link href='/'>
            <img
              src='/resources/full-logo.svg'
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
