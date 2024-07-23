'use client'
import { QUESTIONS } from '@/conts'
import { Accordion, AccordionItem } from '@nextui-org/react'

import Section from '@/components/layouts/Section'
import Wrapper from '@/components/layouts/Wrapper'

export default function Faq() {
  return (
    <Wrapper>
      <Section className='py-3'>
        <h1 className='text-xl font-bold'>Preguntas frecuentes</h1>

        <Accordion
          fullWidth
          isCompact
          showDivider={false}
          className='mt-4 flex flex-col gap-3 px-0'
        >
          {QUESTIONS.map((question, index) => (
            <AccordionItem
              key={index}
              aria-label={question.title}
              title={question.title}
              className='rounded-md bg-white/5 px-2 py-1'
            >
              {question.content}
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </Wrapper>
  )
}
