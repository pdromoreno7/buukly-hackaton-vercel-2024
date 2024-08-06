import Section from '@/components/layouts/Section'
import Wrapper from '@/components/layouts/Wrapper'

export default function About() {
  return (
    <Wrapper>
      <Section className='mx-auto max-w-3xl py-12'>
        <h1 className='text-4xl mb-8 text-center font-bold'>
          Acerca de Buukly
        </h1>

        <p className='text-lg mb-6 text-center'>
          Buukly es una plataforma innovadora que utiliza inteligencia
          artificial para generar libros personalizados. Fundada en 2024,
          nuestra misión es revolucionar la creación de contenido literario y
          ofrecer experiencias de lectura únicas.
        </p>

        <div className='bg mb-8 rounded-lg rounded-md border border-neutral-400/25 p-6 dark:border-white/10 dark:bg-white/5'>
          <h2 className='text-2xl mb-4 text-center font-semibold'>
            Cómo funciona
          </h2>
          <ul className='mb-8 list-none space-y-2'>
            {[
              'Algoritmos de IA avanzados para generar tramas y personajes',
              'Personalización basada en preferencias del usuario',
              'Generación de ilustraciones únicas para cada libro',
              'Edición y refinamiento asistido por IA',
              'Opciones de publicación digital y física bajo demanda',
            ].map((item, index) => (
              <li key={index} className='flex items-center'>
                <span className='mr-2'>✓</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className='bg mb-8 rounded-lg rounded-md border border-neutral-400/25 p-6 dark:border-white/10 dark:bg-white/5'>
          <h2 className='text-2xl mb-4 text-center font-semibold text-white'>
            Nuestro Impacto
          </h2>
          <p className='text-center text-white'>
            Desde nuestro lanzamiento, Buukly ha generado más de 100,000 libros
            únicos, colaborado con 500 autores humanos, y ha sido utilizado en
            30 países para proyectos educativos y creativos.
          </p>
        </div>
        <div className='bg mb-8 rounded-lg rounded-md border border-neutral-400/25 p-6 dark:border-white/10 dark:bg-white/5'>
          <h2 className='text-2xl mb-4 text-center font-semibold'>
            El Equipo Buukly
          </h2>
          <p className='mb-4 text-center'>
            Somos un equipo diverso de expertos en IA, desarrolladores,
            lingüistas y amantes de la literatura, unidos por la pasión de
            redefinir la creación literaria en la era digital.
          </p>
        </div>
      </Section>

      <footer className='mt-12 py-8 text-white'>
        <div className='mx-auto max-w-3xl text-center'>
          <h2 className='text-2xl mb-4 font-semibold'>Contacto</h2>
          <p className='mb-2'>
            ¿Tienes una idea para un libro o quieres saber más sobre nuestra
            tecnología?
          </p>
          <p className='mb-2'>Email: buuclyapp@gmail.com</p>
          {/* <p>Twitter: @BuuklyAI</p> */}
        </div>
      </footer>
    </Wrapper>
  )
}
