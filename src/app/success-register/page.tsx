import Link from 'next/link'

import Wrapper from '@/components/layouts/Wrapper'
import { Button } from '@/components/ui/button'

export default function SuccessRegister() {
  return (
    <Wrapper>
      <section className='mx-auto max-w-screen-sm py-8'>
        <h1 className='text-2xl font-bold tracking-normal text-neutral-800 dark:text-neutral-200'>
          Te has registrado correctamente!
        </h1>
        <p>Ahora, empecemos a generar libros. ✨</p>
        <Button
          asChild
          className='group mt-8 cursor-pointer rounded-full p-0 font-semibold'
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
    </Wrapper>
  )
}
