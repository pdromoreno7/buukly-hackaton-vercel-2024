'use client'

import { generateKeyWordByTitle } from '@/actions/generateObjetcContent'
import axios from 'axios'
import { useEffect, useState } from 'react'

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
const API_KEY = process.env.NEXT_PUBLIC_API_PEXELS_KEY

function CardBook({ bookTitle = 'title', bookDescription }: CardBookProps) {
  const [coverImage, setCoverImage] = useState<string>('')
  const getImageCover = async (title: string) => {
    try {
      const { recipe } = await generateKeyWordByTitle(title)
      const { keyWordByTitle } = recipe
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${keyWordByTitle}&per_page=1`,
        {
          headers: {
            Authorization: API_KEY,
          },
        },
      )
      return response.data.photos
    } catch (err) {
      throw new Error('Failed to fetch images')
    }
  }

  useEffect(() => {
    if (!bookTitle) return
    const fetchImages = async () => {
      try {
        const fetchedImages = await getImageCover(bookTitle)
        const { portrait } = fetchedImages[0].src
        setCoverImage(portrait)
      } catch (err) {
        throw new Error('Failed to fetch images')
      }
    }

    fetchImages()
  }, [bookTitle])
  return (
    <Card className='w-10/12 md:max-w-96'>
      <CardHeader>
        <div
          className={`flex h-56 w-full flex-col items-center justify-center rounded-lg bg-yellow-300 text-center`}
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
        <CardTitle className='text-xl'>{bookTitle}</CardTitle>
        <CardDescription>{bookDescription}</CardDescription>
      </CardContent>
    </Card>
  )
}

export default CardBook
