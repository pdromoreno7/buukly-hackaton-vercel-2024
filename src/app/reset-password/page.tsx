import { PATHNAMES } from '@/conts'
import { Metadata } from 'next'
import Link from 'next/link'

import Wrapper from '@/components/layouts/Wrapper'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const metadata: Metadata = {
  title: 'Reestablecer contraseña | Buukly',
  description: 'A description...',
}

export default function ResetPassword() {
  return (
    <Wrapper>
      <section className='mx-auto flex h-full max-w-sm flex-col py-4 md:pb-4 md:pt-6'>
        <Card className='mx-auto min-w-full max-w-sm border-none shadow-none'>
          <CardHeader className='px-0 pb-6 pt-0 md:text-center'>
            <CardTitle className='text-2xl font-bold tracking-normal text-neutral-800 dark:text-neutral-200'>
              Reestablecer contraseña
            </CardTitle>
          </CardHeader>
          <CardContent className='px-0 pb-2'>
            <form className='grid gap-4'>
              <div className='flex flex-col gap-2'>
                <Label htmlFor='email' className='ml-2'>
                  Correo electrónico
                </Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='m@example.com'
                  required
                  className='h-fit rounded-full py-2'
                />
              </div>
              <Button
                type='submit'
                className='w-full rounded-full font-semibold'
              >
                Envíar código
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
