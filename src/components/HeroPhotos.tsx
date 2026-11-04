import { useEffect, useState } from "react";

type Photo = { src: string; alt: string };

/**
 * Hero photo slideshow: photos share one 3:4 frame (so nothing is cut off),
 * cross-fade with a slow zoom every few seconds, pause on hover, and can be
 * picked with the dots. The first photo fades in on page load.
 */
export function HeroPhotos({ photos, interval = 4500 }: { photos: Photo[]; interval?: number }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || photos.length < 2) return;
    const id = setInterval(() => setActive((i) => (i + 1) % photos.length), interval);
    return () => clearInterval(id);
  }, [paused, photos.length, interval]);

  return (
    <div
      className="photo-enter"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border shadow-[var(--shadow-neon)]">
        {photos.map((p, i) => (
          <img
            key={p.src}
            src={p.src}
            alt={p.alt}
            loading={i === 0 ? "eager" : "lazy"}
            aria-hidden={i !== active}
            className={`hero-slide absolute inset-0 h-full w-full object-cover ${i === active ? "is-active" : ""}`}
          />
        ))}
      </div>
      {photos.length > 1 && (
        <div className="mt-3 flex justify-center gap-2" role="group" aria-label="Choose photo">
          {photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              aria-label={`Show photo ${i + 1}: ${p.alt}`}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-6 bg-primary" : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
