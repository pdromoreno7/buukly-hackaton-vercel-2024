import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
interface ButtonLoadingProps {
  children: React.ReactNode
  onClick?: () => void
  isLoading?: boolean
}

export function ButtonLoading({
  children,
  onClick,
  isLoading = false,
}: ButtonLoadingProps) {
  console.log('🚀 ~ isLoading:', isLoading)

  return (
    <Button disabled={isLoading} onClick={onClick}>
      {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
      {isLoading ? 'Generando...' : children}
    </Button>
  )
}
