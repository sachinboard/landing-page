import projGymAsset from "@/assets/golds-gym-wall.webp.asset.json";
const projGym = projGymAsset.url;
import projGroviesAsset from "@/assets/portfolio/grovies-cafe.webp.asset.json";
const projCafe = projGroviesAsset.url;
import projGillysAsset from "@/assets/portfolio/gillys-bar.webp.asset.json";
const projPet = projGillysAsset.url;
import projNaplesAsset from "@/assets/portfolio/dnaples-pizza.webp.asset.json";
const projBar = projNaplesAsset.url;
import projBiharAsset from "@/assets/portfolio/taste-of-bihar.webp.asset.json";
const projMonk = projBiharAsset.url;
import projDuck from "@/assets/ls-svc-3d.webp";

type Project = { image: string; alt: string; caption: string; contain?: boolean };

const PROJECTS: Project[] = [
  {
    image: projGym,
    alt: "Gold's Gym interior brick wall with black metal grid, circular Gold's Gym logo and large yellow 3D letters reading Can't Stop Won't Stop above a wooden floor",
    caption: "                                Gold's Gym ",
  },
  {
    image: projPet,
    alt: "Illuminated orange and blue 3D letters for Gilly's Super Bar mounted on a black slatted storefront board",
    caption: "                                  Gilly's Super Bar",
  },
  {
    image: projCafe,
    alt: "Backlit sign board at night with glowing white Kannada and English lettering for Grovies, a dine-in sports bistro",
    caption: "                                     Grovies",
  },
  {
    image: projBar,
    contain: true,
    alt: "Cream 3D channel letters reading D'Naples pizza mounted above a glass shopfront at dusk",
    caption: "                                D'Naples Pizza ",
  },
  {
    image: projMonk,
    contain: true,
    alt: "Warm orange LED neon sign reading The taste of Bihar glowing on a wall at night",
    caption: "                                The Taste of Bihar",
  },
  {
    image: projDuck,
    alt: "Green 3D sign board with raised gold letters for Dizzy Duck",
    caption: "                                     Dizzy Duck ",
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
          {"\n"}
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
                  className={`aspect-[4/3] w-full rounded-lg bg-ink-muted/10 ${
                    project.contain || project.image === projGym ? "object-contain" : "object-cover"
                  }`}
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
