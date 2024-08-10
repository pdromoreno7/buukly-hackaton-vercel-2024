import { cn } from '@/lib/utils'

export default function Showcase() {
  const BOOKS = [
    {
      title: 'Javascript Desde Cero',
      label: 'Conocimiento tecnológico al instante',
      description:
        'Accede a guías técnicas generadas por IA para mantenerte a la vanguardia del desarrollo.',
      image: '/resources/js-book.svg',
      gradient: 'from-[#DBEAFE] to-[#A2C2FF]',
    },
    {
      title: 'Fundamentos del Marketing Digital',
      label: 'Inspírate y crea sin límites',
      description:
        'Genera libros de tendencias de diseño hasta estrategias de marketing para tu aprendizaje.',
      image: '/resources/marketing-book.svg',
      gradient: 'from-[#B6F1EA] to-[#7ADAA9]',
    },
    {
      title: 'El Niño Bajo la Lluvia',
      label: 'Sumérgete en historias',
      description:
        'Disfruta de libros de entretenimiento, novelas hasta cuentos originales generados al instante.',
      image: '/resources/other-book.svg',
      gradient: 'from-[#EDE9FE] to-[#B5A3FF]',
    },
  ]

  return (
    <section className='space-y-12'>
      <h2 className='text-left text-3xl font-semibold md:text-4xl lg:text-center lg:text-5xl'>
        El poder de crear historias y conocimientos a tu medida
      </h2>

      <div className='flex flex-col justify-between gap-6 md:flex-row md:gap-4'>
        {BOOKS.map((book, index) => (
          <div key={index} className='w-full'>
            <div
              className={cn(
                'flex h-fit w-full justify-center rounded-lg bg-gradient-to-b',
                book.gradient,
              )}
            >
              <img
                src={book.image}
                alt={`Portada de Libro sobre ${book.title}`}
                className='h-56 w-44 pt-6'
              />
            </div>
            <h4 className='pt-4 text-xl font-semibold'>{book.label}</h4>
            <p className='text-gray-600'>{book.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
