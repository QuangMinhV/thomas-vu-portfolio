import type { ReactNode } from "react";

/** Standard page section with numbered mono eyebrow + heading. */
export function Section({ index, title, children }: { index: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby="page-title" className="mx-auto max-w-5xl px-5 py-16 md:py-24">
      <div className="stagger mb-10">
        <p className="font-mono text-sm text-primary">{index} //</p>
        <h1 id="page-title" className="mt-2 text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
      </div>
      {children}
    </section>
  );
}
