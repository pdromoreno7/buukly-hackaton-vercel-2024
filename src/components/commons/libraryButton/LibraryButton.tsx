import { Book } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface LibraryButtonProps {
  children: React.ReactNode
  onClick?: () => void

  isDisabled?: boolean
}

export function LibraryButton({
  children,
  onClick,

  isDisabled = false,
}: LibraryButtonProps) {
  return (
    <Button
      disabled={isDisabled}
      onClick={onClick}
      className='w-fit rounded-2xl font-semibold'
      variant='outline'
    >
      {children}
      <Book className='ml-2 h-4 w-4' />
    </Button>
  )
}
