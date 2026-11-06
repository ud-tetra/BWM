import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { seo } from "@/lib/seo";
import { workCases } from "@/data/site";
import { PageHero, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/work")({
  head: () =>
    seo(
      "Selected Work",
      "Six anonymized case studies across healthcare identity, CyberArk PAM, Azure Stack HCI, Exchange migration, Entra ID SSO, and Cisco vCUBE—separating confirmed facts from representative approach.",
      "/work",
    ),
  component: Work,
});

function Work() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Patterns of practice."
        lede="Six anonymized case studies. Each separates what is confirmed from the representative approach and from what is not claimed."
      >
        <p className="mt-8 max-w-2xl border-l border-sage pl-4 font-sans text-xs text-muted-foreground">
          No customer names, numerical metrics, or outcomes are claimed unless listed as confirmed.
        </p>
      </PageHero>
      <Section>
        <ol className="space-y-4">
          {workCases.map((w, i) => (
            <li key={w.title}>
              <details
                className="group border border-border bg-card open:border-primary"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-start gap-6 p-6 md:p-8 [&::-webkit-details-marker]:hidden">
                  <span className="pt-2 font-sans text-xs text-sage">0{i + 1}</span>
                  <span className="flex-1">
                    <span className="eyebrow block">{w.domain} · Anonymized</span>
                    <span className="mt-2 block font-display text-2xl md:text-3xl">{w.title}</span>
                    <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                      {w.context}
                    </span>
                  </span>
                  <ChevronDown
                    className="mt-2 size-5 shrink-0 text-primary transition-transform group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <div className="border-t border-border p-6 md:p-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <p className="eyebrow">The architectural dilemma</p>
                      <p className="mt-3 leading-relaxed">{w.dilemma}</p>
                    </div>
                    <div>
                      <p className="eyebrow">Representative method</p>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{w.method}</p>
                    </div>
                  </div>
                  <div className="mt-8 grid gap-8 border-t border-border pt-8 md:grid-cols-3">
                    <div>
                      <p className="eyebrow">Confirmed involvement</p>
                      <ul className="mt-3 space-y-2 font-sans text-sm">
                        {w.confirmed.map((c) => (
                          <li key={c} className="border-l-2 border-primary pl-3">
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="eyebrow">Typical steps</p>
                      <ul className="mt-3 space-y-2 font-sans text-sm text-muted-foreground">
                        {w.approach.map((a) => (
                          <li key={a} className="border-l border-border pl-3">
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="eyebrow">Not claimed</p>
                      <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                        {w.notClaimed}
                      </p>
                      <Link
                        to="/expertise/$slug"
                        params={{ slug: w.expertise }}
                        className="mt-4 inline-block font-sans text-sm link-quiet"
                      >
                        Related expertise
                      </Link>
                    </div>
                  </div>
                </div>
              </details>
            </li>
          ))}
        </ol>
        <Link to="/expertise" className="mt-12 inline-block font-sans text-sm link-quiet">
          Explore areas of expertise
        </Link>
      </Section>
    </>
  );
}
