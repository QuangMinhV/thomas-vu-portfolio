import { useEffect, useRef } from "react";

/**
 * Canvas particle network (no dependencies).
 * Glowing particles in the two neon colours drift, link up when close, and
 * reach toward the mouse pointer. Respects reduced motion.
 */
export function ParticleBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Re-read the neon colours when the theme class on <html> changes.
    let neon = "cyan";
    let neon2 = "magenta";
    const readColours = () => {
      const s = getComputedStyle(document.documentElement);
      neon = s.getPropertyValue("--neon").trim() || "cyan";
      neon2 = s.getPropertyValue("--neon-2").trim() || "magenta";
    };
    readColours();
    const themeObserver = new MutationObserver(() => { readColours(); if (reduce) draw(); });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const LINK = 150; // max distance for particle-to-particle lines
    const REACH = 200; // max distance for lines to the pointer
    let w = 0, h = 0, raf = 0;
    const mouse = { x: -9999, y: -9999 };
    type P = { x: number; y: number; vx: number; vy: number; r: number; alt: boolean; phase: number };
    let pts: P[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(120, Math.max(40, Math.floor((w * h) / 11000)));
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
        r: 1.4 + Math.random() * 1.6,
        alt: Math.random() < 0.25, // a quarter of particles use the second neon colour
        phase: Math.random() * Math.PI * 2,
      }));
    };

    let t = 0;
    const draw = () => {
      t += 0.02;
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]!;
        if (!reduce) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
        }

        // Lines between nearby particles
        ctx.strokeStyle = neon;
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j]!;
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < LINK) {
            ctx.globalAlpha = (1 - d / LINK) * 0.35;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }

        // Lines to the pointer, slightly pulling particles toward it
        const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (dm < REACH) {
          ctx.strokeStyle = neon2;
          ctx.globalAlpha = (1 - dm / REACH) * 0.6;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
          if (!reduce) { p.x += (mouse.x - p.x) * 0.004; p.y += (mouse.y - p.y) * 0.004; }
        }

        // Glowing, gently pulsing dot
        const pulse = reduce ? 1 : 0.8 + 0.2 * Math.sin(t + p.phase);
        const colour = p.alt ? neon2 : neon;
        ctx.globalAlpha = 0.95;
        ctx.fillStyle = colour;
        ctx.shadowColor = colour;
        ctx.shadowBlur = 10;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r * pulse, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    resize(); draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10" />;
}
