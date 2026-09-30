import goldsGymSrc from "@/assets/brands/golds-gym-t.webp";
const goldsGym = { url: goldsGymSrc };
import fabricSpaSrc from "@/assets/brands/fabric-spa-t.webp";
const fabricSpa = { url: fabricSpaSrc };
import skyGardenSrc from "@/assets/brands/sky-garden-t.webp";
const skyGarden = { url: skyGardenSrc };
import ginzaSrc from "@/assets/brands/ginza-t.webp";
const ginza = { url: ginzaSrc };
import mumbaiCafeSrc from "@/assets/brands/mumbai-cafe.webp";
const mumbaiCafe = { url: mumbaiCafeSrc };
import skygardenBarSrc from "@/assets/brands/skygarden-bar.webp";
const skygardenBar = { url: skygardenBarSrc };
import teaDaySrc from "@/assets/brands/tea-day.webp";
const teaDay = { url: teaDaySrc };
import holeInTheWallSrc from "@/assets/brands/hole-in-the-wall.webp";
const holeInTheWall = { url: holeInTheWallSrc };
import chicStudioSrc from "@/assets/brands/chic-studio.webp";
const chicStudio = { url: chicStudioSrc };
import kHotelsSrc from "@/assets/brands/k-hotels.webp";
const kHotels = { url: kHotelsSrc };
import clarksInnSrc from "@/assets/brands/clarks-inn.webp";
const clarksInn = { url: clarksInnSrc };
import spinSrc from "@/assets/brands/spin.webp";
const spin = { url: spinSrc };
import gillysSrc from "@/assets/brands/gillys.webp";
const gillys = { url: gillysSrc };
import bubleeSrc from "@/assets/brands/bublee.webp";
const bublee = { url: bubleeSrc };
import dizzyDuckSrc from "@/assets/brands/dizzy-duck.webp";
const dizzyDuck = { url: dizzyDuckSrc };
import tugOfFurSrc from "@/assets/brands/tug-of-fur.webp";
const tugOfFur = { url: tugOfFurSrc };

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
