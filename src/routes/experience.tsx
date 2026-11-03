import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { experience } from "@/data/portfolio";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Thomas Vu" },
      { name: "description", content: "Work history of developer Thomas Vu." },
      { property: "og:title", content: "Experience — Thomas Vu" },
      { property: "og:description", content: "Work history of developer Thomas Vu." },
    ],
  }),
  component: Experience,
});

/** Vertical timeline of roles. */
function Experience() {
  return (
    <Section index="04" title="Experience">
      <ol className="relative space-y-8 border-l pl-6 md:pl-10">
        {experience.map((e, i) => (
          <li key={e.company} className="relative">
            <span aria-hidden="true" className="absolute -left-[31px] top-6 h-3 w-3 rounded-full bg-primary shadow-[var(--shadow-neon)] md:-left-[47px]" />
            <Reveal delay={i * 100}>
              <article className="glass glass-hover p-6">
                <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
                <h2 className="mt-1 text-xl font-bold">
                  {e.role} <span className="text-primary">@ {e.company}</span>
                </h2>
                <p className="mt-3 text-muted-foreground">{e.desc}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
