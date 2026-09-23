import svc3d from "@/assets/svc-3d.jpg";
import svc2d from "@/assets/svc-2d.png";
import svcChannel from "@/assets/proj-channel.webp";
import svcLetters from "@/assets/svc-videoboard.webp";
import svcLightbox from "@/assets/proj-1.webp";
import svcVideoWall from "@/assets/svc-videowall.webp";
import { QuoteButton } from "@/components/landing/cta";

const SERVICES = [
  {
    title: "3D Sign Boards",
    image: svc3d,
    alt: "Green 3D sign board with raised gold letters installed outside Dizzy Duck in Bengaluru",
    useCase:
      "For restaurants, cafés and retail stores that need depth and presence on a busy main road.",
  },
  {
    title: "2D LED Sign Boards",
    image: svc2d,
    alt: "Purple 2D LED sign board with illuminated logo artwork for Chill'd Monk ice cream",
    useCase:
      "For shops, clinics and offices wanting a clean, bright name board that reads well day and night.",
  },
  {
    title: "3D Aluminium Channel Letters",
    image: svcChannel,
    alt: "Aluminium channel letters in production, showing the built-up letter sides before assembly",
    useCase:
      "For bars, showrooms and malls where individual built-up letters give a premium finish.",
  },
  {
    title: "Backlit LED Letter Signs",
    image: svcLetters,
    alt: "Backlit LED letter signage glowing green and blue at night for Tree Suites",
    useCase:
      "For hotels, gyms and service businesses that need their name visible after dark.",
  },
  {
    title: "Backlit Lightboxes",
    image: svcLightbox,
    alt: "Oval backlit lightbox sign board with the Chai.in logo mounted on an exterior wall",
    useCase:
      "For clinics, salons and mall units that need a compact, evenly lit logo board.",
  },
  {
    title: "Digital Video Boards & Video Walls",
    image: svcVideoWall,
    alt: "Large illuminated LED display board for a Go Kart entertainment venue at night",
    useCase:
      "For entertainment venues, events and large-format outdoor advertising that needs motion.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-xs font-bold tracking-[0.18em] text-brand-deep uppercase">
          What we manufacture
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl sm:text-4xl">
          Signage for every kind of storefront
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Every board is made to your brand artwork, site measurements and lighting conditions — not
          picked from a catalogue.
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <li
              key={service.title}
              className="overflow-hidden rounded-lg border border-border bg-card"
            >
              <img
                src={service.image}
                alt={service.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full bg-muted object-cover"
              />
              <div className="p-5">
                <h3 className="font-display text-lg text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.useCase}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <QuoteButton location="services" className="px-6 py-3.5 text-base" />
        </div>
      </div>
    </section>
  );
}
