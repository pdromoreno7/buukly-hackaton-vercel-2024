'use client'

import Wrapper from '../layouts/Wrapper'
import { Progress } from '../ui/progress'

interface LoadingChaptersCreationProps {
  progress: number
  currentChapter: string
  setShowPreviewBook: (value: boolean) => void
  totalChapters: number
  counterChapters: number
}

function LoadingChaptersCreation({
  progress,
  currentChapter = 'Capitulo',
  totalChapters,
  counterChapters,
}: LoadingChaptersCreationProps) {
  return (
    <Wrapper className='lg:py-16'>
      <div className='mb-7 flex flex-col items-center justify-center'>
        <h1 className='text-center text-2xl font-bold'>{`Creando capítulo ${counterChapters}:`}</h1>
        <p>{currentChapter}</p>
        <span>
          {counterChapters}/{totalChapters}
        </span>
      </div>
      <div className='mt-7 flex justify-center'>
        <Progress value={progress} className='w-[60%]' />
      </div>
    </Wrapper>
  )
}

export default LoadingChaptersCreation
