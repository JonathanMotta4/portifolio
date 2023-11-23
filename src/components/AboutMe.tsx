import {
  IconBrandTypescript,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandGit,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandGmail,
} from '@tabler/icons-react'
import Link from 'next/link'
import Image from 'next/image'
function AboutMe() {
  return (
    <main className="mx-auto animate-fade-down rounded-b-md  border border-gray-100 border-t-transparent  bg-gray-200 bg-opacity-20 bg-clip-padding text-zinc-900 backdrop-blur-md  backdrop-filter animate-delay-[20ms] animate-once sm:h-full  sm:w-3/4 lg:h-5/6 lg:w-3/5">
      <div className="mt-5 flex flex-col items-center  gap-3 text-center font-light">
        <h1 className="text-2xl ">Olá,eu me chamo Jonathan!</h1>
        <Image
          priority
          src="https://github.com/jonathanMotta4.png"
          alt="Avatar"
          width={160}
          height={160}
          className="rounded-full border-2 border-violet-500 shadow-md"
        />
        <h2 className="w-2/3 font-light">
          {/* // TODO: Adicionar uma descrição decente
           */}
          Sou um estudante de Ciências da computação, buscando aprender novas
          tecnologias e aprimorar minhas habilidades no Front End.
        </h2>
        <div>
          <span>Tecnologias mais utilizadas:</span>
          <div className=" flex gap-2">
            <IconBrandNextjs size={40} stroke={1} />
            <IconBrandTypescript size={40} stroke={1} />
            <IconBrandTailwind size={40} stroke={1} />
            <IconBrandGit size={40} stroke={1} />
            <IconBrandGithub size={40} stroke={1} />
            <IconBrandNodejs size={40} stroke={1} />
          </div>
        </div>
        <div className="flex w-full flex-col items-center  justify-center">
          <h2>Entre em contato comigo:</h2>
          <div>
            <ul className="flex gap-2">
              <li>
                <a
                  target="_blank"
                  href={'https://www.instagram.com/jonathan.motta44/'}
                >
                  <IconBrandInstagram
                    className=" text-zinc-900 hover:text-violet-700 hover:duration-300"
                    size={40}
                    stroke={1}
                  ></IconBrandInstagram>
                </a>
              </li>
              <li>
                <a target="_blank" href={'https://github.com/jonathanMotta4'}>
                  <IconBrandGithub
                    className=" text-zinc-900 hover:text-violet-700 hover:duration-300"
                    size={40}
                    stroke={1}
                  ></IconBrandGithub>
                </a>
              </li>
              <li>
                <a target="_blank" href={'mailto:jonathan.motta44@gmail.com'}>
                  <IconBrandGmail
                    className=" text-zinc-900 hover:text-violet-700 hover:duration-300"
                    size={40}
                    stroke={1}
                  ></IconBrandGmail>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <button
          className="animate-duration-400 animate-delay-800 animate-jump-in rounded-md bg-violet-500 px-4 py-2 text-zinc-200 shadow-md  
            duration-300 animate-once hover:bg-violet-900 hover:text-zinc-50"
        >
          {/* TODO Criar pagina de projetos usando API do Github */}
          <a target="_blank" href={'https://github.com/jonathanMotta4'}>
            Projetos
          </a>
        </button>
      </div>
    </main>
  )
}

export default AboutMe
