import { useBookStore } from '@/store'

type Props = {
  title: string
}

export default function CoverBook({ title }: Readonly<Props>) {
  const color = useBookStore(state => state.bookCoverColor)
  return (
    <div className='flex h-96 w-64 flex-col overflow-hidden rounded bg-white shadow-md'>
      <div className='flex h-full'>
        <div className='w-8' style={{ backgroundColor: color }}></div>
        <div className='flex flex-1 flex-col justify-between px-4'>
          <div className='flex h-full flex-col justify-center'>
            <h1 className='text-1xl mb-4 overflow-hidden break-words text-center font-bold'>
              <span className='scale-fit-width inline-block transform font-black text-brownn-900'>
                {title.toUpperCase()}
              </span>
              <hr className='mt-2 border-brownn-900' />
            </h1>
          </div>
          <div className='flex items-end justify-end text-right text-xss font-extrabold text-brownn-900'>
            Creado por buukly
          </div>
        </div>
      </div>
    </div>
  )
}
