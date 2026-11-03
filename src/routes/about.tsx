import { createFileRoute, redirect } from "@tanstack/react-router";

// The site is now a single scrolling page; old links like /about jump to its section.
export const Route = createFileRoute("/about")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "about" });
  },
});
