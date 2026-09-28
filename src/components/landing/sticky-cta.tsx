import { Phone } from "lucide-react";

import { WhatsAppIcon } from "@/components/landing/whatsapp-icon";
import { BUSINESS, whatsappHref } from "@/lib/business";
import { trackEvent } from "@/lib/tracking";

const iconButton =
  "inline-flex size-12 shrink-0 items-center justify-center rounded-md border border-input text-ink";

/** Compact mobile-only action bar. Hidden on md+ where inline CTAs are visible. */
export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-3 py-2.5 backdrop-blur md:hidden">
      <div className="flex items-center gap-2">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { location: "sticky_bar" })}
          aria-label="Message us on WhatsApp"
          title="Message us on WhatsApp"
          className={iconButton}
        >
          <WhatsAppIcon className="size-5" />
        </a>
        <a
          href={`tel:${BUSINESS.phoneDial}`}
          onClick={() => trackEvent("phone_click", { location: "sticky_bar" })}
          aria-label={`Call ${BUSINESS.phoneDisplay}`}
          title={`Call ${BUSINESS.phoneDisplay}`}
          className={iconButton}
        >
          <Phone aria-hidden="true" className="size-5" />
        </a>
        <a
          href="#quote"
          onClick={() => trackEvent("cta_click", { cta: "get_a_free_quote", location: "sticky_bar" })}
          className="inline-flex h-12 flex-1 items-center justify-center rounded-md bg-brand px-3 text-sm font-bold text-brand-foreground"
        >
          Get a Free Quote
        </a>
      </div>
    </div>
  );
}
