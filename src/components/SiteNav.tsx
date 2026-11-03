import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
] as const;

/** Sticky glass navigation with a mobile menu. */
export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 px-4 pt-4">
      <nav aria-label="Main" className="glass mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <Link to="/" className="font-mono text-sm font-bold tracking-tight">
          <span className="text-primary">&lt;</span>TV<span className="text-primary">/&gt;</span>
        </Link>
        <button
          className="font-mono text-sm text-muted-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "close" : "menu"}
        </button>
        <ul className="hidden gap-6 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary neon-glow" }}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul id="mobile-menu" className="glass page-enter mx-auto mt-2 flex max-w-5xl flex-col p-3 md:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-muted-foreground hover:text-primary" activeProps={{ className: "text-primary" }}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
