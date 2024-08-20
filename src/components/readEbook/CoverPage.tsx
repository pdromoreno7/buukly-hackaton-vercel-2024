import CoverBook from './CoverBook'
import DescriptionPage from './DescriptionPage'

export default function CoverPage({
  description,
  title,
  colorBookCover,
}: DescriptionPageProps) {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-8 py-4 md:flex-row md:py-0'>
      <div className=''>
        <CoverBook
          className='max-w-48 md:h-80 md:w-full md:max-w-60 md:space-y-4'
          title={title}
          color={colorBookCover}
        />
      </div>
      <DescriptionPage
        className='w-full space-y-4 md:w-1/2'
        description={description}
        title={title}
      />
    </div>
  )
}

interface DescriptionPageProps {
  title: string
  description: string
  colorBookCover: string
}
