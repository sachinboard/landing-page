import { useEffect } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { PhoneLink, WhatsAppButton } from "@/components/landing/cta";
import { BUSINESS } from "@/lib/business";
import { consumeLeadSubmitted, trackEvent } from "@/lib/tracking";

/**
 * Traffic parameters are carried over from the landing page URL so ad-platform
 * conversion rules (GA4 / Google Ads / Meta) can still read them on this page.
 */
const CARRIED_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
] as const;

type ThankYouSearch = Partial<Record<(typeof CARRIED_KEYS)[number], string>> & {
  from?: "hero_form" | "quote_form" | undefined;
};

export const Route = createFileRoute("/thank-you")({
  validateSearch: (search: Record<string, unknown>): ThankYouSearch => {
    const next: ThankYouSearch = {};
    for (const key of CARRIED_KEYS) {
      const value = search[key];
      if (typeof value === "string" && value) next[key] = value.slice(0, 300);
    }
    const from = search["from"];
    if (from === "hero_form" || from === "quote_form") next.from = from;
    return next;
  },
  head: () => ({
    meta: [
      { title: "Thank You - Your Enquiry Is In | The Board Company" },
      {
        name: "description",
        content:
          "Thanks for contacting The Board Company, Bengaluru. Our signage team will call you to understand your requirement and prepare a quotation.",
      },
      // Conversion page: never index it and do not let it appear in search results.
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Thank You - Your Enquiry Is In | The Board Company" },
      {
        property: "og:description",
        content:
          "Your signage enquiry has reached The Board Company, Bengaluru. Our team will call you shortly.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ThankYouPage,
});

const NEXT_STEPS = [
  {
    title: "We call you",
    body: "Our team contacts you on the number you shared to understand the board, size and site conditions.",
  },
  {
    title: "Design & quotation",
    body: "You share artwork or we design it, and we send a mock-up with a written quotation for approval.",
  },
  {
    title: "Make & install",
    body: "On approval we manufacture the board and install it with our own team, backed by a 5-year warranty.",
  },
];

function ThankYouPage() {
  const { from } = Route.useSearch();

  useEffect(() => {
    if (!consumeLeadSubmitted()) return;
    trackEvent("thank_you_view", { form: from ?? "unknown" });
  }, [from]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-cream">
          <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 md:py-20">
            <span className="mx-auto grid size-16 place-items-center rounded-full bg-brand/25 sm:size-20">
              <CheckCircle2 aria-hidden="true" className="size-9 text-brand-deep sm:size-11" />
            </span>
            <h1 className="font-display mt-5 text-3xl text-ink sm:text-4xl">
              Thank you - your request is in
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Our team will call you on the number you shared to understand your signage
              requirement and prepare a written quotation. If it is urgent, message or call us
              directly.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{BUSINESS.hours}</p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton
                location="thank_you_page"
                variant="dark"
                className="w-full px-6 py-3.5 text-base sm:w-auto"
              />
              <PhoneLink location="thank_you_page" className="px-4 py-3 text-base text-ink" />
            </div>

            <p className="mt-8 text-xs font-bold tracking-[0.16em] text-brand-deep uppercase">
              ISO 9001:2005 certified - 5-year warranty - 2,000+ projects delivered
            </p>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-16">
            <h2 className="font-display text-2xl text-ink sm:text-3xl">What happens next</h2>
            <ol className="mt-6 grid gap-6 sm:mt-8 sm:grid-cols-3 md:gap-8">
              {NEXT_STEPS.map((step, index) => (
                <li key={step.title} className="min-w-0 border-t-4 border-brand pt-4">
                  <p className="font-display text-2xl text-brand-deep">0{index + 1}</p>
                  <h3 className="mt-2 font-bold text-ink">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8 border border-border bg-cream p-5 sm:mt-10 sm:p-6">
              <p className="text-sm font-bold text-ink">While you wait, see our recent work</p>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Boards manufactured and installed by our own team for businesses across Bengaluru.
              </p>
              <Link
                to="/"
                onClick={() => trackEvent("cta_click", { cta: "back_to_home", location: "thank_you_page" })}
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-deep hover:underline"
              >
                Back to the site
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
