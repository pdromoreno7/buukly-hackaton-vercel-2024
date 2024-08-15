import { PATHNAMES } from '@/conts'
import Link from 'next/link'

import { Button } from '../ui/button'

export default function Hero() {
  return (
    <section className='flex flex-col gap-8 pt-12 lg:pt-24'>
      <div className='inline-flex'>
        <h1 className='relative text-pretty text-4xl font-semibold tracking-tight md:text-5xl lg:pt-16 lg:text-6xl'>
          Genera{' '}
          <span className='relative whitespace-nowrap'>
            <svg
              className='absolute -left-1.5 top-0 h-[46px] w-[88px] md:h-[60px] md:w-[116px] lg:-left-2 lg:h-[74px] lg:w-[146px]'
              viewBox='0 0 169 76'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M140.217 8.57288C140.217 8.57288 104.86 6.11835 82.2057 8.44112C69.9451 9.69823 53.9501 12.3317 42.2889 14.3978C31.9247 16.234 20.9238 18.3684 13.7342 26.056C10.6429 29.3614 8.02215 33.6699 7.29053 39.0976C6.4721 45.1692 7.60984 49.8691 9.54343 53.456C14.618 62.8696 26.9301 64.0143 37.6096 64.5767L125.628 69.2118C126.864 69.2769 128.089 69.3365 129.327 69.3222C135.982 69.2456 158.521 67.8793 161.618 53.0022C165.917 32.3568 118.477 25.8415 118.477 25.8415'
                stroke='#22C55E'
                strokeWidth='13'
                strokeLinecap='round'
              />
            </svg>
            <span className='relative'>libros</span>
          </span>{' '}
          de tus temas <br /> favoritos usando{' '}
          <span className='inline-flex items-center gap-1'>
            <span className='bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text tracking-normal text-transparent'>
              IA
            </span>
            <svg
              className='h-7 w-10 md:h-11 md:w-14'
              viewBox='0 0 61 51'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M25.2066 0.043335C29.5279 11.7213 38.7352 20.9287 50.4132 25.2499C38.7352 29.5712 29.5279 38.7786 25.2066 50.4566C20.8854 38.7786 11.678 29.5712 0 25.2499C11.678 20.9287 20.8854 11.7213 25.2066 0.043335Z'
                fill='#B877F1'
              />
              <path
                d='M53.438 0.0432129C54.7343 3.54661 57.4965 6.30882 60.9999 7.6052C57.4965 8.90157 54.7343 11.6638 53.438 15.1672C52.1416 11.6638 49.3794 8.90157 45.876 7.6052C49.3794 6.30882 52.1416 3.54661 53.438 0.0432129Z'
                fill='#B877F1'
              />
            </svg>
          </span>
        </h1>

        <img
          src='/resources/book.svg'
          alt='Book Illustration'
          className='absolute left-[60%] hidden lg:block'
        />
      </div>

      <Button
        asChild
        className='group w-full cursor-pointer rounded-full bg-kiwi-500 p-0 font-semibold text-black hover:bg-kiwi-600 sm:w-fit'
      >
        <Link href={PATHNAMES['sign-in']}>
          <div className='py-2 pl-6'>Comenzar</div>

          <svg
            viewBox='0 0 24 24'
            className='ml-2 mr-6 size-4 fill-none stroke-black stroke-2 opacity-50 transition-opacity duration-200 ease-in-out group-hover:opacity-100 dark:stroke-gray-500 dark:group-hover:stroke-black'
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
        </Link>
      </Button>
    </section>
  )
}
