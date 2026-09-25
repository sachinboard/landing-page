import { BadgeCheck, Factory, ShieldCheck, Timer, Wrench } from "lucide-react";

const REASONS = [
  {
    icon: BadgeCheck,
    title: "ISO 9001:2005 certified",
    body: "Quality-certified manufacturing processes - the certification The Board Company holds for its signage production in Bangalore.",
  },
  {
    icon: Factory,
    title: "Made in our own facility",
    body: "A 30-member team works out of a 5,000 sq. ft. workspace, so design, fabrication and finishing stay under one roof.",
  },
  {
    icon: ShieldCheck,
    title: "5-year unconditional warranty",
    body: "Every board we manufacture carries an unconditional 5-year warranty (Excludes physical damage).",
  },
  {
    icon: Timer,
    title: "48–72 hour service response",
    body: "If something goes wrong with your signage, issues are attended to and resolved within 48 to 72 hours.",
  },
  {
    icon: Wrench,
    title: "Installation & maintenance  included",
    body: "We install the signage efficiently with the help of active design & logistics field agents",
  },
  {
    icon: Factory,
    title: "Built on 2,000+ projects",
    body: "Since 2020 - after two years of R&D - we have completed over 2,000 signage projects for brands across Bengaluru.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-xs font-bold tracking-[0.18em] text-brand-deep uppercase">
          Why businesses choose us
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl sm:text-4xl">
          Claims we can actually back up
        </h2>

        <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
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
