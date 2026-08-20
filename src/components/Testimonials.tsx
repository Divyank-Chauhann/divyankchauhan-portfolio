import { testimonials } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section className="shell py-20 md:py-32">
      <SectionHeading
        index="05"
        title="What people say"
        subtitle="Placeholder entries — these are replaced as real feedback arrives."
      />
      <div className="mt-12 grid gap-px border-t border-hairline bg-hairline md:mt-16 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 0.08} className="bg-background">
            <figure className="flex h-full flex-col justify-between p-6 md:p-10">
              <span className="label">Placeholder</span>
              <blockquote className="mt-8 text-xl leading-snug tracking-tight md:text-[1.7vw]">
                “{t.quote}”
              </blockquote>
              <figcaption className="label mt-10 border-t border-hairline pt-4 text-foreground">
                {t.person} — {t.role}, {t.company}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
