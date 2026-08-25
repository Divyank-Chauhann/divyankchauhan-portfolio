import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal, RevealLines } from "./Reveal";

export function CTA() {
  return (
    <section
      id="contact"
      className="shell scroll-mt-20 border-t border-hairline py-20 md:py-32"
    >
      <Reveal className="label">(07) Contact</Reveal>

      <h2 className="display mt-10 text-[15vw] leading-[0.86] md:mt-16 md:text-[9.5vw]">
        <RevealLines
          lines={[
            "Let's build",
            "something",
            <span className="font-light italic lowercase text-muted-foreground">
              memorable.
            </span>,
          ]}
        />
      </h2>

      <div className="mt-12 grid gap-10 border-t border-hairline pt-8 md:mt-20 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Have a project, idea, or problem worth solving? Let&apos;s talk.
          </p>
          <a
            href={`mailto:${profile.email}`}
            data-cursor="cta"
            className="group mt-6 inline-flex items-center gap-3"
          >
            <span className="display relative text-[7vw] leading-none md:text-[2.4vw]">
              Let&apos;s chat
              <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-foreground transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:origin-left group-hover:scale-x-100" />
            </span>
            <ArrowUpRight
              className="h-6 w-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
              strokeWidth={1}
            />
          </a>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-4 md:col-start-7">
          <span className="label">Email</span>
          <a
            href={`mailto:${profile.email}`}
            className="mt-3 block break-words text-base underline-offset-4 hover:underline"
          >
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-2 md:col-start-11">
          <span className="label">Elsewhere</span>
          <ul className="mt-3 space-y-1">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base underline-offset-4 hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
