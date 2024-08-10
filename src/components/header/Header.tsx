'use client'
import { PATHNAMES } from '@/conts'
import signOut from '@/utils/session/signOut'
import Wrapper from '@components/layouts/Wrapper'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { LibraryButton } from '../commons/libraryButton/LibraryButton'
import ToggleTheme from '../provider/ToggleTheme'
import { Button } from '../ui/button'

export default function Header() {
  const path = usePathname()
  const isAvailablePaths =
    path === PATHNAMES['sign-in'] ||
    path === PATHNAMES['sign-up'] ||
    path === PATHNAMES['reset-password'] ||
    path === PATHNAMES['success-register']
  const renderGroupBtn = isAvailablePaths ? 'inline-flex gap-2' : 'hidden'

  return (
    <header>
      <Wrapper className='lg:max-w-full'>
        <nav className='flex items-center justify-between py-3 pb-2'>
          {/* {isAvailablePaths && (
            <h2 className='text-2xl font-extrabold'>Buukly</h2>
          )} */}
          <Link href='/'>
            <h2 className='text-2xl font-extrabold'>Buukly</h2>
          </Link>

          <div className='inline-flex w-full justify-end gap-4'>
            <div className={renderGroupBtn}>
              <Button asChild variant='outline' className='rounded-full'>
                <Link href={PATHNAMES['sign-in']}>Inicia sesión</Link>
              </Button>
              <Button asChild className='rounded-full font-semibold'>
                <Link href={PATHNAMES['sign-up']}>Registrate</Link>
              </Button>
            </div>
            <div className='inline-flex gap-3'>
              {!isAvailablePaths && (
                <LibraryButton>
                  <Link href='/library'>Biblioteca</Link>
                </LibraryButton>
              )}
              {!isAvailablePaths && <ToggleTheme />}
              {!isAvailablePaths && (
                <Button
                  variant='outline'
                  size='icon'
                  title='Cerrar sesión'
                  onClick={signOut}
                >
                  <LogOut className='h-[1.2rem] w-[1.2rem]' />
                </Button>
              )}
            </div>
          </div>
        </nav>
      </Wrapper>
    </header>
  )
}
