import Wrapper from '../layouts/Wrapper'
import Menu from '../navbar/Menu'

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
