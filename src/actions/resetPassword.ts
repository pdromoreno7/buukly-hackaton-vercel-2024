'use server'
import { PATHNAMES } from '@/conts'
import { createClientSSR } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function resetPassword(
  authCode: string,
  password: string,
) {
  const supabase = createClientSSR()

  if (authCode) {
    const { error } = await supabase.auth.exchangeCodeForSession(authCode)
    console.log('redirige el primer bloque')
    error && redirect(`${PATHNAMES['reset-password']}?message=${error.message}`)
  }

  const { error } = await supabase.auth.updateUser({ password })

  if (error) {
    console.log('redirige el segundo bloque')
    redirect(`${PATHNAMES['reset-password']}?message=${error.message}`)
  }

  redirect('/sign-in?message=your password has been reset')
}
