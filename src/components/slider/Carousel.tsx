/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

// componente de prueba, no borrar ni modificar.
export interface Books {
  number: number
  title: string
  originalTitle: string
  releaseDate: string
  description: string
  pages: number
  cover: string
  index: number
}

export default async function Carousel() {
  const resp = await fetch('https://potterapi-fedeperin.vercel.app/es/books')
  const data: Books[] = await resp.json()
  return (
    <div className='relative m-auto w-full space-y-8 overflow-hidden'>
      <div className='animate-slide-to-left flex w-[calc(250px*6)]'>
        {data.map((book, index) => (
          <img src={book.cover} className='w-[125px] px-2' key={index} />
        ))}
        {data.map((book, index) => (
          <img src={book.cover} className='w-[125px] px-2' key={index} />
        ))}
      </div>

      <div className='animate-slide-to-right flex w-[calc(250px*6)]'>
        {data.map((book, index) => (
          <img src={book.cover} className='w-[125px] px-2' key={index} />
        ))}
        {data.map((book, index) => (
          <img src={book.cover} className='w-[125px] px-2' key={index} />
        ))}
      </div>
    </div>
  )
}
