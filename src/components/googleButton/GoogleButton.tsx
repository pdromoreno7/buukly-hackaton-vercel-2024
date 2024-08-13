'use client'

import { createClientSR } from '@/utils/supabase/client'
import { toast } from 'sonner'

import { GoogleIcon } from '../googleIcon/GoogleIcon'
import { Button } from '../ui/button'

export default function GoogleButton(props: { nextUrl?: string }) {
  const supabase = createClientSR()

  const handleLogin = async () => {
    const result = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${location.origin}/auth/callback?next=${
          props.nextUrl || ''
        }`,
      },
    })
    if (result?.error) {
      toast.error(result.error.message)
    }
  }

  return (
    <Button
      variant='outline'
      className='mb-2 w-full rounded-full'
      onClick={handleLogin}
    >
      Continuar con Google <GoogleIcon />
    </Button>
  )
}
