import { cn } from '@/lib/utils'

export default function CoverBook({ className, title, color }: CoverBookProps) {
  return (
    <div
      className={cn(
        'flex h-[420px] flex-col overflow-hidden rounded-tr-2xl bg-white shadow-md md:h-5/6',
        className,
      )}
    >
      <div className='flex h-full'>
        <div
          className='w-2 bg-kiwi-500'
          style={{ backgroundColor: color }}
        ></div>
        {/* <div className='w-2 bg-gray-700'></div> */}
        <div className=''>
          <div className='flex h-3/4 flex-1 flex-col justify-between bg-gradient-to-b from-gradient-kiwi-start to-gradient-kiwi-end px-4'>
            <div className='flex h-full flex-col justify-center'>
              <h1 className='text-1xl mb-4 overflow-hidden break-words text-left font-bold'>
                <span className='inline-block text-pretty font-black text-brownn-900'>
                  {title?.toUpperCase()}
                </span>
                <hr className='mt-2 border-brownn-900' />
              </h1>
            </div>
          </div>
          <div className='mb-1 flex items-end justify-end text-right text-sm text-gray-500'>
            Generado por <span className='ml-1 font-bold'>Buucly</span>
          </div>
        </div>
      </div>
    </div>
  )
}

interface CoverBookProps {
  title: string
  className?: string
  color?: string
}
