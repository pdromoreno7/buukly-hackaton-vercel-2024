'use client'
import {
  generateColorBook,
  generateDataBookByTitle,
} from '@/actions/generateObjetcContent'
import { saveNewBook } from '@/actions/services/bookServices/saveNewBook'
import { PATHNAMES } from '@/conts'
import { useGenerateChapters } from '@/hooks/useGenerateChapters'
import { BookType } from '@/interfaces/bookInterfaces'
import { useBookStore } from '@/store'
import { createClientSR } from '@/utils/supabase/client'
import Link from 'next/link'
import { useState, ChangeEvent } from 'react'
import { toast } from 'sonner'

import BookPreview from '@/components/bookPreview/BookPreview'
import BookResult from '@/components/bookResult/BookResult'
import { ButtonLoading } from '@/components/commons/buttonLoading/ButtonLoading'
import { GithubButton } from '@/components/commons/githubButton/GithubButton'
import Section from '@/components/layouts/Section'
import Wrapper from '@/components/layouts/Wrapper'
import LoadingChaptersCreation from '@/components/loadingChaptersCreation/LoadingChaptersCreation'
import Suggestions from '@/components/suggestions/Suggestions'
import { Input } from '@/components/ui/input'

export default function Generate() {
  const supabase = createClientSR()
  const [showPreviewBook, setShowPreviewBook] = useState<boolean>(false)
  const [bookResult, setBookResult] = useState<BookType>({
    id: '',
    user_id: '',
    created_at: '',
    book_title: '',
    book_description: '',
    chapters: [],
    last_read_chapter: null,
    is_favorite: false,
    status: '',
    color_cover: '',
  })
  const [bookTitle, setBookTitle] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {
    generateChapters,
    currentChapter,
    progress,
    counterChapters,
    totalChapters,
  } = useGenerateChapters()
  const { dataEbook, setBookData, setChaptersWithContent } = useBookStore()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setBookTitle(event.target.value)
  }

  const handleSetInputSteps = (value: string) => {
    setBookTitle(value) // Actualiza el título del libro cuando se actualiza inputSteps
  }

  const submitGenerateBook = async () => {
    setIsLoading(true)
    try {
      const result = await generateDataBookByTitle(bookTitle)
      const resultColorBook = await generateColorBook(bookTitle)
      const trimmedColorBook = resultColorBook.trim()

      setBookData({
        ...result?.recipe,
        colorCoverBook: trimmedColorBook,
      })

      setIsLoading(false)
      setShowPreviewBook(!showPreviewBook)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error('An unknown error occurred')
      }
    } finally {
      setIsLoading(false)
    }
  }
  const submitGenerateBookChapters = async () => {
    setIsLoading(true)
    const keyWords = dataEbook.bookKeyWords.join(', ')
    try {
      const chaptersWithContentResult = await generateChapters(
        dataEbook.bookChapters,
        dataEbook.bookTitle,
        keyWords,
      )
      setChaptersWithContent(chaptersWithContentResult)

      // Guardar libro
      const dataSend = {
        book_title: dataEbook?.bookTitle,
        book_description: dataEbook?.bookDescription,
        chapters: dataEbook?.bookChapters,
        color_cover: dataEbook?.colorCoverBook ?? '',
      }
      const { data, error } = await saveNewBook(dataSend)
      setBookResult(data ?? {})

      // Guardar capitulos
      for (let i = 0; i < chaptersWithContentResult.length; i++) {
        const { error: errorChapter } = await supabase
          .from('book_chapters')
          .insert({
            book_id: data?.id,
            chapter_title: chaptersWithContentResult[i].chapterTitle,
            chapter_content: chaptersWithContentResult[i].text,
            chapter_number: i + 1,
          })

        if (errorChapter) {
          toast.error('Ocurrio un error al guardar los capitulos')
        }
      }
      if (error) {
        toast.error('Ocurrio un error al guardar libro')
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error('An unknown error occurred')
      }
    } finally {
      setIsLoading(false)
    }
  }
  if (progress === 100) return <BookResult dataEbook={bookResult} />
  if (progress > 0)
    return (
      <LoadingChaptersCreation
        currentChapter={currentChapter}
        progress={progress}
        setShowPreviewBook={setShowPreviewBook}
        totalChapters={totalChapters}
        counterChapters={counterChapters}
      />
    )
  if (showPreviewBook)
    return (
      <BookPreview
        setShowPreviewBook={setShowPreviewBook}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        submitGenerateBookChapters={submitGenerateBookChapters}
        titleBook={bookTitle}
      />
    )

  return (
    <Wrapper className='py-8 lg:py-6'>
      <Section className='mx-auto flex h-full max-w-lg grow flex-col justify-between'>
        <div className='flex flex-col gap-5 lg:gap-6'>
          <div className='space-y-1'>
            <h1 className='text-center text-2xl font-extrabold leading-tight lg:text-3xl'>
              ¿Qué quieres leer hoy?
            </h1>
            <p className='text-center text-sm text-neutral-600 dark:text-neutral-300'>
              Genera tu libro ahora con los temas recomendados.
            </p>
          </div>
          <Suggestions handleSetInputSteps={handleSetInputSteps} />
        </div>
        <div className='mt-auto flex gap-2'>
          <Input
            className='rounded-full border-none bg-gray-100 px-5 transition-colors duration-200 focus:bg-gray-200 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-white/5 dark:hover:bg-white/10 dark:focus:bg-white/15'
            placeholder='Un titulo corto para tu libro...'
            value={bookTitle}
            onChange={handleInputChange}
          />

          <div className=''>
            <ButtonLoading
              onClick={submitGenerateBook}
              isLoading={isLoading}
              isDisabled={!bookTitle}
            >
              Enviar ✨
            </ButtonLoading>
          </div>
        </div>
        <div className='flex flex-col gap-2 self-end text-center'>
          <span className='mt-3 text-center text-xs text-neutral-600 dark:text-neutral-300'>
            Al hacer uso de esta app, acepta nuestros{' '}
            <Link
              href={PATHNAMES['terms-privacy']}
              className='transition-colors hover:text-black hover:underline dark:hover:text-neutral-50'
            >
              Términos de Servicio y Políticas de Privacidad.
            </Link>
          </span>
          <div className='sm:hidden'>
            <GithubButton link />
          </div>
        </div>
      </Section>
    </Wrapper>
  )
}
