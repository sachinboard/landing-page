import { createFileRoute, Link } from "@tanstack/react-router";

import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { BUSINESS } from "@/lib/business";
import { SITE_URL } from "@/lib/site";


const TITLE = "Privacy Policy | The Board Company";
const DESCRIPTION =
  "How The Board Company collects, uses and protects information on theboardcompany.in, including Meta Pixel measurement.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy` }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 md:py-14">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: September 2026
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-foreground/90">
          <section>
            <h2 className="text-lg font-semibold text-foreground">Who we are</h2>
            <p className="mt-2">
              {BUSINESS.name} ({BUSINESS.website}) manufactures and installs sign boards in{" "}
              {BUSINESS.city}. You can reach us at {BUSINESS.phoneDisplay} or on WhatsApp for any
              privacy question or request.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">What we collect</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>Enquiry details</strong> you type into our quote forms: name, phone
                number, email, business name, signage requirement and any optional details. We use
                them only to respond to your enquiry.
              </li>
              <li>
                <strong>Usage and advertising data</strong> collected automatically while you
                browse, as described below.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Meta Pixel (Meta Platforms)</h2>
            <p className="mt-2">
              This website uses the Meta Pixel, an analytics and advertising tool provided by Meta
              Platforms Ireland Ltd. It places a small piece of code on your browser that lets us
              measure and improve our ads on Facebook and Instagram.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>Data collected:</strong> pages you view on this site, actions such as
                clicking WhatsApp or call buttons and submitting a quote request, plus standard
                device and browser information (IP address, browser type, operating system) and
                cookies. On its own this does not identify you to us by name.
              </li>
              <li>
                <strong>Recipient:</strong> Meta Platforms (Facebook, Instagram), which may use
                this data subject to its own privacy policy (facebook.com/privacy/policy).
              </li>
              <li>
                <strong>Purposes:</strong> measuring the performance of our advertising campaigns
                (measurement), showing our signage services to people who visited this site
                (remarketing) and improving future ads (ad optimisation).
              </li>
            </ul>
            <p className="mt-2">
              You can opt out of Meta's use of cookies and pixel tracking through your browser
              settings, via the EU/US opt-out choices Meta offers in your account settings
              (Settings &gt; Ads), or by using browser extensions that block third-party trackers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">How we use your information</h2>
            <p className="mt-2">
              We use enquiry details to prepare and send your quote, and aggregate, non-identifying
              usage data to understand which pages and ads bring visitors to us. We do not sell
              your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Your choices</h2>
            <p className="mt-2">
              You may ask us at any time to access, correct or delete the enquiry details you
              shared, by calling {BUSINESS.phoneDisplay} or messaging us on WhatsApp. Browser-level
              controls (clearing cookies, blocking third-party cookies) stop the Pixel on your
              device.
            </p>
          </section>

          <p>
            <Link to="/" className="font-medium text-primary underline underline-offset-4">
              Back to home
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
