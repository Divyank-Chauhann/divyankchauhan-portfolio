export function Marquee({
  items,
  direction = "left",
  duration = 38,
  className,
}: {
  items: string[];
  direction?: "left" | "right";
  duration?: number;
  className?: string;
}) {
  const row = [...items, ...items];
  return (
    <div
      className={`overflow-hidden border-y border-hairline py-5 md:py-7 ${className ?? ""}`}
      data-cursor="drag"
      aria-hidden="true"
    >
      <div
        className="marquee-track"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0">
            {row.slice(0, items.length).map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="display flex items-center whitespace-nowrap text-[7vw] md:text-[3.6vw]"
              >
                <span className="px-6 md:px-10">{item}</span>
                <span className="text-muted-foreground">—</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
