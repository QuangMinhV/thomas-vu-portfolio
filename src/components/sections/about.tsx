import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { about, stats } from "@/data/portfolio";

export function AboutSection() {
  return (
    <Section id="about" index="01" title="About me">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          {about.map((p, i) => <Reveal key={i} delay={i * 120}><p>{p}</p></Reveal>)}
        </div>
        <ul className="grid gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <li className="glass glass-hover p-6">
                <p className="text-gradient text-4xl font-bold">{s.value}</p>
                <p className="mt-1 font-mono text-sm text-muted-foreground">{s.label}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
