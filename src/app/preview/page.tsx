'use client'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useBookStore } from '@/store'
import React from 'react'

function BookPreview() {
  const dataEbook = useBookStore(state => state.dataEbook)
  return (
    <div>
      <div className='mb-7 flex justify-center'>
        <div
          className={`flex h-56 w-36 flex-col items-center justify-center rounded-lg bg-yellow-300 p-4 text-center shadow-lg shadow-black/20`}
        >
          <h1 className='mb-2 text-base font-bold'>{dataEbook?.bookTitle}</h1>
        </div>
      </div>

      <ScrollArea className='mx-auto h-[300px] w-[90%] rounded-md border p-4'>
        <h2 className='mb-4 text-lg font-bold'>Capitulos:</h2>
        <ol className='list-inside space-y-3'>
          {dataEbook.bookChapters.map((chapter, index) => (
            <li key={index} className='text-sm'>
              <p className='font-bold'>{`Capitulo ${index + 1}`}.</p>
              {chapter}
            </li>
          ))}
        </ol>
      </ScrollArea>
    </div>
  )
}

export default BookPreview
