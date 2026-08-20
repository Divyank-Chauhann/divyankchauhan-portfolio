import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { faqs } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = useReducedMotion();

  return (
    <section className="shell py-20 md:py-32">
      <SectionHeading index="06" title="Questions, answered." />

      <div className="mt-12 md:mt-16">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="border-t border-hairline last:border-b">
              <h3>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-6 py-5 text-left md:py-7"
                >
                  <span className="text-lg tracking-tight transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 md:text-[1.8vw] md:leading-tight">
                    {f.q}
                  </span>
                  <span className="relative h-4 w-4 shrink-0">
                    <span className="absolute left-0 top-1/2 h-px w-4 bg-foreground" />
                    <span
                      className={`absolute left-1/2 top-0 h-4 w-px bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "scale-y-0" : "scale-y-100"}`}
                    />
                  </span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: reduced ? 0 : 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-7 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
