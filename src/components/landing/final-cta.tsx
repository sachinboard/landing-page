import { QuoteButton, WhatsAppButton, PhoneLink } from "@/components/landing/cta";

export function FinalCta() {
  return (
    <section className="bg-brand text-brand-foreground">
      <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 md:py-20">
        <h2 className="font-display text-3xl sm:text-4xl">
          Ready to get your sign board made?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-brand-foreground/85">
          Share your requirement and our Bengaluru team will advise on the right board and send you a
          quotation.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
        <p className="mt-6 text-sm">
          Or call us on <PhoneLink location="final_cta" className="underline" />
        </p>
      </div>
    </section>
  );
}
