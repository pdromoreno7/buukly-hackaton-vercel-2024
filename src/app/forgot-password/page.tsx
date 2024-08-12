import forgotPassword from '@/actions/forgotPassword'
import { PATHNAMES } from '@/conts'
import { Metadata } from 'next'
import Link from 'next/link'

import Wrapper from '@/components/layouts/Wrapper'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Recuperar contraseña | Buucly',
  description:
    '¿Olvidaste tu contraseña? No te preocupes, te enviaremos un correo para que puedas restablecerla.',
}

type SearchParams = { [key: string]: string | string[] | undefined }

export default function ForgotPassword({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const showNotification = searchParams['success'] as string
  const notificationMessage = {
    succcess: 'Correo enviado con éxito, revisa tu bandeja de entrada.',
    error: 'Ha ocurrido un error, por favor intentalo nuevamente.',
  }
  const dinamicNotificationBG =
    showNotification === 'true'
      ? 'bg-kiwi-100 text-kiwi-800'
      : 'bg-red-100 text-red-800'

  return (
    <Wrapper>
      <section className='mx-auto flex h-full max-w-sm flex-col py-4 md:pb-4 md:pt-6'>
        <Card className='mx-auto min-w-full max-w-sm border-none shadow-none'>
          <CardHeader className='px-0 pb-8 pt-0 md:text-center'>
            <CardTitle className='text-2xl font-bold tracking-normal text-neutral-800 dark:text-neutral-200'>
              Recuperar contraseña
            </CardTitle>
            <CardDescription>
              Escribe tu correo electrónico y te enviaremos un enlace para
              restablecer tu contraseña
            </CardDescription>
          </CardHeader>
          <CardContent className='px-0 pb-2'>
            <form className='grid gap-4' action={forgotPassword}>
              <div className='flex flex-col gap-2'>
                <Label htmlFor='email' className='ml-2'>
                  Correo electrónico
                </Label>
                <Input
                  id='email'
                  type='email'
                  name='email'
                  placeholder='m@example.com'
                  required
                  className='h-fit rounded-full py-2'
                />
              </div>
              <Button
                type='submit'
                className='w-full rounded-full font-semibold'
              >
                Envíar correo de reestablecimiento
              </Button>
              <Button
                asChild
                variant='outline'
                className='w-full rounded-full font-semibold'
              >
                <Link href={PATHNAMES['sign-in']}>Iniciar sesión</Link>
              </Button>
            </form>
          </CardContent>
        </Card>
        {showNotification && (
          <div
            className={cn(
              'mt-3 rounded-lg p-3 text-center text-sm font-medium',
              dinamicNotificationBG,
            )}
          >
            <span>
              {showNotification === 'true'
                ? notificationMessage.succcess
                : notificationMessage.error}
            </span>
          </div>
        )}
        <div className='mt-auto inline-flex justify-between text-sm text-neutral-700 dark:text-neutral-400'>
          ¿Aún no tienes cuenta?{' '}
          <Link href={PATHNAMES['sign-up']} className='underline'>
            Regístrate
          </Link>
        </div>
      </section>
    </Wrapper>
  )
}
