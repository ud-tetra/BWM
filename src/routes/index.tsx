import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { seo } from "@/lib/seo";
import { expertise, innovations, pillars, workCases } from "@/data/site";
import { InnovationDisclaimer, LineArt, Section, StatusTag } from "@/components/site/Layout";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "Benjamin Mayes | Systems Architect & Independent Researcher",
      "Thirty years of hands-on enterprise architecture—Exchange, identity, Azure hybrid, and integration—plus independent AI governance research.",
      "/",
    ),
  component: Home,
});

const highlightTitles = [
  "Identity integration through healthcare mergers",
  "Three-node Azure Stack HCI cluster",
  "CyberArk privileged access for a defense contractor",
];

function Home() {
  const highlights = highlightTitles
    .map((t) => workCases.find((w) => w.title === t)!)
    .filter(Boolean);
  const tetra = innovations.find((i) => i.flagship)!;
  const others = innovations.filter((i) => !i.flagship);
  const byslug = Object.fromEntries(expertise.map((e) => [e.slug, e])) as Record<
    (typeof expertise)[number]["slug"],
    (typeof expertise)[number]
  >;

  return (
    <>
      {/* 1 Hero */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:px-10 lg:py-28">
          <div className="lg:col-span-7 animate-rise">
            <p className="eyebrow">Systems Architect & Independent Researcher</p>
            <h1 className="mt-6 text-6xl md:text-8xl">Architecting systems that endure.</h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              For about thirty years I have designed, migrated, and supported enterprise platforms
              hands-on—Exchange, Active Directory and Entra ID, Azure hybrid, and the networks
              between them. Today I also research how AI-assisted systems can be given bounded,
              auditable authority.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 font-sans text-sm">
              <Link
                to="/expertise"
                className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-primary-foreground transition-opacity hover:opacity-90"
              >
                Expertise <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 border border-foreground px-6 py-3.5 text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Selected Work
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <LineArt className="mx-auto w-full max-w-md text-primary" />
          </div>
        </div>
      </section>

      {/* 2 Pillars */}
      <div className="border-b border-border bg-secondary/60">
        <Section eyebrow="Expertise" title="Three pillars of enterprise practice.">
          <div className="grid gap-px bg-border md:grid-cols-3">
            {pillars.map((p, i) => (
              <div key={p.name} className="flex flex-col bg-card p-8">
                <span className="font-sans text-xs text-sage">0{i + 1}</span>
                <h3 className="mt-6 text-3xl">{p.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.summary}
                </p>
                <ul className="mt-6 space-y-2 border-t border-border pt-4 font-sans text-sm">
                  {p.slugs.map((s) => (
                    <li key={s}>
                      <Link to="/expertise/$slug" params={{ slug: s }} className="link-quiet">
                        {byslug[s].title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link
            to="/expertise"
            className="mt-8 inline-flex items-center gap-2 font-sans text-sm link-quiet"
          >
            All five areas of expertise <ArrowRight className="size-4" />
          </Link>
        </Section>
      </div>

      {/* 3 Work highlights */}
      <Section eyebrow="Selected work" title="Anonymized engagement highlights.">
        <div className="grid gap-10 md:grid-cols-3">
          {highlights.map((w) => (
            <article key={w.title} className="border-t border-foreground pt-6">
              <p className="eyebrow">{w.domain}</p>
              <h3 className="mt-3 text-2xl">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {w.confirmed.join(" · ")}
              </p>
            </article>
          ))}
        </div>
        <Link
          to="/work"
          className="mt-10 inline-flex items-center gap-2 font-sans text-sm link-quiet"
        >
          All six case studies <ArrowRight className="size-4" />
        </Link>
      </Section>

      {/* 4 AI governance */}
      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-12 lg:px-10 lg:py-28">
          <div className="lg:col-span-6">
            <p className="eyebrow !text-limestone">AI governance</p>
            <h2 className="mt-6 font-display text-5xl italic leading-tight md:text-6xl">
              Capability is not authority.
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-limestone">
              An AI system that can propose a change has not thereby been permitted to make it. My
              independent framework research applies what identity and privileged-access engineering
              already know to AI-assisted work.
            </p>
          </div>
          <div className="lg:col-span-6">
            <dl className="grid gap-px bg-forest-foreground/20 sm:grid-cols-2">
              {[
                ["Identity", "Every action attributable to a principal."],
                ["Human approval", "Required where policy says so—not everywhere, not nowhere."],
                ["Provenance", "Outputs linked to their inputs and authority."],
                ["Verified outcomes", "Executed is not the same as verified."],
              ].map(([t, d]) => (
                <div key={t} className="bg-forest p-6">
                  <dt className="font-display text-2xl">{t}</dt>
                  <dd className="mt-2 text-sm text-limestone">{d}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-4 font-sans text-sm">
              <Link
                to="/expertise/$slug"
                params={{ slug: "ai-governance" }}
                className="inline-flex items-center gap-2 border border-forest-foreground/50 px-5 py-3 transition-colors hover:bg-forest-foreground hover:text-forest"
              >
                Governance architecture <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/innovation/$slug"
                params={{ slug: "tetra-architecture" }}
                className="inline-flex items-center gap-2 border border-forest-foreground/50 px-5 py-3 transition-colors hover:bg-forest-foreground hover:text-forest"
              >
                TETRA Packet Architecture <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Innovation */}
      <Section eyebrow="Applied innovation" title="One flagship, four investigations.">
        <div className="grid gap-12 lg:grid-cols-12">
          <Link
            to="/innovation/$slug"
            params={{ slug: tetra.slug }}
            className="group border border-border bg-card p-8 transition-colors hover:border-primary lg:col-span-7 md:p-10"
          >
            <StatusTag>Flagship · {tetra.status}</StatusTag>
            <h3 className="mt-6 text-4xl group-hover:text-primary transition-colors">
              {tetra.name}
            </h3>
            <p className="mt-2 font-display text-xl italic text-muted-foreground">
              {tetra.tagline}
            </p>
            <p className="mt-5 leading-relaxed">{tetra.summary}</p>
          </Link>
          <ul className="lg:col-span-5">
            {others.map((o) => (
              <li key={o.slug} className="border-t border-border py-4 first:border-t-0 first:pt-0">
                <Link to="/innovation/$slug" params={{ slug: o.slug }} className="group block">
                  <p className="font-display text-2xl group-hover:text-primary transition-colors">
                    {o.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{o.tagline}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <InnovationDisclaimer />
          </div>
          <Link
            to="/innovation"
            className="inline-flex shrink-0 items-center gap-2 font-sans text-sm link-quiet"
          >
            Innovation portfolio <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      {/* 6 Research & writing */}
      <div className="border-t border-border bg-secondary/50">
        <Section>
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow">Research · Secondary, independent</p>
              <blockquote className="mt-6 font-display text-4xl italic leading-tight md:text-5xl">
                “I could see the shapes before I could write the equations.”
              </blockquote>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                Unified Dynamics is a personal research program in discrete tetrahedral geometry,
                run under strict evidence rules. It is not an experimentally validated theory.
              </p>
            </div>
            <ul className="space-y-4 self-end font-sans text-sm md:col-span-5">
              <li className="border-t border-border pt-4">
                <Link to="/research" className="link-quiet">
                  Research and evidence boundaries
                </Link>
              </li>
              <li className="border-t border-border pt-4">
                <Link to="/publications" className="link-quiet">
                  Preprints and DOI records
                </Link>
              </li>
              <li className="border-t border-border pt-4">
                <Link to="/journal" className="link-quiet">
                  Journal — six essays in editorial proof
                </Link>
              </li>
            </ul>
          </div>
        </Section>
      </div>
    </>
  );
}