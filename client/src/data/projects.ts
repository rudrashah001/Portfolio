import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'ai-interview-saas',
    title: 'AI Interview Prep & Resume Builder SaaS',
    description:
      'Production-grade AI SaaS platform for resume analysis, interview preparation, and subscription-based access with admin controls.',
    category: 'saas',
    featured: true,
    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Stripe',
      'OpenAI API',
      'Tailwind CSS',
    ],
    features: [
      'AI resume analysis',
      'Interview preparation flows',
      'AI chatbot assistant',
      'Stripe subscription system',
      'Admin dashboard',
      'Role-based authentication',
      'Payment integration',
    ],
    architecture:
      'MERN monolith with JWT auth, Stripe webhooks, OpenAI service layer, and role-gated admin routes.',
    achievements: [
      'Shipped multi-tenant SaaS with paid tiers',
      'Integrated OpenAI for resume scoring & coaching',
      'Built admin analytics dashboard',
    ],
    problemsSolved: [
      'Automated resume feedback at scale',
      'Secure subscription billing',
      'Granular RBAC for users vs admins',
    ],
    image: '/projects/ai-saas.svg',
    gradient: 'from-violet-600/40 via-indigo-500/30 to-cyan-500/40',
    github: 'https://github.com/rudrashah001',
    demo: '#projects',
  },
  {
    id: 'event-management',
    title: 'End-to-End Event Management System',
    description:
      'Full-stack event platform with ticketing, QR validation, role-based dashboards, and real-time notifications.',
    category: 'fullstack',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'QR Codes'],
    features: [
      'JWT Authentication',
      'QR Ticket Generation',
      'Role-based access',
      'Event tracking',
      'Notifications',
    ],
    architecture:
      'REST API with MongoDB, JWT middleware, QR generation service, and organizer/attendee portals.',
    achievements: [
      'Digital ticketing with QR check-in',
      'Multi-role event workflows',
    ],
    problemsSolved: [
      'Manual ticket validation',
      'Fragmented event operations',
    ],
    image: '/projects/events.svg',
    gradient: 'from-cyan-600/40 via-blue-500/30 to-indigo-600/40',
    github: 'https://github.com/rudrashah001',
    demo: '#projects',
  },
  {
    id: 'job-portal',
    title: 'Job Portal Application',
    description:
      'Job marketplace connecting employers and candidates with authenticated postings and application pipelines.',
    category: 'fullstack',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    features: [
      'Job posting & discovery',
      'User authentication',
      'Application management',
      'REST API integration',
    ],
    architecture:
      'MERN stack with separate employer/candidate flows and RESTful resource APIs.',
    achievements: [
      'End-to-end hiring workflow',
      'Structured application tracking',
    ],
    problemsSolved: [
      'Centralized job applications',
      'Employer-candidate communication gap',
    ],
    image: '/projects/jobs.svg',
    gradient: 'from-emerald-600/40 via-teal-500/30 to-cyan-600/40',
    github: 'https://github.com/rudrashah001',
    demo: '#projects',
  },
  {
    id: 'project-management',
    title: 'Project Management System',
    description:
      'Collaborative workspace for tasks, teams, and workflow tracking with an executive dashboard.',
    category: 'management',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Task management',
      'Team collaboration',
      'Workflow tracking',
      'Dashboard UI',
    ],
    architecture:
      'Modular MERN app with task boards, team spaces, and activity feeds.',
    achievements: [
      'Kanban-style task boards',
      'Team productivity dashboard',
    ],
    problemsSolved: [
      'Scattered task tracking',
      'Poor team visibility',
    ],
    image: '/projects/pm.svg',
    gradient: 'from-fuchsia-600/40 via-purple-500/30 to-indigo-600/40',
    github: 'https://github.com/rudrashah001',
    demo: '#projects',
  },
]

export const projectFilters = [
  { id: 'all' as const, label: 'All' },
  { id: 'saas' as const, label: 'AI SaaS' },
  { id: 'fullstack' as const, label: 'Full Stack' },
  { id: 'management' as const, label: 'Management' },
]
