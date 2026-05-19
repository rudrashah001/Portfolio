import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SITE } from '@/lib/constants'
import { scrollToSection } from '@/lib/utils'
import { useTypingEffect } from '@/hooks/useTypingEffect'

const HeroScene = lazy(() =>
  import('@/components/effects/HeroScene').then((m) => ({ default: m.HeroScene })),
)

export function Hero() {
  const typedRole = useTypingEffect(SITE.roles)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.25),transparent)]" />
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
        animate={{ backgroundPosition: ['0px 0px', '64px 64px'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      <motion.div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted mb-8"
        >
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          <span>Available for Full Stack & AI SaaS roles</span>
          <span className="text-foreground/40">·</span>
          <span>{SITE.location}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-sm sm:text-base text-muted mb-4 tracking-wide"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          <span className="gradient-text">{SITE.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="h-10 sm:h-12 flex items-center justify-center text-xl sm:text-2xl md:text-3xl text-foreground/90 font-medium mb-4"
        >
          <span className="text-cyan-400 mr-2">▸</span>
          <span>{typedRole}</span>
          <span className="inline-block w-[3px] h-7 bg-cyan-400 ml-1 animate-pulse" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto text-muted text-base sm:text-lg leading-relaxed mb-10"
        >
          I build cinematic, production-grade MERN applications and AI-powered SaaS products
          that merge elegant UX with scalable backend architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <Button size="lg" onClick={() => scrollToSection('projects')} data-cursor="pointer">
            View Projects
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={SITE.resumePath} download data-cursor="pointer">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button variant="glow" size="lg" onClick={() => scrollToSection('contact')}>
            <Mail className="h-4 w-4" />
            Contact Me
          </Button>
        </motion.div>
      </motion.div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-foreground transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.button>
    </section>
  )
}
