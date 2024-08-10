'use server'
import { UserType } from '@/app/sign-up/page'
import { UserType as UserLoginType } from '@/app/sign-in/page'
import { PATHNAMES } from '@/conts'
import { createClientSSR } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function signInAction(formData: UserLoginType) {
  const supabase = createClientSSR()

  const data = {
    email: formData.email,
    password: formData.password,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
    return { error: error?.message }
  }

  revalidatePath('/', 'layout')
  redirect('/')
  return { error: null }
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
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect(PATHNAMES['success-register'])
}
