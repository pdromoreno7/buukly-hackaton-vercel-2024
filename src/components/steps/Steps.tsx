import { STEPS } from '@/conts'

type Props = {
  handleSetInputSteps: (value: string) => void
}

export default function Steps({ handleSetInputSteps }: Readonly<Props>) {
  return (
    <div className='flex flex-col gap-3'>
      {STEPS.map(step => (
        <div
          key={step.title}
          className='bg rounded-md border border-neutral-400/25 px-4 py-3 dark:border-white/10 dark:bg-white/5'
          onClick={() => handleSetInputSteps(step.description)}
        >
          <strong className='dark:text-white/90'>{step.title}</strong>
          <p className='text-sm dark:text-white/80'>{step.description}</p>
        </div>
      ))}
    </div>
  )
}
