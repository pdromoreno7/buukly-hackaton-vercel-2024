'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClientSSR } from '../utils/supabase/server'

export default async function signOut() {
  const { error } = await createClientSSR().auth.signOut()

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
