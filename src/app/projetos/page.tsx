import Header from '@/components/Header'

function projetos() {
  return (
    <div className="h-screen w-screen overflow-hidden  bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-zinc-50 ">
      <Header />
      <main className="mx-auto animate-fade-down rounded-b-md  border border-gray-100 border-t-transparent  bg-gray-200 bg-opacity-20 bg-clip-padding text-zinc-900 backdrop-blur-md  backdrop-filter animate-delay-[20ms] animate-once sm:h-full  sm:w-3/4 lg:h-5/6 lg:w-3/5"></main>
    </div>
  )
}

export default projetos
