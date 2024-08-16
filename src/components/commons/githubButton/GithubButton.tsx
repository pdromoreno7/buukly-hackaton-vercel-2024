import { Github } from 'lucide-react'

import { Button } from '@/components/ui/button'

interface GithubButtonProps {
  link?: boolean
}

export function GithubButton({ link }: GithubButtonProps) {
  return (
    <a
      href='https://github.com/pdromoreno7/buukly-hackaton-vercel-2024
    '
      target='_blank'
    >
      <Button
        className={`w-fit rounded-2xl ${link && 'text-sm text-neutral-600 transition-colors hover:text-black hover:underline dark:text-neutral-300'}`}
        variant={link ? 'link' : 'outline'}
      >
        {!link && <Github className='mr-2 h-4 w-4' />}
        Github
      </Button>
    </a>
  )
}
