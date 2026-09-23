import { BRAND_CLIENTS } from "@/lib/business";

/**
 * Continuous, paused-on-hover strip of client brand names.
 * Names only — no logo files have been supplied by the business.
 */
export function BrandMarquee() {
  const row = [...BRAND_CLIENTS, ...BRAND_CLIENTS];

  return (
    <div className="marquee mt-3 overflow-hidden" aria-label="Brands we have worked with">
      <ul className="marquee-track flex w-max items-center gap-3">
        {row.map((brand, index) => (
          <li
            key={`${brand}-${index}`}
            aria-hidden={index >= BRAND_CLIENTS.length ? "true" : undefined}
            className="shrink-0 rounded-md border border-ink-foreground/15 bg-ink-foreground/5 px-3.5 py-2 text-xs font-semibold tracking-wide text-ink-foreground/80 uppercase"
          >
            {brand}
          </li>
        ))}
      </ul>
    </div>
  );
}
