import { createFileRoute } from "@tanstack/react-router";

import { EyeCursor } from "@/components/EyeCursor";
import { GridLines } from "@/components/GridLines";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Intro } from "@/components/Statement";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const title = "Divyank Chauhan — UI/UX Designer & Product Designer";
const description =
  "Portfolio of Divyank Chauhan, a UI/UX and product designer crafting editorial, interaction-led digital experiences. Selected work, services and contact.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <EyeCursor />
      <GridLines />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Marquee
          items={[
            "UI/UX Design",
            "Product Design",
            "Prototyping",
            "Design Systems",
            "Interaction Design",
          ]}
          direction="left"
          duration={40}
        />
        <Intro />
        <Projects />
        <Marquee
          items={[
            "Research",
            "Wireframes",
            "Interfaces",
            "Motion",
            "Handoff",
            "Details",
          ]}
          direction="right"
          duration={32}
        />
        <About />
        <Stats />
        <Skills />
        <Services />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
