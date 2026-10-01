import { createFileRoute } from "@tanstack/react-router";

import { PageHeading, PageShell } from "@/components/landing/page-shell";
import { PhoneLink, QuoteButton, WhatsAppButton } from "@/components/landing/cta";
import { SERVICES } from "@/components/landing/services";
import { STEPS } from "@/components/landing/process";
import { BRAND_CLIENTS, BUSINESS } from "@/lib/business";
import { breadcrumbLd, pageMeta } from "@/lib/site";

const PATH = "/sign-boards";
const TITLE = "Sign Board Manufacturing in Bengaluru | The Board Company";
const DESCRIPTION =
  "3D boards, 2D LED boards, aluminium channel letters, backlit lightboxes and neon signs - designed, manufactured and installed in-house by an ISO 9001:2005 certified team in Bengaluru.";

const INCLUDED = [
  {
    title: "Design and mockup before production",
    body: "We create a mockup from your design, with production starting after your approval.",
  },
  {
    title: "Made in our own facility",
    body: "Our 30-member design and production team works from our 5,000 sq. ft. facility.",
  },
  {
    title: "Installation by our own team",
    body: "Installation is done by our team, and we provide maintenance support after handover.",
  },
  {
    title: "5-year unconditional warranty",
    body: "Every board comes with a 5-year warranty, excluding physical damage.",
  },
  {
    title: "48-72 hour service response",
    body: "Signage issues are attended to and resolved within 48-72 hours.",
  },
  {
    title: "Written quotation",
    body: "Pricing depends on board type, size, materials and lighting, so you get a written quotation before we start.",
  },
];

export const Route = createFileRoute("/sign-boards")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Sign boards", path: PATH },
          ]),
        ),
      },
    ],
  }),
  component: SignBoardsPage,
});

function SignBoardsPage() {
  return (
    <PageShell>
      <PageHeading
        eyebrow="What we manufacture"
        section="Sign boards"
        title="Sign boards we manufacture in Bengaluru"
        intro="Every board is custom-made to your brand, measurements and lighting needs. We are an ISO 9001:2005 certified manufacturer working from our own 5,000 sq. ft. facility, and have completed over 2,000 signage projects for brands across Bengaluru since 2020."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-14">
          <h2 className="font-display text-2xl sm:text-3xl">The boards we build</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Each type below suits a different storefront, budget and lighting requirement. Tell us
            your site and we will advise which one works.
          </p>

          <div className="mt-6 grid gap-5 sm:mt-10 md:grid-cols-2 md:gap-6">
            {SERVICES.map((service) => (
              <article
                key={service.title}
                className="flex min-w-0 flex-col gap-4 rounded-xl border border-border bg-card p-4 shadow-sm sm:flex-row sm:p-5"
              >
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  decoding="async"
                  className={`h-40 w-full shrink-0 rounded-lg sm:h-32 sm:w-32 ${service.bg || "bg-muted"} ${
                    service.fit === "contain" ? "object-contain" : "object-cover"
                  }`}
                />
                <div className="min-w-0">
                  <h3 className="font-display text-lg text-ink md:text-xl">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.useCase}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-14">
          <h2 className="font-display text-2xl sm:text-3xl">What every board includes</h2>
          <ul className="mt-6 grid gap-x-8 gap-y-5 sm:mt-8 md:grid-cols-3">
            {INCLUDED.map((item) => (
              <li key={item.title} className="min-w-0 border-t-4 border-brand pt-3">
                <h3 className="font-bold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-14">
          <h2 className="font-display text-2xl sm:text-3xl">How your board gets made</h2>
          <ol className="mt-6 grid gap-5 sm:mt-8 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
            {STEPS.map((step, index) => (
              <li key={step.title} className="min-w-0 border-t-4 border-brand pt-4">
                <p className="font-display text-2xl text-brand-deep">0{index + 1}</p>
                <h3 className="mt-2 font-bold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-2">
            <div className="min-w-0">
              <h3 className="font-bold text-ink">How long does it take?</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Standard signboards take about 5 to 7 days to manufacture, after which we schedule
                installation. Larger or more complex projects are confirmed with you at the
                quotation stage.
              </p>
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-ink">What does a sign board cost?</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Pricing depends on the board type, size, materials and lighting, so we quote after
                understanding your requirement. Share your details and we will send a written
                quotation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-14">
          <h2 className="font-display text-2xl sm:text-3xl">
            Signage we have delivered across {BUSINESS.city}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            We are based in {BUSINESS.address.line2} and serve businesses across{" "}
            {BUSINESS.serviceArea}. Some of the brands we have made boards for:
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {BRAND_CLIENTS.map((brand) => (
              <li
                key={brand}
                className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-ink"
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-4 py-8 text-center sm:px-6 md:py-14">
          <h2 className="font-display text-2xl sm:text-3xl">
            Get a quote for your sign board
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Send us your artwork, site details and board placement. Our team will call you for a
            tele-consultation and a free written quotation.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <QuoteButton location="sign_boards_page" className="px-9 py-4 text-lg" />
            <WhatsAppButton location="sign_boards_page" variant="dark" className="px-6 py-4" />
          </div>
          <PhoneLink location="sign_boards_page" className="mt-5 justify-center text-sm" />
        </div>
      </section>
    </PageShell>
  );
}
