import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

export const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

/** Highlights the section currently in the middle band of the viewport. */
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter((el): el is HTMLElement => !!el);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    // Clear the highlight when scrolled back up to the hero.
    const onScroll = () => {
      const first = els[0];
      if (first && window.scrollY < first.offsetTop - window.innerHeight / 2) setActive(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return active;
}

/** Sticky glass navigation with a mobile menu; links scroll to sections on the single page. */
export function SiteNav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const linkClass = (id: string) => (active === id ? "text-primary neon-glow" : "text-muted-foreground");

  return (
    <header className="sticky top-0 z-40 px-4 pt-4">
      <nav aria-label="Main" className="glass mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <a href="/#top" className="text-base font-bold tracking-tight">
          Thomas Vu<span className="text-primary">.</span>
        </a>
        <div className="flex items-center gap-3 md:hidden">
        <ThemeToggle />
        <button
          className="font-mono text-sm text-muted-foreground"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "close" : "menu"}
        </button>
        </div>
        <ul className="hidden items-center gap-6 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`/#${s.id}`}
                aria-current={active === s.id ? "true" : undefined}
                className={`text-sm transition-colors hover:text-primary ${linkClass(s.id)}`}
              >
                {s.label}
              </a>
            </li>
          ))}
          <li><ThemeToggle /></li>
        </ul>
      </nav>
      {open && (
        <ul id="mobile-menu" className="glass page-enter mx-auto mt-2 flex max-w-5xl flex-col p-3 md:hidden">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`/#${s.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2 hover:text-primary ${linkClass(s.id)}`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
