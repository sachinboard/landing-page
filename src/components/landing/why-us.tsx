import { BadgeCheck, Factory, ShieldCheck, Timer, Wrench } from "lucide-react";

const REASONS = [
  {
    icon: BadgeCheck,
    title: "ISO 9001:2005 certified",
    body: "Quality-certified signage manufacturing in Bangalore.",
  },
  {
    icon: Factory,
    title: "Made in our own facility",
    body: "30-member team working from our 5,000 sq. ft. facility.",
  },
  {
    icon: ShieldCheck,
    title: "5-year unconditional warranty",
    body: "Every board comes with a 5-year warranty, excluding physical damage.",
  },
  {
    icon: Timer,
    title: "48–72 hour service response",
    body: "Signage issues are attended to and resolved within 48–72 hours.",
  },
  {
    icon: Wrench,
    title: "Full Installation & maintenance  ",
    body: "Professional installation with dedicated design, logistics and field support.",
  },
  {
    icon: Factory,
    title: "2000+ projects delivered",
    body: "Over 2,000 signage projects completed for brands across Bengaluru since 2020.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-20">
        <p className="text-xs font-bold tracking-[0.18em] text-brand-deep uppercase">
          Why businesses choose us
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-2xl sm:text-4xl">
          Claims we can actually back up
        </h2>

        <ul className="mt-5 grid gap-x-8 gap-y-5 sm:mt-10 md:gap-y-8 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <li key={reason.title} className="flex min-w-0 gap-4">
              <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-md bg-brand text-brand-foreground">
                <reason.icon aria-hidden="true" className="size-5" />
              </span>
              <div className="min-w-0">
                <h3 className="font-bold text-ink">{reason.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{reason.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
