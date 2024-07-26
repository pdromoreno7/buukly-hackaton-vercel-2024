import Link from 'next/link'

import Wrapper from '@/components/layouts/Wrapper'
import Slider from '@/components/slider/Slider'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <Wrapper>
      <section className='space-y-20 text-center md:space-y-10'>
        <div>
          <h1 className='text-4xl font-extrabold'>Kiwibook</h1>
          <p className='mt-1 text-sm'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            doloribus voluptatem magni.
          </p>
        </div>
        <Slider />
        <Button asChild className='mx-auto rounded-full'>
          <Link
            href='/generate'
            className='bg-honey-400 border-honey-700 hover:bg-honey-500 active:bg-honey-600 mx-auto w-fit rounded-full border-2 px-6 py-2 font-semibold text-black transition-all active:scale-95'
          >
            Generate
          </Link>
        </Button>
      </section>
    </Wrapper>
  )
}
