import { useState } from "react";
import { Github } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/portfolio";

const filters = ["All", "Power BI", "SQL"] as const;
type Filter = (typeof filters)[number];

const matches = (stack: string, f: Filter) => f === "All" || stack.includes(f);

/** Project gallery: image cards with a tool badge, filterable by stack. */
export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("All");
  const shown = projects.filter((p) => matches(p.stack, filter));

  return (
    <Section id="projects" index="02" title="Projects">
      <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-md border px-4 py-1.5 font-mono text-sm transition-colors ${
              filter === f
                ? "border-primary bg-primary text-primary-foreground"
                : "text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 100}>
            <li className="glass glass-hover flex h-full flex-col overflow-hidden">
              <div className="relative aspect-video overflow-hidden border-b">
                <img src={p.image} alt={`${p.title} preview`} loading="lazy" className="h-full w-full object-cover object-top" />
                <span className="absolute left-3 bottom-3 rounded bg-background/85 px-2 py-0.5 font-mono text-[11px] text-primary">
                  {p.stack}
                </span>
                <span className="absolute right-3 top-3 rounded border border-primary/60 bg-background/85 px-2 py-0.5 font-mono text-[11px] text-foreground">
                  {p.kind}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="font-mono text-xs text-muted-foreground">{p.date}</p>
                <h3 className="mt-1 text-lg font-bold leading-snug">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tools">
                  {p.tools.map((t) => (
                    <li key={t} className="rounded border px-2 py-0.5 font-mono text-[11px] text-muted-foreground">{t}</li>
                  ))}
                </ul>
              </div>
              <div className="border-t px-5 py-3 text-center">
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} on GitHub`}
                    className="inline-flex items-center gap-1.5 font-mono text-sm text-primary hover:underline"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" /> GitHub
                  </a>
                ) : (
                  <span className="font-mono text-sm text-muted-foreground">Academic team project</span>
                )}
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
