
import cars366MonitorAsset from "@/assets/cars366-monitor.jpg.asset.json";

export type Project = {
  index: string;
  title: string;
  category: string;
  tools: string;
  year: string;
  description: string;
  image?: string;
  href: string;
  external?: boolean;
  mockup?: "fluxpay" | "zaavic";
};

export const profile = {
  name: "Divyank Chauhan",
  role: "UI/UX Designer",
  email: "hello@divyank.design", // TODO: replace with real email
  location: "India",
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Behance", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
};

export const projects: Project[] = [
  {
    index: "01",
    title: "FluxPay",
    category: "Mobile Payment App / UI/UX Design",
    tools: "Figma · UX/UI Design · Prototyping",
    year: "2026",
    description:
      "A modern mobile payment experience designed for simple, fast, and intuitive money transfers.",
    mockup: "fluxpay",
    href: "https://www.figma.com/design/wsSZhha22b0UzeWvo01JMx/FluxPay?node-id=1-35&t=DuSbNLvxfOz9s3JS-1",
    external: true,
  },
  {
    index: "02",
    title: "Zaavic Plants",
    category: "E-commerce UI/UX",
    tools: "Figma · UI/UX Design · Prototyping",
    year: "2025",
    description:
      "A modern plant e-commerce experience designed to make discovering and shopping for plants simple and enjoyable.",
    mockup: "zaavic",
    href: "https://zaavicplants.netlify.app/",
    external: true,
  },
  {
    index: "03",
    title: "CARS366",
    category: "Web Design",
    tools: "Figma · HTML · CSS · JavaScript",
    year: "2024",
    description:
      "A marketplace interface where inventory, filtering and vehicle detail pages feel fast and considered.",
    image: cars366MonitorAsset.url,
    href: "https://cars366.netlify.app/",
    external: true,
  },
];

export const stats = [
  { value: 4, suffix: "+", label: "Selected Projects" },
  { value: 5, suffix: "+", label: "Core Design Skills" },
  { value: 10, suffix: "+", label: "Digital Experiences" },
  { value: 100, suffix: "%", label: "Curiosity" },
];

export const skills = [
  "UI/UX Design",
  "User Research",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "Interaction Design",
  "Figma",
  "HTML",
  "CSS",
  "JavaScript",
  "React Basics",
];

export const services = [
  {
    index: "01",
    title: "UI/UX Design",
    note: "Interfaces built on research, structure and clarity.",
  },
  {
    index: "02",
    title: "Product Design",
    note: "End-to-end thinking from problem to shipped flow.",
  },
  {
    index: "03",
    title: "Website Design",
    note: "Editorial, responsive sites with a point of view.",
  },
  {
    index: "04",
    title: "Design Systems",
    note: "Tokens, components and documentation that scale.",
  },
  {
    index: "05",
    title: "Prototyping",
    note: "Clickable, testable prototypes before a line of code.",
  },
  {
    index: "06",
    title: "Interaction Design",
    note: "Motion and micro-interactions with intent.",
  },
];

/** Placeholder testimonials — replace with real quotes when available. */
export const testimonials = [
  {
    quote:
      "Placeholder testimonial. Replace this with a real quote once feedback is available.",
    person: "Name Placeholder",
    role: "Role Placeholder",
    company: "Company Placeholder",
  },
  {
    quote:
      "Placeholder testimonial. Replace this with a real quote once feedback is available.",
    person: "Name Placeholder",
    role: "Role Placeholder",
    company: "Company Placeholder",
  },
];

export const faqs = [
  {
    q: "What kind of design work do you do?",
    a: "UI and UX design for web and mobile products — research, information architecture, wireframes, interface design, design systems and interaction design.",
  },
  {
    q: "What tools do you use?",
    a: "Figma as my primary design tool, alongside FigJam for research synthesis and prototyping tools for interaction testing. I also work in HTML, CSS and JavaScript.",
  },
  {
    q: "Can you design complete websites?",
    a: "Yes — from sitemap and wireframes through to a full responsive interface, a component library and developer-ready handoff.",
  },
  {
    q: "Do you create prototypes?",
    a: "Always. Clickable prototypes are how I validate flows, pressure-test interactions and communicate intent before build starts.",
  },
  {
    q: "Can you work with developers?",
    a: "I am a B.Tech Computer Science graduate, so I speak the language — I hand off structured files, documented tokens and realistic states.",
  },
  {
    q: "How can I contact you?",
    a: "Email is fastest. Write to me and include a short description of the project, the timeline and what you need designed.",
  },
];
