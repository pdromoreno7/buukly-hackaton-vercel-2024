import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#18181b',
        kiwi: {
          '50': '#f5fee7',
          '100': '#e7fdca',
          '200': '#d1fa9c',
          '300': '#b1f462',
          '400': '#92e830',
          '500': '#73ce14',
          '600': '#57a50b',
          '700': '#437d0e',
          '800': '#386311',
          '900': '#305413',
          '950': '#162f04',
        },
        'kiwi-dark': {
          '50': '#f8f8f5',
          '100': '#e7e8df',
          '200': '#cfd1be',
          '300': '#adb296',
          '400': '#8b9170',
          '500': '#707755',
          '600': '#585e43',
          '700': '#494d38',
          '800': '#3b3f30',
          '900': '#33362b',
          '950': '#161811',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
