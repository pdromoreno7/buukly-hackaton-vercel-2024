import { useBookStore } from '@/store'

import { cn } from '@/lib/utils'

interface CoverBookProps {
  className?: string
}

export default function CoverBook({ className }: CoverBookProps) {
  const color = useBookStore(state => state.bookCoverColor)
  const dataEbook = useBookStore(state => state.dataEbook)
  return (
    <div
      className={cn(
        'flex h-96 w-64 flex-col overflow-hidden rounded-2xl bg-white shadow-md',
        className,
      )}
    >
      <div className='flex h-full'>
        <div className='w-8' style={{ backgroundColor: color }}></div>
        <div className='w-2 bg-gray-700'></div>
        <div className='flex flex-1 flex-col justify-between px-4'>
          <div className='flex h-full flex-col justify-center'>
            <h1 className='text-1xl mb-4 overflow-hidden break-words text-left font-bold'>
              <span className='scale-fit-width inline-block transform font-black text-brownn-900'>
                {dataEbook?.bookTitle.toUpperCase()}
              </span>
              <hr className='mt-2 border-brownn-900' />
            </h1>
          </div>
          <div className='text-xss mb-1 flex items-end justify-end text-right text-brownn-900'>
            Creado por <span className='clor ml-1 font-extrabold'>Buucly</span>
          </div>
        </div>
      </div>
    </div>
  )
}
