import Wrapper from '@components/layouts/Wrapper'
import Menu from '@components/navbar/Menu'

export default function Header() {
  return (
    <header>
      <Wrapper>
        <nav className='py-6 lg:hidden'>
          {/* <h2 className='text-xl text-kiwi-400 font-extrabold'>Kiwibook</h2> */}
          <Menu />
        </nav>
      </Wrapper>
    </header>
  )
}
