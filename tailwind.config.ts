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
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    // fontSize: {
    //   xss: '0.6rem',
    // },
    extend: {
      flex: {
        'custom-carousel': '0 0 55%',
      },
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
