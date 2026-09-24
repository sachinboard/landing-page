const STEPS = [
  {
    title: "Share your requirement",
    body: "Send us your brand artwork, the shop or office frontage details and where the board has to go.",
  },
  {
    title: "Consultation & site inputs",
    body: "Our team advises on the right board type, material and lighting for your location and takes accurate measurements.",
  },
  {
    title: "Design & quotation",
    body: "You get a design proposal with a written quote, so you approve exactly what will be manufactured.",
  },
  {
    title: "Production & installation",
    body: "Standard signboards are manufactured in 5–7 days, then installed by our own team with warranty and maintenance support.",
  },
];

export function Process() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-xs font-bold tracking-[0.18em] text-brand-deep uppercase">
          How it works
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl sm:text-4xl">
          From enquiry to installed board
        </h2>

        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li key={step.title} className="min-w-0 border-t-4 border-brand pt-4">
              <p className="font-display text-3xl text-brand-deep">0{index + 1}</p>
              <h3 className="mt-2 font-bold text-ink">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
