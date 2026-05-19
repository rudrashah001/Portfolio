import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NAV_LINKS, SITE } from '@/lib/constants'
import { cn, scrollToSection } from '@/lib/utils'

interface NavbarProps {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClick = (href: string) => {
    setMobileOpen(false)
    scrollToSection(href)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'py-3' : 'py-5',
        )}
      >
        <nav
          className={cn(
            'mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between rounded-2xl transition-all',
            scrolled ? 'glass glow-ring py-3' : 'py-2',
          )}
          aria-label="Main navigation"
        >
          <button
            type="button"
            onClick={() => scrollToSection('hero')}
            className="font-display text-lg font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
            data-cursor="pointer"
          >
            <span className="gradient-text">{SITE.name.split(' ')[0]}</span>
            <span className="text-foreground/80">.</span>
          </button>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => navClick(link.href)}
                  className="text-sm text-muted hover:text-foreground transition-colors"
                  data-cursor="pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="default"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => navClick('contact')}
              data-cursor="pointer"
            >
              Hire Me
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              aria-label="Close menu overlay"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 bottom-0 w-[min(100%,320px)] glass p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="font-display font-bold gradient-text">Menu</span>
                <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <ul className="flex flex-col gap-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      type="button"
                      className="text-lg text-foreground w-full text-left py-2"
                      onClick={() => navClick(link.href)}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
