import { cn } from '@/lib/utils'

export default function DescriptionPage({
  className,
  description,
  title,
}: DescriptionPageProps) {
  return (
    <div className={cn(className)}>
      <h1 className='text-pretty text-2xl font-bold'>{title}</h1>
      <p className='text-pretty text-gray-500 dark:text-white/80'>
        {description}
      </p>
    </div>
  )
}

interface DescriptionPageProps {
  title: string
  description: string
  className?: string
}
