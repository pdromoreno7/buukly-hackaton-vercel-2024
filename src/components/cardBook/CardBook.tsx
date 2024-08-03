'use client'
import { getImageCover } from '@/actions/generateImagenCover'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface CardBookProps {
  bookTitle: string
  bookDescription?: string
}

function CardBook({ bookTitle = 'title', bookDescription }: CardBookProps) {
  const [coverImage, setCoverImage] = useState<string>('')

  useEffect(() => {
    if (!bookTitle) return
    const fetchImages = async () => {
      try {
        const { portrait } = await getImageCover(bookTitle)
        setCoverImage(portrait)
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message)
        } else {
          toast.error('An unknown error occurred')
        }
      }
    }

    fetchImages()
  }, [bookTitle])
  return (
    <Card className='w-10/12 md:max-w-96'>
      <CardHeader>
        <div
          className={`flex h-40 w-full flex-col items-center justify-center rounded-lg bg-yellow-300 text-center`}
        >
          {coverImage.length > 0 ? (
            <img
              src={coverImage}
              alt=''
              className='h-full w-full rounded-md object-cover'
            />
          ) : (
            <p className='text-center text-lg text-black'>
              Generando portada...
            </p>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className='text-lg'>{bookTitle}</CardTitle>
        <CardDescription>{bookDescription}</CardDescription>
      </CardContent>
    </Card>
  )
}

export default CardBook
