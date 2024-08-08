import { MENU_ENTRIES } from '@/conts'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../ui/dropdown-menu'

export default function Menu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='hidden cursor-pointer'>
        <MenuIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start' className='bg-slate-50'>
        {MENU_ENTRIES.map(entry => (
          <DropdownMenuItem
            asChild
            key={entry.label}
            className='cursor-pointer'
          >
            <Link href={entry.href}>{entry.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
