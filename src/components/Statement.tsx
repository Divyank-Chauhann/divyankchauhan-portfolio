import { RevealLines } from "./Reveal";

export function Intro() {
  return (
    <section className="shell py-20 md:py-32">
      <div className="grid gap-10 md:grid-cols-12">
        <h2 className="display text-[11vw] leading-[0.9] md:col-span-8 md:text-[5.6vw]">
          <RevealLines
            lines={[
              "I make design",
              <>
                people{" "}
                <span className="font-light italic lowercase text-muted-foreground">
                  remember.
                </span>
              </>,
            ]}
          />
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground md:col-span-3 md:col-start-10 md:self-end">
          A UI/UX designer combining user research, visual design, interaction
          design and prototyping — grounded in a working understanding of
          frontend, so the design survives the build.
        </p>
      </div>
    </section>
  );
}

export function BigStatement() {
  return (
    <section className="shell py-20 md:py-32">
      <h2 className="display text-[14vw] leading-[0.86] md:text-[8.6vw]">
        <RevealLines
          lines={[
            "I make digital",
            <span className="font-light italic lowercase tracking-[-0.02em] text-muted-foreground">
              experiences
            </span>,
            "people remember.",
          ]}
        />
      </h2>
    </section>
  );
}
