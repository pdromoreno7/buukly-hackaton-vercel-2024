import Wrapper from '@/components/layouts/Wrapper'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

export default function Home() {
  return (
    <Wrapper>
      <ThemeSwitcher />
      <h2 className='p-8 text-center [&>strong]:text-lime-500 [&>strong]:dark:text-lime-200'>
        Hello <strong>Kiwibook</strong> 🥝
      </h2>
      <div className='flex flex-col gap-4 sm:flex-row'>
        <textarea
          placeholder='Some title of a book...'
          className='w-full resize-y rounded bg-gray-700/5 px-4 py-3 text-sm outline-none dark:bg-white/5'
          rows={4}
        />
        <textarea
          disabled
          placeholder='Ouput'
          className='w-full resize-none rounded px-4 py-3 text-sm'
          rows={4}
        />
      </div>
    </Wrapper>
  )
}
