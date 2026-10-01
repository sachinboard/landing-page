import { Phone } from "lucide-react";
import type { ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";

import { WhatsAppIcon } from "@/components/landing/whatsapp-icon";
import { BUSINESS, whatsappHref } from "@/lib/business";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/tracking";

/**
 * The quote form is an anchor on the home page, so from any other page the
 * same call to action has to go to the home page first.
 */
export function useQuoteHref() {
  const { pathname } = useLocation();
  return pathname === "/" ? "#quote" : "/#quote";
}


const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold tracking-wide transition-colors disabled:pointer-events-none disabled:opacity-60";

export function QuoteButton({
  location,
  className,
  children = "Get a Free Quote",
}: {
  location: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      href="#quote"
      onClick={() => trackEvent("cta_click", { cta: "get_a_free_quote", location })}
      className={cn(base, "bg-brand text-brand-foreground hover:bg-brand/85", className)}
    >
      {children}
    </a>
  );
}

export function WhatsAppButton({
  location,
  className,
  variant = "light",
}: {
  location: string;
  className?: string;
  variant?: "light" | "dark";
}) {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { location })}
      className={cn(
        base,
        "border",
        variant === "dark"
          ? "border-ink/25 bg-transparent text-ink hover:bg-ink/5"
          : "border-ink-foreground/30 bg-transparent text-ink-foreground hover:bg-ink-foreground/10",
        className,
      )}
    >
      <WhatsAppIcon className="size-4 shrink-0" />
      WhatsApp Us
    </a>
  );
}

export function PhoneLink({ location, className }: { location: string; className?: string }) {
  return (
    <a
      href={`tel:${BUSINESS.phoneDial}`}
      onClick={() => trackEvent("phone_click", { location })}
      className={cn("inline-flex items-center gap-2 font-semibold hover:underline", className)}
    >
      <Phone aria-hidden="true" className="size-4 shrink-0" />
      {BUSINESS.phoneDisplay}
    </a>
  );
}
