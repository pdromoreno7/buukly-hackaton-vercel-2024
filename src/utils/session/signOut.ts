import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClientSR } from '../supabase/client'

export default async function signOut() {
  await createClientSR().auth.signOut()

  revalidatePath('/', 'layout')
  redirect('/')
}
