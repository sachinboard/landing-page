import { BadgeCheck, Check, MapPin } from "lucide-react";

import { BrandMarquee } from "@/components/landing/brand-marquee";
import { GoogleRating } from "@/components/landing/google-rating";
import { HeroQuoteForm } from "@/components/landing/hero-quote-form";

export function Hero() {
  return (
    <section id="top" className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:items-stretch md:gap-12 md:py-16">
        <div className="flex min-w-0 flex-col md:justify-between">
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold tracking-[0.18em] text-brand uppercase">
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck aria-hidden="true" className="size-4" /> ISO 9001:2005 Certified
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin aria-hidden="true" className="size-4" />
            </span>
          </p>

          <h1 className="font-display mt-5 max-w-xl text-4xl leading-[1.12] sm:text-[2.75rem] lg:text-5xl">
            <span className="block">Custom sign boards that make your storefront</span>
            <span className="mt-3 block leading-[1.2]">
              <span className="highlight-mark text-brand-foreground">impossible to miss</span>
            </span>
          </h1>

          <ul className="mt-5 max-w-lg space-y-2.5 text-base leading-relaxed text-ink-muted sm:text-lg">
            {[
              "Design, manufacturing and installation handled end to end",
              "Service issues resolved in 48–72 hours",
              "LED, 3D, acrylic, channel letters and digital displays",
              "5-year unconditional warranty ",
            ].map((point) => (
              <li key={point} className="flex gap-2.5">
                <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <GoogleRating />

        </div>

        <div id="hero-quote" className="min-w-0">
          <HeroQuoteForm />
        </div>

        <div className="min-w-0 md:col-span-2">
          <p className="text-xs font-bold tracking-[0.18em] text-brand uppercase">
            100+ Brands trust us
          </p>
          <BrandMarquee />
        </div>
      </div>
    </section>
  );
}
