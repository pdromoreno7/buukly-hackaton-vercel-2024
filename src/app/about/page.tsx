import { BuuclyLogoShortVariant } from '@/components/buuclyLogo/BuuclyLogo'
import Wrapper from '@/components/layouts/Wrapper'

// import { HOW_IT_WORK } from '../../conts'

const teamMembers = [
  {
    name: 'Pedro Moreno',
    role: 'Full stack developer',
    imageUrl:
      'https://media.licdn.com/dms/image/v2/D5603AQE0FE47ThagFQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699906184123?e=1729123200&v=beta&t=i3cpwHCKU-_s18Fu0aCMdnWs5Enoy0D1RdstOtbrIj8', // Reemplaza con la URL de la imagen
    profileUrl: 'https://www.linkedin.com/in/pedromorenodev/', // URL del perfil o página personal
  },
  {
    name: 'Abel Guardo',
    role: 'Full stack developer',
    imageUrl:
      'https://media.licdn.com/dms/image/D5635AQHmNZPxxHTa4w/profile-framedphoto-shrink_400_400/0/1714661829812?e=1724162400&v=beta&t=LDNDX_7c_dhrmRm8K8_FrJWxO8inJm6URk8UjHPWhlE',
    profileUrl: 'https://www.linkedin.com/in/abelguardop/',
  },
  {
    name: 'Rafael Álvarez Cardona',
    role: 'Full stack developer',
    imageUrl:
      'https://media.licdn.com/dms/image/v2/D4E03AQF4jvzrX7zxsA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1672154461733?e=1729123200&v=beta&t=5cPKbnH-6cqN1qMkWWoi5U80wOPqxlukYaOWeY5rUBY',
    profileUrl: 'https://www.linkedin.com/in/rafedev/',
  },
  {
    name: 'Miguel Ángel Ruz Torres',
    role: 'Product Designer',
    imageUrl:
      'https://media.licdn.com/dms/image/v2/C5603AQFxOiGuB1B3Rg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1635872147937?e=1729123200&v=beta&t=mUYL168XDY3VVIsqTcaquLHEqu5nubjFUDwDYZl4iE8',
    profileUrl:
      'https://www.linkedin.com/in/miguel-angel-ruz-torres-1367a1219/',
  },
]

export default function About() {
  return (
    <Wrapper>
      <section className='mx-auto max-w-screen-md space-y-9 pb-16 pt-6'>
        <h2 className='mb-4 text-4xl font-bold'>Acerca de</h2>
        <p className='mb-8 text-lg'>
          Buucly te permite crear libros personalizados al instante. Solo tienes
          que indicar el tema que deseas, y nuestra IA genera un libro completo,
          listo para leer. ¡Explora nuevas ideas con Buucly!
        </p>

        <h3 className='mb-4 text-2xl font-semibold'>¿Cómo funciona?</h3>
        <p className='mb-8 text-lg'>
          Utilizando los modelos de inteligencia artificial de OpenAI GPT-4o,
          generamos libros a petición, permitiendo a los usuarios gestionar una
          biblioteca virtual completa con todos sus libros personalizados.
        </p>

        <h3 className='mb-4 text-2xl font-semibold'>
          El Equipo detrás de Buucly
        </h3>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4'>
          {teamMembers.map((member, index) => (
            <a
              key={index}
              href={member.profileUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='block rounded-lg p-4 text-center hover:bg-gray-100'
            >
              <img
                className='mx-auto h-24 w-24 rounded-full'
                src={member.imageUrl}
                alt={member.name}
              />
              <h4 className='mt-4 text-lg font-medium dark:text-black'>
                {member.name}
              </h4>
              <p className='text-sm text-gray-500'>{member.role}</p>
            </a>
          ))}
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
