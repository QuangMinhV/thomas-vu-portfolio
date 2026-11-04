/**
 * Animated mesh-gradient backdrop: large blurred blobs in the two neon colours
 * drift slowly behind the page. Pure CSS, so it is cheap and theme-aware
 * (colours come from --neon / --neon-2). Motion stops under reduced motion.
 */
export function GradientBackground() {
  return (
    <div aria-hidden="true" className="gradient-bg pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <span className="blob blob-1" />
      <span className="blob blob-2" />
      <span className="blob blob-3" />
      <span className="blob blob-4" />
    </div>
  );
}
