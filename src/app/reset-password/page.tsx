import resetPassword from '@/actions/resetPassword'
import { PATHNAMES } from '@/conts'
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

export default function ResetPassword() {
  return (
    <Wrapper>
      <section className='mx-auto flex h-full max-w-sm flex-col py-4 md:pb-4 md:pt-6'>
        <Card className='mx-auto min-w-full max-w-sm border-none shadow-none'>
          <CardHeader className='px-0 pb-8 pt-0 md:text-center'>
            <CardTitle className='text-2xl font-bold tracking-normal text-neutral-800 dark:text-neutral-200'>
              Reestablecer contraseña
            </CardTitle>
            <CardDescription>
              Escriba una nueva contraseña segura y presione guardar para
              actualizar su contraseña
            </CardDescription>
          </CardHeader>
          <CardContent className='px-0 pb-2'>
            <form className='grid gap-4' action={resetPassword}>
              <div className='flex flex-col gap-2'>
                <Label htmlFor='password' className='ml-2'>
                  Contraseña
                </Label>
                <Input
                  id='password'
                  type='password'
                  name='password'
                  placeholder='m@example.com'
                  required
                  className='h-fit rounded-full py-2'
                />
              </div>
              <Button
                type='submit'
                className='w-full rounded-full font-semibold'
              >
                Guardar nueva contraseña
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
