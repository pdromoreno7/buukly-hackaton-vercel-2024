'use client'
import { signUpAction } from '@/actions/authAction'
import { PATHNAMES } from '@/conts'
import { zodResolver } from '@hookform/resolvers/zod'
import { Check, EyeIcon, EyeOffIcon, Loader2, X } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import GoogleButton from '@/components/googleButton/GoogleButton'
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

const RegisterSchema = z.object({
  full_name: z.string().min(1, { message: 'El nombre es requerido' }),
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
  const [isLinkedIn, setIsLinkedIn] = useState(false)
  const [isPopoverOpen, setPopoverOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

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

  const onSubmit = async (data: UserType) => {
    const result = await signUpAction(data)

    if (result?.error) {
      toast.error(result.error)
    }
  }

  const passwordValue = watch('password', '')
  useEffect(() => {
    const userAgent = navigator.userAgent
    setIsLinkedIn(/LinkedIn/i.test(userAgent))
  }, [])

  return (
    <Wrapper>
      <section className='mx-auto flex h-full max-w-sm flex-col pb-2 pt-0 md:pb-4 md:pt-0'>
        <Card className='mx-auto max-w-sm border-none shadow-none'>
          <CardHeader className='px-0 pb-3 pt-0 md:text-center'>
            <CardTitle className='text-2xl font-bold tracking-normal text-neutral-800 dark:text-neutral-200'>
              Regístrate
            </CardTitle>
            <CardDescription>
              Solicita libros sobre cualquier tema y se generarán al instante
              con IA.
            </CardDescription>
          </CardHeader>
          <CardContent className='px-0 pb-2'>
            {!isLinkedIn && <GoogleButton />}
            <form className='grid gap-3' onSubmit={handleSubmit(onSubmit)}>
              {!isLinkedIn && (
                <div className='flex items-center justify-center gap-2'>
                  <span className='w-full border-b dark:border-neutral-800' />
                  o
                  <span className='w-full border-b dark:border-neutral-800' />
                </div>
              )}

              <div className='grid gap-2'>
                <Label htmlFor='full_name' className='ml-2'>
                  Nombre o apodo
                </Label>
                <Input
                  id='full_name'
                  type='text'
                  placeholder='John Doe'
                  required
                  className='h-fit rounded-full py-2'
                  {...register('full_name')}
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
              {/* <div className='grid gap-2'>
                <Label htmlFor='confirmEmail' className='ml-2'>
                  Repite tu correo electrónico
                </Label>
                <Input
                  id='confirmEmail'
                  type='email'
                  placeholder='m@example.com'
                  required
                  className='h-fit rounded-full py-2'
                  onPaste={(e) => e.preventDefault()}
                  autoComplete='off'
                  {...register('confirmEmail')}
                />
              </div> */}
              <div className='grid gap-2'>
                <Label htmlFor='password' className='ml-2'>
                  Contraseña
                </Label>
                <div className='relative'>
                  <Input
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    required
                    className='h-fit rounded-full py-2 pr-10'
                    {...register('password')}
                    onFocus={() => setPopoverOpen(true)}
                    onBlur={() => setPopoverOpen(false)}
                    autoComplete='new-password'
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
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
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
