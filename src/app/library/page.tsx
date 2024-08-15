'use client'
import { useBookListStore } from '@/store'
import Link from 'next/link'

import Wrapper from '@/components/layouts/Wrapper'
import CoverBook from '@/components/readEbook/CoverBook'
import { Button } from '@/components/ui/button'

function LibraryPage() {
  const { booksList } = useBookListStore()
  return (
    <Wrapper className='flex min-h-screen flex-col md:py-16'>
      <h1 className='mx-9 my-4 text-3xl font-bold'>Tu biblioteca</h1>
      <div className='flex-grow'>
        <ul className='flex list-inside flex-col items-center space-y-3'>
          {booksList.map((book, index) => (
            <Link
              href={`/library/${encodeURIComponent(book.bookTitle)}`}
              key={index}
            >
              <div key={index}>
                <CoverBook
                  title={book.bookTitle}
                  color={book.colorCoverBook}
                  className='max-w-80'
                />
              </div>
            </Link>
          ))}
        </ul>
      </div>

      <div className='sticky bottom-0 flex justify-center bg-white p-8'>
        <Button>
          <Link href='/generate'>Crea un libro nuevo</Link>
        </Button>
      </div>
    </Wrapper>
  )
}

export default LibraryPage
