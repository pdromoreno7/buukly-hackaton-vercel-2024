import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          )
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          )
        },
      },
    },
  )

  // IMPORTANTE: No escribir código entre createServerClient y supabase.auth.getUser(), un simple
  // error podría causar que la sesión del usuario se cierre inesperadamente.

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Redireccion basada en la sesion del usuario.
  // Esto se evalua obteniendo, como recomienda Supabase, la sesion del usuario
  // por medio de supabase.auth.getUser()
  const publicRoutes = ['/', '/sign-in', '/sign-up']
  const restrictedRoutes = ['/generate', 'library', 'read-book']

  if (!user && restrictedRoutes.includes(request.nextUrl.pathname)) {
    const absoluteUrl = new URL(new URL('/sign-in', request.nextUrl.origin))
    return NextResponse.redirect(absoluteUrl.toString())
  }
  if (user && publicRoutes.includes(request.nextUrl.pathname)) {
    const absoluteUrl = new URL(new URL('/generate', request.nextUrl.origin))
    return NextResponse.redirect(absoluteUrl.toString())
  }
  // if (!user) {
  //   // Si no hay usuario, permite el acceso solo a las rutas que
  //   // comiencen con /sign, /reset, /success, o que sean exactamente '/'
  //   if (
  //     !request.nextUrl.pathname.startsWith('/sign') &&
  //     !request.nextUrl.pathname.startsWith('/reset') &&
  //     !request.nextUrl.pathname.startsWith('/about') &&
  //     !request.nextUrl.pathname.startsWith('/faq') &&
  //     !request.nextUrl.pathname.startsWith('/legal') &&
  //     !request.nextUrl.pathname.startsWith('/')
  //   ) {
  //     const absoluteUrl = new URL(new URL('/', request.nextUrl.origin))
  //     return NextResponse.redirect(absoluteUrl.toString())
  //   }
  // } else {
  //   // Si hay usuario, bloquea acceso a las rutas que
  //   // comiencen con /sign, /reset, /success, o que sean exactamente '/'
  //   if (
  //     request.nextUrl.pathname.startsWith('/sign') ||
  //     request.nextUrl.pathname.startsWith('/reset') ||
  //     request.nextUrl.pathname.startsWith('/success') ||
  //     request.nextUrl.pathname !== '/'
  //   ) {
  //     return NextResponse.redirect(new URL('/generate', request.url))
  //   }
  // }

  /* IMPORTANT: You *must* return the supabaseResponse object as it is. If you're
  creating a new response object with NextResponse.next() make sure to:
  1. Pass the request in it, like so:
     const myNewResponse = NextResponse.next({ request })
  2. Copy over the cookies, like so:
     myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
  3. Change the myNewResponse object to fit your needs, but avoid changing
     the cookies!
  4. Finally:
     return myNewResponse
  If this is not done, you may be causing the browser and server to go out
  of sync and terminate the user's session prematurely! */

  return supabaseResponse
}
