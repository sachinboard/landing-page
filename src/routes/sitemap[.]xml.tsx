import { createFileRoute } from "@tanstack/react-router";

import { SITE_URL } from "@/lib/site";

// Indexable pages only. /thank-you and /privacy carry noindex and stay out here.
const PAGES = ["/", "/sign-boards", "/recent-work", "/google-reviews", "/faq"];

export const Route = createFileRoute("/sitemap[.]xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = PAGES.map(
          (path) => `  <url>\n    <loc>${SITE_URL}${path}</loc>\n  </url>`,
        ).join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
