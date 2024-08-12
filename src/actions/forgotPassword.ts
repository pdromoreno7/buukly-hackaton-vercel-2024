'use server'
import { PATHNAMES } from '@/conts'
import { createClientSSR } from '@/utils/supabase/server'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function forgotPassword(formData: FormData) {
  const supabase = createClientSSR()
  const origin = headers().get('origin')
  const data = { email: formData.get('email') as string }

  const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
    redirectTo: `${origin}${PATHNAMES['reset-password']}`,
  })

  if (error) {
    redirect(`${PATHNAMES['forgot-password']}?success=false`)
  }

  redirect(`${PATHNAMES['forgot-password']}?success=true`)
}
