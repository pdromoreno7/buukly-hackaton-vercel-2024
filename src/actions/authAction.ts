'use server'
// import { UserType as UserLoginType } from '@/app/sign-in/page'
// import { UserType } from '@/app/sign-up/page'
import { PATHNAMES } from '@/conts'
import { createClientSR } from '@/utils/supabase/client'
import { createClientSSR } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

type UserLoginType = {
  email: string
  password: string
}

type UserType = {
  name: string
  email: string
  password: string
}

export async function signInAction(formData: UserLoginType) {
  const supabase = createClientSSR()

  const data = {
    email: formData.email,
    password: formData.password,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    // redirect('/error')
    return { error: error?.message }
  }

  revalidatePath('/', 'layout')
  redirect(PATHNAMES.generate)
}

export async function signUpAction(formData: UserType) {
  const supabase = createClientSSR()

  const data = {
    name: formData.name,
    email: formData.email,
    password: formData.password,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    // redirect('/error')
    return { error: error?.message }
  }

  revalidatePath('/', 'layout')
  redirect(PATHNAMES['success-register'])
}
export async function signInWithGoogle() {
  const supabase = createClientSR()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      queryParams: {
        redirectTo: `http://localhost:3000/auth/callback`,
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  })
  console.log('🚀 ~ signInWithGoogle ~ data:', data)

  if (error) {
    // redirect('/error')
    return { error: error?.message }
  }
  redirect(data?.url)
}
