'use client'
import { useState } from 'react'
import { QUESTIONS } from '@/conts'
import Section from '@/components/layouts/Section'
import Wrapper from '@/components/layouts/Wrapper'

// const

function Accordion({ title, content }: { title: string; content: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='mb-4 rounded-md border border-neutral-400/25 dark:border-white/10'>
      <button
        className='flex w-full items-center justify-between p-4 text-left focus:outline-none'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='font-semibold'>{title}</span>
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className='border-t border-neutral-400/25 p-4 dark:border-white/10'>
          {content}
        </div>
      )}
    </div>
  )
}

export default function Faq() {
  return (
    <Wrapper>
      <Section className='mx-auto max-w-3xl py-12'>
        <h1 className='text-4xl mb-8 text-center font-bold'>
          Preguntas frecuentes
        </h1>
        <div className='bg mb-8 rounded-lg rounded-md border border-neutral-400/25 p-6 dark:border-white/10 dark:bg-white/5'>
          {QUESTIONS.map((question, index) => (
            <Accordion
              key={index}
              title={question.title}
              content={question.content}
            />
          ))}
        </div>
      </Section>

      <footer className='mt-12 py-8 text-white'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='text-2xl mb-4 font-semibold'>¿Necesitas más ayuda?</h2>
          <p className='mb-2'>
            Si no encuentras la respuesta que buscas, no dudes en contactarnos.
          </p>
          <p className='mb-2'>Email: buuclyapp@gmail.com</p>
        </div>
      </footer>
    </Wrapper>
  )
}
