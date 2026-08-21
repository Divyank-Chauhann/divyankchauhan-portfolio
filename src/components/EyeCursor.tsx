import { useEffect, useRef } from "react";

type CursorState = "default" | "link" | "view" | "cta" | "drag";

const SIZES: Record<CursorState, number> = {
  default: 44,
  link: 34,
  view: 96,
  cta: 74,
  drag: 64,
};

/**
 * Custom eye cursor. Runs entirely on requestAnimationFrame with direct DOM
 * writes — no React state updates per mouse move.
 */
export function EyeCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const eyeRef = useRef<HTMLDivElement>(null);
  const pupilRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;

    document.documentElement.classList.add("cursor-hidden");

    const root = rootRef.current!;
    const eye = eyeRef.current!;
    const pupil = pupilRef.current!;
    const label = labelRef.current!;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let x = mouseX;
    let y = mouseY;
    let size = SIZES.default;
    let targetSize = SIZES.default;
    let px = 0;
    let py = 0;
    let opacity = 0;
    let state: CursorState = "default";
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      opacity = 1;
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest?.(
        "[data-cursor], a, button",
      ) as HTMLElement | null;
      const next = (target?.dataset?.["cursor"] as CursorState | undefined) ??
        (target ? "link" : "default");
      if (next === state) return;
      state = next;
      targetSize = SIZES[next] ?? SIZES.default;
      label.textContent = next === "view" ? "VIEW" : "";
      label.style.opacity = next === "view" ? "1" : "0";
    };

    const onLeave = () => {
      opacity = 0;
    };

    const tick = () => {
      // Eye body: smooth lerp toward pointer
      x += (mouseX - x) * 0.16;
      y += (mouseY - y) * 0.16;
      size += (targetSize - size) * 0.14;

      // Pupil looks toward the real pointer position
      const dx = mouseX - x;
      const dy = mouseY - y;
      const dist = Math.hypot(dx, dy) || 1;
      const max = size * 0.16;
      const pull = Math.min(dist / 60, 1) * max;
      px += ((dx / dist) * pull - px) * 0.2;
      py += ((dy / dist) * pull - py) * 0.2;

      root.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      root.style.opacity = String(opacity);
      eye.style.width = `${size}px`;
      eye.style.height = `${size * 0.66}px`;
      pupil.style.transform = `translate3d(${px}px, ${py}px, 0)`;
      pupil.style.width = `${size * 0.3}px`;
      pupil.style.height = `${size * 0.3}px`;

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("cursor-hidden");
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden opacity-0 [@media(hover:hover)_and_(pointer:fine)]:block"
      style={{ willChange: "transform" }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        <div
          ref={eyeRef}
          className="relative grid place-items-center rounded-[50%] border border-foreground bg-background"
          style={{ width: 44, height: 29 }}
        >
          <div className="absolute inset-[14%] rounded-[50%] bg-foreground/5" />
          <div
            ref={pupilRef}
            className="relative grid place-items-center rounded-full bg-foreground"
            style={{ width: 13, height: 13, willChange: "transform" }}
          >
            <span className="absolute right-[18%] top-[18%] h-[22%] w-[22%] rounded-full bg-background" />
          </div>
          <span
            ref={labelRef}
            className="label absolute -bottom-6 left-1/2 -translate-x-1/2 text-foreground opacity-0 transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  );
}
