import { IconCode } from '@tabler/icons-react'
import Link from 'next/link'
export default function Header() {
  return (
    <header className='bg-zinc-200 h-8 flex items-center justify-between w-full p-4 text-zinc-900'>
      <div className='flex gap-2'>
        <IconCode />
        <h1>Jonathan Motta</h1>
      </div>
      <nav>
        <ul className='flex gap-3'>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
