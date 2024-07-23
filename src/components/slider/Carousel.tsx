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

  // before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']
  return (
    <div className="relative m-auto w-full overflow-hidden space-y-8">
      <div className="animate-slide-to-left flex w-[calc(250px*6)]">
        {data.map((book, index) => (
          <img
            src={book.cover}
            className="w-[125px] px-2"
            key={index}
          />
        ))}
        {data.map((book, index) => (
          <img
            src={book.cover}
            className="w-[125px] px-2"
            key={index}
          />
        ))}
      </div>

      <div className="animate-slide-to-right flex w-[calc(250px*6)]">
        {data.map((book, index) => (
          <img
            src={book.cover}
            className="w-[125px] px-2"
            key={index}
          />
        ))}
        {data.map((book, index) => (
          <img
            src={book.cover}
            className="w-[125px] px-2"
            key={index}
          />
        ))}
      </div>
    </div>
  )
};
