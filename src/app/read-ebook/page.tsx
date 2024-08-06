'use client'
import { useBookStore } from '@/store'
import { useState, useMemo } from 'react'

import CoverBook from '@/components/coverBook/CoverBook'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { ScrollArea } from '@/components/ui/scroll-area'

// Definimos interfaces para nuestros tipos de datos
interface Chapter {
  chapterTitle: string
  text: string
}

interface ChapterContentProps {
  chapter: Chapter
  chapterIndex: number
  totalChapters: number
}

interface DescriptionPageProps {
  title: string
  description: string
}

interface TableOfContentsProps {
  title: string
  chapters: string[]
}

const CoverPage = () => (
  <div className='flex h-[720px] items-center justify-center'>
    <CoverBook className='h-full w-full md:w-[70%]' />
  </div>
)

const DescriptionPage: React.FC<DescriptionPageProps> = ({
  title,
  description,
}) => (
  <div>
    <h1 className='text-center text-4xl font-extrabold'>{title}</h1>
    <div className='mt-9'>
      <p>{description}</p>
    </div>
  </div>
)

const TableOfContents: React.FC<TableOfContentsProps> = ({
  title,
  chapters,
}) => (
  <div>
    <h1 className='text-center text-4xl font-extrabold'>{title}</h1>
    <div className='mt-9'>
      <h2 className='mb-4 text-lg font-bold'>Capítulos:</h2>
      <ol className='list-inside space-y-3'>
        {chapters.map((chapter, index) => (
          <div key={index}>
            <li className='text-sm'>
              <p className='font-bold'>{`Capítulo ${index + 1}`}.</p>
              {chapter}
            </li>
            {index < chapters.length - 1 && (
              <hr className='my-2 border-gray-100' />
            )}
          </div>
        ))}
      </ol>
    </div>
  </div>
)

const ChapterContent: React.FC<ChapterContentProps> = ({
  chapter,
  chapterIndex,
  totalChapters,
}) => (
  <div>
    <h2 className='mb-14 text-2xl font-bold'>{chapter.chapterTitle}</h2>
    <ScrollArea className='mx-auto h-[500px] max-w-3xl rounded-md md:h-[650px]'>
      <div
        className='text-sm'
        dangerouslySetInnerHTML={{ __html: chapter.text }}
      />
    </ScrollArea>
    <div className='mt-4 flex justify-center'>
      <p className='text-xs text-gray-500'>{`Capítulo: ${chapterIndex + 1}/${totalChapters}`}</p>
    </div>
  </div>
)

export default function BookView() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const dataEbook = useBookStore(state => state.dataEbook)

  const totalPages = useMemo(
    () => dataEbook.chaptersWithContent.length + 3,
    [dataEbook],
  )

  const handlePageChange = (page: number): void => {
    setCurrentPage(page)
  }

  const renderContent = () => {
    switch (currentPage) {
      case 1:
        return <CoverPage />
      case 2:
        return (
          <DescriptionPage
            title={dataEbook.bookTitle}
            description={dataEbook.bookDescription}
          />
        )
      case 3:
        return (
          <TableOfContents
            title={dataEbook.bookTitle}
            chapters={dataEbook.bookChapters}
          />
        )
      default:
        const chapterIndex = currentPage - 4
        return (
          <ChapterContent
            chapter={dataEbook.chaptersWithContent[chapterIndex]}
            chapterIndex={chapterIndex}
            totalChapters={dataEbook.chaptersWithContent.length}
          />
        )
    }
  }

  return (
    <div className='flex min-h-screen flex-col'>
      <main className='container mx-auto max-w-3xl flex-grow overflow-y-auto p-4'>
        {renderContent()}
      </main>

      <footer className='py-4'>
        <Pagination className='container mx-auto'>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href='#'
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault()
                  handlePageChange(Math.max(1, currentPage - 1))
                }}
                className={
                  currentPage === 1 ? 'pointer-events-none opacity-50' : ''
                }
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href='#'
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.preventDefault()
                    handlePageChange(index + 1)
                  }}
                  isActive={currentPage === index + 1}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href='#'
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault()
                  handlePageChange(Math.min(totalPages, currentPage + 1))
                }}
                className={
                  currentPage === totalPages
                    ? 'pointer-events-none opacity-50'
                    : ''
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </footer>
    </div>
  )
}
