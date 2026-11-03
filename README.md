# Thomas Vu — Portfolio

Dark minimalist portfolio with neon accents, built with React (TanStack Start), Vite and Tailwind CSS v4.

## Setup

```bash
bun install     # or npm install
bun run dev     # start dev server at http://localhost:8080
bun run build   # production build
```

## Editing content

All text (name, roles, projects, skills, experience, contact) lives in `src/data/portfolio.ts`.

## Structure

- `src/styles.css` — design tokens (colors, fonts), glass, reveal & transition utilities
- `src/routes/` — one page per section: `index` (Hero), `about`, `projects`, `skills`, `experience`, `contact`
- `src/routes/__root.tsx` — shell: particle background, nav, page transitions, footer
- `src/components/` — `ParticleBackground`, `Typewriter`, `Reveal` (scroll animation), `SiteNav`, `Section`

No animation libraries are used; effects are pure CSS + a small canvas, and all respect `prefers-reduced-motion`.
