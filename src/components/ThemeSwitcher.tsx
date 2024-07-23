'use client'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      aria-label='Theme Switcher'
      className='w-full mt-auto mb-6'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {
        theme === 'light'
          ? <span className='flex justify-between gap-2'>
            Cambiar a modo oscuro
            <MoonIcon className='size-6' />
          </span>
          : <span className='flex justify-between gap-2'>
            Cambiar a modo claro
            <SunIcon className='size-6' />
          </span>
      }
    </button>
  )
}
