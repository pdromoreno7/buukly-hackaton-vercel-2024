import { useBookStore } from '@/store'

import { cn } from '@/lib/utils'

export default function CoverBook({ className, title }: CoverBookProps) {
  const color = useBookStore(state => state.bookCoverColor)

  return (
    <div
      className={cn(
        'flex h-[420px] flex-col overflow-hidden rounded-2xl bg-white shadow-md md:h-5/6',
        className,
      )}
    >
      <div className='flex h-full'>
        <div className='w-8' style={{ backgroundColor: color }}></div>
        <div className='w-2 bg-gray-700'></div>
        <div className='flex flex-1 flex-col justify-between px-4'>
          <div className='flex h-full flex-col justify-center'>
            <h1 className='text-1xl mb-4 overflow-hidden break-words text-left font-bold'>
              <span className='inline-block text-pretty font-black text-brownn-900'>
                {title?.toUpperCase()}
              </span>
              <hr className='mt-2 border-brownn-900' />
            </h1>
          </div>
          <div className='mb-1 flex items-end justify-end text-right text-sm text-brownn-900'>
            Generado por <span className='ml-1 font-bold'>Buukly</span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface CoverBookProps {
  title: string
  className?: string
}
