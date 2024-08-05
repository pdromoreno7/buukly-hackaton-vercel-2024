import React, { useMemo } from 'react'

type Props = {
  color: string
  title: string
}

export default function CoverBook({ color, title }: Props) {
  const { patternStyle, patternColor } = useMemo(() => {
    const isWarmColor = (hex: string): boolean => {
      const r: number = parseInt(hex.slice(1, 3), 16)
      const g: number = parseInt(hex.slice(3, 5), 16)
      const b: number = parseInt(hex.slice(5, 7), 16)
      return r + g > g + b
    }
    // Función para generar un color complementario para el patrón
    const getComplementaryColor = (hex: string) => {
      const r = 255 - parseInt(hex.slice(1, 3), 16)
      const g = 255 - parseInt(hex.slice(3, 5), 16)
      const b = 255 - parseInt(hex.slice(5, 7), 16)
      return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
    }

    const warm = isWarmColor(color)
    const patternColor = getComplementaryColor(color)

    return {
      patternStyle: {
        backgroundImage: warm
          ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M20 5 C25 15, 35 15, 30 25 S25 35, 20 35 S5 30, 10 20 S15 5, 20 5' fill='none' stroke='${encodeURIComponent(patternColor)}' stroke-width='1'/%3E%3C/svg%3E")`
          : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M20 5 L30 20 L20 35 L10 20 Z' fill='none' stroke='${encodeURIComponent(patternColor)}' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: '40px 40px',
        backgroundRepeat: 'repeat',
        opacity: 0.1,
      },
      patternColor,
    }
  }, [color])

  console.log(color, 'color')
  return (
    <div className='bg-background relative mx-auto flex h-96 w-64 items-center justify-center'>
      <div
        className='absolute inset-0 rounded'
        style={{ backgroundColor: color }}
      ></div>
      <div className='absolute inset-0' style={patternStyle}></div>
      <div className='absolute inset-0 flex flex-col items-center justify-center p-4 text-white'>
        <h1 className='text-center text-xl font-bold leading-tight'>
          {title.toUpperCase()}
        </h1>
        <h2 className='mt-2 text-center text-xs leading-snug'>
          Creado por buukly
        </h2>
      </div>
      <div
        className='absolute bottom-4 left-4 right-4 top-4 rounded border'
        style={{ borderColor: patternColor }}
      ></div>
    </div>
  )
}
