import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";

import { PageHeading, PageShell } from "@/components/landing/page-shell";
import { PhoneLink, QuoteButton, WhatsAppButton } from "@/components/landing/cta";
import { REVIEWS } from "@/components/landing/testimonials";
import { BUSINESS, GOOGLE_REVIEWS } from "@/lib/business";
import { breadcrumbLd, pageMeta } from "@/lib/site";

const PATH = "/google-reviews";
const TITLE = "Google Reviews | The Board Company - Sign Board Makers in Bengaluru";
const DESCRIPTION =
  "Read what cafe, restaurant, gym, school and office owners in Bengaluru say about our sign boards, installation and after-sales service.";

export const Route = createFileRoute(PATH)({
  head: () => ({
    ...pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Google reviews", path: PATH },
          ]),
        ),
      },
    ],
  }),
  component: GoogleReviewsPage,
});

function GoogleReviewsPage() {
  return (
    <PageShell>
      <PageHeading
        eyebrow="Google reviews"
        section="Google reviews"
        title="What our clients say about our sign boards"
        intro={`Our Google listing holds ${GOOGLE_REVIEWS?.rating} stars from ${GOOGLE_REVIEWS?.count} reviews. Here are some of the reviews left by businesses we have made boards for.`}
      />

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-14">
          <ul className="grid gap-5 sm:mt-2 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {REVIEWS.map((review) => (
              <li key={review.name} className="min-w-0">
                <article className="flex h-full flex-col rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm">
                  <header className="flex items-center gap-3">
                    {review.photo ? (
                      <img
                        src={review.photo}
                        alt=""
                        width={48}
                        height={48}
                        loading="lazy"
                        className="size-12 rounded-full"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="grid size-12 place-items-center rounded-full bg-brand text-lg font-bold text-brand-foreground"
                      >
                        {review.name[0]}
                      </span>
                    )}
                    <div className="min-w-0">
                      <h2 className="font-bold">{review.name}</h2>
                      <p className="text-xs text-muted-foreground">{review.when} - Google</p>
                    </div>
                  </header>
                  <div className="mt-4 flex gap-0.5" aria-label="5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        aria-hidden="true"
                        className="size-4 fill-brand text-brand-deep"
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-8 text-center sm:px-6 md:py-14">
          <h2 className="font-display text-2xl sm:text-3xl">
            Join the {GOOGLE_REVIEWS?.count} businesses who rated us{" "}
            {GOOGLE_REVIEWS?.rating} stars
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Tell us what you need and our team will call you for a tele-consultation and a free
            written quotation.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <QuoteButton location="reviews_page" className="px-9 py-4 text-lg" />
            <WhatsAppButton location="reviews_page" variant="dark" className="px-6 py-4" />
          </div>
          <PhoneLink location="reviews_page" className="mt-5 justify-center text-sm" />
          <p className="mt-6 text-xs text-muted-foreground">
            {BUSINESS.name} - {BUSINESS.address.line1}, {BUSINESS.address.line2}. {BUSINESS.hours}.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
