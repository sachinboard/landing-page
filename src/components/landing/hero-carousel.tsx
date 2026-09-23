import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import dizzyDuck from "@/assets/dizzy-duck.png.asset.json";
import shot3d from "@/assets/svc-3d.jpg";
import shotProj1 from "@/assets/proj-1.webp";
import shotChannel from "@/assets/proj-channel.webp";
import shotAcrylic from "@/assets/svc-videoled.webp";

const SLIDES: { src: string; alt: string }[] = [
  {
    src: dizzyDuck.url,
    alt: "3D gold channel letter sign board installed for Dizzy Duck restaurant in Bengaluru",
  },
  {
    src: shot3d,
    alt: "Illuminated 3D sign board with gold lettering on a green fascia",
  },
  {
    src: shotProj1,
    alt: "Custom storefront sign board manufactured and installed in Bengaluru",
  },
  {
    src: shotChannel,
    alt: "Aluminium channel letter signage fitted on a building facade",
  },
  {
    src: shotAcrylic,
    alt: "Backlit acrylic sign board for a cafe storefront",
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="min-w-0"
      role="region"
      aria-roledescription="carousel"
      aria-label="Recent signage projects"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-lg shadow-2xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((slide, slideIndex) => (
            <div
              key={slide.src}
              className="w-full shrink-0 grow-0 basis-full"
              aria-roledescription="slide"
              aria-label={`${slideIndex + 1} of ${SLIDES.length}`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                width={620}
                height={775}
                loading={slideIndex === 0 ? "eager" : "lazy"}
                fetchPriority={slideIndex === 0 ? "high" : "low"}
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous project photo"
          className="absolute top-1/2 left-3 grid -translate-y-1/2 size-10 place-items-center rounded-full bg-ink/70 text-ink-foreground transition-colors hover:bg-ink"
        >
          <ChevronLeft aria-hidden="true" className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next project photo"
          className="absolute top-1/2 right-3 grid -translate-y-1/2 size-10 place-items-center rounded-full bg-ink/70 text-ink-foreground transition-colors hover:bg-ink"
        >
          <ChevronRight aria-hidden="true" className="size-5" />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {SLIDES.map((slide, slideIndex) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => go(slideIndex)}
            aria-label={`Show project photo ${slideIndex + 1}`}
            aria-current={slideIndex === index ? "true" : undefined}
            className={
              slideIndex === index
                ? "h-2 w-7 rounded-full bg-brand transition-all"
                : "h-2 w-2 rounded-full bg-ink-muted/50 transition-all hover:bg-ink-muted"
            }
          />
        ))}
      </div>
    </div>
  );
}
