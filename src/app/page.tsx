import Wrapper from '@/components/layouts/Wrapper'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

export default function Home() {
  return (
    <Wrapper>
      <ThemeSwitcher />
      <h2 className='text-center p-8 [&>strong]:dark:text-lime-200 [&>strong]:text-lime-500'>
        Hello <strong>Kiwibook</strong> 🥝
      </h2>
      <div className='flex flex-col sm:flex-row gap-4'>
        <textarea
          placeholder="Some title of a book..."
          className="w-full bg-gray-700/5 dark:bg-white/5 rounded text-sm px-4 py-3 outline-none resize-y"
          rows={4}
        />
        <textarea
          disabled
          placeholder="Ouput"
          className="w-full rounded text-sm px-4 py-3 resize-none"
          rows={4}
        />
      </div>
    </Wrapper>
  )
}
