import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { TrustStrip } from "@/components/landing/trust-strip";
import { Services } from "@/components/landing/services";
import { WhyUs } from "@/components/landing/why-us";
import { Testimonials } from "@/components/landing/testimonials";
import { Portfolio } from "@/components/landing/portfolio";
import { Process } from "@/components/landing/process";
import { QuoteForm } from "@/components/landing/quote-form";
import { Faq, FAQS } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { StickyCta } from "@/components/landing/sticky-cta";
import { BUSINESS } from "@/lib/business";

const TITLE = "Custom LED & 3D Sign Boards in Bengaluru | The Board Company";
const DESCRIPTION =
  "ISO 9001:2005 certified sign board manufacturer in Bengaluru. Custom 3D, LED, acrylic and channel letter signage - designed, made and installed in-house. Get a free quote.";

// Structured data mirrors only what is stated on this page and published by the business.
const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
      url: BUSINESS.website,
      telephone: BUSINESS.phoneDisplay,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.address.line1,
        addressLocality: "Bengaluru",
        postalCode: "560094",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      areaServed: BUSINESS.serviceArea,
      sameAs: [BUSINESS.facebook, BUSINESS.instagram],
      openingHours: "Mo-Su 09:00-17:00",
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://signage.theboardcompany.in/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://signage.theboardcompany.in/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(STRUCTURED_DATA) },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="pb-[4.5rem] md:pb-0">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Portfolio />
        <WhyUs />
        <Testimonials />
        <Process />
        <QuoteForm />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
