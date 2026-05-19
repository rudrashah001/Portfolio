import { motion } from 'framer-motion'

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8, duration: 0.6 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center font-display text-2xl font-bold text-white"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          RS
        </motion.div>
        <p className="text-sm text-muted tracking-widest uppercase">Initializing</p>
        <div className="mt-4 h-1 w-48 mx-auto rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
