import projGym from "@/assets/ls-proj-3.jpg";
import projPet from "@/assets/ls-proj-2d.jpg";
import projCafe from "@/assets/ls-svc-videoled.jpg";
import projBar from "@/assets/ls-svc-channel.jpg";
import projMonk from "@/assets/ls-svc-2d.jpg";
import projDuck from "@/assets/ls-svc-3d.jpg";

const PROJECTS = [
  {
    image: projGym,
    alt: "Gold's Gym interior wall with large yellow 3D letters reading Can't Stop Won't Stop",
    caption: "                 Gold's Gym ",
  },
  {
    image: projPet,
    alt: "Black storefront sign board with white letters for Tug of Fur pet store and spa",
    caption: "                 Tug of Fur ",
  },
  {
    image: projCafe,
    alt: "Illuminated backlit sign board for Goofy's Cafe glowing at night",
    caption: "                 Goofy's Cafe ",
  },
  {
    image: projBar,
    alt: "Illuminated channel letter sign board reading Gilly's Super Bar in red and blue",
    caption: "                Gilly's Super Bar",
  },
  {
    image: projMonk,
    alt: "Purple 2D LED sign board with illuminated ice cream artwork for Chill'd Monk",
    caption: "                 Chill'd Monk ",
  },
  {
    image: projDuck,
    alt: "Green 3D sign board with raised gold letters for Dizzy Duck",
    caption: "                 Dizzy Duck ",
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
