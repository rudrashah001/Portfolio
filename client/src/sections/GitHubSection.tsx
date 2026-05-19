import { motion } from 'framer-motion'
import { ExternalLink, GitBranch, Star, Users } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { Button } from '@/components/ui/button'
import { SITE } from '@/lib/constants'
import { useGitHub } from '@/hooks/useGitHub'

export function GitHubSection() {
  const { profile, repos, languages, loading, error } = useGitHub()

  const totalLang = Object.values(languages).reduce((a, b) => a + b, 0) || 1
  const sortedLangs = Object.entries(languages).sort((a, b) => b[1] - a[1]).slice(0, 6)

  return (
    <section id="github" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="GitHub"
          title="Coding profile"
          description="Live stats and repositories from my open-source work."
        />

        {loading && (
          <p className="text-center text-muted mt-12 animate-pulse">Loading GitHub data…</p>
        )}

        {error && (
          <p className="text-center text-muted mt-12">
            GitHub stats unavailable. Visit{' '}
            <a href={SITE.github} className="text-cyan-400 underline">
              my profile
            </a>
            .
          </p>
        )}

        {profile && !loading && (
          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 glass rounded-3xl p-8 text-center"
            >
              <img
                src={profile.avatar_url}
                alt={profile.name ?? profile.login}
                className="w-24 h-24 rounded-full mx-auto ring-2 ring-indigo-500/50"
              />
              <h3 className="mt-4 text-xl font-bold">{profile.name ?? profile.login}</h3>
              <p className="text-sm text-muted mt-2">{profile.bio ?? 'MERN & AI SaaS Developer'}</p>
              <div className="mt-6 grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-2xl font-bold gradient-text">{profile.public_repos}</p>
                  <p className="text-xs text-muted">Repos</p>
                </div>
                <div>
                  <p className="text-2xl font-bold gradient-text">{profile.followers}</p>
                  <p className="text-xs text-muted">Followers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold gradient-text">{profile.following}</p>
                  <p className="text-xs text-muted">Following</p>
                </div>
              </div>
              <Button className="mt-6 w-full" asChild>
                <a href={SITE.github} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  View GitHub
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1 glass rounded-3xl p-8"
            >
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <GitBranch className="h-4 w-4 text-cyan-400" />
                Top languages
              </h4>
              <div className="space-y-3">
                {sortedLangs.length === 0 ? (
                  <p className="text-sm text-muted">Analyzing repositories…</p>
                ) : (
                  sortedLangs.map(([lang, bytes]) => (
                    <div key={lang}>
                      <div className="flex justify-between text-xs mb-1">
                        <span>{lang}</span>
                        <span className="text-muted">{Math.round((bytes / totalLang) * 100)}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(bytes / totalLang) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8 }}
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="mt-8 rounded-xl overflow-hidden border border-glass-border">
                <img
                  src={`https://ghchart.rshah.org/${SITE.githubUsername}`}
                  alt="GitHub contribution chart"
                  className="w-full h-auto opacity-90"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1 glass rounded-3xl p-8"
            >
              <h4 className="font-semibold mb-4">Recent repositories</h4>
              <ul className="space-y-4">
                {repos.map((repo) => (
                  <li key={repo.id}>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <p className="font-medium group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                        {repo.name}
                        <Star className="h-3 w-3 text-muted" />
                        <span className="text-xs text-muted">{repo.stargazers_count}</span>
                      </p>
                      <p className="text-xs text-muted line-clamp-2 mt-1">
                        {repo.description ?? 'No description'}
                      </p>
                      {repo.language && (
                        <span className="inline-block mt-2 text-xs text-indigo-300">
                          {repo.language}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
              {repos.length === 0 && (
                <p className="text-sm text-muted flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Repositories loading…
                </p>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
