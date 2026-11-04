import { BarChart3, Code2, Database, Filter, Network, Sheet, Sigma, Sparkles, type LucideIcon } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { skills, type SkillLevel } from "@/data/portfolio";

const icons: Record<string, LucideIcon> = { BarChart3, Code2, Database, Filter, Network, Sheet, Sigma, Sparkles };

const levels: Record<SkillLevel, { width: string; bar: string; text: string }> = {
  Proficient: { width: "85%", bar: "bg-primary", text: "text-primary" },
  Working: { width: "60%", bar: "bg-accent", text: "text-accent" },
  Basic: { width: "35%", bar: "bg-muted-foreground", text: "text-muted-foreground" },
};

/** Skill "inventory": one card per tool with an icon and a level bar. */
export function SkillsSection() {
  return (
    <Section id="skills" index="03" title="Skills & tools">
      <div className="glass p-4 sm:p-6">
        <p className="mb-4 font-mono text-xs text-muted-foreground">TOOLKIT — {skills.length} SKILLS</p>
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {skills.map((s, i) => {
            const Icon = icons[s.icon] ?? BarChart3;
            const lv = levels[s.level];
            return (
              <Reveal key={s.name} delay={(i % 4) * 80}>
                <li className="glass-hover flex h-full flex-col items-center rounded-xl border bg-secondary/60 p-4 text-center">
                  <Icon className={`h-8 w-8 ${lv.text}`} aria-hidden="true" />
                  <p className="mt-3 font-bold">{s.name}</p>
                  <p className={`font-mono text-[11px] ${lv.text}`}>{s.level}</p>
                  <p className="mt-2 flex-1 text-xs text-muted-foreground">{s.detail}</p>
                  <div className="mt-3 h-1.5 w-full rounded-full bg-background" aria-hidden="true">
                    <div className={`h-full rounded-full ${lv.bar}`} style={{ width: lv.width }} />
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ul>
        <ul className="mt-5 flex flex-wrap justify-center gap-4 font-mono text-xs text-muted-foreground" aria-label="Legend">
          {(Object.keys(levels) as SkillLevel[]).map((l) => (
            <li key={l} className="flex items-center gap-1.5">
              <span className={`inline-block h-2.5 w-2.5 rounded-sm ${levels[l].bar}`} aria-hidden="true" /> {l}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
