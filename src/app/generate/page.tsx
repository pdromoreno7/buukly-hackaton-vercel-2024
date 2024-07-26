'use client'
// import { GoogleGenerativeAI } from '@google/generative-ai'
import { runGeminiText } from '@/actions/generateTextActions'
import { useState, ChangeEvent } from 'react'

import Wrapper from '@/components/layouts/Wrapper'
import Steps from '@/components/steps/Steps'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// const API_KEY = process.env.NEXT_PUBLIC_API_GEMINI_KEY
// if (!API_KEY) throw new Error('Missing API_KEY')
// const genAI = new GoogleGenerativeAI(API_KEY)
// const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' })
// async function runGemini(title: string) {
//   const prompt = `Eres un escritor profesional de libros electrónicos con 20 años de experiencia. Tu estilo es claro, conciso y mantiene un tono formal.
// Redactas títulos de libros electrónicos increíblemente convincentes:

// Genera un título altamente convincente para un libro electrónico sobre el tema de ${title}. Responde solo con el título del libro electrónico. No pongas comillas (*) alrededor del título del libro electrónico
// Luego, Redacta una lista de 10 capítulos para el libro electrónico titulado como el titulo que creaste y que va a tratar sobre ${title} Proporciona solo los títulos de los capítulos en forma de viñetas. No escribas subcapítulos ni esquemas de los capítulos. Responde solo con una lista de títulos de capítulos.
// Enumera palabras clave para un libro electrónico sobre el tema ${title} titulado como lo que creaste y con la lista de capítulos que creaste.
// Crea un json que tenga la siguiete estructura: bookTitle: "", bookChapters: [], bookKeyWords:[] del libro. en bookTitle sera un string donde pondras el nombre del titulo del libro que creaste, en bookChapters sera una lista (array) de capítulos que craestes, solo pone el nombre del capítulo, y en bookKeyWords tambien sera na lista de palabras basdo en bookTitle y bookChapters que creastes. Solo responde con el JSON.
// `

//   const result = await model.generateContent(prompt)
//   const response = await result.response
//   const text = response.text()
//   return text
// }

export default function Generate() {
  const [bookTitle, setBookTitle] = useState<string>('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setBookTitle(event.target.value)
  }

  const submitGenerateBook = async () => {
    const result = await runGeminiText(bookTitle)
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
            <Button onClick={submitGenerateBook}>Generar</Button>
          </div>

          {/* <div className='relative'>
            <textarea
              name='description'
              placeholder='Escribe algo que describa tu libro de manera corta y precisa...'
              rows={8}
              className='relative w-full rounded-md bg-white/5 px-3 py-2 text-sm outline-none transition focus:bg-white/10'
            />
            <ActionButton />
          </div> */}
        </div>
      </div>
      <span className='pb-2 text-center text-xs text-gray-400'>
        Al hacer uso de esta app, acepta nuestros Términos de servicio y
        Política de privacidad.
      </span>
    </Wrapper>
  )
}
