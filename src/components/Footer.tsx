import { profile } from "@/data/portfolio";

const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="shell border-t border-hairline py-10 md:py-14">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="display text-[9vw] leading-none md:text-[3.2vw]">
            {profile.name}
          </p>
          <p className="label mt-3">{profile.role}</p>
        </div>

        <nav className="md:col-span-3 md:col-start-7">
          <p className="label">Navigation</p>
          <ul className="mt-3 space-y-1">
            {nav.map((n) => (
              <li key={n.label}>
                <a
                  href={n.href}
                  className="text-sm underline-offset-4 hover:underline"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3 md:col-start-10">
          <p className="label">Social</p>
          <ul className="mt-3 space-y-1">
            {profile.socials.slice(0, 3).map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="text-sm underline-offset-4 hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-5">
        <span className="label">© 2026 {profile.name}</span>
        <span className="label">Designed &amp; built with intent</span>
      </div>
    </footer>
  );
}
