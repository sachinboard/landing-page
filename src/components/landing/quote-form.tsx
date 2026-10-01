import { ShieldCheck } from "lucide-react";

import { HeroQuoteForm } from "@/components/landing/hero-quote-form";

/**
 * Lower quote section. Uses the exact same form as the banner, so both send
 * leads to the same Google Sheet through the existing Apps Script.
 */
export function QuoteForm() {
  return (
    <section id="quote" className="bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 md:py-20">
        <h2 className="font-display text-2xl sm:text-4xl">
          Get a Custom Quote for Your Business Signage
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
          Tell us what you need and our professional team will call you for tele-consultation and a free quotation.
          Takes under a minute.
        </p>
        <p className="mt-3 flex items-start gap-2 text-xs font-semibold leading-relaxed text-brand-deep sm:mt-4 sm:items-center sm:text-sm">
          <ShieldCheck aria-hidden="true" className="size-4 shrink-0" />
          ISO 9001:2005 certified · 5-year warranty · 2,000+ projects delivered
        </p>

        <div className="mt-5 rounded-xl border border-border sm:mt-8">
          <HeroQuoteForm idPrefix="quote" location="quote_form" showHeading={false} />
        </div>
      </div>
    </section>
  );
}
