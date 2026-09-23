import { BadgeCheck, MapPin } from "lucide-react";

import { BrandMarquee } from "@/components/landing/brand-marquee";
import { GoogleRating } from "@/components/landing/google-rating";
import { HeroQuoteForm } from "@/components/landing/hero-quote-form";
import { WhatsAppButton } from "@/components/landing/cta";
import { BUSINESS } from "@/lib/business";

export function Hero() {
  return (
    <section id="top" className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:items-start md:gap-12 md:py-16">
        <div className="min-w-0">
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold tracking-[0.18em] text-brand uppercase">
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck aria-hidden="true" className="size-4" /> ISO 9001:2005 Certified
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin aria-hidden="true" className="size-4" /> {BUSINESS.city}
            </span>
          </p>

          <h1 className="font-display mt-5 max-w-xl text-4xl leading-[1.12] sm:text-[2.75rem] lg:text-5xl">
            <span className="block">Custom sign boards that make your storefront</span>
            <span className="mt-3 block leading-[1.2]">
              <span className="highlight-mark text-brand-foreground">impossible to miss</span>
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            Design, manufacturing and installation handled end to end from our 5,000 sq. ft. facility
            in Bengaluru — LED, 3D, acrylic, channel letters and digital displays, built to your
            brand.
          </p>

          <GoogleRating />

          <p className="mt-6 text-xs font-bold tracking-[0.18em] text-brand uppercase">
            100+ Brands trust us
          </p>
          <BrandMarquee />

          <div className="mt-7">
            <WhatsAppButton location="hero" className="px-6 py-3.5 text-base" />
          </div>

          <p className="mt-5 text-sm text-ink-muted">
            5-year unconditional warranty · Service issues resolved in 48–72 hours
          </p>
        </div>

        <div id="hero-quote" className="min-w-0">
          <HeroQuoteForm />
        </div>
      </div>
    </section>
  );
}
