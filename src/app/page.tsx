import Hero from '@/components/hero/Hero'
import HowTo from '@/components/landing/HowTo'
import { Questions } from '@/components/landing/Questions'
import Showcase from '@/components/landing/Showcase'
import Wrapper from '@/components/layouts/Wrapper'

export default function Home() {
  return (
    <Wrapper className='max-w-screen-xl space-y-16 md:space-y-32'>
      <Hero />
      <img
        src='/resources/screenshots.webp'
        alt=''
        className='hidden w-full object-cover lg:block'
      />
      <Showcase />
      <HowTo />
      <Questions />
      <footer className='flex flex-col items-center justify-between pb-16 pt-12 lg:flex-row lg:py-4'>
        <img
          src='/resources/full-logo-bw.svg'
          alt='Buucly Logo'
          className='h-8'
        />
        <span className='text-sm text-gray-600'>
          Política de privacidad, términos y condiciones{' '}
        </span>
        <span className='text-sm text-gray-600'>
          Diseñado y Desarrollado por “Bollo Limpio Dev” 💚️
        </span>
      </footer>
    </Wrapper>
  )
}
