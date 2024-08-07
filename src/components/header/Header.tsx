import Wrapper from '@components/layouts/Wrapper'
import Menu from '@components/navbar/Menu'

import ToggleTheme from '../provider/ToggleTheme'

export default function Header() {
  return (
    <header>
      <Wrapper>
        <nav className='flex justify-between py-6 lg:last:justify-end'>
          {/* <h2 className='text-xl text-kiwi-400 font-extrabold'>Kiwibook</h2> */}
          <Menu />
          <ToggleTheme />
        </nav>
      </Wrapper>
    </header>
  )
}
