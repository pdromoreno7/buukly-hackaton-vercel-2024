import { SparklesIcon } from '@heroicons/react/24/outline'
import { Button } from '@nextui-org/react'

import Wrapper from '@/components/layouts/Wrapper'

export default function Generate() {
  return (
    <Wrapper>
      <h1 className='text-2xl font-extrabold text-center'>Playground</h1>
      <div className='flex flex-col gap-4 mt-8'>
        <input
          placeholder='Un titulo corto para tu libro...'
          className='bg-black/10 px-3 py-2 text-sm rounded-md outline-none focus:bg-black/25 transition'
        />
        <div className='relative'>
          <textarea
            placeholder='Escribe algo que describa tu libro de manera corta y precisa...'
            rows={8}
            className='bg-black/10 px-3 py-2 w-full text-sm rounded-md outline-none focus:bg-black/25 transition relative'
          />
          <Button isIconOnly className='bg-honey-400 absolute z-10 bottom-3 right-3' radius='sm' size='sm'>
            <SparklesIcon className='size-6 text-honey-600 fill-honey-600' />
          </Button>
        </div>
      </div>


      <pre className='text-center text-sm mb-6 mt-auto'>Página en construcción...</pre>
    </Wrapper>
  )
};
