/**
 * Thin vertical grid rules that run behind the whole page.
 * 4 columns on mobile, 8 on tablet, 12 on desktop.
 */
export function GridLines() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 flex justify-center"
    >
      <div className="shell grid h-full w-full grid-cols-4 md:grid-cols-8 xl:grid-cols-12">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`h-full border-l border-hairline/60 ${
              i >= 8 ? "hidden xl:block" : i >= 4 ? "hidden md:block" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
