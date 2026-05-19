export type ProjectCategory = 'all' | 'saas' | 'fullstack' | 'management'

export interface Project {
  id: string
  title: string
  description: string
  category: ProjectCategory
  tech: string[]
  features: string[]
  architecture: string
  achievements: string[]
  problemsSolved: string[]
  image: string
  gradient: string
  github?: string
  demo?: string
  featured?: boolean
}

export interface SkillGroup {
  title: string
  items: { name: string; icon?: string }[]
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  location: string
  responsibilities: string[]
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  quote: string
  avatar: string
}

export interface StatItem {
  label: string
  value: number
  suffix?: string
}

export interface GitHubProfile {
  login: string
  name: string | null
  bio: string | null
  public_repos: number
  followers: number
  following: number
  avatar_url: string
  html_url: string
}

export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  fork: boolean
}
