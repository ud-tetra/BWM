import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { innovations } from "@/data/site";
import { InnovationDisclaimer, PageHero, Section, StatusTag } from "@/components/site/Layout";

export const Route = createFileRoute("/innovation/")({
  head: () =>
    seo(
      "Applied Innovation",
      "TETRA Packet Architecture, the flagship governance architecture, plus MQM, TetraQuantum, TetraDEC, and Lattix Systems—with evidence status stated plainly.",
      "/innovation",
    ),
  component: InnovationIndex,
});

function InnovationIndex() {
  const tetra = innovations.find((i) => i.flagship)!;
  const rest = innovations.filter((i) => !i.flagship);
  return (
    <>
      <PageHero
        eyebrow="Applied innovation portfolio"
        title="Ideas under careful development."
        lede="One flagship governance architecture and four technical investigations, each with its evidence status stated plainly."
      >
        <div className="mt-10 max-w-2xl">
          <InnovationDisclaimer />
        </div>
      </PageHero>
      <Section>
        <Link
          to="/innovation/$slug"
          params={{ slug: tetra.slug }}
          className="group block border border-primary bg-card p-8 transition-colors hover:bg-background md:p-12"
        >
          <StatusTag>Flagship · {tetra.status}</StatusTag>
          <h2 className="mt-6 text-4xl md:text-5xl group-hover:text-primary transition-colors">
            {tetra.name}
          </h2>
          <p className="mt-3 font-display text-2xl italic text-muted-foreground">{tetra.tagline}</p>
          <p className="mt-6 max-w-3xl leading-relaxed">{tetra.summary}</p>
        </Link>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
          {rest.map((p) => (
            <Link
              key={p.slug}
              to="/innovation/$slug"
              params={{ slug: p.slug }}
              className="group bg-background p-8 transition-colors hover:bg-card md:p-10"
            >
              <StatusTag>{p.status}</StatusTag>
              <h2 className="mt-6 text-3xl group-hover:text-primary transition-colors">{p.name}</h2>
              <p className="mt-2 font-display text-lg italic text-muted-foreground">{p.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed">{p.summary}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
