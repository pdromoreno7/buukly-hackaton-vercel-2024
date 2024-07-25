/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'

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

export default async function Slider() {
  const resp = await fetch('https://potterapi-fedeperin.vercel.app/es/books')
  const data: Books[] = await resp.json()

  return (
    <Carousel className='w-full'>
      <CarouselContent>
        {data.map(book => (
          <CarouselItem key={book.number} className='basis-1/3'>
            <img src={book.cover} className='h-80 w-52 object-cover' />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
