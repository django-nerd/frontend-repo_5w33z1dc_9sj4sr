import { motion } from 'framer-motion'
import { Sparkles, Mic, Gauge, Shield } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Expressive Aura',
    desc: 'Fluid gradients and motion that mirror the tone of the conversation in real-time.',
  },
  {
    icon: Mic,
    title: 'Crystal Voice',
    desc: 'Studio-quality voice pipeline with low-latency streaming and natural prosody.',
  },
  {
    icon: Gauge,
    title: 'Ultra Performance',
    desc: 'Built on modern web tech, optimized for 60fps animations and buttery transitions.',
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    desc: 'Privacy-first architecture with end-to-end encryption options for enterprises.',
  },
]

const Features = () => {
  return (
    <section id="features" className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
        >
          Designed for delightful voice-first experiences
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300"
        >
          A refined set of interactions, components, and motion patterns that feel alive yet unobtrusive.
        </motion.p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.04 * i }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/70 p-5 shadow-sm backdrop-blur-xl transition hover:shadow-xl dark:bg-white/5"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-amber-400/10 blur-2xl transition group-hover:scale-150" />
            <div className="relative z-10">
              <f.icon className="h-6 w-6 text-violet-600 dark:text-violet-300" />
              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Features
