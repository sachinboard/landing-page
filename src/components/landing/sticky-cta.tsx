import { MessageCircle } from "lucide-react";

import { whatsappHref } from "@/lib/business";
import { trackEvent } from "@/lib/tracking";

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
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-input px-4 py-3 text-sm font-bold text-ink"
        >
          <MessageCircle aria-hidden="true" className="size-4" />
          WhatsApp
        </a>
        <a
          href="#quote"
          onClick={() => trackEvent("cta_click", { cta: "get_a_free_quote", location: "sticky_bar" })}
          className="inline-flex flex-1 items-center justify-center rounded-md bg-brand px-4 py-3 text-sm font-bold text-brand-foreground"
        >
          Get a Free Quote
        </a>
      </div>
    </div>
  );
}
