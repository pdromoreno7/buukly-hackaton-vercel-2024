'use client'

import { useBookListStore } from '@/store'
import { useRouter } from 'next/navigation'

import Wrapper from '@/components/layouts/Wrapper'
import CoverBook from '@/components/readEbook/CoverBook'
import { Button } from '@/components/ui/button'

function EBook({ params }: { params: { book: string } }) {
  const router = useRouter()
  const { book } = params

  const { booksList } = useBookListStore()
  console.log('🚀 ~ EBook ~ book:', book)
  console.log('🚀 ~ EBook ~ book:', decodeURIComponent(book))
  const bookTitle = decodeURIComponent(book)
  const dataEbook = booksList.find(
    book => book.bookTitle === decodeURIComponent(bookTitle),
  )
  return (
    <Wrapper className='py-10 lg:py-16'>
      <div className='mb-7 flex justify-center'>
        <h1 className='text-center text-2xl font-bold'>{bookTitle}</h1>
      </div>
      <div className='mx-auto h-[420px] max-w-72'>
        <CoverBook title={dataEbook?.bookTitle ?? ''} />
      </div>
      <div className='mx-auto mt-6 rounded-2xl bg-gray-100 p-4 text-center dark:bg-white/5 dark:text-gray-200 md:mx-0 md:h-5/6'>
        {dataEbook?.bookDescription}
      </div>
      <div className='mt-10 flex w-full flex-col items-center justify-center gap-2 md:mt-auto'>
        <Button
          className='w-fit rounded-full font-semibold'
          onClick={() => router.push('/read-ebook')}
        >
          Ver libro
        </Button>
      </div>
    </Wrapper>
  )
}

export default EBook
