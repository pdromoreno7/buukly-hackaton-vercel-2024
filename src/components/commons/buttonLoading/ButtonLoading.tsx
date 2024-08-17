import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'

interface ButtonLoadingProps {
  children: React.ReactNode
  onClick?: () => void
  isLoading?: boolean
  isDisabled?: boolean
  className?: string
}

export function ButtonLoading({
  children,
  onClick,
  isLoading = false,
  isDisabled = false,
  className = '',
}: ButtonLoadingProps) {
  return (
    <Button
      disabled={isLoading || isDisabled}
      onClick={onClick}
      className={cn(
        `w-full rounded-2xl bg-emerald-500 font-semibold text-black hover:bg-emerald-600`,
        className,
      )}
    >
      {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
      {isLoading ? 'Generando...' : children}
    </Button>
  )
}
