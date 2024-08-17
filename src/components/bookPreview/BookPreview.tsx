'use client'

import { PATHNAMES } from '@/conts'
import { useBookStore } from '@/store'
import Link from 'next/link'

import Wrapper from '@/components/layouts/Wrapper'
import { ScrollArea } from '@/components/ui/scroll-area'

import { ButtonLoading } from '../commons/buttonLoading/ButtonLoading'
import CoverBook from '../readEbook/CoverBook'
import { Button } from '../ui/button'

interface BookPreviewProps {
  isLoading: boolean
  setShowPreviewBook: (value: boolean) => void
  setIsLoading: (value: boolean) => void
  submitGenerateBookChapters: () => void
  titleBook: string
}

function BookPreview({
  isLoading,
  setShowPreviewBook,
  submitGenerateBookChapters,
}: BookPreviewProps) {
  const dataEbook = useBookStore(state => state.dataEbook)

  return (
    <Wrapper className='flex flex-col py-4 md:py-16'>
      <div className='mb-6 flex flex-col gap-5 lg:gap-6'>
        <div className='space-y-1'>
          <h1 className='mb-2 text-left text-2xl font-extrabold leading-tight md:text-center lg:text-3xl'>
            Tu libro pinta muy bien
          </h1>
          <p className='text-left text-sm text-neutral-600 dark:text-neutral-300 md:text-center'>
            Aqui tienes un resumen. Confirma que todo este en orden,
            <br /> genera y empieza a leer.
          </p>
        </div>
      </div>
      <div className='max-h-auto md:flex-column flex flex-col items-center justify-center gap-6 md:items-center'>
        <div className='flex w-full items-center justify-center rounded-lg bg-gray-100 pt-6 shadow-sm md:w-2/4 md:px-[8rem]'>
          <div className='mx-0 mx-auto h-56 max-h-56 max-w-48 max-w-72'>
            <CoverBook
              title={dataEbook.bookTitle}
              color={dataEbook.colorCoverBook}
            />
          </div>
        </div>
        <ScrollArea className='mx-auto h-full w-full rounded-lg border border-solid border-slate-200 p-4 dark:bg-white/5 dark:text-gray-200 md:mx-0 md:h-5/6 md:w-2/4'>
          <h2 className='mb-2 text-lg font-bold'>Capitulos:</h2>
          <ol className='list-inside space-y-1'>
            {dataEbook.bookChapters.map((chapter, index) => (
              <div key={index}>
                <li className='text-sm'>
                  <p className='text-gray-500'>{`${index + 1}. ${chapter}`}.</p>
                </li>
              </div>
            ))}
          </ol>
        </ScrollArea>
      </div>

      <div className='mt-8 flex w-full flex-col items-center justify-center gap-2 md:mx-auto md:mt-auto md:w-2/4 md:flex-row'>
        <div className='w-full md:w-2/4'>
          <ButtonLoading
            onClick={submitGenerateBookChapters}
            isLoading={isLoading}
            className='w-full'
          >
            Generar libro
          </ButtonLoading>
        </div>
        <div className='w-full md:w-2/4'>
          <Button
            className='w-full rounded-full font-semibold'
            variant='outline'
            onClick={() => setShowPreviewBook(false)}
          >
            Editar peticion
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

export default BookPreview
