import Hero from '@/components/hero/Hero'
import HowTo from '@/components/landing/HowTo'
import { Questions } from '@/components/landing/Questions'
import Showcase from '@/components/landing/Showcase'
import Wrapper from '@/components/layouts/Wrapper'

export default function Home() {
  return (
    <Wrapper className='max-w-screen-xl space-y-16 pb-32 md:space-y-32'>
      <Hero />
      <img
        src='/resources/screenshots.webp'
        alt=''
        className='hidden w-full object-cover lg:block'
      />
      <Showcase />
      <HowTo />
      <Questions />
    </Wrapper>
  )
}
