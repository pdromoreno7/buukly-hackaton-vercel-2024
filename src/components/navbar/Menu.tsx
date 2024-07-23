import { MENU_ENTRIES } from '@/conts'
import { Link, NavbarMenu, NavbarMenuItem } from '@nextui-org/react'

import ThemeSwitcher from '../ThemeSwitcher'



export function Menu() {
  return (
    <NavbarMenu className='overflow-hidden'>
      {MENU_ENTRIES.map((entry, index) => (
        <NavbarMenuItem key={`${entry}-${index}`}>
          <Link
            color={
              index === MENU_ENTRIES.length - 1 ? "danger" : "foreground"
            }
            className="w-full"
            href={entry.href}
            size="md"
          >
            {entry.label}
          </Link>
        </NavbarMenuItem>
      ))}
      <ThemeSwitcher />
    </NavbarMenu>
  )
};
