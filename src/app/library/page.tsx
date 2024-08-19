'use client'

import { deleteBook } from '@/actions/services/bookServices/deleteBook'
import { getBookList } from '@/actions/services/bookServices/getBookList'
import { BookType } from '@/interfaces/bookInterfaces'
import { EllipsisVertical, Trash } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

import Wrapper from '@/components/layouts/Wrapper'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar'

import { cn } from '@/lib/utils'

interface DeleteBookDialogProps {
  title: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  onDelete: () => void
}

interface OptionsProps {
  book: BookType
  onBookDeletedRefresh: () => Promise<void>
}

function LibraryPage() {
  const [booksList, setBooksList] = useState<BookType[]>([])

  const fetchDataBookList = async () => {
    const { data, error } = await getBookList()
    if (error) {
      toast.error('Error al cargar la biblioteca')
    }
    setBooksList(data ?? [])
  }

  useEffect(() => {
    fetchDataBookList()
  }, [])

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
              className='relative inline-flex w-full justify-center rounded-lg bg-slate-50 pt-6 dark:bg-neutral-900'
            >
              <Link href={`/read-ebook/${encodeURIComponent(book.id)}`}>
                <div
                  className={`flex h-72 w-56 flex-col justify-between rounded-tl-sm rounded-tr-lg border-l-4 border-emerald-600 pt-3 shadow md:h-56 md:max-w-44`}
                  style={{
                    background: `linear-gradient(145deg, #f6fbfc, ${book.color_cover})`,
                    borderLeft: `8px solid ${book.color_cover}`,
                  }}
                >
                  <h4 className='text-pretty px-3 pb-4 font-semibold leading-snug dark:text-neutral-900'>
                    {book.book_title}
                  </h4>
                  <span className='bg-white pb-3 pt-8 text-center text-sm dark:bg-neutral-800/80'>
                    Generado por <strong>Buucly</strong>
                  </span>
                </div>
              </Link>
              <Options book={book} onBookDeletedRefresh={fetchDataBookList} />
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

function Options({ book, onBookDeletedRefresh }: OptionsProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleDeleteBook = async () => {
    const resultError = await deleteBook(book.id)
    if (resultError) {
      toast.error('Error al eliminar el libro')
    } else {
      toast.success('Libro eliminado exitosamente')
      onBookDeletedRefresh()
    }
    setIsOpen(false)
  }
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
          {/* <MenubarItem className='font-medium'>
            Descargar{' '}
            <MenubarShortcut>
              <Download className='size-4' strokeWidth={2} />
            </MenubarShortcut>
          </MenubarItem> */}
          <MenubarItem
            onClick={() => setIsOpen(true)}
            className='cursor-pointer font-medium text-red-600 transition-colors focus:bg-red-100 focus:text-red-600 dark:focus:text-red-600'
          >
            Eliminar{' '}
            <MenubarShortcut>
              <Trash className='size-4 text-red-600' strokeWidth={2} />
            </MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <DeleteBookDialog
        title={book?.book_title}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onDelete={handleDeleteBook}
      />
    </Menubar>
  )
}
function DeleteBookDialog({
  title,
  isOpen,
  setIsOpen,
  onDelete,
}: DeleteBookDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            ¿Estás seguro de que quieres eliminar este libro?
          </DialogTitle>
          <DialogDescription>
            {` Estás a punto de eliminar ${title}. Esta acción no se puede deshacer. Si continúas, el libro se
            eliminará de forma permanente.`}
          </DialogDescription>
        </DialogHeader>
        <div className='mt-4 flex justify-end space-x-2'>
          <Button variant='outline' onClick={() => setIsOpen(false)}>
            No, cerrar
          </Button>
          <Button variant='destructive' onClick={onDelete}>
            Si, eliminar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
