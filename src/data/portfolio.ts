/**
 * All portfolio content lives here — edit this file to update the site.
 * NOTE: placeholder content; replace with Thomas's real details.
 */
export const profile = {
  name: "Thomas Vu",
  roles: ["Full-Stack Developer", "UI Engineer", "Creative Technologist"],
  tagline: "I build fast, accessible, and beautifully minimal web experiences.",
  email: "hello@thomasvu.dev",
  location: "Ho Chi Minh City, Vietnam",
  resumeUrl: "https://drive.google.com/uc?export=download&id=1iXi4VcUD_iKJsvdW8XV-JE3c-oyhl9_e",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "X / Twitter", href: "https://x.com/" },
  ],
};

export const about = [
  "I'm a developer who loves the intersection of engineering and design. For the past several years I've shipped products for startups and agencies — from design systems to real-time dashboards.",
  "I care about performance budgets, semantic markup, and interfaces that feel effortless. Outside of code you'll find me shooting film photography or hunting for the best bánh mì in town.",
];

export const stats = [
  { value: "6+", label: "Years experience" },
  { value: "40+", label: "Projects shipped" },
  { value: "12", label: "Happy clients" },
];

export const projects = [
  { title: "Pulse Analytics", desc: "Real-time analytics dashboard streaming millions of events with sub-second charts.", tags: ["React", "WebSockets", "D3"], href: "#" },
  { title: "Neon UI Kit", desc: "An open-source, accessible component library with 60+ themable components.", tags: ["TypeScript", "Tailwind", "Radix"], href: "#" },
  { title: "Wander", desc: "Travel planner with AI-generated itineraries and offline-first maps.", tags: ["Next.js", "PWA", "AI"], href: "#" },
  { title: "Ledgerly", desc: "Invoicing platform for freelancers with automated reminders and payments.", tags: ["Node", "Postgres", "Stripe"], href: "#" },
];

export const skills = [
  { group: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { group: "Backend", items: ["Node.js", "PostgreSQL", "GraphQL", "Redis", "REST APIs"] },
  { group: "Tooling", items: ["Vite", "Docker", "GitHub Actions", "Vitest", "Figma"] },
  { group: "Practices", items: ["Accessibility", "Performance", "Design Systems", "Testing", "CI/CD"] },
];

export const experience = [
  { role: "Senior Frontend Engineer", company: "Nimbus Labs", period: "2023 — Present", desc: "Lead the design system and web platform used by 200k+ monthly users." },
  { role: "Full-Stack Developer", company: "Brightwave Agency", period: "2020 — 2023", desc: "Built client sites and web apps end-to-end; cut average load time by 45%." },
  { role: "Junior Developer", company: "Startup Studio", period: "2018 — 2020", desc: "Prototyped MVPs and shipped features across React and Node stacks." },
];
