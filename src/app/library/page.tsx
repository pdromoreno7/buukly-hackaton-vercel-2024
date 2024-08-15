'use client'
import { useBookListStore } from '@/store'
import { Download, EllipsisVertical, Trash } from 'lucide-react'
import Link from 'next/link'

import Wrapper from '@/components/layouts/Wrapper'
import { Button } from '@/components/ui/button'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar'

import { cn } from '@/lib/utils'

function LibraryPage() {
  const { booksList } = useBookListStore()

  return (
    <Wrapper>
      <section className='library-wrapper flex flex-col'>
        <h1 className='py-4 text-2xl font-semibold md:text-3xl'>
          Tu biblioteca
        </h1>
        <span
          className={cn(
            'max-w-screen-sm leading-tight',
            booksList.length > 0 ? 'hidden' : 'block',
          )}
        >
          Aquí encontrarás todos los libros que has creado con Buucly, parece
          que aún no has creado ninguno, ¿Por qué no creas uno ahora?
        </span>

        <div className='grid h-full grid-flow-row grid-cols-1 gap-4 overflow-y-auto rounded-lg sm:grid-cols-2'>
          {booksList.map((book, index) => (
            <div
              key={index}
              className='relative inline-flex min-h-60 w-full justify-center rounded-lg bg-slate-50 pt-6 dark:bg-neutral-900'
            >
              <Link href={`/library/${encodeURIComponent(book.bookTitle)}`}>
                <div
                  className={cn(
                    'flex h-full max-w-44 flex-col justify-between rounded-tl-sm rounded-tr-lg border-l-4 border-emerald-600 pt-3',
                    book.colorCoverBook,
                  )}
                >
                  <h4 className='truncate text-pretty px-3 pb-4 font-semibold leading-snug dark:text-neutral-900'>
                    {book.bookTitle}
                  </h4>
                  <span className='bg-white pb-3 pt-8 text-center text-sm dark:bg-neutral-800/80'>
                    Generado por <strong>Buucly</strong>
                  </span>
                </div>
              </Link>
              <Options />
            </div>
          ))}
        </div>

        <div className='mx-auto flex flex-col gap-2 py-4'>
          <Button className='w-full bg-kiwi-600 px-0 font-semibold text-black transition-colors hover:bg-kiwi-700 md:min-w-96'>
            <Link href='/generate' className='w-full'>
              Crea un libro nuevo
            </Link>
          </Button>
          <span className='text-center text-sm text-neutral-600 dark:text-neutral-300'>
            Al hacer uso de esta app acepta nuestros Términos de servicio y
            Política de privacidad.
          </span>
        </div>
      </section>
    </Wrapper>
  )
}

export default LibraryPage

function Options() {
  return (
    <Menubar className='absolute right-2 top-2 w-fit border-none bg-transparent dark:bg-transparent'>
      <MenubarMenu>
        <MenubarTrigger>
          <EllipsisVertical />
        </MenubarTrigger>
        <MenubarContent
          side='bottom'
          align='end'
          className='dark:bg-neutral-900'
        >
          <MenubarItem className='font-medium'>
            Descargar{' '}
            <MenubarShortcut>
              <Download className='size-4' strokeWidth={2} />
            </MenubarShortcut>
          </MenubarItem>
          <MenubarItem className='font-medium text-red-600 transition-colors focus:bg-red-100 focus:text-red-600 dark:focus:text-red-600'>
            Eliminar{' '}
            <MenubarShortcut>
              <Trash className='size-4 text-red-600' strokeWidth={2} />
            </MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
