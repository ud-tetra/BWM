import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { seo } from "@/lib/seo";
import { expertise, pillars } from "@/data/site";
import { PageHero, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/expertise/")({
  head: () =>
    seo(
      "Expertise",
      "Enterprise platforms, identity and security, integration and reliability—plus independent AI governance framework research.",
      "/expertise",
    ),
  component: ExpertiseIndex,
});

function ExpertiseIndex() {
  const ai = expertise.find((e) => e.slug === "ai-governance")!;
  return (
    <>
      <PageHero
        eyebrow="Expertise"
        title="Three pillars, built hands-on."
        lede="Enterprise platforms, identity and security, and integration—thirty years of design and delivery. AI governance research builds on all three."
      />
      <Section>
        <div className="space-y-16">
          {pillars.map((p, i) => (
            <div
              key={p.name}
              className="grid gap-6 border-t border-foreground pt-8 md:grid-cols-12"
            >
              <div className="md:col-span-4">
                <span className="font-sans text-xs text-sage">0{i + 1}</span>
                <h2 className="mt-2 text-3xl md:text-4xl">{p.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
              </div>
              <ul className="md:col-span-8">
                {p.slugs.map((s) => {
                  const e = expertise.find((x) => x.slug === s)!;
                  return (
                    <li key={s} className="border-b border-border">
                      <Link
                        to="/expertise/$slug"
                        params={{ slug: s }}
                        className="group flex items-start justify-between gap-6 py-6"
                      >
                        <span>
                          <span className="block font-display text-2xl group-hover:text-primary transition-colors">
                            {e.title}
                          </span>
                          <span className="mt-1 block text-sm text-muted-foreground">
                            {e.short}
                          </span>
                        </span>
                        <ArrowRight
                          className="mt-2 size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1"
                          aria-hidden
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <section className="bg-forest text-forest-foreground">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <p className="eyebrow !text-limestone">
            Independent research · Built on identity engineering
          </p>
          <Link
            to="/expertise/$slug"
            params={{ slug: ai.slug }}
            className="group mt-4 flex items-start justify-between gap-6"
          >
            <span>
              <span className="block font-display text-3xl md:text-4xl">{ai.title}</span>
              <span className="mt-2 block max-w-2xl text-limestone">{ai.short}</span>
            </span>
            <ArrowRight
              className="mt-3 size-6 shrink-0 transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </div>
      </section>
    </>
  );
}