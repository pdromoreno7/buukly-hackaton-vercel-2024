'use client'

import { useBookStore } from '@/store'

import Wrapper from '@/components/layouts/Wrapper'
import { ScrollArea } from '@/components/ui/scroll-area'

import BookFrontPage from '../bookFrontPage/BookFrontPage'
import { ButtonLoading } from '../buttonLoading/ButtonLoading'
import { Button } from '../ui/button'

interface BookPreviewProps {
  isLoading: boolean
  setShowPreviewBook: (value: boolean) => void
  setIsLoading: (value: boolean) => void
  submitGenerateBookChapters: () => void
  colorBook: string
  titleBook: string
}

function BookPreview({
  isLoading,
  setShowPreviewBook,
  submitGenerateBookChapters,
  colorBook,
  titleBook,
}: BookPreviewProps) {
  const dataEbook = useBookStore(state => state.dataEbook)

  return (
    <Wrapper className='lg:py-16'>
      <div className='mb-7 flex justify-center'>
        <BookFrontPage color={colorBook} title={titleBook} />
      </div>
      <ScrollArea className='mx-auto h-[300px] w-[100%] rounded-md border p-4'>
        <h2 className='mb-4 text-lg font-bold'>Capitulos:</h2>
        <ol className='list-inside space-y-3'>
          {dataEbook.bookChapters.map((chapter, index) => (
            <div key={index}>
              <li className='text-sm'>
                <p className='font-bold'>{`Capitulo ${index + 1}`}.</p>
                {chapter}
              </li>
              {index < dataEbook.bookChapters.length - 1 && (
                <hr className='my-2 border-gray-100' />
              )}
            </div>
          ))}
        </ol>
      </ScrollArea>
      <div className='my-5 flex w-full flex-col items-center justify-center gap-2'>
        <ButtonLoading
          onClick={submitGenerateBookChapters}
          isLoading={isLoading}
        >
          Generar libro
        </ButtonLoading>
        <Button
          className='w-fit rounded-full font-semibold'
          variant='link'
          onClick={() => setShowPreviewBook(false)}
        >
          Crear libro con otro titulo
        </Button>
      </div>
    </Wrapper>
  )
}

export default BookPreview
