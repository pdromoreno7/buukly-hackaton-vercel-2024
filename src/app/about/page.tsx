import { BuuclyLogoShortVariant } from '@/components/buuclyLogo/BuuclyLogo'
import Wrapper from '@/components/layouts/Wrapper'

import { HOW_IT_WORK } from '../../conts'

export default function About() {
  return (
    <Wrapper>
      <section className='mx-auto max-w-screen-md space-y-12 pb-16 pt-6'>
        <div className='grid grid-flow-row grid-cols-2'>
          <h1 className='text-2xl font-bold tracking-tight'>
            Acerca de Buucly
          </h1>

          <p className='tracking-tight'>
            Buucly utiliza inteligencia artificial para crear libros
            personalizados diseñados específicamente para tu aprendizaje. Esto
            te permite estudiar de manera más efectiva y mantener toda la
            información que necesitas de forma clara y accesible.
          </p>
        </div>

        <div className='grid grid-flow-row grid-cols-2'>
          <h2 className='text-2xl font-bold tracking-tight'>¿Cómo funciona?</h2>

          <ul>
            {HOW_IT_WORK.map((item, index) => (
              <li key={index} className='text-pretty'>
                ⁕ {item}
              </li>
            ))}
          </ul>
        </div>

        <div className='grid grid-flow-row grid-cols-2'>
          <h2 className='text-2xl font-bold tracking-tight'>Nuestro Impacto</h2>
          <p className='tracking-tight'>
            Desde nuestro lanzamiento, Buucly ha generado más de 100,000 libros
            únicos, colaborado con 500 autores humanos, y ha sido utilizado en
            30 países para proyectos educativos y creativos.
          </p>
        </div>

        <div className='grid grid-flow-row grid-cols-2'>
          <h2 className='text-2xl font-bold tracking-tight'>
            El Equipo Buucly
          </h2>
          <p className='tracking-tight'>
            Somos un equipo diverso de expertos en IA, desarrolladores,
            lingüistas y amantes de la literatura, unidos por la pasión de
            redefinir la creación literaria en la era digital.
          </p>
        </div>

        <div className='grid grid-flow-row grid-cols-2'>
          <h2 className='row-span-2 text-2xl font-bold tracking-tight'>
            Contacto
          </h2>
          <p className='tracking-tight'>
            ¿Tienes una idea para un libro o quieres saber más sobre nuestra
            tecnología?
          </p>
          <span className='font-medium tracking-tight'>
            email: buuclyapp@gmail.com
          </span>
        </div>
      </section>
      <div className='inline-flex w-full justify-center pb-6'>
        <BuuclyLogoShortVariant />
      </div>
    </Wrapper>
  )
}
