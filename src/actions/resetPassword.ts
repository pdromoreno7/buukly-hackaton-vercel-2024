'use server'
import { PATHNAMES } from '@/conts'
import { createClientSSR } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function resetPassword(formData: FormData) {
  const supabase = createClientSSR()

  const password = formData.get('password') as string

  const { error } = await supabase.auth.updateUser({ password })
  if (error) {
    redirect(
      `${PATHNAMES['forgot-password']}?message=${error.message.toLowerCase()}&success=false`,
    )
  }

  redirect(
    `${PATHNAMES['reset-password']}?message=${encodeURIComponent('your password has been reset')}&status=success`,
  )
}
