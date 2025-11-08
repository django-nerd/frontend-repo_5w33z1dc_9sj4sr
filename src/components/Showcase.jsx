import { motion } from 'framer-motion'
import { Play, Star } from 'lucide-react'

const cards = [
  {
    title: 'Conversational Flow',
    tags: ['Latency 200ms', 'Prosody+'],
    color: 'from-fuchsia-500 via-violet-500 to-indigo-500',
  },
  {
    title: 'Agentic Tools',
    tags: ['RAG', 'Tools API'],
    color: 'from-amber-500 via-orange-500 to-rose-500',
  },
  {
    title: 'Embeddable Widgets',
    tags: ['React', 'Web Components'],
    color: 'from-cyan-500 via-teal-500 to-emerald-500',
  },
]

const Showcase = () => {
  return (
    <section id="showcase" className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
        >
          Showcase
        </motion.h3>
        <motion.a
          href="#get-started"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur-md hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white"
        >
          <Play className="h-4 w-4" /> Watch demo
        </motion.a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.06 * i }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/70 p-6 backdrop-blur-xl dark:bg-white/5"
          >
            <div className={`absolute -inset-16 bg-gradient-to-br ${c.color} opacity-20 blur-3xl transition group-hover:opacity-40`} />
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{c.title}</h4>
                <Star className="h-5 w-5 text-amber-400" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/70 px-3 py-1 text-xs text-slate-700 dark:bg-white/10 dark:text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Showcase
