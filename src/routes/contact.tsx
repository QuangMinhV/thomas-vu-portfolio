import { createFileRoute, redirect } from "@tanstack/react-router";

// The site is now a single scrolling page; old links like /contact jump to its section.
export const Route = createFileRoute("/contact")({
  beforeLoad: () => {
    throw redirect({ to: "/", hash: "contact" });
  },
});
