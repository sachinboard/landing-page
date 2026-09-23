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

const STORAGE_KEY = "tbc_attribution";

/** Reads UTM/click IDs from the URL, persisting them for the whole session. */
export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const fromUrl: Attribution = {};
  for (const key of ATTRIBUTION_KEYS) {
    const value = params.get(key);
    if (value) fromUrl[key] = value.slice(0, 300);
  }

  try {
    if (Object.keys(fromUrl).length > 0) {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
      return fromUrl;
    }
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Attribution) : {};
  } catch {
    return fromUrl;
  }
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
