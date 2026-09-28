const FACTS = [
  { value: "ISO 9001:2005", label: "Certified signage manufacturer" },
  { value: "5-year", label: "Unconditional warranty on our boards" },
  { value: "30", label: "In-house design & production team" },
  { value: "5,000 sq. ft.", label: "Manufacturing facility in Bengaluru" },
  { value: " SERVICE ", label: " Resolved in 48–72 hours" },
];

export function TrustStrip() {
  return (
    <section aria-label="Company credentials" className="border-b border-border bg-cream">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-4 px-4 py-5 sm:px-6 md:grid-cols-5 md:py-10">
        {FACTS.map((fact) => (
          <li key={fact.value} className="min-w-0">
            <p className="font-display text-lg text-ink sm:text-2xl">{fact.value}</p>
            <p className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">
              {fact.label}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
