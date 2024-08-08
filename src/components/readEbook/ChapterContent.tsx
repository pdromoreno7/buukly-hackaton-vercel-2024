import { ScrollArea } from '@radix-ui/react-scroll-area'

export default function ChapterContent({
  chapter,
  chapterIndex,
  totalChapters,
}: ChapterContentProps) {
  return (
    <div className='mx-auto max-w-lg py-3'>
      <h2 className='mb-8 text-pretty text-2xl font-bold'>
        {chapter.chapterTitle}
      </h2>
      <ScrollArea className='mx-auto h-full max-w-3xl rounded-md'>
        <div
          className='text-pretty text-sm'
          dangerouslySetInnerHTML={{ __html: chapter.text }}
        />
      </ScrollArea>
      <div className='mb-4 mt-12 flex justify-center'>
        <p className='text-xs text-gray-500 dark:text-white/60'>{`Capítulo: ${chapterIndex + 1}/${totalChapters}`}</p>
      </div>
    </div>
  )
}

interface ChapterContentProps {
  chapter: Chapter
  chapterIndex: number
  totalChapters: number
}

interface Chapter {
  chapterTitle: string
  text: string
}
