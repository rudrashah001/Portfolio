import { useEffect, useState } from 'react'

export function useTypingEffect(words: readonly string[], typingSpeed = 80, pauseMs = 2000) {
  const [display, setDisplay] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = current.slice(0, display.length + 1)
          setDisplay(next)
          if (next === current) {
            setTimeout(() => setIsDeleting(true), pauseMs)
          }
        } else {
          const next = current.slice(0, display.length - 1)
          setDisplay(next)
          if (next === '') {
            setIsDeleting(false)
            setWordIndex((i) => (i + 1) % words.length)
          }
        }
      },
      isDeleting ? typingSpeed / 2 : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [display, isDeleting, wordIndex, words, typingSpeed, pauseMs])

  return display
}
