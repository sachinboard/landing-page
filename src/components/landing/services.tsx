import svc3d from "@/assets/svc-3d.jpg";
import svc2d from "@/assets/svc-2d.png";
import svcChannel from "@/assets/svc-channel.png";
import svcLightbox from "@/assets/proj-backlit.webp";
import svcVideoBoard from "@/assets/svc-videoboard.webp";
import svcVideoWall from "@/assets/svc-videowall.webp";
import { QuoteButton } from "@/components/landing/cta";

const SERVICES = [
  {
    title: "3D Sign Boards",
    image: svc3d,
    alt: "Green 3D sign board with raised gold letters installed outside Dizzy Duck",
    useCase:
      "For restaurants, cafés and retail stores that need depth and presence on a busy main road.",
  },
  {
    title: "2D LED Sign Boards",
    image: svc2d,
    alt: "Purple 2D LED sign board with illuminated logo and artwork for Chill'd Monk",
    useCase:
      "For shops, clinics and offices wanting a clean, bright name board that reads well day and night.",
  },
  {
    title: "3D Aluminium Channel Letters",
    image: svcChannel,
    alt: "Illuminated aluminium channel letter sign board reading Gilly's Super Bar",
    useCase:
      "For bars, showrooms and malls where individual glowing letters give a premium finish.",
  },
  {
    title: "Fabric Backlit Lightbox",
    image: svcLightbox,
    alt: "Fabric backlit lightbox displaying a dental clinic advertisement",
    useCase:
      "For clinics, salons and mall units that need large, seamless backlit graphics indoors.",
  },
  {
    title: "Digital Video Boards",
    image: svcVideoBoard,
    alt: "Illuminated acrylic board with glowing green and white lettering for Tree Suites",
    useCase:
      "For hotels, showrooms and hospitality brands running changing offers and announcements.",
  },
  {
    title: "Video Walls & LED Displays",
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
