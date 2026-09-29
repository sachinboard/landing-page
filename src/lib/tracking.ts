/**
 * Analytics hooks for GA4 / Google Tag Manager / Meta Pixel.
 *
 * No tracking IDs are hardcoded here on purpose. Once GTM, GA4 or the Meta
 * Pixel snippet is installed on the page, these helpers automatically forward
 * events to whichever of `dataLayer`, `gtag` and `fbq` exist. Until then they
 * are harmless no-ops (and log in dev so events can be verified).
 */

type Params = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
] as const;

export type Attribution = Partial<Record<(typeof ATTRIBUTION_KEYS)[number], string>>;

/**
 * Reads UTM/click IDs from the URL, persisting them for the whole session.
 *
 * Each parameter is stored under its own sessionStorage key (utm_source,
 * utm_medium, utm_campaign, utm_content, gclid, ...). A value present in the
 * URL updates its key; a value absent from the URL falls back to the stored
 * value — a stored value is never overwritten with an empty one.
 */
export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const attribution: Attribution = {};

  try {
    for (const key of ATTRIBUTION_KEYS) {
      const fromUrl = params.get(key);
      if (fromUrl) {
        const value = fromUrl.slice(0, 300);
        if (window.sessionStorage.getItem(key) !== value) {
          window.sessionStorage.setItem(key, value);
        }
      }
      const value = fromUrl ? fromUrl.slice(0, 300) : window.sessionStorage.getItem(key);
      if (value) attribution[key] = value;
    }
  } catch {
    // sessionStorage unavailable - fall back to whatever was in the URL.
    for (const key of ATTRIBUTION_KEYS) {
      const value = params.get(key);
      if (value) attribution[key] = value.slice(0, 300);
    }
  }

  return attribution;
}

/** Meta Pixel standard event names mapped from our internal event names. */
const META_EVENTS: Record<string, string> = {
  quote_form_started: "InitiateCheckout",
  quote_form_submitted: "Lead",
  lead_success: "Lead",
  whatsapp_click: "Contact",
  phone_click: "Contact",
};

export function trackEvent(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  const payload = { ...getAttribution(), ...params };

  window.dataLayer?.push({ event, ...payload });
  window.gtag?.("event", event, payload);

  const metaEvent = META_EVENTS[event];
  if (metaEvent) window.fbq?.("track", metaEvent, payload);

  if (import.meta.env.DEV) console.info("[track]", event, payload);
}
