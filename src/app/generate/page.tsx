'use client'
import { generateDataBookByTitle } from '@/actions/generateObjetcContent'
import { useGenerateChapters } from '@/hooks/useGenerateChapters'
import { useBookStore } from '@/store'
import { useState, ChangeEvent } from 'react'
import { toast } from 'sonner'

import BookPreview from '@/components/bookPreview/BookPreview'
import { ButtonLoading } from '@/components/buttonLoading/ButtonLoading'
import Section from '@/components/layouts/Section'
import Wrapper from '@/components/layouts/Wrapper'
import LoadingChaptersCreation from '@/components/loadingChaptersCreation/LoadingChaptersCreation'
import Steps from '@/components/steps/Steps'
import { Input } from '@/components/ui/input'

export default function Generate() {
  const [showPreviewBook, setShowPreviewBook] = useState<boolean>(false)
  const [bookTitle, setBookTitle] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {
    generateChapters,
    currentChapter,
    progress,
    counterChapters,
    totalChapters,
  } = useGenerateChapters()

  const [inputSteps, setInputSteps] = useState<string>('')
  console.log(inputSteps)
  const setBookData = useBookStore(state => state.setBookData)
  const dataEbook = useBookStore(state => state.dataEbook)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setBookTitle(event.target.value)
  }

  const handleSetInputSteps = (value: string) => {
    setInputSteps(value)
    setBookTitle(value) // Actualiza el título del libro cuando se actualiza inputSteps
  }

  const submitGenerateBook = async () => {
    setIsLoading(true)
    try {
      const result = await generateDataBookByTitle(bookTitle)
      setBookData(result?.recipe)
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
      const chaptersWithContent = await generateChapters(
        dataEbook.bookChapters,
        dataEbook.bookTitle,
        keyWords,
      )
      console.log(
        '🚀 ~ submitGenerateBookChapters ~ chaptersWithContent:',
        chaptersWithContent,
      )
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error('An unknown error occurred')
        // console.error('Error generando capítulos:', error)
      }
    } finally {
      setIsLoading(false)
    }
  }
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
      />
    )

  return (
    <Wrapper className='py-8 lg:py-16'>
      <Section className='mx-auto flex h-full max-w-lg grow flex-col justify-between'>
        <div className='flex flex-col gap-5 lg:gap-6'>
          <h1 className='text-center text-2xl font-extrabold leading-tight lg:text-3xl'>
            ¿Qué libro quieres escribir hoy?
          </h1>
          <Steps handleSetInputSteps={handleSetInputSteps} />
        </div>
        <div className='mt-auto flex gap-2'>
          <Input
            className='rounded-full border-none bg-gray-100 px-5 transition-colors duration-200 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-white/5 dark:hover:bg-white/10 dark:focus:bg-white/15'
            placeholder='Un titulo corto para tu libro...'
            value={bookTitle}
            onChange={handleInputChange}
          />

          <ButtonLoading
            onClick={submitGenerateBook}
            isLoading={isLoading}
            isDisabled={!bookTitle}
          >
            Generar
          </ButtonLoading>
        </div>
        <span className='mt-3 text-center text-xs text-gray-100/80'>
          Al hacer uso de esta app, acepta nuestros Términos de servicio y
          Política de privacidad.
        </span>
      </Section>
    </Wrapper>
  )
}
