import { createFileRoute } from "@tanstack/react-router";

import { PageHeading, PageShell } from "@/components/landing/page-shell";
import { PhoneLink, QuoteButton, WhatsAppButton } from "@/components/landing/cta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/components/landing/faq";
import { BUSINESS } from "@/lib/business";
import { breadcrumbLd, pageMeta } from "@/lib/site";

const PATH = "/faq";
const TITLE = "Sign Board Questions Answered | The Board Company";
const DESCRIPTION =
  "Customisation, manufacturing time, installation, pricing, warranty and service areas for sign boards in Bengaluru - answered by The Board Company.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "FAQ", path: PATH },
          ]),
        ),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <PageShell>
      <PageHeading
        eyebrow="Common questions"
        section="FAQ"
        title="Sign board questions, answered"
        intro="What businesses ask us before ordering a board - customisation, timing, cost, installation, warranty and the areas we cover."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 md:py-14">
          <Accordion type="single" collapsible className="mt-2">
            {FAQS.map((faq, index) => (
              <AccordionItem key={faq.q} value={`item-${index}`}>
                <AccordionTrigger className="py-3 text-left text-sm font-bold text-ink sm:py-4 sm:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-8 text-center sm:px-6 md:py-14">
          <h2 className="font-display text-2xl sm:text-3xl">Still have a question?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Message us on WhatsApp with your site details, or send the enquiry form and our team
            will call you back.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <QuoteButton location="faq_page" className="px-9 py-4 text-lg" />
            <WhatsAppButton location="faq_page" variant="dark" className="px-6 py-4" />
          </div>
          <PhoneLink location="faq_page" className="mt-5 justify-center text-sm" />
          <p className="mt-6 text-xs text-muted-foreground">
            {BUSINESS.name} - {BUSINESS.address.line1}, {BUSINESS.address.line2}. {BUSINESS.hours}.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
