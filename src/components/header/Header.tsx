import Wrapper from '@components/layouts/Wrapper'
import Menu from '@components/navbar/Menu'

export default function Header() {
  return (
    <header>
      <Wrapper>
        <nav className='py-6'>
          <Menu />
        </nav>
      </Wrapper>
    </header>
  )
}
