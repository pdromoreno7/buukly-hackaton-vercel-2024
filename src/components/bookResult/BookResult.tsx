import { useBookStore } from '@/store'
import { useRouter } from 'next/navigation'

import Wrapper from '@/components/layouts/Wrapper'

import CoverBook from '../readEbook/CoverBook'
import { Button } from '../ui/button'

function BookResult() {
  const router = useRouter()
  const dataEbook = useBookStore(state => state.dataEbook)

  return (
    <Wrapper className='py-10 lg:py-16'>
      <div className='mb-7 flex justify-center'>
        <h1 className='text-center text-2xl font-bold'>
          El libro se ha generado con exito!
        </h1>
      </div>
      <div className='mx-auto h-[420px] max-w-72'>
        <CoverBook
          title={dataEbook.bookTitle}
          color={dataEbook.colorCoverBook}
        />
      </div>

      <div className='mt-10 flex w-full flex-col items-center justify-center gap-2 md:mt-auto'>
        <Button
          className='w-fit rounded-full font-semibold'
          onClick={() =>
            router.push(
              `/read-ebook/${encodeURIComponent(dataEbook.bookTitle)}`,
            )
          }
        >
          Ver libro
        </Button>
      </div>
    </Wrapper>
  )
}

export default BookResult
