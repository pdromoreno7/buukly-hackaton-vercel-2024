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
        `grid h-56 grid-rows-[auto,1fr,auto] rounded-tl-sm rounded-tr-xl border-l-4 border-emerald-600 pt-7`,
        className,
      )}
      style={{
        background: `linear-gradient(145deg, #f6fbfc, ${color})`,
        borderLeft: `15px solid ${color}`,
      }}
    >
      <h4
        className={`pb-auto truncate text-pretty px-3 text-base font-semibold leading-snug dark:text-neutral-900 ${size === 'big' ? 'md:text-2xl' : 'md:text-base'} `}
      >
        {title}.
      </h4>
      <div className='flex h-[4rem] items-end justify-center self-end bg-white pb-3 pt-8 text-center text-sm dark:bg-neutral-800/80'>
        Generado por <strong>Buucly</strong>
      </div>
    </div>
  )
}

interface CoverBookProps {
  title: string
  className?: string
  color?: string
  size?: string
}
