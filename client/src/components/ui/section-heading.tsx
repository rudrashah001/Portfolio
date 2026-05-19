import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/90 mb-3">
        {eyebrow}
      </p>
      <h2
        className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        <span className="gradient-text">{title}</span>
      </h2>
      {description && (
        <p className="mt-4 text-muted text-base sm:text-lg leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}
