'use client'
import { runGeminiObject } from '@/actions/generateTextActions'
import { useBookStore } from '@/store'
import { useRouter } from 'next/navigation'
import { useState, ChangeEvent } from 'react'

import { ButtonLoading } from '@/components/buttonLoading/ButtonLoading'
import Wrapper from '@/components/layouts/Wrapper'
import Steps from '@/components/steps/Steps'
import { Input } from '@/components/ui/input'

export default function Generate() {
  const router = useRouter()
  const [bookTitle, setBookTitle] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const setBookData = useBookStore(state => state.setBookData)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setBookTitle(event.target.value)
  }

  const submitGenerateBook = async () => {
    setIsLoading(true)
    const result = await runGeminiObject(bookTitle)
    setBookData(result?.recipe)
    setIsLoading(false)
    router.push('/preview')
    console.log(result)
  }

  return (
    <Wrapper>
      <div className='flex grow flex-col justify-between pb-2 pt-8'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-center text-2xl font-extrabold leading-tight'>
            ¿Qué libro quieres escribir hoy?
          </h1>
          <Steps />
        </div>
        <div className='mt-8 flex flex-col gap-4'>
          <Input
            placeholder='Un titulo corto para tu libro...'
            value={bookTitle}
            onChange={handleInputChange}
          />

          <div className='flex justify-center'>
            <ButtonLoading onClick={submitGenerateBook} isLoading={isLoading}>
              Generar
            </ButtonLoading>
          </div>
        </div>
      </div>
      <span className='pb-2 text-center text-xs text-gray-400'>
        Al hacer uso de esta app, acepta nuestros Términos de servicio y
        Política de privacidad.
      </span>
    </Wrapper>
  )
}
