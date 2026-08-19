import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: ReactNode;
}) {
  return (
    <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="flex items-baseline gap-4">
        <span className="label">({index})</span>
        <h2 className="display text-[10vw] leading-[0.9] md:text-[4.2vw]">
          {title}
        </h2>
      </div>
      {subtitle ? (
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
