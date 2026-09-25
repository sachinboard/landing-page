import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BUSINESS } from "@/lib/business";

export const FAQS = [
  {
    q: "Can the sign board be fully customised to my brand?",
    a: "Yes. Every board is made to your own artwork, colours, size and site conditions. We manufacture 3D boards, 2D LED boards, acrylic boards, aluminium channel letters, fabric backlit lightboxes and digital LED displays.",
  },
  {
    q: "How long does a sign board take?",
    a: "Standard signboards take about 5 to 7 days to manufacture, after which we schedule installation. Larger or more complex projects are confirmed with you at the quotation stage.",
  },
  {
    q: "Do you handle installation as well?",
    a: "Yes. Installation is done by our own team, and we provide maintenance support after handover.",
  },
  {
    q: "What does a sign board cost?",
    a: "Pricing depends on the board type, size, materials and lighting, so we quote after understanding your requirement. Share your details and we will send a written quotation.",
  },
  {
    q: "Which areas do you serve?",
    a: `We are based in ${BUSINESS.city} and serve businesses across ${BUSINESS.serviceArea}.`,
  },
  {
    q: "Are LED sign boards expensive to run?",
    a: "No. LED sign boards are energy-efficient, which keeps running costs low compared to older lighting options.",
  },
  {
    q: "What happens if something goes wrong with the board?",
    a: "Our boards carry an unconditional 5-year warranty, and service issues are attended to and resolved within 48 to 72 hours.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-xs font-bold tracking-[0.18em] text-brand-deep uppercase">
          Common questions
        </p>
        <h2 className="font-display mt-3 text-3xl sm:text-4xl">Before you enquire</h2>

        <Accordion type="single" collapsible className="mt-8">
          {FAQS.map((faq, index) => (
            <AccordionItem key={faq.q} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-bold text-ink">
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
  );
}
