import { QuoteButton, WhatsAppButton, PhoneLink } from "@/components/landing/cta";

export function FinalCta() {
  return (
    <section className="bg-brand text-brand-foreground">
      <div className="mx-auto max-w-4xl px-4 py-7 text-center sm:px-6 md:py-20">
        <h2 className="font-display text-2xl sm:text-4xl">
          Ready to get your sign board made?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-brand-foreground/85 sm:mt-4 sm:text-base">
          Share your requirement and our professional team will consult you on THE RIGHT BOARD and share a
          quotation.
        </p>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <QuoteButton
            location="final_cta"
            className="w-full bg-ink px-6 py-3.5 text-base text-ink-foreground hover:bg-ink/90 sm:w-auto"
          />
          <WhatsAppButton
            location="final_cta"
            variant="dark"
            className="w-full px-6 py-3.5 text-base sm:w-auto"
          />
        </div>
        <p className="mt-4 text-sm sm:mt-6">
          Or call us on <PhoneLink location="final_cta" className="underline" />
        </p>
      </div>
    </section>
  );
}
