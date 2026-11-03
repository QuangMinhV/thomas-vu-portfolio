import { createFileRoute, Link } from "@tanstack/react-router";
import { Typewriter } from "@/components/Typewriter";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thomas Vu — Full-Stack Developer" },
      { name: "description", content: "Thomas Vu builds fast, accessible, minimal web experiences." },
      { property: "og:title", content: "Thomas Vu — Full-Stack Developer" },
      { property: "og:description", content: "Thomas Vu builds fast, accessible, minimal web experiences." },
    ],
  }),
  component: Hero,
});

/** Hero section with staggered load-in and typewriter roles. */
function Hero() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto flex min-h-[85vh] max-w-5xl flex-col justify-center px-5">
      <div className="stagger">
        <p className="font-mono text-sm text-primary">hi, my name is</p>
        <h1 id="hero-title" className="mt-3 text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
          {profile.name}<span className="text-primary">.</span>
        </h1>
        <p className="mt-4 text-2xl font-medium text-muted-foreground sm:text-4xl">
          <Typewriter words={profile.roles} />
        </p>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">{profile.tagline}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/projects" className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-[var(--shadow-neon)] transition-transform hover:-translate-y-0.5">
            View my work
          </Link>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-full px-6 py-3 font-medium hover:text-primary"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
