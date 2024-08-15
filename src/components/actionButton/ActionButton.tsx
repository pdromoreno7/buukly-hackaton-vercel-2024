import { Globe, Sparkles } from 'lucide-react'

export default function ActionButton() {
  return (
    <div className='absolute bottom-3 right-3 z-10 flex flex-row gap-2'>
      <button className='rounded-md bg-gray-500/20' title='Lenguaje del libro'>
        <Globe className='size-6 text-gray-500' />
      </button>
      <button className='bg-honey-400 rounded-md' title='Generar libro'>
        <Sparkles className='fill-honey-700 text-honey-700 size-6' />
      </button>
    </div>
  )
}
