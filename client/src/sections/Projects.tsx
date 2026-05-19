import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Layers } from 'lucide-react'
import { GitHubIcon } from '@/components/ui/social-icons'
import { SectionHeading } from '@/components/ui/section-heading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { projects, projectFilters } from '@/data/projects'
import type { ProjectCategory } from '@/types'
import { cn } from '@/lib/utils'

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('all')

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Work"
          title="Featured projects"
          description="Production-grade applications — from AI SaaS to full-stack platforms."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {projectFilters.map((f) => (
            <Button
              key={f.id}
              variant={filter === f.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </Button>
          ))}
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className={cn(
                  'group glass rounded-3xl overflow-hidden border border-glass-border',
                  project.featured && 'lg:col-span-2',
                )}
              >
                <div
                  className={cn(
                    'relative h-48 sm:h-56 bg-gradient-to-br',
                    project.gradient,
                    'flex items-center justify-center overflow-hidden',
                  )}
                >
                  <img
                    src={project.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
                  />
                  <div className="relative z-10 text-center px-6">
                    <Layers className="h-10 w-10 mx-auto text-white/80 mb-2" />
                    <p className="text-xs uppercase tracking-widest text-white/70">Architecture</p>
                    <p className="text-sm text-white/90 mt-1 max-w-md">{project.architecture}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.slice(0, 5).map((t) => (
                      <Badge key={t} variant="outline">
                        {t}
                      </Badge>
                    ))}
                    {project.tech.length > 5 && (
                      <Badge variant="outline">+{project.tech.length - 5}</Badge>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <p className="font-medium text-foreground mb-2">Key achievements</p>
                      <ul className="text-muted space-y-1">
                        {project.achievements.map((a) => (
                          <li key={a}>• {a}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-2">Problems solved</p>
                      <ul className="text-muted space-y-1">
                        {project.problemsSolved.map((p) => (
                          <li key={p}>• {p}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.demo && (
                      <Button variant="default" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <GitHubIcon className="h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
