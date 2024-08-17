import { BookType } from '@/interfaces/bookInterfaces'
import { useRouter } from 'next/navigation'
import { ArrowRight, X, Download } from 'lucide-react'

import Wrapper from '@/components/layouts/Wrapper'

import CoverBook from '../readEbook/CoverBook'
import { Button } from '../ui/button'
import { ButtonLoading } from '../commons/buttonLoading/ButtonLoading'
import Link from 'next/link'
import { PATHNAMES } from '@/conts'

function BookResult({ dataEbook }: { dataEbook: BookType }) {
  const router = useRouter()

  return (
    <Wrapper className='flex flex-col justify-between py-10 lg:py-16'>
      <div className='mx-auto md:mb-6 md:w-2/4'>
        <div className='mb-2 flex justify-between'>
          <h1 className='text-left text-2xl font-bold'>
            ¡Tu libro está listo!
          </h1>
          <X
            className='cursor-pointer'
            onClick={() => {
              router.refresh()
            }}
          />
        </div>
        <span className='text-gray-500'>
          Comienza a leer ya o descárgalo y lee después en tu lector digital
          favorito.
        </span>
      </div>
      <div className='max-h-auto md:flex-column flex flex-col items-center justify-center gap-6 md:items-center'>
        <div className='flex w-full items-center justify-center rounded-lg bg-gray-100 pt-6 shadow-sm md:w-2/4 md:px-[8rem]'>
          <div className='mx-auto max-w-48'>
            <CoverBook
              title={dataEbook.book_title}
              color={dataEbook.color_cover}
            />
          </div>
        </div>
        <div className='mx-auto h-full w-full rounded-lg border border-solid border-slate-200 p-4 dark:bg-white/5 dark:text-gray-200 md:mx-0 md:h-5/6 md:w-2/4'>
          <div className='flex justify-between'>
            <h2 className='mb-2 text-lg font-bold text-gray-900'>
              Explora otros temas:
            </h2>
            <ArrowRight />
          </div>
          <span className='text-gray-500'>
            ¿Te animas a explorar más? ¡Genera un nuevo libro ya!
          </span>
        </div>
      </div>
      <div className='mt-8 flex w-full flex-col items-center justify-center gap-2 md:mx-auto md:mt-auto md:w-2/4 md:flex-row'>
        <div className='w-full md:w-2/4'>
          <ButtonLoading
            onClick={() =>
              router.push(`/read-ebook/${encodeURIComponent(dataEbook.id)}`)
            }
            className='w-full'
          >
            Leer ya
          </ButtonLoading>
        </div>
        <div className='w-full md:w-2/4'>
          <Button
            className='w-full rounded-full font-semibold'
            variant='outline'
            disabled
          >
            Descargar <Download className='ml-2' />
          </Button>
        </div>
      </div>
      <div className='flex flex-col gap-2 text-center'>
        <span className='mt-3 text-center text-xs text-neutral-600 dark:text-neutral-300'>
          Al hacer uso de esta app, acepta nuestros{' '}
          <Link
            href={PATHNAMES['terms-privacy']}
            className='transition-colors hover:text-black hover:underline dark:hover:text-neutral-50'
          >
            Términos de Servicio y Políticas de Privacidad.
          </Link>
        </span>
      </div>
    </Wrapper>
  )
}

export default BookResult
