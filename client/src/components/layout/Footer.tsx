import { SITE } from '@/lib/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-glass-border py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>
          © {year} <span className="text-foreground font-medium">{SITE.name}</span>. Crafted with
          MERN + AI.
        </p>
        <p className="text-xs">Gujarat, India · Full Stack & AI SaaS</p>
      </div>
    </footer>
  )
}
