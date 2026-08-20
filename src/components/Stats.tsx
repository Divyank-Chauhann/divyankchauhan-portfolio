import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { stats } from "@/data/portfolio";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduced = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setN(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1200;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduced]);

  return (
    <span ref={ref} className="tabular-nums">
      {value < 10 ? String(n).padStart(2, "0") : n}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="shell py-16 md:py-24">
      <div className="grid grid-cols-2 border-t border-hairline md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="border-b border-r border-hairline px-4 py-8 last:border-r-0 md:px-6 md:py-12 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r"
          >
            <p className="display text-[13vw] leading-[0.85] md:text-[5vw]">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="label mt-4">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
