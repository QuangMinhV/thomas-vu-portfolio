import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <Section id="projects" index="02" title="Selected work">
      <ul className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 120}>
            <li className="glass glass-hover flex h-full flex-col p-6">
              <p className="font-mono text-xs text-primary">0{i + 1}</p>
              <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
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
