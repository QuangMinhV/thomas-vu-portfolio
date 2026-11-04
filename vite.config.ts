// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Refresh the Projects section from the Thomas-s_portfolio repo once per production build,
// whatever command Vercel uses to run `vite build`.
let projectsFetched = false;
const fetchProjectsPlugin = {
  name: "fetch-projects-from-github",
  apply: "build" as const,
  async buildStart() {
    if (projectsFetched) return;
    projectsFetched = true;
    const { fetchProjects } = await import("./scripts/fetch-projects.mjs");
    await fetchProjects();
  },
};

export default defineConfig({
  vite: { plugins: [fetchProjectsPlugin] },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
