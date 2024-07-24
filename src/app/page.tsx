import Link from 'next/link'

import Section from '@/components/layouts/Section'
import Wrapper from '@/components/layouts/Wrapper'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <Wrapper>
      <Button variant='secondary'>Click me</Button>
      <div className='flex grow flex-col justify-evenly gap-4 pb-8'>
        <Section className='text-center'>
          <h1 className='text-4xl font-extrabold'>Kiwibook</h1>
          <p className='mt-1 text-sm'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            doloribus voluptatem magni.
          </p>
        </Section>
        <Link
          href='/generate'
          className='bg-honey-400 border-honey-700 hover:bg-honey-500 active:bg-honey-600 mx-auto mt-20 w-fit rounded-full border-2 px-6 py-2 font-semibold text-black transition-all active:scale-95'
        >
          Generate
        </Link>
      </div>
    </Wrapper>
  )
}
