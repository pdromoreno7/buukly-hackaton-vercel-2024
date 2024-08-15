'use client'
import { signInAction } from '@/actions/authAction'
import { PATHNAMES } from '@/conts'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { EyeIcon, EyeOffIcon, Loader2 } from 'lucide-react'
// import { revalidatePath } from 'next/cache'
// import { redirect } from 'next/dist/server/api-utils'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import GoogleButton from '@/components/googleButton/GoogleButton'
import Wrapper from '@/components/layouts/Wrapper'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

// TODO: arrglar error de hidratacion en el cliente por lis inputs

// import Loading from '../loading'

// login eschema
const LoginSchema = z.object({
  email: z.string().email({ message: 'Correo electrónico no válido' }),
  password: z
    .string()
    .min(6, { message: 'La contraseña debe tener al menos 8 caracteres' }),
})

export type UserType = z.infer<typeof LoginSchema>

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [errorInput, setErrorInput] = useState(false)

  //change color input error
  const inputClass = clsx(
    'h-fit rounded-full py-2 pr-10', // Clases base
    errorInput && 'border border-red-500', // Clases condicionales
  )

  // form
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, isValid },
  } = useForm<UserType>({
    resolver: zodResolver(LoginSchema),
    mode: 'onChange',
  })

  const onSubmit = async (data: UserType) => {
    const result = await signInAction(data)

    // manejando el error en el cliente
    if (result?.error) {
      setErrorInput(true)
      toast.error(result.error)
    } else {
      setErrorInput(false)
    }
  }

  return (
    <Wrapper>
      <section className='mx-auto flex h-full max-w-sm flex-col py-4 md:pb-4 md:pt-6'>
        <Card className='mx-auto min-w-full max-w-sm border-none shadow-none'>
          <CardHeader className='px-0 pb-3 pt-0 md:text-center'>
            <CardTitle className='text-2xl font-bold tracking-normal text-neutral-800 dark:text-neutral-200'>
              Inicia sesión
            </CardTitle>
          </CardHeader>
          <CardContent className='px-0 pb-2'>
            <GoogleButton />
            <form className='grid gap-4' onSubmit={handleSubmit(onSubmit)}>
              <div className='flex items-center justify-center gap-2'>
                <span className='w-full border-b dark:border-neutral-800' />
                o
                <span className='w-full border-b dark:border-neutral-800' />
              </div>

              <div className='grid gap-2'>
                <Label htmlFor='email' className='ml-2'>
                  Correo electrónico
                </Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='m@example.com'
                  required
                  className={inputClass}
                  {...register('email')}
                />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='password' className='ml-2'>
                  Contraseña
                </Label>
                <div className='relative'>
                  <Input
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    required
                    className={inputClass}
                    {...register('password')}
                  />
                  <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-1/2 -translate-y-1/2 transform'
                  >
                    {showPassword ? (
                      <EyeOffIcon className='h-5 w-5 text-neutral-700 dark:text-neutral-300' />
                    ) : (
                      <EyeIcon className='h-5 w-5 text-neutral-700 dark:text-neutral-300' />
                    )}
                  </button>
                </div>
              </div>
              <Button
                className='w-full rounded-full font-semibold'
                disabled={!isValid}
              >
                {isSubmitting ? (
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                ) : (
                  'Continuar con correo electrónico'
                )}
              </Button>
              <Link
                href={PATHNAMES['forgot-password']}
                className='text-center text-xs font-medium'
              >
                Restablecer contraseña
              </Link>
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
