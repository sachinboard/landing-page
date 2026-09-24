import goldsGym from "@/assets/brands/golds-gym-t.png.asset.json";
import fabricSpa from "@/assets/brands/fabric-spa-t.png.asset.json";
import skyGarden from "@/assets/brands/sky-garden-t.png.asset.json";
import ginza from "@/assets/brands/ginza-t.png.asset.json";
import mumbaiCafe from "@/assets/brands/mumbai-cafe.png.asset.json";
import skygardenBar from "@/assets/brands/skygarden-bar.png.asset.json";
import teaDay from "@/assets/brands/tea-day.png.asset.json";
import holeInTheWall from "@/assets/brands/hole-in-the-wall.png.asset.json";
import chicStudio from "@/assets/brands/chic-studio.png.asset.json";
import kHotels from "@/assets/brands/k-hotels.png.asset.json";
import clarksInn from "@/assets/brands/clarks-inn.png.asset.json";
import spin from "@/assets/brands/spin.png.asset.json";
import gillys from "@/assets/brands/gillys.png.asset.json";
import bublee from "@/assets/brands/bublee.png.asset.json";
import dizzyDuck from "@/assets/brands/dizzy-duck.png.asset.json";
import tugOfFur from "@/assets/brands/tug-of-fur.png.asset.json";

import { BRAND_CLIENTS } from "@/lib/business";
import { cn } from "@/lib/utils";

/** Logos supplied by the business. Brands without a logo file show as names. */
const LOGOS = [
  { name: "Gold's Gym", src: goldsGym.url },
  { name: "Fabric Spa", src: fabricSpa.url },
  { name: "Sky Garden", src: skyGarden.url },
  // Single-colour black logo - inverted so it reads on the dark banner.
  { name: "Ginza", src: ginza.url, invert: true },
  { name: "1966 The Mumbai Cafe", src: mumbaiCafe.url },
  { name: "Skygarden Bar & Kitchen", src: skygardenBar.url },
  { name: "Tea Day", src: teaDay.url },
  { name: "Hole In The Wall Cafe", src: holeInTheWall.url },
  { name: "The Chic Studio", src: chicStudio.url },
  { name: "K Hotels", src: kHotels.url },
  { name: "Clark's Inn", src: clarksInn.url },
  { name: "Spin Salon", src: spin.url },
  { name: "Gilly's", src: gillys.url },
  { name: "Bublee", src: bublee.url },
  { name: "Dizzy Duck", src: dizzyDuck.url },
  { name: "Tug of Fur", src: tugOfFur.url },
] as const;

const LOGO_NAMES = LOGOS.map((logo) => logo.name) as readonly string[];
const TEXT_ONLY = BRAND_CLIENTS.filter((brand) => !LOGO_NAMES.includes(brand));

type Item = { key: string; name: string; src?: string; invert?: boolean };

const ITEMS: Item[] = [
  ...LOGOS.map((logo) => ({
    key: logo.name,
    name: logo.name,
    src: logo.src,
    invert: "invert" in logo ? logo.invert : false,
  })),
  ...TEXT_ONLY.map((name) => ({ key: name, name })),
];

/** Continuous, slow-moving strip of client logos; pauses on hover. */
export function BrandMarquee() {
  const row = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee mt-3 overflow-hidden" aria-label="Brands we have worked with">
      <ul className="marquee-track flex w-max items-center gap-8">
        {row.map((item, index) => (
          <li
            key={`${item.key}-${index}`}
            aria-hidden={index >= ITEMS.length ? "true" : undefined}
            className="flex h-14 shrink-0 items-center justify-center"
          >
            {item.src ? (
              <img
                src={item.src}
                alt={`${item.name} logo`}
                loading="lazy"
                decoding="async"
                className={cn(
                  "h-11 w-auto max-w-[8.5rem] rounded object-contain",
                  item.invert && "brightness-0 invert",
                )}
              />
            ) : (
              <span className="text-xs font-semibold tracking-wide text-ink-foreground/75 uppercase">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
