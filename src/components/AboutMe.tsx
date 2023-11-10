import {
  IconBrandTypescript,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandGit,
  IconBrandGithub,
  IconBrandDiscordFilled,
  IconBrandInstagram,
  IconBrandGmail,
  IconBrandDiscord,
} from '@tabler/icons-react'
import Link from 'next/link'
import Image from 'next/image'
function AboutMe() {
  return (
    <main className='h-5/6  w-3/4 bg-gray-200 rounded-b-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20  border border-gray-100 mx-auto text-zinc-900  animate-fade-down animate-once animate-delay-[2ms]'>
      <div className='flex flex-col text-center mt-5  font-light items-center gap-3'>
        <h1 className='text-2xl '>Olá,eu me chamo Jonathan!</h1>
        <Image
          priority
          src='https://github.com/jonathanMotta4.png'
          alt='Avatar'
          width={160}
          height={160}
          className='rounded-full border-2 border-violet-500 shadow-md'
        />
        <h2 className='opacity-60 w-2/3'>
          {/* // TODO: Adicionar uma descrição decente
           */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Porro aliquam nostrum voluptas, praesentium nobis provident!
        </h2>
        <div>
          <span>Tecnologias mais utilizadas:</span>
          <div className=' flex gap-2'>
            <IconBrandNextjs size={40} stroke={1} />
            <IconBrandTypescript size={40} stroke={1} />
            <IconBrandTailwind size={40} stroke={1} />
            <IconBrandGit size={40} stroke={1} />
            <IconBrandGithub size={40} stroke={1} />
            <IconBrandNodejs size={40} stroke={1} />
          </div>
        </div>
        <div>
          <h2>Entre em contato comigo:</h2>
          <div>
            <ul className='flex gap-2'>
              <li>
                <Link href={'/'}>
                  <IconBrandInstagram
                    size={40}
                    stroke={1}
                  ></IconBrandInstagram>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <IconBrandGmail
                    size={40}
                    stroke={1}
                  ></IconBrandGmail>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <IconBrandGithub
                    size={40}
                    stroke={1}
                  ></IconBrandGithub>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <IconBrandDiscord
                    className=' text-zinc-900 hover:text-violet-700 hover:duration-300'
                    size={40}
                    stroke={1}
                  ></IconBrandDiscord>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <button
          className='px-4 py-2 bg-violet-500 rounded-md shadow-md text-zinc-900 hover:text-zinc-100 hover:bg-violet-900 duration-300  
            animate-jump-in animate-once animate-duration-400 animate-delay-400'
        >
          <Link href={'/'}>Projetos</Link>
        </button>
      </div>
    </main>
  )
}

export default AboutMe
