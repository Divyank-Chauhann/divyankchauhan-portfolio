import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section id="services" className="shell scroll-mt-20 py-20 md:py-32">
      <SectionHeading
        index="04"
        title="Where I can help"
        subtitle="From first research note to final interaction detail."
      />

      <div className="mt-12 md:mt-20">
        {services.map((s, i) => (
          <Reveal key={s.index} delay={i * 0.04} y={20}>
            <div className="group relative border-t border-hairline">
              <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-foreground transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              <div
                data-cursor="cta"
                className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-6 transition-[padding,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:pl-3 md:gap-8 md:py-8"
              >
                <span className="label">{s.index}</span>
                <div className="min-w-0">
                  <h3 className="display truncate text-[8vw] leading-none md:text-[3.4vw]">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-md text-xs leading-relaxed text-muted-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:text-sm">
                    {s.note}
                  </p>
                </div>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 -translate-x-2 opacity-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:opacity-100 md:h-7 md:w-7"
                  strokeWidth={1}
                />
              </div>
            </div>
          </Reveal>
        ))}
        <div className="border-t border-hairline" />
      </div>
    </section>
  );
}
