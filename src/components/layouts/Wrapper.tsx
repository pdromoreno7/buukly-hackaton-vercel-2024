export default function Wrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='container mx-auto max-w-screen-lg px-4'>{children}</div>
  )
}
