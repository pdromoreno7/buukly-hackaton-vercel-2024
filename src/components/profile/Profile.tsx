'use client'
import { MENU_ENTRIES } from '@/conts'
import { getUserSSR } from '@/utils/session/getUser'
import signOut from '@/utils/session/signOut'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@components/ui/dropdown-menu'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import { User } from '@supabase/supabase-js'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Button } from '../ui/button'

export default function Profile() {
  const [userData, setUserData] = useState<User>()
  useEffect(() => {
    getUserSSR().then(data => setUserData(data))
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='overflow-hidden rounded-full'
        >
          <Avatar>
            <AvatarImage
              src={userData?.user_metadata?.avatar_url}
              className='size-8 snap-center rounded-full'
            />
            <AvatarFallback>{userData?.email![0].toUpperCase()}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='text-sm'>
        {MENU_ENTRIES.map((entry, index) => (
          <DropdownMenuItem key={index}>
            <Link href={entry.href} className='w-full'>
              {entry.label}
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <button
            className='w-full px-0 text-left text-red-500 hover:text-red-600'
            onClick={signOut}
          >
            Cerrar sesión
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
