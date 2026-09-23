import proj1 from "@/assets/proj-1.webp";
import proj2 from "@/assets/proj-3.webp";
import proj3 from "@/assets/proj-2d.webp";
import proj4 from "@/assets/proj-channel.webp";
import proj5 from "@/assets/proj-backlit.webp";
import proj6 from "@/assets/svc-videoled.webp";

const PROJECTS = [
  {
    image: proj1,
    alt: "Illuminated sign board installed at Chai.in outlet in Bengaluru",
    caption: "Chai.in — illuminated storefront name board",
  },
  {
    image: proj2,
    alt: "Custom signage installed for Tug of Fur pet grooming studio",
    caption: "Tug of Fur — retail storefront signage",
  },
  {
    image: proj3,
    alt: "2D LED sign board with illuminated logo for Chill'd Monk",
    caption: "Chill'd Monk — 2D LED sign board",
  },
  {
    image: proj4,
    alt: "Aluminium channel letter signage reading Gilly's Super Bar",
    caption: "Gilly's Super Bar — 3D aluminium channel letters",
  },
  {
    image: proj5,
    alt: "Fabric backlit lightbox for a dental clinic",
    caption: "Dental clinic — fabric backlit lightbox",
  },
  {
    image: proj6,
    alt: "Illuminated acrylic sign board with glowing letters for Goofy's Cafe",
    caption: "Goofy's Cafe — illuminated acrylic board",
  },
];

export function Portfolio() {
  return (
    <section id="work" className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-xs font-bold tracking-[0.18em] text-brand uppercase">Recent work</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl sm:text-4xl">
          Boards we have built and installed
        </h2>
        <p className="mt-4 max-w-2xl text-base text-ink-muted">
          A sample of signage manufactured and installed by our own team for businesses across
          Bengaluru.
        </p>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <li key={project.caption} className="min-w-0">
              <figure>
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full rounded-lg bg-ink-muted/10 object-cover"
                />
                <figcaption className="mt-2.5 text-sm text-ink-muted">{project.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
