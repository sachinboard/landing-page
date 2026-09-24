import { Star } from "lucide-react";

import r23 from "@/assets/reviews/r23.png.asset.json";
import r24 from "@/assets/reviews/r24.png.asset.json";
import r25 from "@/assets/reviews/r25.png.asset.json";
import r26 from "@/assets/reviews/r26.png.asset.json";
import r27 from "@/assets/reviews/r27.png.asset.json";
import r28 from "@/assets/reviews/r28.png.asset.json";
import r29 from "@/assets/reviews/r29.png.asset.json";
import r31 from "@/assets/reviews/r31.png.asset.json";
import r32 from "@/assets/reviews/r32.png.asset.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/** Google reviews supplied by the business (screenshots of their Google listing). */
const REVIEWS: { name: string; when: string; photo?: string; text: string }[] = [
  { name: "Abhishek Jairaj", when: "3 months ago", photo: r23.url, text: "I recently got Name boards for my Preschool fabricated from the Board Company. The experience was smooth and efficient. Mr Pavan helped me get the work done well in time. Would highly recommend their services." },
  { name: "Mahiraa Designer Studio", when: "5 months ago", photo: r25.url, text: "We are extremely happy with the name board design and installation. The quality, finishing, and timely execution were outstanding. The team handled everything professionally from start to finish. Highly recommend their services for anyone looking for elegant signage solutions." },
  { name: "Koushik N", when: "7 months ago", photo: r26.url, text: "We called - they responded immediately. We asked for the board - starting from the recce they helped in taking measurements. Design - they got it done. Up to installation each and every step handled in a proper and professional way. 100% recommended. Trusted. Valued." },
  { name: "Shiva", when: "8 months ago", photo: r24.url, text: "Recently received my 2D board and I'm impressed with the fantastic quality of the work. The pricing is very affordable, and the entire process was seamless. A special thanks to Harsha for the excellent support with the payment process." },
  { name: "Bhoomika Bhoomi", when: "8 months ago", text: "The Board Company has done a fantastic signboard for our restaurant at a very reasonable price. The quality is excellent, and they also provided a 5-year warranty. Highly recommended - if you need any type of signboard, definitely go with The Board Company." },
  { name: "K Naga Vishala", when: "a year ago", photo: r31.url, text: "We recently got our name board made for House of Davanagere Benne Dose and we couldn't be happier with the result! The craftsmanship, attention to detail, and quality of materials were top-notch. The board has added a great touch to our restaurant's branding, and we've received many compliments on it already." },
  { name: "Sushanth Kantharaj", when: "a year ago", photo: r27.url, text: "I recently worked with The Board Company for the signboard of my petrol bunk. Pavan was incredibly responsive from day one, offering honest opinions and sharing his extensive knowledge. The service was delivered on time and exceeded my expectations in quality. The installation was completed efficiently in just one day." },
  { name: "Manoj M", when: "2 years ago", photo: r28.url, text: "I had a great experience with the board company! Pavan was super helpful throughout the entire process, from designing till installation. Quality and service is top notch." },
  { name: "Satish Choudhury", when: "3 years ago", photo: r29.url, text: "Excellent work done by The Board Company team, Mr Pavan knows the Biz. We had a signage requirement for our cafe and he responded to all our queries very politely. He provides competitive pricing, on time delivery and spot on work! Kudos team." },
  { name: "Manohara H N", when: "3 years ago", photo: r32.url, text: "Thanks to The Board Company Team for the best 3D Board, especially Pavan, Harsha and team. I recommend to all - they do your work on time with the best price." },
];

export function Testimonials() {
  return (
    <section className="bg-ink text-ink-foreground" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-xs font-bold tracking-[0.18em] text-brand uppercase">Google reviews</p>
        <h2 id="testimonials-title" className="font-display mt-3 max-w-2xl text-3xl sm:text-4xl">
          What our clients say
        </h2>

        <Carousel opts={{ align: "start", loop: true }} className="mt-10 px-1 md:px-12">
          <CarouselContent>
            {REVIEWS.map((r) => (
              <CarouselItem key={r.name} className="basis-[88%] sm:basis-1/2 lg:basis-1/3">
                <article className="flex h-full flex-col rounded-lg bg-card p-6 text-card-foreground">
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
