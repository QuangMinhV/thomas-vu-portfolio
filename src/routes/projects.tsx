import { createFileRoute, redirect } from "@tanstack/react-router";

// The site is now a single scrolling page; old links like /projects jump to its section.
export const Route = createFileRoute("/projects")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "projects" });
  },
});
