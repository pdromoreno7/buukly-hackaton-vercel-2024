import { HOW_TO, PATHNAMES } from '@/conts'
import Link from 'next/link'

import { Button } from '../ui/button'

export default function HowTo() {
  return (
    <section className='grid grid-flow-row grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-0'>
      <div className='flex max-w-screen-md flex-col gap-8 lg:col-span-2'>
        <div className='flex flex-col gap-2 lg:gap-4'>
          <h2 className='text-3xl font-semibold tracking-tight lg:text-5xl'>
            Crea un libro con el tema exacto que necesites
          </h2>
          <span className='text-gray-600'>
            Genera y almacena libros de todo tipo.
          </span>
        </div>

        <Button
          asChild
          className='w-full cursor-pointer rounded-full bg-kiwi-500 p-0 px-4 font-semibold text-black hover:bg-kiwi-600 sm:w-fit'
        >
          <Link href={PATHNAMES['sign-in']}>!Comienza, es gratis!</Link>
        </Button>
      </div>

      <div className='flex flex-col gap-6'>
        {HOW_TO.map((step, index) => (
          <div key={index} className='flex max-w-96 flex-col gap-4'>
            <span className='w-fit rounded-lg bg-green-100 p-2 text-sm font-bold text-green-900'>
              {step.step}
            </span>
            <div className='flex flex-col gap-2'>
              <span className='text-xl font-semibold'>{step.title}</span>
              <p className='text-gray-600'>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
