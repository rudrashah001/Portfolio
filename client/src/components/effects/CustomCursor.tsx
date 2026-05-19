import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (prefersReduced || isTouch) return

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setHovering(!!target.closest('a, button, [data-cursor="pointer"]'))
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', onOver)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  if (!visible) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden md:block"
        animate={{ x: pos.x - 8, y: pos.y - 8 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div
          className={`w-4 h-4 rounded-full border-2 border-white transition-transform ${
            hovering ? 'scale-[2.2] bg-white/20' : 'scale-100'
          }`}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none hidden md:block"
        animate={{ x: pos.x - 120, y: pos.y - 120 }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      >
        <div
          className={`w-60 h-60 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-400/10 blur-3xl ${
            hovering ? 'opacity-80' : 'opacity-40'
          }`}
        />
      </motion.div>
    </>
  )
}
