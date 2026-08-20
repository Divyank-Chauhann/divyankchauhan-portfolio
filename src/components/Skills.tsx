import { skills } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section className="shell py-20 md:py-32">
      <SectionHeading
        index="03"
        title="What I work with"
        subtitle="Tools and disciplines I use daily — no progress bars, just practice."
      />
      <div className="mt-12 flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-hairline pt-10 md:mt-16 md:gap-x-10">
        {skills.map((s, i) => (
          <Reveal key={s} delay={i * 0.03} y={16}>
            <span className="display inline-flex items-baseline gap-3 text-[7vw] leading-[1.05] transition-colors duration-500 hover:text-muted-foreground md:text-[2.6vw]">
              <sup className="label translate-y-0">
                {String(i + 1).padStart(2, "0")}
              </sup>
              {s}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
