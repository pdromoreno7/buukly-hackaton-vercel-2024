'use client'
import { getBookById } from '@/actions/services/bookServices/getBookById'
import { getChaptersByBookId } from '@/actions/services/bookServices/getChaptersByBookId'
import { BookType, ChapterType } from '@/interfaces/bookInterfaces'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'

import BookPagination from '@/components/bookPagination/BookPagination'
import ChapterContent from '@/components/readEbook/ChapterContent'
import CoverPage from '@/components/readEbook/CoverPage'
import TableOfContents from '@/components/readEbook/TableOfContent'

export default function BookView({ params }: { params: { eBook: string } }) {
  const { eBook: bookID } = params
  const [dataEbook, setBook] = useState<BookType | null>(null)
  const [chapters, setChapters] = useState<ChapterType[]>([])
  console.log('🚀 ~ BookView ~ chapters:', chapters)

  const [currentPage, setCurrentPage] = useState<number>(1)

  const getBookAndChapter = async () => {
    const { data, error } = await getBookById(bookID)
    const { data: dataChapters, error: errorChapters } =
      await getChaptersByBookId(bookID)
    console.log('🚀 ~ getBookAndChapter ~ dataChapters:', dataChapters)

    if (error) {
      toast.error('Error al cargar el libro')
    }

    if (errorChapters) {
      toast.error('Error al cargar los capitulos')
    }

    setBook(data ?? null)
    setChapters(dataChapters ?? [])

    if (errorChapters) {
      console.error('Error fetching book:', errorChapters)
      return null
    }
  }

  useEffect(() => {
    getBookAndChapter()
  }, [bookID])

  const handlePageChange = (page: number): void => {
    setCurrentPage(page)
  }

  const renderContent = () => {
    switch (currentPage) {
      case 1:
        return (
          <CoverPage
            description={dataEbook?.book_description ?? ''}
            title={dataEbook?.book_title ?? ''}
            colorBookCover={dataEbook?.color_cover ?? ''}
          />
        )
      case 2:
        return (
          <TableOfContents
            title={dataEbook?.book_title ?? ''}
            chapters={dataEbook?.chapters ?? []}
          />
        )
      default:
        const chapterIndex = currentPage - 3
        if (!chapters) return null
        return (
          <ChapterContent
            chapter={chapters[chapterIndex] ?? {}}
            chapterIndex={chapterIndex}
            totalChapters={chapters?.length ?? 0}
          />
        )
    }
  }

  return (
    <div className='flex h-full flex-col'>
      <main className='container mx-auto max-w-3xl px-4 py-0 lg:px-0'>
        {renderContent()}
      </main>

      <footer className='py-4'>
        <BookPagination
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          totalPages={(chapters?.length ?? 0) + 2}
        />
      </footer>
    </div>
  )
}
