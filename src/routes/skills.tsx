import { createFileRoute, redirect } from "@tanstack/react-router";

// The site is now a single scrolling page; old links like /skills jump to its section.
export const Route = createFileRoute("/skills")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "skills" });
  },
});
