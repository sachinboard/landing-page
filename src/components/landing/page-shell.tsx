import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { StickyCta } from "@/components/landing/sticky-cta";

/** Header, footer and sticky bar around a full page, matching the home page. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="pb-[4.5rem] md:pb-0">
      <Header />
      <main>{children}</main>
      <Footer />
      <StickyCta />
    </div>
  );
}

/** Page title block with a "Home / Section" breadcrumb that mirrors the JSON-LD. */
export function PageHeading({
  eyebrow,
  title,
  intro,
  section,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  section: string;
}) {
  return (
    <div className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-14">
        <nav aria-label="Breadcrumb" className="text-xs text-ink-muted">
          <Link to="/" className="hover:text-ink-foreground">
            Home
          </Link>
          <span aria-hidden="true" className="mx-2">
            /
          </span>
          <span className="text-ink-foreground">{section}</span>
        </nav>
        <p className="mt-5 text-xs font-bold tracking-[0.18em] text-brand uppercase">{eyebrow}</p>
        <h1 className="font-display mt-3 max-w-2xl text-2xl sm:text-4xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">{intro}</p>
      </div>
    </div>
  );
}
