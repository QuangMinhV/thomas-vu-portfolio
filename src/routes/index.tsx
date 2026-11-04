import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Typewriter } from "@/components/Typewriter";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { ContactSection } from "@/components/sections/contact";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thomas Vu — Data Analyst" },
      { name: "description", content: "Thomas Vu is a Data Analyst in Perth working with Power BI, SQL Server and Excel." },
      { property: "og:title", content: "Thomas Vu — Data Analyst" },
      { property: "og:description", content: "Thomas Vu is a Data Analyst in Perth working with Power BI, SQL Server and Excel." },
    ],
  }),
  component: Home,
});

/** Single scrolling page: hero followed by every section. */
function Home() {
  // When arriving with a hash (e.g. redirected from /projects), scroll to that section once it exists.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}

/** Hero section with staggered load-in, typewriter roles and a fading-in photo. */
function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="mx-auto grid min-h-[85vh] max-w-5xl scroll-mt-24 items-center gap-10 px-5 py-12 md:grid-cols-[1.5fr_1fr]"
    >
      <div className="stagger order-2 md:order-1">
        <p className="font-mono text-sm text-primary">hi, my name is</p>
        <h1 id="hero-title" className="mt-3 text-5xl font-bold tracking-tight sm:text-7xl md:text-7xl lg:text-8xl">
          {profile.name}
          <span className="text-primary">.</span>
        </h1>
        <p className="mt-4 text-2xl font-medium text-muted-foreground sm:text-4xl">
          <Typewriter words={profile.roles} />
        </p>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">{profile.tagline}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-[var(--shadow-neon)] transition-transform hover:-translate-y-0.5"
          >
            View my work
          </a>
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
      <div className="order-1 mx-auto w-48 sm:w-60 md:order-2 md:w-full md:max-w-xs">
        <img
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          className="photo-enter aspect-[5/6] w-full rounded-2xl border object-cover shadow-[var(--shadow-neon)]"
        />
      </div>
    </section>
  );
}
