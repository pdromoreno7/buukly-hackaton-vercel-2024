'use client'
import { generateBookByTitle } from '@/actions/generateObjetcContent'
import { useBookStore } from '@/store'
// import { useRouter } from 'next/navigation'
import { useState, ChangeEvent } from 'react'

import BookPreview from '@/components/bookPreview/BookPreview'
import { ButtonLoading } from '@/components/buttonLoading/ButtonLoading'
import Section from '@/components/layouts/Section'
import Wrapper from '@/components/layouts/Wrapper'
import Steps from '@/components/steps/Steps'
import { Input } from '@/components/ui/input'

export default function Generate() {
  // const router = useRouter()
  const [showPreviewBook, setShowPreviewBook] = useState<boolean>(false)
  const [bookTitle, setBookTitle] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const setBookData = useBookStore(state => state.setBookData)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setBookTitle(event.target.value)
  }

  const submitGenerateBook = async () => {
    setIsLoading(true)
    const result = await generateBookByTitle(bookTitle)
    setBookData(result?.recipe)
    setIsLoading(false)
    setShowPreviewBook(!showPreviewBook)
  }
  if (!showPreviewBook)
    return (
      <BookPreview
        setShowPreviewBook={setShowPreviewBook}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    )

  return (
    <Wrapper className='py-8 lg:py-16'>
      <Section className='mx-auto flex h-full max-w-lg grow flex-col justify-between'>
        <div className='flex flex-col gap-5 lg:gap-6'>
          <h1 className='text-center text-2xl font-extrabold leading-tight lg:text-3xl'>
            ¿Qué libro quieres escribir hoy?
          </h1>
          <Steps />
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
