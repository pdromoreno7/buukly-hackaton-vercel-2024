import { cn } from '@lib/utils'
import React from 'react'

const Wrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children }, ref) => (
  <div
    ref={ref}
    className={cn('container mx-auto h-full max-w-screen-lg px-5', className)}
  >
    {children}
  </div>
))
Wrapper.displayName = 'Wrapper'

export default Wrapper
