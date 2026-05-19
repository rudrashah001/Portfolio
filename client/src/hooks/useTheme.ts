import { useCallback, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark'
    return (localStorage.getItem('theme') as Theme) || 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)

    if (theme === 'light') {
      root.style.setProperty('--color-background', '#f8fafc')
      root.style.setProperty('--color-foreground', '#0f172a')
      root.style.setProperty('--color-muted', '#64748b')
      root.style.setProperty('--color-glass', 'rgba(255, 255, 255, 0.7)')
      root.style.setProperty('--color-glass-border', 'rgba(15, 23, 42, 0.08)')
    } else {
      root.style.setProperty('--color-background', '#030712')
      root.style.setProperty('--color-foreground', '#f8fafc')
      root.style.setProperty('--color-muted', '#94a3b8')
      root.style.setProperty('--color-glass', 'rgba(15, 23, 42, 0.55)')
      root.style.setProperty('--color-glass-border', 'rgba(148, 163, 184, 0.12)')
    }
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggle, setTheme }
}
