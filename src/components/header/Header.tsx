import { PATHNAMES } from '@/conts'
import { getUserSSR } from '@/utils/session/getUser'
import Wrapper from '@components/layouts/Wrapper'
import Link from 'next/link'

import { BuuclyLogo, BuuclyLogoShortVariant } from '../buuclyLogo/BuuclyLogo'
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
            <div className='hidden sm:block'>
              <BuuclyLogo />
            </div>
            <div className='sm:hidden'>
              <BuuclyLogoShortVariant />
            </div>
          </Link>
          <div
            className={
              !renderAuthBtn ? 'inline-flex items-center gap-2' : 'hidden'
            }
          >
            <GithubButton />
            <Button asChild variant='outline' className='rounded-full'>
              <Link href={PATHNAMES['sign-in']}>Inicia sesión</Link>
            </Button>
            <Button asChild className='rounded-full font-semibold'>
              <Link href={PATHNAMES['sign-up']}>Registrate</Link>
            </Button>
          </div>

          <div
            className={
              renderAuthBtn ? 'inline-flex items-center gap-3' : 'hidden'
            }
          >
            <Link href='/library'>
              <LibraryButton>Biblioteca</LibraryButton>
            </Link>
            <GithubButton />

            <ToggleTheme />
            <Profile userData={userData!} />
          </div>
        </nav>
      </Wrapper>
    </header>
  )
}
