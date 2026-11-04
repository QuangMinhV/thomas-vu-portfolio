import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { education, experience } from "@/data/portfolio";

/** Vertical timeline of work history, followed by education. */
export function ExperienceSection() {
  return (
    <Section id="experience" index="04" title="Experience">
      <ol className="relative space-y-6 border-l pl-6 md:pl-10">
        {experience.map((e, i) => (
          <li key={e.company} className="relative">
            <span aria-hidden="true" className="absolute -left-[31px] top-6 h-3 w-3 rounded-full bg-primary shadow-[var(--shadow-neon)] md:-left-[47px]" />
            <Reveal delay={i * 100}>
              <article className="glass glass-hover p-6">
                <p className="font-mono text-xs text-muted-foreground">
                  {e.period} · {e.location}
                </p>
                <h3 className="mt-1 text-xl font-bold">
                  {e.role} <span className="text-primary">@ {e.company}</span>
                </h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-muted-foreground marker:text-primary">
                  {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>

      <h3 className="mt-14 mb-6 font-mono text-sm text-primary">Education</h3>
      <ul className="grid gap-6 md:grid-cols-2">
        {education.map((ed, i) => (
          <Reveal key={ed.school} delay={i * 100}>
            <li className="glass glass-hover h-full p-6">
              <p className="font-mono text-xs text-muted-foreground">
                {ed.period} · {ed.location}
              </p>
              <p className="mt-1 text-lg font-bold">{ed.degree}</p>
              <p className="text-primary">{ed.school}</p>
              {ed.note && <p className="mt-2 text-sm text-muted-foreground">{ed.note}</p>}
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
