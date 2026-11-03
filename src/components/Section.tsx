import type { ReactNode } from "react";

/** Page section with numbered mono eyebrow + heading. `id` is the anchor the nav scrolls to. */
export function Section({ id, index, title, children }: { id: string; index: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-5xl scroll-mt-24 px-5 py-16 md:py-24">
      <div className="stagger mb-10">
        <p className="font-mono text-sm text-primary">{index} //</p>
        <h2 id={`${id}-title`} className="mt-2 text-4xl font-bold tracking-tight md:text-6xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
