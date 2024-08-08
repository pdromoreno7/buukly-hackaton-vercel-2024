'use client'
import { PATHNAMES } from '@/conts'
import Wrapper from '@components/layouts/Wrapper'
import Menu from '@components/navbar/Menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import ToggleTheme from '../provider/ToggleTheme'
import { Button } from '../ui/button'

export default function Header() {
  const path = usePathname()
  const isAvailablePaths =
    path === PATHNAMES['sign-in'] || path === PATHNAMES['sign-up']
  const renderGroupBtn = isAvailablePaths ? 'inline-flex gap-2' : 'hidden'

  return (
    <header>
      <Wrapper className='lg:max-w-full'>
        <nav className='flex items-center justify-between py-4 pb-2'>
          {!isAvailablePaths && <Menu />}
          <h2 className='text-2xl font-extrabold'>Buukly</h2>
          <div className='inline-flex gap-4'>
            <div className={renderGroupBtn}>
              <Button asChild variant='outline' className='rounded-full'>
                <Link href='/sign-in'>Inicia sesión</Link>
              </Button>
              <Button asChild className='rounded-full font-semibold'>
                <Link href='/sign-up'>Registrate</Link>
              </Button>
            </div>
            {!isAvailablePaths && <ToggleTheme />}
          </div>
        </nav>
      </Wrapper>
    </header>
  )
}
