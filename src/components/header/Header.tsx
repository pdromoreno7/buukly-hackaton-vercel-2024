import { PATHNAMES } from '@/conts'
import { getUserSSR } from '@/utils/session/getUser'
import Wrapper from '@components/layouts/Wrapper'
import Link from 'next/link'

import { BuuclyLogo } from '../buuclyLogo/BuuclyLogo'
import { GithubButton } from '../commons/githubButton/GithubButton'
import { LibraryButton } from '../commons/libraryButton/LibraryButton'
import Profile from '../profile/Profile'
import ToggleTheme from '../provider/ToggleTheme'
import { Button } from '../ui/button'

export default async function Header() {
  const userData = await getUserSSR()
  const renderAuthBtn = userData ? true : false

  return (
    <header>
      <Wrapper className='lg:max-w-full'>
        <nav className='flex flex-row items-center justify-between py-3'>
          <Link href='/'>
            <BuuclyLogo />
          </Link>
          <div className={!renderAuthBtn ? 'inline-flex gap-2' : 'hidden'}>
            <div className='hidden sm:block'>
              <GithubButton />
            </div>
            <Button asChild variant='outline' className='rounded-full'>
              <Link href={PATHNAMES['sign-in']}>Inicia sesión</Link>
            </Button>
            <Button asChild className='rounded-full font-semibold'>
              <Link href={PATHNAMES['sign-up']}>Registrate</Link>
            </Button>
          </div>

          <div className={renderAuthBtn ? 'inline-flex gap-3' : 'hidden'}>
            <div className='hidden sm:block'>
              <GithubButton />
            </div>
            <Link href='/library'>
              <LibraryButton>Biblioteca</LibraryButton>
            </Link>

            <ToggleTheme />
            <Profile userData={userData!} />
          </div>
        </nav>
      </Wrapper>
    </header>
  )
}
