import { ChapterType } from '@/interfaces/bookInterfaces'
import { ScrollArea } from '@radix-ui/react-scroll-area'

export default function ChapterContent({
  chapter,
  chapterIndex,
  totalChapters,
}: ChapterContentProps) {
  return (
    <div className='mx-auto max-w-lg py-3'>
      <h2 className='mb-8 text-pretty text-2xl font-bold'>
        {chapter.chapter_title}
      </h2>
      <ScrollArea className='mx-auto h-full max-w-3xl rounded-md'>
        <div
          className='text-pretty text-sm'
          dangerouslySetInnerHTML={{ __html: chapter.chapter_content }}
        />
      </ScrollArea>
      <div className='mb-4 mt-12 flex justify-center'>
        <p className='text-xs text-gray-500 dark:text-white/60'>{`Capítulo: ${chapterIndex + 1}/${totalChapters}`}</p>
      </div>
    </div>
  )
}

interface ChapterContentProps {
  chapter: ChapterType
  chapterIndex: number
  totalChapters: number
}
