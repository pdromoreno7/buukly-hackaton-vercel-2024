import Hero from '@/components/hero/Hero'
import Wrapper from '@/components/layouts/Wrapper'

export default function Home() {
  return (
    <Wrapper className='py-10 lg:py-2'>
      <Hero />
    </Wrapper>
  )
}
