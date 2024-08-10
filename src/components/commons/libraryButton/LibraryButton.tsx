import { Book } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface ButtonLoadingProps {
  children: React.ReactNode
  onClick?: () => void

  isDisabled?: boolean
}

export function LibraryButton({
  children,
  onClick,

  isDisabled = false,
}: ButtonLoadingProps) {
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
