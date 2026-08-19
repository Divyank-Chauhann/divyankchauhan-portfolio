import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: reduced ? 0.3 : 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Line-masked heading reveal: pass an array of lines. */
export function RevealLines({
  lines,
  className,
  lineClassName,
  delay = 0,
  animateOnLoad = false,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  animateOnLoad?: boolean;
}) {
  const reduced = useReducedMotion();
  const anim = { opacity: 1, y: "0%" };
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: "105%" }}
            {...(animateOnLoad
              ? { animate: anim }
              : {
                  whileInView: anim,
                  viewport: { once: true, margin: "-8% 0px" },
                })}
            transition={{
              duration: reduced ? 0.3 : 1,
              delay: delay + i * 0.08,
              ease: EASE,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
