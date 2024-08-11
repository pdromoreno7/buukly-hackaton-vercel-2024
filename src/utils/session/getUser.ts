import { createClientSR } from '../supabase/client'

export async function getUserSSR() {
  const supabase = createClientSR()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    console.log('No user found')
  }

  if (user) return user
}
