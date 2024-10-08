import signOut from '@/actions/signOut'
import { MENU_ENTRIES } from '@/conts'
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

import { Button } from '../ui/button'

export default function Profile({ userData }: { userData: User }) {
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
          <form className='w-full'>
            <button
              className='w-full px-0 text-left text-red-500 hover:text-red-600'
              formAction={signOut}
            >
              Cerrar sesión
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
