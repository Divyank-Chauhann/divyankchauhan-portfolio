import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "@/data/portfolio";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function Availability() {
  return (
    <span className="label flex items-center gap-2 text-foreground">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      Available for work
    </span>
  );
}

export function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-background/80 backdrop-blur-md"
      >
        <nav className="shell flex h-14 items-center justify-between md:h-16">
          <a
            href="#top"
            className="label text-foreground transition-opacity hover:opacity-60"
          >
            {profile.name}
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="label group relative text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Availability />
          </div>

          <button
            onClick={() => setOpen(true)}
            className="label text-foreground md:hidden"
            aria-label="Open menu"
          >
            Menu
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-background md:hidden"
          >
            <div className="shell flex h-14 items-center justify-between border-b border-hairline">
              <span className="label text-foreground">{profile.name}</span>
              <button
                onClick={() => setOpen(false)}
                className="label text-foreground"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>
            <div className="shell flex flex-col pt-10">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15 + i * 0.06,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="display border-b border-hairline py-5 text-[13vw]"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="pt-10">
                <Availability />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
