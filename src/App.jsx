import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-violet-50/60 to-amber-50/60 dark:from-slate-950 dark:via-slate-950/60 dark:to-indigo-950 text-slate-900 dark:text-white">
      <div className="pointer-events-none fixed inset-x-0 top-[-10rem] z-10 blur-3xl">
        <div className="mx-auto h-[20rem] max-w-2xl -rotate-6 bg-gradient-to-tr from-violet-400 via-fuchsia-400 to-amber-300 opacity-30 dark:opacity-20" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Footer />
    </div>
  )
}

export default App
