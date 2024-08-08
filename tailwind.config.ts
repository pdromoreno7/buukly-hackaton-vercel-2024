import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      fontSize: {
        xss: '0.6rem',
      },
      flex: {
        'custom-carousel': '0 0 55%',
      },
      colors: {
        kiwi: {
          '50': '#f0fdf4',
          '100': '#dbfde7',
          '200': '#b9f9ce',
          '300': '#82f3aa',
          '400': '#45e37d',
          '500': '#1ed760',
          '600': '#11a847',
          '700': '#11843b',
          '800': '#136832',
          '900': '#12552c',
          '950': '#042f16',
        },
        magenta: {
          '50': '#fcf2ff',
          '100': '#f8e2ff',
          '200': '#f1caff',
          '300': '#e7a1ff',
          '400': '#da65ff',
          '500': '#cc2bff',
          '600': '#bf03ff',
          '700': '#ab00fb',
          '800': '#9000cb',
          '900': '#7b00a9',
          '950': '#53007c',
        },
        brownn: {
          '100': '#ededed',
          '200': '#dcdcda',
          '300': '#cacac8',
          '400': '#b8b9b5',
          '500': '#a7a7a3',
          '600': '#959591',
          '700': '#83847e',
          '800': '#71726c',
          '900': '#606159',
          '950': '#4e4f47',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
