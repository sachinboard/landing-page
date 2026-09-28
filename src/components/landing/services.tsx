import svc3d from "@/assets/ls-svc-3d.webp";
import svc2d from "@/assets/ls-svc-2d.webp";
import svcChannel from "@/assets/ls-proj-channel.webp";
import svcLetters from "@/assets/ls-svc-videoboard.webp";
import svcLightbox from "@/assets/ls-proj-1.webp";
import svcVideoWall from "@/assets/ls-svc-videowall.webp";
import { QuoteButton } from "@/components/landing/cta";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SERVICES = [
  {
    title: "3D Sign Boards",
    image: svc3d,
    alt: "Fit24 Fitness Club backlit 3D sign board with orange and white letters and Kannada lettering on a dark facade at night",
    fit: "contain",
    bg: "bg-matte",
    useCase:
      "For restaurants, cafés and retail stores that need depth and presence on a busy main road.",
  },
  {
    title: "2D LED Sign Boards",
    image: svc2d,
    alt: "Green and pink 2D LED sign board with neon lettering for Ginza pub and lounge at night",
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
    title: "NEON SIGN",
    image: svcVideoWall,
    alt: "Bright red and blue LED neon sign reading The Lazy Turtle glowing against a dark wall",
    useCase:
      "For entertainment venues, events and large-format outdoor advertising that needs motion.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background" aria-labelledby="services-title">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-20">
        <p className="text-xs font-bold tracking-[0.18em] text-brand-deep uppercase">
          What we manufacture
        </p>
        <h2 id="services-title" className="font-display mt-3 max-w-2xl text-3xl sm:text-4xl">
          Choose your signage
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Every board is made as per the brand guidelines, accurate measurements and accounting for proper light around the signage. It's a curated service for your brand, not a generic catalog and trusted by 100+ brands in Bangalore.
        </p>

        <Carousel opts={{ align: "start", loop: true }} className="mt-6 px-1 md:mt-10 md:px-12">
          <CarouselContent>
            {SERVICES.map((service) => (
              <CarouselItem key={service.title} className="basis-[85%] md:basis-[45%]">
                <article className="flex h-full flex-row overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    decoding="async"
                    className={`w-2/5 shrink-0 self-stretch ${service.bg || "bg-muted"} min-h-[200px] ${service.fit === "contain" ? "object-contain" : "object-cover"}`}
                  />
                  <div className="flex flex-1 flex-col justify-center p-5 md:p-6">
                    <h3 className="font-display text-xl text-ink md:text-2xl">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {service.useCase}
                    </p>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="mt-6 px-1 md:mt-10 md:px-12">
          <QuoteButton location="services" className="w-full px-9 py-4 text-lg" />
        </div>
      </div>
    </section>
  );
}
