import { STEPS } from '@/conts'
import { Code, Palette, Cloud } from 'lucide-react'

type Props = {
  handleSetInputSteps: (value: string) => void
}

export default function Steps({ handleSetInputSteps }: Readonly<Props>) {
  return (
    <div className='flex flex-col gap-3'>
      {STEPS.map(step => (
        <div
          key={step.title}
          onClick={() => handleSetInputSteps(step.description)}
          className='bg flex cursor-pointer items-center justify-between gap-2 rounded-md border border-neutral-400/25 bg-gray-100 px-4 py-3 hover:bg-gray-200 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10'
        >
          <div>
            {/* <strong className='dark:text-white/90'>{step.title}</strong> */}
            <p className='text-sm dark:text-white/80'>{step.description}</p>
          </div>
          <div>
            {step.icon === 'code' && (
              <Code size={24} className='text-green-500' />
            )}
            {step.icon === 'design' && (
              <Palette size={24} className='text-blue-500' />
            )}
            {step.icon === 'cloud' && (
              <Cloud size={24} className='text-orange-400' />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
