import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="mx-auto mt-24 max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-white/10 bg-white/60 p-6 backdrop-blur-xl dark:bg-white/5">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm text-slate-700 dark:text-slate-300"
          >
            © {new Date().getFullYear()} Aura — Crafted with motion and care.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="flex items-center gap-4"
          >
            <a href="#privacy" className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Privacy</a>
            <span className="text-slate-300">•</span>
            <a href="#terms" className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">Terms</a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
