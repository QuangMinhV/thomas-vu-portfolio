import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { skills } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <Section id="skills" index="03" title="Skills & tools">
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={(i % 2) * 120}>
            <div className="glass glass-hover h-full p-6">
              <h3 className="font-mono text-sm text-primary">{g.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-lg bg-secondary px-3 py-1.5 text-sm">{s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
