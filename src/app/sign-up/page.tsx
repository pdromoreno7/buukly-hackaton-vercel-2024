'use client'
import { signUpAction } from '@/actions/authAction'
import { PATHNAMES } from '@/conts'
import { zodResolver } from '@hookform/resolvers/zod'
import { Check, X } from 'lucide-react'
// import { Metadata } from 'next'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Wrapper from '@/components/layouts/Wrapper'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Loading from '../loading'

// const metadata: Metadata = {
//   title: 'Regístrarse | Buukly',
//   description: 'A description...',
// }

const RegisterSchema = z.object({
  name: z.string().min(1, { message: 'El nombre es requerido' }),
  email: z.string().email({ message: 'Correo electrónico no válido' }),
  password: z
    .string()
    .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
    .regex(/[A-Z]/, {
      message: 'La contraseña debe contener al menos una letra mayúscula',
    })
    .regex(/[a-z]/, {
      message: 'La contraseña debe contener al menos una letra minúscula',
    })
    .regex(/[0-9]/, {
      message: 'La contraseña debe contener al menos un número',
    })
    .regex(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/, {
      message:
        'La contraseña debe contener al menos un carácter especial (!@#$%^&*.)',
    }),
})

export type UserType = z.infer<typeof RegisterSchema>

export default function SignUp() {
  const [isPopoverOpen, setPopoverOpen] = useState(false)
  const TIPS = [
    { text: 'Al menos 8 caracteres', regex: /.{8,}/ },
    { text: 'Una letra mayúscula', regex: /[A-Z]/ },
    { text: 'Una letra minúscula', regex: /[a-z]/ },
    { text: 'Un número', regex: /[0-9]/ },
    {
      text: 'Un carácter especial (!@#$%^&*.)',
      regex: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/,
    },
  ]

  // form
  const {
    handleSubmit,
    register,
    watch,
    formState: { isSubmitting, isValid },
  } = useForm<UserType>({
    resolver: zodResolver(RegisterSchema),
    mode: 'onChange',
  })

  const onSubmit = (data: UserType) => {
    signUpAction(data)
  }

  const passwordValue = watch('password', '')

  return (
    <Wrapper>
      <section className='mx-auto flex h-full max-w-sm flex-col pb-2 pt-0 md:pb-4 md:pt-0'>
        <Card className='mx-auto max-w-sm border-none shadow-none'>
          <CardHeader className='px-0 pb-3 pt-0 md:text-center'>
            <CardTitle className='text-2xl font-bold tracking-normal text-neutral-800 dark:text-neutral-200'>
              Regístrate
            </CardTitle>
            <CardDescription>
              Solicita libros sobre cualquier tema y se generarán al instante en
              formato EPUB, listo para descargar.
            </CardDescription>
          </CardHeader>
          <CardContent className='px-0 pb-2'>
            <Button variant='outline' className='mb-2 w-full rounded-full'>
              Regístrate con Google <GoogleIcon />
            </Button>
            <form className='grid gap-3' onSubmit={handleSubmit(onSubmit)}>
              <div className='flex items-center justify-center gap-2'>
                <span className='w-full border-b dark:border-neutral-800' />
                o
                <span className='w-full border-b dark:border-neutral-800' />
              </div>

              <div className='grid gap-2'>
                <Label htmlFor='name' className='ml-2'>
                  Nombre o apodo
                </Label>
                <Input
                  id='name'
                  type='text'
                  placeholder='John Doe'
                  required
                  className='h-fit rounded-full py-2'
                  {...register('name')}
                />
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
                  className='h-fit rounded-full py-2'
                  {...register('email')}
                />
                {/* {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )} */}
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='password' className='ml-2'>
                  Contraseña
                </Label>
                <Input
                  id='password'
                  type='password'
                  required
                  className='h-fit rounded-full py-2'
                  {...register('password')}
                  onFocus={() => setPopoverOpen(true)}
                  onBlur={() => setPopoverOpen(false)}
                  autoComplete='new-password'
                />
              </div>
              {isPopoverOpen && (
                <div className='space-y-2 rounded-lg border border-neutral-200 p-3 dark:border-neutral-800'>
                  <span className='text-sm font-medium'>
                    La contraseña debe contener
                  </span>
                  <ul>
                    {TIPS.map((tip, index) => (
                      <div key={index} className='flex items-center text-xs'>
                        {/* <Check className='h-4 w-3 text-kiwi-700' /> */}
                        {tip.regex.test(passwordValue) ? (
                          <Check className='mr-2 h-4 w-4 text-green-600' />
                        ) : (
                          <X className='mr-2 h-4 w-4 text-red-600' />
                        )}
                        <span>{tip.text}</span>
                      </div>
                    ))}
                  </ul>
                </div>
              )}
              <Button
                className='w-full rounded-full font-semibold'
                disabled={!isValid}
                // formAction={signUpAction}
              >
                {isSubmitting ? (
                  <Loading />
                ) : (
                  'Continuar con correo electrónico'
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <p className='text-center text-xs text-neutral-700 dark:text-neutral-400'>
              Al registrarte aceptas nuestros Términos de servicio y Política de
              privacidad.
            </p>
          </CardFooter>
        </Card>
        <div className='mt-auto inline-flex justify-between text-sm'>
          ¿Ya tienes una cuenta?{' '}
          <Link href={PATHNAMES['sign-in']} className='underline'>
            Inicia sesión
          </Link>
        </div>
      </section>
    </Wrapper>
  )
}

function GoogleIcon() {
  return (
    <svg
      className='ml-2 size-4'
      viewBox='0 0 256 262'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMidYMid'
    >
      <path
        d='M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027'
        fill='#4285F4'
      />
      <path
        d='M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1'
        fill='#34A853'
      />
      <path
        d='M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782'
        fill='#FBBC05'
      />
      <path
        d='M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251'
        fill='#EB4335'
      />
    </svg>
  )
}
