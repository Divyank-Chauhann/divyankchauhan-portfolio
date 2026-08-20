import { Reveal, RevealLines } from "./Reveal";

export function About() {
  return (
    <section id="about" className="shell scroll-mt-20 py-20 md:py-32">
      <Reveal className="label border-b border-hairline pb-4">
        (02) About me
      </Reveal>

      <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-12">
        <h2 className="display text-[11vw] leading-[0.9] md:col-span-8 md:text-[5.4vw]">
          <RevealLines
            lines={[
              "Designer with a",
              <>
                developer&apos;s{" "}
                <span className="font-light italic lowercase text-muted-foreground">
                  understanding.
                </span>
              </>,
            ]}
          />
        </h2>

        <div className="space-y-6 md:col-span-3 md:col-start-10">
          <Reveal delay={0.1}>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I&apos;m Divyank Chauhan, a UI/UX designer and B.Tech Computer
              Science graduate. I work across UI design, UX design, product
              design, interaction design and prototyping — with enough frontend
              fundamentals to know exactly what happens after handoff.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-sm leading-relaxed text-muted-foreground">
              My process starts with the problem, moves through structure, and
              ends with an interface that feels obvious to use and considered to
              look at.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
