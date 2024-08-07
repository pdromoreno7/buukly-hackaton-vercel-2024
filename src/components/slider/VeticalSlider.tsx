export default async function VeticalSlider() {
  const placeholderImage = await fetch(
    'https://jsonplaceholder.typicode.com/photos',
  )
  const data = await placeholderImage.json()

  return (
    <div className='relative flex h-full w-24 flex-col gap-1 overflow-hidden'>
      <ul className='animate-infinite-scroll flex flex-col justify-between gap-1'>
        {data.slice(0, 3).map(image => (
          <li key={image.id}>
            <img
              src={image.thumbnailUrl}
              alt={image.title}
              className='size-24 object-cover'
            />
          </li>
        ))}
      </ul>

      <ul
        className='animate-infinite-scroll flex flex-col justify-between gap-1 border border-blue-700'
        aria-hidden='true'
      >
        {data.slice(0, 3).map(image => (
          <li key={image.id}>
            <img
              src={image.thumbnailUrl}
              alt={image.title}
              className='size-24 object-cover'
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
