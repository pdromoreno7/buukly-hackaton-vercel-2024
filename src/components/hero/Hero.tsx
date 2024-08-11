import Slider from '@components/slider/Slider'
import { Button } from '@components/ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className='space-y-16 text-center md:space-y-10'>
      <div>
        {/* <strong>Buukly</strong> */}
        <strong className='mt-1 text-4xl font-extrabold lg:text-5xl'>
          Buukly
        </strong>
        <div className='mt-4 [&>p]:text-sm [&>p]:font-medium [&>p]:leading-tight [&>p]:tracking-tight'>
          <p>¿Qué Libro Vas a Crear Hoy?</p>
          <p>Lo Hacemos Realidad con IA.</p>
        </div>
      </div>
      <Slider />

      <Button
        asChild
        className='group cursor-pointer rounded-full p-0 font-semibold'
      >
        <div>
          <Link href='/generate' className='py-2 pl-6'>
            Crear eBook
          </Link>
          <svg
            viewBox='0 0 24 24'
            className='ml-1 mr-6 size-4 fill-none stroke-white stroke-2 opacity-50 transition-opacity duration-200 ease-in-out group-hover:opacity-100 dark:stroke-gray-500 dark:group-hover:stroke-black'
          >
            <line
              x1='5'
              y1='12'
              x2='19'
              y2='12'
              className='translate-x-[10px] scale-x-0 transition-transform duration-200 ease-in-out group-hover:translate-x-0 group-hover:scale-x-100'
            ></line>
            <polyline
              points='12 5 19 12 12 19'
              className='-translate-x-2 transition-transform duration-200 ease-in-out group-hover:translate-x-0'
            ></polyline>
          </svg>
        </div>
      </Button>
    </section>
  )
}
