import Header from '@/components/Header'
import AboutMe from '@/components/AboutMe'
export default function Home() {
  return (
    <div className='h-screen overflow-hidden w-screen  bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-zinc-50 '>
      <Header />
    <AboutMe />
     
    </div>
  )
}
