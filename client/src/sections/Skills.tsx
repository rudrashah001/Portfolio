import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { Badge } from '@/components/ui/badge'
import { skillGroups } from '@/data/skills'

const groupIcons: Record<string, string> = {
  Frontend: '⚡',
  Backend: '🔧',
  Database: '🗄️',
  'Tools & Platforms': '🛠️',
  Concepts: '🧠',
}

export function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(34,211,238,0.08),transparent_50%)]" />
      <div className="max-w-6xl mx-auto relative">
        <SectionHeading
          eyebrow="Skills"
          title="Full-stack arsenal"
          description="Technologies and concepts I use to ship production applications."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: gi * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 border border-glass-border group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl" aria-hidden>
                  {groupIcons[group.title] ?? '✦'}
                </span>
                <h3 className="font-semibold text-lg">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.05 + si * 0.03 }}
                  >
                    <Badge className="group-hover:border-cyan-500/30 transition-colors">
                      {skill.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="mt-4 h-1 rounded-full bg-white/5 overflow-hidden"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                  initial={{ width: '0%' }}
                  whileInView={{ width: `${60 + gi * 8}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
