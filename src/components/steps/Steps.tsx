import { STEPS } from '@/conts'

export default function Steps() {
  return (
    <div className='flex flex-col gap-3'>
      {STEPS.map(step => (
        <div
          key={step.title}
          className='bg rounded-md border border-neutral-400/25 px-4 py-3 dark:border-white/10 dark:bg-white/5'
        >
          <strong className='dark:text-white/90'>{step.title}</strong>
          <p className='text-sm dark:text-white/80'>{step.description}</p>
        </div>
      ))}
    </div>
  )
}
