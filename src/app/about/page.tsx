import { BuuclyLogoShortVariant } from '@/components/buuclyLogo/BuuclyLogo'
import Wrapper from '@/components/layouts/Wrapper'

const teamMembers = [
  {
    name: 'Pedro Moreno',
    role: 'Full Stack Developer',
    imageUrl: '/team/pedro.webp',
    profileUrl: 'https://www.linkedin.com/in/pedromorenodev/', // URL del perfil o página personal
  },
  {
    name: 'Abel Guardo',
    role: 'Full Stack Developer',
    imageUrl: '/team/abel.webp',
    profileUrl: 'https://www.linkedin.com/in/abelguardop/',
  },
  {
    name: 'Rafael Álvarez',
    role: 'Full Stack Developer',
    imageUrl: '/team/rafael.webp',
    profileUrl: 'https://www.linkedin.com/in/rafedev/',
  },
  {
    name: 'Miguel Ruz',
    role: 'Product Designer',
    imageUrl: '/team/miguel.webp',
    profileUrl:
      'https://www.linkedin.com/in/miguel-angel-ruz-torres-1367a1219/',
  },
]

export default function About() {
  return (
    <Wrapper>
      <section className='mx-auto max-w-screen-md space-y-12 pb-16 pt-6'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-4xl font-bold tracking-tight'>Acerca de</h2>
          <p className='text-lg'>
            Buucly te permite crear libros personalizados al instante. Solo
            tienes que indicar el tema que deseas, y nuestra IA genera un libro
            completo, listo para leer. ¡Explora nuevas ideas con Buucly!
          </p>
        </div>

        <div className='flex flex-col gap-1'>
          <h3 className='text-2xl font-bold tracking-tight'>¿Cómo funciona?</h3>
          <p className='text-lg'>
            Utilizando el modelo de inteligencia artificial de{' '}
            <a
              href='https://openai.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-emerald-500 transition-colors hover:text-emerald-600 dark:text-emerald-300 dark:hover:text-emerald-400'
            >
              OpenAI
            </a>
            , GPT-4o, generamos libros a petición, permitiendo a los usuarios
            gestionar una biblioteca virtual completa con todos sus libros
            personalizados.
          </p>
        </div>

        <div className='flex flex-col gap-4'>
          <h3 className='text-2xl font-bold'>El Equipo detrás de Buucly</h3>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4'>
            {teamMembers.map((member, index) => (
              <a
                key={index}
                href={member.profileUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='block rounded-lg p-4 text-center transition-colors hover:bg-gray-100 dark:hover:bg-neutral-900'
              >
                <img
                  className='mx-auto size-20 rounded-full object-cover'
                  src={member.imageUrl}
                  alt={member.name}
                />
                <h4 className='mt-4 text-lg font-medium leading-tight'>
                  {member.name}
                </h4>
                <span className='text-sm text-neutral-600 dark:text-neutral-400'>
                  {member.role}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className='grid grid-flow-row grid-cols-2'>
          <h2 className='row-span-2 text-2xl font-bold tracking-tight'>
            Contacto
          </h2>
          <p className='tracking-tight'>
            ¿Tienes una idea para un libro o quieres saber más sobre nuestra
            tecnología?
          </p>
          <a
            href='mailto:buuclyapp@gmail.com'
            className='font-medium tracking-tight'
          >
            email: buuclyapp@gmail.com
          </a>
        </div>
      </section>
      <div className='inline-flex w-full justify-center pb-6'>
        <BuuclyLogoShortVariant />
      </div>
    </Wrapper>
  )
}
