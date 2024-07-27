import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
interface ButtonLoadingProps {
  children: React.ReactNode
  onClick?: () => void
  isLoading?: boolean
  isDisabled?: boolean
}

export function ButtonLoading({
  children,
  onClick,
  isLoading = false,
  isDisabled = false,
}: ButtonLoadingProps) {
  return (
    <Button
      disabled={isLoading || isDisabled}
      onClick={onClick}
      className='w-fit rounded-full font-semibold'
    >
      {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
      {isLoading ? 'Generando...' : children}
    </Button>
  )
}
