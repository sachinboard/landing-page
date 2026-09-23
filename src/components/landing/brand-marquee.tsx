import goldsGym from "@/assets/brands/golds-gym.png.asset.json";
import fabricSpa from "@/assets/brands/fabric-spa.png.asset.json";
import skyGarden from "@/assets/brands/sky-garden.png.asset.json";
import ginza from "@/assets/brands/ginza.png.asset.json";

import { BRAND_CLIENTS } from "@/lib/business";

/** Logos supplied by the business. Brands without a logo file show as names. */
const LOGOS = [
  { name: "Gold's Gym", src: goldsGym.url },
  { name: "Fabric Spa", src: fabricSpa.url },
  { name: "Sky Garden", src: skyGarden.url },
  { name: "Ginza", src: ginza.url },
] as const;

const LOGO_NAMES = LOGOS.map((logo) => logo.name) as readonly string[];
const TEXT_ONLY = BRAND_CLIENTS.filter((brand) => !LOGO_NAMES.includes(brand));

type Item = { key: string; name: string; src?: string };

const ITEMS: Item[] = [
  ...LOGOS.map((logo) => ({ key: logo.name, name: logo.name, src: logo.src })),
  ...TEXT_ONLY.map((name) => ({ key: name, name })),
];

/** Continuous, slow-moving strip of client logos; pauses on hover. */
export function BrandMarquee() {
  const row = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee mt-3 overflow-hidden" aria-label="Brands we have worked with">
      <ul className="marquee-track flex w-max items-center gap-3">
        {row.map((item, index) => (
          <li
            key={`${item.key}-${index}`}
            aria-hidden={index >= ITEMS.length ? "true" : undefined}
            className="flex h-16 shrink-0 items-center justify-center rounded-md bg-white px-4"
          >
            {item.src ? (
              <img
                src={item.src}
                alt={`${item.name} logo`}
                loading="lazy"
                decoding="async"
                className="h-11 w-auto max-w-[8.5rem] object-contain"
              />
            ) : (
              <span className="text-xs font-semibold tracking-wide text-ink uppercase">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
