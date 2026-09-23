import { Star } from "lucide-react";

import { GOOGLE_REVIEWS } from "@/lib/business";

/** Google rating badge. Renders only when verified review data is configured. */
export function GoogleRating() {
  if (!GOOGLE_REVIEWS) return null;

  const { rating, count, profileUrl } = GOOGLE_REVIEWS;
  const full = Math.floor(rating);

  const content = (
    <>
      <span className="font-display text-base text-ink-foreground">{rating.toFixed(1)}</span>
      <span className="flex items-center gap-0.5" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((index) => (
          <Star
            key={index}
            className={
              index < full ? "size-4 fill-brand text-brand" : "size-4 text-ink-foreground/30"
            }
          />
        ))}
      </span>
      <span className="text-sm text-ink-muted">
        {count} Google reviews
      </span>
    </>
  );

  const className =
    "inline-flex flex-wrap items-center gap-2 rounded-md border border-ink-foreground/15 bg-ink-foreground/5 px-3 py-2";

  return (
    <div className="mt-5">
      {profileUrl ? (
        <a href={profileUrl} target="_blank" rel="noopener noreferrer" className={className}>
          {content}
        </a>
      ) : (
        <div className={className}>{content}</div>
      )}
      <span className="sr-only">
        Rated {rating.toFixed(1)} out of 5 from {count} Google reviews
      </span>
    </div>
  );
}
