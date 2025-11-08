import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative mx-auto mt-8 max-w-7xl px-4 sm:mt-16 sm:px-6 lg:mt-20 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-50/70 via-violet-50/70 to-amber-50/70 p-0 backdrop-blur-xl dark:from-slate-900/80 dark:via-indigo-950/70 dark:to-fuchsia-950/60">
        <div className="relative grid min-h-[520px] grid-cols-1 md:grid-cols-2">
          {/* Left copy */}
          <div className="relative z-10 flex flex-col items-start justify-center p-8 sm:p-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-violet-200/60 bg-white/70 px-3 py-1 text-xs font-semibold text-violet-700 shadow-sm backdrop-blur-md dark:border-violet-500/30 dark:bg-violet-700/20 dark:text-violet-200"
            >
              AI Voice Agent • Real-time • Futuristic
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl"
            >
              Beautiful conversations with an intelligent aura
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300"
            >
              Meet your next-gen voice agent. Minimal, elegant, and powered by motion. Built with a focus on clarity and delightful micro-interactions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-600/30 transition hover:brightness-110"
              >
                Try the demo
              </a>
              <a
                href="#showcase"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur-md transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                Learn more
              </a>
            </motion.div>
          </div>

          {/* Right visual */}
          <div className="relative h-[520px] overflow-hidden rounded-b-3xl md:rounded-b-none md:rounded-r-3xl">
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            {/* Soft gradient glow overlay to blend with content */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/60 via-transparent to-transparent dark:from-slate-950/70" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
