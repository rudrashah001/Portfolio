import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { experience } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="Experience"
          title="Professional journey"
          description="Hands-on full stack development in a production environment."
        />

        <div className="mt-16 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-cyan-400/30 to-transparent md:-translate-x-1/2" />

          {experience.map((item, i) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8 mb-16 last:mb-0"
            >
              <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 ring-4 ring-background flex items-center justify-center">
                <Briefcase className="h-2.5 w-2.5 text-white" />
              </div>

              <div className={`md:text-right ${i % 2 === 1 ? 'md:order-2 md:text-left' : ''}`}>
                <p className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                  {item.period}
                </p>
                <h3 className="text-xl font-bold mt-1">{item.role}</h3>
                <p className="text-muted">{item.company} · {item.location}</p>
              </div>

              <div className={`glass rounded-2xl p-6 mt-4 md:mt-0 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                <ul className="space-y-2 text-sm text-muted">
                  {item.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2">
                      <span className="text-indigo-400">→</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
