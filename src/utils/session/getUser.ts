import { createClientSSR } from '../supabase/server'

export async function getUserSSR() {
  const supabase = createClientSSR()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    console.log('No user found')
  }

  if (user) return user
}
