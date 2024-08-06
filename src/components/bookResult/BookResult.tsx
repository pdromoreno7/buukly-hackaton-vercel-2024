import { useRouter } from 'next/navigation'

import Wrapper from '@/components/layouts/Wrapper'

import BookFrontPage from '../bookFrontPage/BookFrontPage'
import { Button } from '../ui/button'

interface BookResultProps {
  colorBook: string
  titleBook: string
}

function BookResult({ colorBook, titleBook }: BookResultProps) {
  const router = useRouter()
  return (
    <Wrapper className='lg:py-16'>
      <div className='mb-7 flex justify-center'>
        <h1 className='text-center text-2xl font-bold'>
          El libro se ha generado con exito!
        </h1>
      </div>
      <div className='mb-7 flex justify-center'>
        <BookFrontPage color={colorBook} title={titleBook} />
      </div>

      <div className='my-5 flex w-full flex-col items-center justify-center gap-2'>
        <Button
          className='w-fit rounded-full font-semibold'
          onClick={() => router.push('/ebook')}
        >
          Ver libro
        </Button>
      </div>
    </Wrapper>
  )
}

export default BookResult
