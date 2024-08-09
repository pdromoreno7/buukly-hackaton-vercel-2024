import { PATHNAMES } from '@/conts'
import { redirect } from 'next/navigation'

import { createClientSSR } from '../supabase/server'

export async function getUserSSR() {
  const supabase = createClientSSR()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()
  if (error || !user) {
    redirect(PATHNAMES['sign-in'])
  }

  return user
}
