import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.1),transparent_45%)]" />
      <div className="max-w-6xl mx-auto relative">
        <SectionHeading
          eyebrow="Testimonials"
          title="What collaborators say"
          description="Feedback from teams and stakeholders I've worked with."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl p-6 relative"
            >
              <Quote className="h-8 w-8 text-indigo-500/40 mb-4" aria-hidden />
              <p className="text-sm text-muted leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-xs font-bold text-white"
                  aria-hidden
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted">
                    {t.role} · {t.company}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
