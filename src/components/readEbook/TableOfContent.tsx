export default function TableOfContents({
  chapters,
  title,
}: TableOfContentsProps) {
  return (
    <div className='mx-auto max-w-md py-3'>
      <h1 className='text-pretty text-2xl font-extrabold'>{title}</h1>
      <div className='mt-8 max-h-[420px] overflow-y-auto'>
        <h2 className='mb-4 text-lg font-bold'>Capítulos:</h2>
        <ol className='list-inside space-y-4'>
          {chapters.map((chapter, index) => (
            <div key={index}>
              <li className='text-sm'>
                <p className='font-bold'>{`Capítulo ${index + 1}`}.</p>
                <span>{chapter}</span>
              </li>
            </div>
          ))}
        </ol>
      </div>
    </div>
  )
}

interface TableOfContentsProps {
  title: string
  chapters: string[]
}
