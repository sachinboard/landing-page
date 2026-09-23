import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import shotDuck from "@/assets/ls-dizzy-duck.jpg";
import shotGym from "@/assets/ls-proj-3.jpg";
import shotPet from "@/assets/ls-proj-2d.jpg";
import shotLetters from "@/assets/ls-svc-videoboard.jpg";
import shotVideoWall from "@/assets/ls-svc-videowall.jpg";

const SLIDES: { src: string; alt: string }[] = [
  {
    src: shotDuck,
    alt: "3D gold channel letter sign board installed for Dizzy Duck restaurant in Bengaluru",
  },
  {
    src: shotGym,
    alt: "Large yellow 3D wall lettering installed inside Gold's Gym",
  },
  {
    src: shotPet,
    alt: "Black storefront sign board with white letters for Tug of Fur pet store and spa",
  },
  {
    src: shotLetters,
    alt: "Backlit LED letter signage glowing green and blue at night for Tree Suites",
  },
  {
    src: shotVideoWall,
    alt: "Large illuminated LED display board for a Go Kart entertainment venue at night",
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
                width={1200}
                height={900}
                loading={slideIndex === 0 ? "eager" : "lazy"}
                fetchPriority={slideIndex === 0 ? "high" : "low"}
                decoding="async"
                className="aspect-[4/3] w-full bg-ink object-cover"
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
