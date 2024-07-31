'use client'
import { useBookStore } from '@/store'

import CardBook from '@/components/cardBook/CardBook'
import Wrapper from '@/components/layouts/Wrapper'
import { ScrollArea } from '@/components/ui/scroll-area'

function BookPreview() {
  const dataEbook = useBookStore(state => state.dataEbook)

  return (
    <Wrapper className='lg:py-16'>
      <div className='mb-7 flex justify-center'>
        <CardBook
          bookTitle={dataEbook?.bookTitle}
          bookDescription={dataEbook?.bookDescription}
        />
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
    </Wrapper>
  )
}

export default BookPreview
