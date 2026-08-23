import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { FluxPayMockup } from "./FluxPayMockup";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProjectCard({
  project,
  align = "left",
}: {
  project: Project;
  align?: "left" | "right";
}) {
  const reduced = useReducedMotion();
  const linkProps = project.external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <article className="group border-t border-hairline py-10 md:py-16">
      <div className="grid gap-8 md:grid-cols-12 md:gap-10">
        <div
          className={`md:col-span-8 ${align === "right" ? "md:order-2 md:col-start-5" : ""}`}
        >
          <a
            href={project.href}
            {...linkProps}
            data-cursor="view"
            aria-label={`View ${project.title}`}
            className="block overflow-hidden bg-muted"
          >
            <motion.div
              initial={
                reduced
                  ? { opacity: 0 }
                  : { clipPath: "inset(100% 0 0 0)", opacity: 1 }
              }
              whileInView={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 1.1, ease: EASE }}
            >
              <div className="transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform group-hover:scale-[1.04]">
                {project.mockup === "fluxpay" ? (
                  <FluxPayMockup />
                ) : (
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category} case study preview`}
                    loading="lazy"
                    width={1600}
                    height={1104}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            </motion.div>
          </a>
        </div>

        <div
          className={`flex flex-col md:col-span-3 ${align === "right" ? "md:order-1 md:col-start-1" : "md:col-start-10"}`}
        >
          <span className="label">({project.index})</span>
          <h3 className="display mt-3 text-[8vw] leading-[0.92] md:text-[2.2vw]">
            {project.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <dl className="mt-6 space-y-2 border-t border-hairline pt-4">
            {[
              ["Category", project.category],
              ["Tools", project.tools],
              ["Year", project.year],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-4 text-xs">
                <dt className="label w-20 shrink-0">{k}</dt>
                <dd className="min-w-0 text-foreground">{v}</dd>
              </div>
            ))}
          </dl>

          <a
            href={project.href}
            {...linkProps}
            data-cursor="cta"
            className="label mt-6 inline-flex w-fit items-center gap-2 text-foreground"
          >
            <span className="relative">
              View project
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
            </span>
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1"
              strokeWidth={1.5}
            />
          </a>
        </div>
      </div>
    </article>
  );
}
