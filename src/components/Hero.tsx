import { motion } from "motion/react";
import { RevealLines } from "./Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] flex-col justify-end border-b border-hairline pb-10 pt-32 md:min-h-screen md:pb-14"
    >
      <div className="shell">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-hairline pb-4 md:mb-16"
        >
          <span className="label">Portfolio — 2026</span>
          <span className="label">Based in India · Working worldwide</span>
        </motion.div>

        <h1 className="display text-[15vw] leading-[0.86] md:text-[10.6vw]">
          {/* Desktop composition */}
          <span className="hidden md:block">
            <RevealLines
              animateOnLoad
              delay={0.25}
              lines={[
                "I design digital",
                <>
                  experiences{" "}
                  <span className="font-light italic lowercase tracking-[-0.02em] text-muted-foreground">
                    people
                  </span>
                </>,
                "remember.",
              ]}
            />
          </span>
          {/* Mobile composition */}
          <span className="block md:hidden">
            <RevealLines
              animateOnLoad
              delay={0.25}
              lines={[
                "I design",
                "digital",
                <>
                  <span className="font-light italic lowercase text-muted-foreground">
                    experiences
                  </span>
                </>,
                "people",
                "remember.",
              ]}
            />
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
          className="mt-10 grid gap-6 border-t border-hairline pt-5 md:mt-16 md:grid-cols-12"
        >
          <p className="label md:col-span-6">
            UI/UX Designer · Product Designer · Creative Problem Solver
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9">
            B.Tech Computer Science graduate designing interfaces where
            structure, motion and detail carry equal weight.
          </p>
        </motion.div>
      </div>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="label shell mt-10 hidden md:block"
      >
        (Scroll)
      </motion.span>
    </section>
  );
}
