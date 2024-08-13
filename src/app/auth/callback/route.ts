import { createClientSSR } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)

  const code = searchParams.get('code')

  // if "next" is in param, use it in the redirect URL
  const next = searchParams.get('next') ?? '/generate'
  if (code) {
    const supabase = createClientSSR()

    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  // TODO: Create this page
  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/auth/auth-error`)
}
