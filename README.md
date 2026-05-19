# Rudra Shah — Premium Developer Portfolio

Ultra-modern, recruiter-focused portfolio for **Rudra Shah** — Full Stack MERN Developer & AI SaaS Builder.

## Tech stack

| Layer | Technologies |
|-------|----------------|
| Frontend | React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion, GSAP, React Three Fiber, Shadcn-style UI |
| Backend | Node.js, Express, Nodemailer |
| Integrations | GitHub API, EmailJS, SMTP contact API |

## Project structure

```
portfolio/
├── client/                 # React SPA
│   ├── src/
│   │   ├── components/     # UI, layout, effects
│   │   ├── sections/       # Page sections
│   │   ├── data/           # Static content
│   │   ├── hooks/          # Theme, GitHub, typing
│   │   ├── lib/            # Utils & constants
│   │   └── types/
│   └── public/             # Assets, resume.pdf
├── server/                 # Express contact API
└── README.md
```

## Quick start

### 1. Install dependencies

```bash
cd client && npm install
cd ../server && npm install
```

### 2. Environment variables

**Client** — copy `client/.env.example` to `client/.env`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Server** — copy `server/.env.example` to `server/.env` (optional for local SMTP):

```env
PORT=5000
CLIENT_URL=http://localhost:5173
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
CONTACT_TO=rudrashah001@gmail.com
```

### 3. Add your resume

Place your PDF at `client/public/resume.pdf` (linked from Hero & Contact).

### 4. Run locally

```bash
# Frontend only
npm run dev

# Backend API
npm run dev:server

# Both (requires npx)
npm run dev:all
```

- App: http://localhost:5173  
- API: http://localhost:5000  

The Vite dev server proxies `/api` to the Express backend.

## Deploy to Vercel

### Frontend (recommended)

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Set **Root Directory** to `client` (or use root `vercel.json` at repo root).
4. Add environment variables from `client/.env.example`.
5. Deploy.

### Contact form options

1. **EmailJS** (no backend): Set `VITE_EMAILJS_*` in Vercel → Environment Variables.
2. **Express API**: Deploy `server/` to Railway, Render, or Fly.io and set `VITE_API_URL` to that URL (update `Contact.tsx` fetch URL if needed).

## Customize content

| File | Purpose |
|------|---------|
| `client/src/lib/constants.ts` | Name, links, email |
| `client/src/data/projects.ts` | Projects, demos, GitHub URLs |
| `client/src/data/experience.ts` | Work history |
| `client/src/data/stats.ts` | About statistics |
| `client/src/data/testimonials.ts` | Quotes |

## Build

```bash
npm run build          # client production build
npm run build:server   # compile Express to dist/
```

## Performance & SEO

- Code-split Three.js and animation libraries
- `react-helmet-async` for meta tags
- Lazy-loaded 3D hero scene
- `prefers-reduced-motion` support
- Semantic HTML & ARIA labels

## License

Private portfolio — © Rudra Shah.
