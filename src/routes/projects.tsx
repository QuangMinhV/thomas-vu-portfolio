import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Thomas Vu" },
      { name: "description", content: "Selected projects built by Thomas Vu." },
      { property: "og:title", content: "Projects — Thomas Vu" },
      { property: "og:description", content: "Selected projects built by Thomas Vu." },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <Section index="02" title="Selected work">
      <ul className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 120}>
            <li className="glass glass-hover flex h-full flex-col p-6">
              <p className="font-mono text-xs text-primary">0{i + 1}</p>
              <h2 className="mt-2 text-2xl font-bold">{p.title}</h2>
              <p className="mt-3 flex-1 text-muted-foreground">{p.desc}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-full border px-3 py-1 font-mono text-xs text-muted-foreground">{t}</li>
                ))}
              </ul>
              <a href={p.href} className="mt-5 font-mono text-sm text-primary hover:underline" aria-label={`View ${p.title}`}>
                view project →
              </a>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
