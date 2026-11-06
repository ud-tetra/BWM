import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { nav, secondaryNav, person } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="print:hidden sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-card px-3 py-2 font-sans text-sm"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-10">
        <Link to="/" className="group leading-none" onClick={() => setOpen(false)}>
          <span className="block font-display text-2xl tracking-tight text-foreground md:text-[1.7rem]">
            Benjamin Mayes
          </span>
          <span className="eyebrow mt-1 block text-[0.6rem]">
            Systems Architect · Independent Researcher
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}

              className="font-sans text-[0.8rem] tracking-wide text-muted-foreground transition-colors hover:text-primary data-[status=active]:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="lg:hidden p-2 text-foreground"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background px-6 pb-8 pt-4 lg:hidden animate-rise"
        >
          <ul className="space-y-1">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-3 font-display text-2xl text-foreground data-[status=active]:text-primary"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="print:hidden bg-forest text-forest-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <p className="eyebrow !text-limestone">Correspondence</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl md:text-5xl">
          Thoughtful conversations about enduring systems are always welcome.
        </h2>
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 font-sans text-sm">
          <a className="link-quiet !text-forest-foreground" href={`mailto:${person.email}`}>
            {person.email}
          </a>
          <a
            className="link-quiet !text-forest-foreground inline-flex items-center gap-1"
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <ArrowUpRight className="size-3.5" />
          </a>
          <span className="text-limestone">{person.location}</span>
        </div>
        <div className="mt-16 flex flex-col gap-8 border-t border-forest-foreground/20 pt-10 font-sans text-sm md:flex-row md:items-start md:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {[...nav, ...secondaryNav].map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="opacity-80 hover:opacity-100">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="max-w-sm text-xs leading-relaxed text-limestone">
            Independent professional portfolio. Not affiliated with any current or former employer.
            Work examples are anonymized.
          </p>
        </div>
        <p className="mt-10 font-sans text-xs text-limestone">
          © {new Date().getFullYear()} Benjamin Mayes
        </p>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pb-24 lg:pt-28 animate-rise">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-[2.4rem] leading-[1.05] hyphens-auto min-[380px]:text-5xl min-[380px]:hyphens-manual md:text-7xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {lede}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export function Section({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28 ${className}`}>
      {(eyebrow || title) && (
        <div className="mb-12 grid gap-4 md:grid-cols-12">
          {eyebrow && <p className="eyebrow md:col-span-3 md:pt-3">{eyebrow}</p>}
          {title && <h2 className="text-4xl md:col-span-9 md:text-5xl">{title}</h2>}
        </div>
      )}
      {children}
    </section>
  );
}

export function StatusTag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block border border-sage px-2.5 py-1 font-sans text-[0.65rem] uppercase tracking-[0.16em] text-primary">
      {children}
    </span>
  );
}

export function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-quiet inline-flex max-w-full items-center gap-1"
    >
      <span className="min-w-0 [overflow-wrap:anywhere]">{children}</span>
      <ArrowUpRight className="size-3.5 shrink-0" aria-hidden />
      <span className="sr-only">(opens in new tab)</span>
    </a>
  );
}

export function InnovationDisclaimer() {
  return (
    <p className="border-l border-sage pl-4 font-sans text-xs leading-relaxed text-muted-foreground">
      Applied innovation portfolio: independent research and development at varying stages of
      maturity. No patent filing, commercial product, customer, or independently validated result is
      claimed, and no confidential mechanisms are published.
    </p>
  );
}

export function LineArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 520"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      aria-hidden
    >
      <g className="animate-draw">
        <path d="M60 480 L240 60 L420 480 Z" />
        <path d="M120 480 L240 200 L360 480" />
        <path d="M240 60 L240 480" />
        <path d="M150 340 L330 340" />
        <path d="M95 410 L385 410" />
        <path d="M195 240 L285 240" />
        <path d="M240 200 L150 340 M240 200 L330 340" />
        <path d="M20 480 L460 480" />
      </g>
      <g opacity="0.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <path key={i} d={`M${60 + i * 45} 495 L${60 + i * 45} 505`} />
        ))}
        <circle cx="240" cy="60" r="3" />
        <circle cx="240" cy="200" r="2" />
      </g>
    </svg>
  );
}