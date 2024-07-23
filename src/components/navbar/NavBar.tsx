'use client'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { Avatar, Navbar, NavbarContent, NavbarMenuToggle } from '@nextui-org/react'
import { useState } from 'react'

import { Menu } from './Menu'



export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          icon={<Bars3Icon />}
        />
        {/* <NavbarBrand>
          <span className="font-bold tracking-wide text-lime-300">🥝Kiwibook</span>
        </NavbarBrand> */}
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        {/* <Dropdown placement="bottom-end"> */}
        {/* <DropdownTrigger> */}
        <Avatar
          name="Jason Hughes"
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
        {/* </DropdownTrigger> */}
        {/* <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu> */}
        {/* </Dropdown> */}
      </NavbarContent>
      <Menu />
    </Navbar>

  )
};
