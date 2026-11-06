import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { innovations } from "@/data/site";
import { Ext, InnovationDisclaimer, PageHero, Section, StatusTag } from "@/components/site/Layout";

export const Route = createFileRoute("/innovation/$slug")({
  loader: ({ params }) => {
    const p = innovations.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? seo(loaderData.name, loaderData.summary, `/innovation/${params.slug}`, "article")
      : { meta: [{ title: "Unavailable" }, { name: "robots", content: "noindex" }] },
  component: Detail,
});

function Detail() {
  const p = Route.useLoaderData();
  const evidence = [
    ["Exact under declared model", p.evidence.exact],
    ["Numerical / software evidence", p.evidence.numerical],
    ["Physical or independent validation", p.evidence.physical],
  ] as const;
  return (
    <>
      <PageHero
        eyebrow={p.flagship ? "Applied innovation · Flagship" : "Applied innovation"}
        title={p.name}
        lede={p.tagline}
      >
        <div className="mt-8">
          <StatusTag>Status: {p.status}</StatusTag>
        </div>
      </PageHero>
      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="prose-editorial md:col-span-8">
            <p className="!text-xl">{p.summary}</p>
            {p.sections.map((s) => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                {s.body.map((b) => (
                  <p key={b}>{b}</p>
                ))}
              </div>
            ))}
            {p.slug === "tetra-architecture" && (
              <p>
                Related:{" "}
                <Link
                  to="/expertise/$slug"
                  params={{ slug: "ai-governance" }}
                  className="link-quiet"
                >
                  AI governance framework architecture
                </Link>{" "}
                and the proof essay{" "}
                <Link to="/journal/authority-before-action" className="link-quiet">
                  “A System Can Propose a Change.”
                </Link>
              </p>
            )}
          </div>
          <aside className="space-y-8 md:col-span-4">
            <div className="border border-border bg-card p-7">
              <p className="eyebrow">Evidence status</p>
              <dl className="mt-4 space-y-4">
                {evidence.map(([k, v]) => (
                  <div key={k} className="border-t border-border pt-3">
                    <dt className="font-sans text-xs uppercase tracking-[0.12em] text-primary">
                      {k}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="border border-border p-7">
              <p className="eyebrow">Not claimed</p>
              <ul className="mt-4 space-y-2 font-sans text-sm text-muted-foreground">
                {p.notClaimed.map((n) => (
                  <li key={n}>— {n}</li>
                ))}
              </ul>
            </div>
            {p.links.length > 0 && (
              <div className="border border-border p-7">
                <p className="eyebrow">Links</p>
                <ul className="mt-4 space-y-2 font-sans text-sm">
                  {p.links.map((l) => (
                    <li key={l.href}>
                      <Ext href={l.href}>{l.label}</Ext>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <InnovationDisclaimer />
          </aside>
        </div>
      </Section>
      <Section eyebrow="Portfolio" className="border-t border-border">
        <div className="flex flex-wrap gap-x-8 gap-y-3">
          {innovations
            .filter((x) => x.slug !== p.slug)
            .map((o) => (
              <Link
                key={o.slug}
                to="/innovation/$slug"
                params={{ slug: o.slug }}
                className="font-display text-2xl link-quiet"
              >
                {o.name}
              </Link>
            ))}
          <Link to="/innovation" className="self-center font-sans text-sm link-quiet">
            All innovation
          </Link>
        </div>
      </Section>
    </>
  );
}
