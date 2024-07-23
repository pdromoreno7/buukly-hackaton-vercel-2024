import { GlobeAltIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { Button } from '@nextui-org/react'

export default function ActionButton() {
  return (
    <div className='absolute bottom-3 right-3 z-10 flex flex-row gap-2'>
      <Button
        isIconOnly
        className='rounded-md bg-gray-500/20'
        size='sm'
        title='Lenguaje del libro'
      >
        <GlobeAltIcon className='size-6 text-gray-500' />
      </Button>
      <Button
        isIconOnly
        className='rounded-md bg-honey-400'
        size='sm'
        title='Generar libro'
      >
        <SparklesIcon className='size-6 fill-honey-700 text-honey-700' />
      </Button>
    </div>
  )
}
