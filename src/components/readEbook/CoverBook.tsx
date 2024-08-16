import { cn } from '@/lib/utils'

export default function CoverBook({
  className,
  title,
  color,
  size,
}: CoverBookProps) {
  return (
    <div
      className={cn(
        `flex h-[420px] flex-col justify-between overflow-hidden rounded-tl-sm rounded-tr-xl border-l-4 border-emerald-600 pt-7 shadow-md md:h-5/6`,
        className,
      )}
      style={{
        background: `linear-gradient(145deg, #f6fbfc, ${color})`,
        borderLeft: `15px solid ${color}`,
      }}
    >
      <h4
        className={`truncate text-pretty px-3 pb-4 text-2xl font-semibold leading-snug dark:text-neutral-900 ${size === 'big' ? 'md:text-2xl' : 'md:text-lg'} `}
      >
        {title}
      </h4>
      <span className='bg-white pb-3 pt-8 text-center text-sm dark:bg-neutral-800/80'>
        Generado por <strong>Buucly</strong>
      </span>
    </div>
  )
}

interface CoverBookProps {
  title: string
  className?: string
  color?: string
  size?: string
}
