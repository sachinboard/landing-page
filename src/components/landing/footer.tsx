import logo from "@/assets/logo-wordmark.webp";
import { PhoneLink } from "@/components/landing/cta";
import { BUSINESS } from "@/lib/business";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-3 md:gap-8">
        <div className="min-w-0">
          <img
            src={logo}
            alt="The Board Company logo"
            width={200}
            height={65}
            loading="lazy"
            className="h-12 w-auto rounded bg-background px-3 py-1.5"
          />
          <p className="mt-4 text-sm text-ink-muted">
            Sign board manufacturing, design and installation in {BUSINESS.city}. ISO 9001:2005
            certified.
          </p>
        </div>

        <div className="min-w-0">
          <h2 className="text-xs font-bold tracking-[0.18em] text-brand uppercase">Contact</h2>
          <address className="mt-3 text-sm leading-relaxed text-ink-muted not-italic">
            {BUSINESS.address.line1}
            <br />
            {BUSINESS.address.line2}
          </address>
          <PhoneLink location="footer" className="mt-3 text-sm text-ink-foreground" />
          <p className="mt-2 text-sm text-ink-muted">{BUSINESS.hours}</p>
        </div>

        <div className="min-w-0">
          <h2 className="text-xs font-bold tracking-[0.18em] text-brand uppercase">More</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-muted">
            <li>
              <a href="#quote" className="hover:text-ink-foreground">
                Get a free quote
              </a>
            </li>
            <li>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink-foreground"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink-foreground"
              >
                Facebook
              </a>
            </li>
            <li>
              {/* Placeholder: replace with the published Privacy Policy URL. */}
              <span className="text-ink-muted/70">Privacy Policy - coming soon</span>
            </li>
            <li>
              {/* Placeholder: replace with the published Terms URL. */}
              <span className="text-ink-muted/70">Terms of Service - coming soon</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-ink-muted sm:px-6">
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
