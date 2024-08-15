import { TERMS } from '@/conts'
import { Metadata } from 'next'

import Wrapper from '@/components/layouts/Wrapper'

export const metadata: Metadata = {
  title: 'Políticas de Privacidad, Términos y Condiciones  | Buucly',
  description: 'Términos y condiciones de uso de Buucly.',
}

export default function TermsAndPrivacy() {
  const lastUpdate = new Date('08/11/2024').toLocaleDateString('es-CO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }) // formato: mes, dia, año

  return (
    <Wrapper className='max-w-screen-xl'>
      <section>
        <div className='py-16'>
          <h1 className='mb-2 text-3xl font-semibold tracking-tight md:text-4xl'>
            Términos y condiciones
          </h1>
          <span className='text-sm text-neutral-600 dark:text-neutral-300'>
            Ultima actualización : {lastUpdate}
          </span>
        </div>

        <div className='space-y-6'>
          {TERMS.map((term, index) => (
            <div key={index} className='space-y-1'>
              <h4 className='text-lg font-semibold'>{term.title}</h4>
              <p className='text-base text-neutral-600 dark:text-neutral-300'>
                {term.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  )
}
