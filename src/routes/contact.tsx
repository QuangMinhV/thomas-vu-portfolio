import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Thomas Vu" },
      { name: "description", content: "Get in touch with Thomas Vu for projects and collaborations." },
      { property: "og:title", content: "Contact — Thomas Vu" },
      { property: "og:description", content: "Get in touch with Thomas Vu for projects and collaborations." },
    ],
  }),
  component: Contact,
});

const field = "w-full rounded-lg border bg-input/40 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none";

/** Contact form opens the visitor's mail client (no backend needed). */
function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = encodeURIComponent(`${d.get("message")}\n\n— ${d.get("name")} (${d.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Hello from your portfolio")}&body=${body}`;
    setSent(true);
  };

  return (
    <Section index="05" title="Let's talk">
      <div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <p className="text-lg text-muted-foreground">Have a project in mind or just want to say hi? My inbox is always open.</p>
          <a href={`mailto:${profile.email}`} className="text-gradient mt-6 block text-2xl font-bold">{profile.email}</a>
          <p className="mt-2 font-mono text-sm text-muted-foreground">{profile.location}</p>
          <ul className="mt-6 flex gap-4">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="font-mono text-sm text-muted-foreground hover:text-primary">{s.label}</a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <form onSubmit={onSubmit} className="glass space-y-4 p-6" aria-describedby={sent ? "form-status" : undefined}>
            <div>
              <label htmlFor="name" className="mb-1 block font-mono text-xs text-muted-foreground">Name</label>
              <input id="name" name="name" required maxLength={100} className={field} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block font-mono text-xs text-muted-foreground">Email</label>
              <input id="email" name="email" type="email" required maxLength={255} className={field} placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block font-mono text-xs text-muted-foreground">Message</label>
              <textarea id="message" name="message" required rows={5} maxLength={2000} className={field} placeholder="Tell me about your project…" />
            </div>
            <button type="submit" className="w-full rounded-full bg-primary py-3 font-medium text-primary-foreground shadow-[var(--shadow-neon)] transition-transform hover:-translate-y-0.5">
              Send message
            </button>
            {sent && <p id="form-status" role="status" className="text-center font-mono text-sm text-primary">Opening your email app…</p>}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
