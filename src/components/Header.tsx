import { IconCode } from '@tabler/icons-react'
import Link from 'next/link'

export default function Header() {
  return (
    <nav className="sticky top-0 flex h-8 w-full  items-center justify-between border  bg-zinc-100/50 p-4 text-zinc-700">
      <Link href={'/'}>
        <div className="flex gap-2">
          <IconCode stroke={1.25} />
          <h1>Jonathan Motta</h1>
        </div>
      </Link>
      <nav>
        <ul className="flex gap-3">
          <li className="hover:text-violet-700 hover:underline ">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="hover:text-violet-700 hover:underline ">
            <a target="_blank" href={'https://github.com/jonathanMotta4'}>
              Projetos
            </a>
          </li>
        </ul>
      </nav>
    </nav>
  )
}
