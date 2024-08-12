'use client'
import { QUESTIONS } from '@/conts'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function Questions() {
  return (
    <section className='mx-auto flex w-full flex-col gap-8 rounded-lg border border-neutral-200 p-6 lg:max-w-screen-md'>
      <h2 className='text-center text-3xl font-semibold tracking-tight md:text-5xl'>
        Preguntas frecuentes
      </h2>

      <Accordion
        type='single'
        collapsible
        className='flex w-full flex-col gap-3'
      >
        {QUESTIONS.slice(0, 3).map((question, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className='rounded-lg border px-3'
          >
            <AccordionTrigger className='hover:no-underline'>
              {question.title}
            </AccordionTrigger>
            <AccordionContent>{question.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
