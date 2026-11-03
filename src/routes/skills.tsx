import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { skills } from "@/data/portfolio";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Thomas Vu" },
      { name: "description", content: "Technologies and practices Thomas Vu works with." },
      { property: "og:title", content: "Skills — Thomas Vu" },
      { property: "og:description", content: "Technologies and practices Thomas Vu works with." },
    ],
  }),
  component: Skills,
});

function Skills() {
  return (
    <Section index="03" title="Skills & tools">
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={(i % 2) * 120}>
            <div className="glass glass-hover h-full p-6">
              <h2 className="font-mono text-sm text-primary">{g.group}</h2>
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
