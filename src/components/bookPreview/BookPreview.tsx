'use client'

import { useBookStore } from '@/store'

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
      <div className='flex max-h-[820px] flex-col justify-center gap-12 md:max-h-96 md:flex-row'>
        <div className='mx-auto max-w-60 md:mx-0'>
          <CoverBook title={dataEbook.bookTitle} />
        </div>
        <ScrollArea className='mx-auto h-full rounded-2xl bg-gray-100 p-4 dark:bg-white/5 dark:text-gray-200 md:mx-0 md:h-5/6'>
          <h2 className='mb-4 text-lg font-bold'>Capitulos:</h2>
          <ol className='list-inside space-y-3'>
            {dataEbook.bookChapters.map((chapter, index) => (
              <div key={index}>
                <li className='text-sm'>
                  <p className='font-bold'>{`Capitulo ${index + 1}`}.</p>
                  <p className='block text-pretty'>{chapter}</p>
                </li>
                {index < dataEbook.bookChapters.length - 1 && (
                  <hr className='my-2 dark:border-white/15' />
                )}
              </div>
            ))}
          </ol>
        </ScrollArea>
      </div>

      <div className='mt-8 flex w-full flex-col items-center justify-center gap-2 md:mt-auto'>
        <ButtonLoading
          onClick={submitGenerateBookChapters}
          isLoading={isLoading}
        >
          Generar libro
        </ButtonLoading>
        <Button
          className='w-fit rounded-full font-semibold'
          variant='outline'
          onClick={() => setShowPreviewBook(false)}
        >
          Crear libro con otro titulo
        </Button>
      </div>
    </Wrapper>
  )
}

export default BookPreview
