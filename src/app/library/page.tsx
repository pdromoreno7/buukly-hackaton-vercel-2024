'use client'
import { useBookListStore } from '@/store'

import Wrapper from '@/components/layouts/Wrapper'
import CoverBook from '@/components/readEbook/CoverBook'

function LibraryPage() {
  const { booksList } = useBookListStore()
  return (
    <Wrapper className='py-4 md:py-16'>
      <h1 className='mx-9 my-4 text-3xl font-bold'>Tu biblioteca</h1>
      <ul className='flex list-inside flex-col items-center space-y-3'>
        {booksList.map((book, index) => (
          <div key={index}>
            <CoverBook title={book.bookTitle} className='max-w-80' />
          </div>
        ))}
      </ul>
    </Wrapper>
  )
}

export default LibraryPage
