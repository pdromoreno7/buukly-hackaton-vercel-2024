import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClientSR } from '../supabase/client'

export default async function signOut() {
  const { error } = await createClientSR().auth.signOut()

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/generate')
}
