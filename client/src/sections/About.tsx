import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionHeading } from '@/components/ui/section-heading'
import { aboutStats } from '@/data/stats'
import { useGitHub } from '@/hooks/useGitHub'

gsap.registerPlugin(ScrollTrigger)

function AnimatedStat({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1.6
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <motion.div
      ref={ref}
      className="glass rounded-2xl p-6 text-center glow-ring"
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <p className="text-3xl sm:text-4xl font-bold gradient-text">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </motion.div>
  )
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const { profile } = useGitHub()

  const stats = aboutStats.map((s) =>
    s.label === 'GitHub Repositories' && profile
      ? { ...s, value: profile.public_repos }
      : s,
  )

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-reveal', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="About"
          title="Engineering with intent"
          description="Passionate about building products that feel premium and perform at scale."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
          <div className="about-reveal space-y-5 text-muted text-base leading-relaxed">
            <p>
              I&apos;m <strong className="text-foreground">Rudra Shah</strong>, a Full Stack MERN
              developer and AI SaaS builder based in Gujarat, India. I specialize in turning complex
              ideas into polished, production-ready web applications.
            </p>
            <p>
              From JWT-secured APIs to Stripe-powered subscriptions and OpenAI integrations, I
              architect full-stack systems end to end — with a relentless focus on performance,
              accessibility, and recruiter-grade presentation.
            </p>
            <p>
              My work spans AI interview prep platforms, event management systems, job portals, and
              collaborative project tools. I thrive in fast-moving environments where learning
              never stops and shipping matters.
            </p>
          </div>

          <motion.div
            className="about-reveal glass rounded-3xl p-8 border border-indigo-500/20"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              What I bring
            </h3>
            <ul className="space-y-3 text-sm text-muted">
              {[
                'MERN stack expertise with TypeScript-ready patterns',
                'AI SaaS: OpenAI, Stripe, RBAC, admin dashboards',
                'Real-world internships & client-facing delivery',
                'Continuous learning — new tools, better architecture',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-cyan-400 shrink-0">◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
