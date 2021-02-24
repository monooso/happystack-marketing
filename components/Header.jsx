import Link from 'next/link'
import Logo from './Logo'

export default function Header ({ linkTarget }) {
  const logo = linkTarget
    ? <Link href={linkTarget}><a><Logo /></a></Link>
    : <Logo />

  return (
    <header className='max-w-7xl mt-20 mx-auto px-6 w-full sm:px-8 lg:px-10'>
      <div className='h-12 w-12'>{logo}</div>
    </header>
  )
}
