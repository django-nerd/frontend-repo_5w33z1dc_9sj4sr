import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className="sticky top-0 z-20 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/60 p-3 backdrop-blur-xl dark:bg-black/40">
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 text-white shadow-lg shadow-fuchsia-500/30">⚡</span>
              <span className="text-lg font-semibold tracking-tight text-slate-800 dark:text-slate-100">Aura</span>
            </motion.a>

            <nav className="hidden gap-6 md:flex">
              {[
                { label: 'Features', href: '#features' },
                { label: 'Showcase', href: '#showcase' },
                { label: 'Pricing', href: '#pricing' },
              ].map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 * (idx + 1) }}
                  className="text-sm font-medium text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <motion.a
              href="#get-started"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 ring-1 ring-white/10 transition hover:opacity-90 dark:bg-white dark:text-slate-900"
            >
              Get Started
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
