import { type ReactNode, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { AnimatePresence, motion } from 'framer-motion'
import { CustomCursor } from '@/components/effects/CustomCursor'
import { LoadingScreen } from '@/components/effects/LoadingScreen'
import { ParticleField } from '@/components/effects/ParticleField'
import { ScrollProgress } from '@/components/effects/ScrollProgress'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { About } from '@/sections/About'
import { Contact } from '@/sections/Contact'
import { Experience } from '@/sections/Experience'
import { GitHubSection } from '@/sections/GitHubSection'
import { Hero } from '@/sections/Hero'
import { Projects } from '@/sections/Projects'
import { Skills } from '@/sections/Skills'
import { Testimonials } from '@/sections/Testimonials'
import { useTheme } from '@/hooks/useTheme'
import { SITE } from '@/lib/constants'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

function SectionWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const { theme, toggle } = useTheme()
  const [loading, setLoading] = useState(true)

  return (
    <HelmetProvider>
      <Helmet>
        <title>{SITE.name} | Full Stack MERN & AI SaaS Developer</title>
        <meta
          name="description"
          content="Portfolio of Rudra Shah — MERN stack developer building AI SaaS products. Projects, experience, GitHub stats, and contact."
        />
        <link rel="canonical" href="https://rudrashah.dev" />
      </Helmet>

      <AnimatePresence>{loading && <LoadingScreen onComplete={() => setLoading(false)} />}</AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-screen noise-overlay"
        >
          <ScrollProgress />
          <CustomCursor />
          <ParticleField />

          <Navbar theme={theme} onToggleTheme={toggle} />

          <main>
            <Hero />
            <SectionWrapper>
              <About />
            </SectionWrapper>
            <SectionWrapper>
              <Skills />
            </SectionWrapper>
            <SectionWrapper>
              <Projects />
            </SectionWrapper>
            <SectionWrapper>
              <Experience />
            </SectionWrapper>
            <SectionWrapper>
              <GitHubSection />
            </SectionWrapper>
            <SectionWrapper>
              <Testimonials />
            </SectionWrapper>
            <SectionWrapper>
              <Contact />
            </SectionWrapper>
          </main>

          <Footer />
        </motion.div>
      )}
    </HelmetProvider>
  )
}
