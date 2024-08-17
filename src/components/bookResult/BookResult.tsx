import { BookType } from '@/interfaces/bookInterfaces'
import { useRouter } from 'next/navigation'

import Wrapper from '@/components/layouts/Wrapper'

import CoverBook from '../readEbook/CoverBook'
import { Button } from '../ui/button'

function BookResult({ dataEbook }: { dataEbook: BookType }) {
  const router = useRouter()

  return (
    <Wrapper className='py-10 lg:py-16'>
      <div className='mb-7 flex justify-center'>
        <h1 className='text-center text-2xl font-bold'>
          El libro se ha generado con exito!
        </h1>
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
      </div>

      <div className='mt-10 flex w-full flex-col items-center justify-center gap-2 md:mt-auto'>
        <Button
          className='w-fit rounded-full font-semibold'
          onClick={() =>
            router.push(`/read-ebook/${encodeURIComponent(dataEbook.id)}`)
          }
        >
          Ver libro
        </Button>
      </div>
    </Wrapper>
  )
}

export default BookResult
