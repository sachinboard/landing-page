import { Star } from "lucide-react";

import r23 from "@/assets/reviews/r23.webp.asset.json";
import r25 from "@/assets/reviews/r25.webp.asset.json";
import r33 from "@/assets/reviews/r33.webp.asset.json";
import presha from "@/assets/reviews/presha.webp.asset.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/** Google reviews supplied by the business (screenshots of their Google listing). */
const REVIEWS: { name: string; when: string; photo?: string; text: string }[] = [
  { name: "Aniketh Gowda", when: "22 hours ago", text: "This signboard manufactures in Bangalore are top Notch! I got signage for my Cafe in just 3 days. Starting from design and till the installation they were too much supportive and also they gave a 5 year warranty card." },
  { name: "Mahan Gowda", when: "21 hours ago", text: "Affordle, Quality, On Time, Perfect Finish and also most thing is trustable. Do not miss this place" },
  { name: "Presha Roy", when: "a week ago", photo: presha.url, text: "Had a great experience with this company! The service was excellent, and the neon-lit restaurant board I got from them looks absolutely beautiful. The quality and finish are impressive, and it has really enhanced the look of our restaurant. Highly recommend them to anyone looking for quality signage and neon light services!" },
  { name: "Abhishek Jairaj", when: "3 months ago", photo: r23.url, text: "I recently got Name boards for my Preschool fabricated from the Board Company. The experience was smooth and efficient. Mr Pavan helped me get the work done well in time. Would highly recommend their services." },
  { name: "Mahiraa Designer Studio", when: "5 months ago", photo: r25.url, text: "We are extremely happy with the name board design and installation. The quality, finishing, and timely execution were outstanding. The team handled everything professionally from start to finish. Highly recommend their services for anyone looking for elegant signage solutions." },
  { name: "Samuel Graceson Raja", when: "6 months ago", photo: r33.url, text: "Excellent Naming Board Work. We are extremely happy with the service and quality of work. The naming board for our school (Bishop Angels School, Whitefield) was done perfectly and very neatly. Even though it was a huge project, the company completed the entire work within just 2 days which is truly impressive. A special thanks to Pavan Sir for being so kind, approachable, and supportive." },
  { name: "dharma malla", when: "6 months ago", text: "Best place to buy video LED wall. They are the only company to offer 5 year warranty and also at affordable cost. Mr.Pavan was impressive in his knowledge and also very polite throughout the process. We got LED video wall for our cafe in hampi. They are the best signage manufacturers in Bangalore without any other thought." },
];

export function Testimonials() {
  return (
    <section className="bg-ink text-ink-foreground" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-20">
        <p className="text-xs font-bold tracking-[0.18em] text-brand uppercase">GOOGLE REVIEWS</p>
        <h2 id="testimonials-title" className="font-display mt-3 max-w-2xl text-2xl sm:text-4xl">
          A GLIMPSE OF OUR GOOGLE REVIEWS
        </h2>

        <Carousel opts={{ align: "start", loop: true }} className="mt-6 px-1 md:mt-10 md:px-12">
          <CarouselContent>
            {REVIEWS.map((r) => (
              <CarouselItem key={r.name} className="basis-[88%] sm:basis-1/2 lg:basis-1/3">
                <article className="flex h-full flex-col rounded-lg bg-card p-4 text-card-foreground sm:p-6">
                  <header className="flex items-center gap-3">
                    {r.photo ? (
                      <img src={r.photo} alt="" width={48} height={48} loading="lazy" className="size-12 rounded-full" />
                    ) : (
                      <span aria-hidden="true" className="grid size-12 place-items-center rounded-full bg-brand text-lg font-bold text-brand-foreground">
                        {r.name[0]}
                      </span>
                    )}
                    <div>
                      <h3 className="font-bold">{r.name}</h3>
                      <p className="text-xs text-muted-foreground">{r.when} · Google</p>
                    </div>
                  </header>
                  <div className="mt-4 flex gap-0.5" aria-label="5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} aria-hidden="true" className="size-4 fill-brand text-brand-deep" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">“{r.text}”</p>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex border-brand bg-brand text-brand-foreground hover:bg-brand/85 hover:text-brand-foreground" />
          <CarouselNext className="hidden md:flex border-brand bg-brand text-brand-foreground hover:bg-brand/85 hover:text-brand-foreground" />
        </Carousel>
      </div>
    </section>
  );
}
