import { Button, Link } from '@nextui-org/react'

import Section from '@/components/layouts/Section'
import Wrapper from '@/components/layouts/Wrapper'
import Carousel from '@/components/slider/Carousel'

export default function Home() {
  return (
    <Wrapper>
      <div className='flex flex-col justify-evenly gap-4 pb-8 grow'>
        <Section className='text-center'>
          <h1 className='text-4xl font-extrabold'>Kiwibook</h1>
          <p className='text-sm mt-1'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis doloribus voluptatem magni.
          </p>
        </Section>
        <Section>
          <Carousel />
        </Section>
        <Button
          as={Link}
          href='/generate'
          className='mt-20 bg-honey-400 text-black font-semibold border-2 border-honey-700 hover:bg-honey-500 active:bg-honey-600 active:scale-95 transition-all w-fit mx-auto px-6 py-2 rounded-full'
        >
          Generate
        </Button>
      </div>
    </Wrapper>
  )
}
