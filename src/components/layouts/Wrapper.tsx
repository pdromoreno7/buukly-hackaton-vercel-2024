export default function Wrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='flex flex-col flex-1 size-full container mx-auto max-w-screen-lg px-6'>{children}</div>
  )
}
