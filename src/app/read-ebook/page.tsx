'use client'
import { useBookStore } from '@/store'
import { useState, useMemo } from 'react'

import BookPagination from '@/components/bookPagination/BookPagination'
import ChapterContent from '@/components/readEbook/ChapterContent'
import CoverPage from '@/components/readEbook/CoverPage'
import TableOfContents from '@/components/readEbook/TableOfContent'

export default function BookView() {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const dataEbook = useBookStore(state => state.dataEbook)

  const totalPages = useMemo(
    () => (dataEbook?.chaptersWithContent?.length ?? 0) + 2,
    [dataEbook],
  )

  const handlePageChange = (page: number): void => {
    setCurrentPage(page)
  }

  const renderContent = () => {
    switch (currentPage) {
      case 1:
        return (
          <CoverPage
            description={dataEbook.bookDescription}
            title={dataEbook.bookTitle}
            colorBookCover={dataEbook?.colorCoverBook ?? ''}
          />
        )
      case 2:
        return (
          <TableOfContents
            title={dataEbook.bookTitle}
            chapters={dataEbook.bookChapters}
          />
        )
      default:
        const chapterIndex = currentPage - 3
        if (!dataEbook?.chaptersWithContent) return null
        return (
          <ChapterContent
            chapter={dataEbook?.chaptersWithContent[chapterIndex] ?? {}}
            chapterIndex={chapterIndex}
            totalChapters={dataEbook?.chaptersWithContent?.length ?? 0}
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
          totalPages={totalPages}
        />
      </footer>
    </div>
  )
}
