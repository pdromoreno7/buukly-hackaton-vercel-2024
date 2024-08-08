import backToTop from '@/lib/backToTop'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination'

interface BookPaginationProps {
  currentPage: number
  totalPages: number
  handlePageChange: (page: number) => void
}

export default function BookPagination({
  currentPage,
  handlePageChange,
  totalPages,
}: BookPaginationProps) {
  return (
    <Pagination>
      <PaginationContent className='max-w-sm overflow-x-auto sm:max-w-xl md:max-w-screen-sm'>
        <PaginationItem>
          <PaginationPrevious
            href='#'
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault()
              handlePageChange(Math.max(1, currentPage - 1))
              backToTop()
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
                backToTop()
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
              backToTop()
            }}
            className={
              currentPage === totalPages ? 'pointer-events-none opacity-50' : ''
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
