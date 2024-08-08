import CoverBook from './CoverBook'
import DescriptionPage from './DescriptionPage'

export default function CoverPage({
  description,
  title,
}: DescriptionPageProps) {
  return (
    <div className='flex h-full flex-col items-center gap-8 py-4 md:flex-row md:py-0'>
      <CoverBook className='max-w-80 md:w-1/2' title={title} />
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
}
