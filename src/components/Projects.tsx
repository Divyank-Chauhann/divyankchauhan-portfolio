import { projects } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="work" className="shell scroll-mt-20 py-20 md:py-32">
      <SectionHeading
        index="01"
        title="Selected Work"
        subtitle="Projects built around people, problems and meaningful experiences."
      />
      <div className="mt-12 md:mt-20">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.index}
            project={p}
            align={i % 2 === 1 ? "right" : "left"}
          />
        ))}
      </div>
    </section>
  );
}
