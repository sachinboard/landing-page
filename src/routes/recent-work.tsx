import { createFileRoute } from "@tanstack/react-router";

import { PageHeading, PageShell } from "@/components/landing/page-shell";
import { PhoneLink, QuoteButton, WhatsAppButton } from "@/components/landing/cta";
import { PROJECTS } from "@/components/landing/portfolio";
import { BRAND_CLIENTS, BUSINESS } from "@/lib/business";
import { breadcrumbLd, pageMeta } from "@/lib/site";

const PATH = "/recent-work";
const TITLE = "Recent Sign Board Projects in Bengaluru | The Board Company";
const DESCRIPTION =
  "Boards we have built and installed in Bengaluru, including work for Gold's Gym, Gilly's Super Bar, Grovies, D'Naples Pizza, Taste of Bihar and Fit24 Fitness Club.";

export const Route = createFileRoute("/recent-work")({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Recent work", path: PATH },
          ]),
        ),
      },
    ],
  }),
  component: RecentWorkPage,
});

function RecentWorkPage() {
  return (
    <PageShell>
      <PageHeading
        eyebrow="Recent work"
        section="Recent work"
        title="Sign boards we have built and installed"
        intro="Every board below was designed, manufactured and installed by our own team in Bengaluru. No stock images and no outsourced work - just boards standing at real businesses."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-14">
          <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <li key={project.caption} className="min-w-0">
                <figure>
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    decoding="async"
                    className={`aspect-[4/3] w-full rounded-lg bg-muted/40 ${
                      project.contain ? "object-contain" : "object-cover"
                    }`}
                  />
                  <figcaption className="mt-2 text-sm font-semibold text-ink">
                    {project.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-14">
          <h2 className="font-display text-2xl sm:text-3xl">Brands we work with</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Restaurants, cafés, bars, gyms, salons, hotels and schools across {BUSINESS.serviceArea}{" "}
            - over 2,000 projects completed since 2020.
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
          <h2 className="font-display text-2xl sm:text-3xl">Want a board like these?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Share your requirement and we will advise the right signage solution for your site,
            with a free written quotation.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <QuoteButton location="recent_work_page" className="px-9 py-4 text-lg" />
            <WhatsAppButton location="recent_work_page" variant="dark" className="px-6 py-4" />
          </div>
          <PhoneLink location="recent_work_page" className="mt-5 justify-center text-sm" />
        </div>
      </section>
    </PageShell>
  );
}
