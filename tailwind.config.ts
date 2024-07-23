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
        honey: {
          '50': '#fefce8',
          '100': '#fdf7c4',
          '200': '#fcec8c',
          '300': '#f9da4b',
          '400': '#f6c826',
          '500': '#e6ad0c',
          '600': '#c68508',
          '700': '#9e5e0a',
          '800': '#834b10',
          '900': '#6f3d14',
          '950': '#411f07',
        },
        tomato: {
          '50': '#fef2f3',
          '100': '#fde6e6',
          '200': '#fbd0d4',
          '300': '#f7aab0',
          '400': '#f27a87',
          '500': '#e95065',
          '600': '#d42a49',
          '700': '#b31d3d',
          '800': '#961b39',
          '900': '#801b37',
          '950': '#470a19',
        },
        celeste: {
          '50': '#eefcfd',
          '100': '#d4f5f9',
          '200': '#afebf2',
          '300': '#78dce8',
          '400': '#3ac2d6',
          '500': '#21b6ce',
          '600': '#1c869e',
          '700': '#1d6c81',
          '800': '#20596a',
          '900': '#1f4a5a',
          '950': '#0f303d',
        },
      },
      animation: {
        'slide-to-left': 'slide-to-left 8s linear 0s infinite',
        'slide-to-right': 'slide-to-right 8s linear 0s infinite'
      },
      keyframes: {
        'slide-to-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px*4))' },
        },
        'slide-to-right': {
          '0%': { transform: 'translateX(calc(-250px*4))' },
          '100%': { transform: 'translateX(0)' },
        }
      }
    },
  },
  darkMode: 'class',
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          background: {
            DEFAULT: '#2B2B2B',
          }
        }
      }
    }
  })],
}
export default config
