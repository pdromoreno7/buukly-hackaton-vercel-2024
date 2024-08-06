import Wrapper from '@components/layouts/Wrapper'
import Menu from '@components/navbar/Menu'
import { SwitchToogle } from '../SwitchToogle/SwitchToogle'

export default function Header() {
  return (
    <header>
      <Wrapper>
        <nav className='flex items-center justify-between py-6 lg:hidden'>
          {/* <h2 className='text-xl text-kiwi-400 font-extrabold'>Kiwibook</h2> */}
          <Menu />
          <SwitchToogle />
        </nav>
      </Wrapper>
    </header>
  )
}
