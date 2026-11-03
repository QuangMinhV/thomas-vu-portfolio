import { createFileRoute, redirect } from "@tanstack/react-router";

// The site is now a single scrolling page; old links like /experience jump to its section.
export const Route = createFileRoute("/experience")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "experience" });
  },
});
