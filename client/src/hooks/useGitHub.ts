import { useEffect, useState } from 'react'
import { SITE } from '@/lib/constants'
import type { GitHubProfile, GitHubRepo } from '@/types'

export function useGitHub() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [languages, setLanguages] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const username = SITE.githubUsername

    async function fetchGitHub() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
          ),
        ])

        if (!userRes.ok) throw new Error('Failed to load GitHub profile')

        const user = (await userRes.json()) as GitHubProfile
        setProfile(user)

        if (reposRes.ok) {
          const repoList = (await reposRes.json()) as GitHubRepo[]
          const filtered = repoList.filter((r) => !r.fork).slice(0, 6)
          setRepos(filtered)

          const langCounts: Record<string, number> = {}
          await Promise.all(
            filtered.slice(0, 4).map(async (repo) => {
              const langRes = await fetch(
                `https://api.github.com/repos/${username}/${repo.name}/languages`,
              )
              if (langRes.ok) {
                const langs = (await langRes.json()) as Record<string, number>
                Object.entries(langs).forEach(([lang, bytes]) => {
                  langCounts[lang] = (langCounts[lang] || 0) + bytes
                })
              }
            }),
          )
          setLanguages(langCounts)
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : 'GitHub unavailable')
      } finally {
        setLoading(false)
      }
    }

    fetchGitHub()
  }, [])

  return { profile, repos, languages, loading, error }
}
