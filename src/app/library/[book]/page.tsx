'use client'

import { useBookListStore } from '@/store'
import { useRouter } from 'next/navigation'

import Wrapper from '@/components/layouts/Wrapper'
import CoverBook from '@/components/readEbook/CoverBook'
import { Button } from '@/components/ui/button'

function EBook({ params }: { params: { book: string } }) {
  const router = useRouter()
  const { book } = params
  const bookTitle = decodeURIComponent(book)

  const { booksList } = useBookListStore()
  const dataEbook = booksList.find(book => book.bookTitle === bookTitle)
  return (
    <Wrapper className='py-10 lg:py-16'>
      <div className='mb-7 flex justify-center'>
        <h1 className='text-center text-2xl font-bold'>{bookTitle}</h1>
      </div>
      <div className='mx-auto h-[420px] max-w-72'>
        <CoverBook
          title={dataEbook?.bookTitle ?? ''}
          color={dataEbook?.colorCoverBook}
        />
      </div>
      <div className='mx-auto mt-6 rounded-2xl bg-gray-100 p-4 text-center dark:bg-white/5 dark:text-gray-200 md:my-6 md:max-w-xs'>
        {dataEbook?.bookDescription}
      </div>
      <div className='mt-10 flex w-full flex-col items-center justify-center gap-2 md:mt-auto'>
        <Button
          className='w-fit rounded-full font-semibold'
          onClick={() =>
            router.push(`/read-ebook/${encodeURIComponent(bookTitle)}`)
          }
        >
          Ver libro
        </Button>
      </div>
    </Wrapper>
  )
}

export default EBook
