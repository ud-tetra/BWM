import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { publications, researchRepos } from "@/data/site";
import { Ext, PageHero, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/publications")({
  head: () =>
    seo(
      "Publications",
      "Research preprints and repository manuscripts by Benjamin Mayes on Zenodo. No completed journal peer review or independent empirical validation is claimed.",
      "/publications",
    ),
  component: () => (
    <>
      <PageHero
        eyebrow="Publications"
        title="Preprints & deposit records."
        lede="Independent research manuscripts deposited on Zenodo. No completed journal peer review and no independent empirical validation is claimed."
      />
      <Section>
        <ol>
          {publications.map((p, i) => (
            <li key={p.doi} className="grid gap-4 border-t border-border py-10 md:grid-cols-12">
              <span className="font-sans text-xs text-sage md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="md:col-span-8">
                <h2 className="text-2xl leading-snug md:text-3xl">{p.title}</h2>
                <p className="mt-3 font-sans text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {p.type} · {p.venue} · Deposited {p.date}
                </p>
                <p className="mt-2 font-sans text-sm">{p.author}</p>
                <p className="mt-5 max-w-2xl leading-relaxed">{p.synopsis}</p>
                {p.note && <p className="mt-3 font-sans text-xs text-muted-foreground">{p.note}</p>}
              </div>
              <div className="min-w-0 font-sans text-sm md:col-span-3 md:text-right">
                <Ext href={p.doi}>{p.doi.replace("https://doi.org/", "doi:")}</Ext>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 border-t border-border pt-8">
          <p className="eyebrow">Code repositories</p>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2 font-sans text-sm">
            {researchRepos.map((r) => (
              <li key={r.href}>
                <Ext href={r.href}>{r.label}</Ext>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 max-w-2xl font-sans text-xs text-muted-foreground">
          For the evidence standards behind this work, see{" "}
          <Link to="/research" className="link-quiet">
            Research
          </Link>
          .
        </p>
      </Section>
    </>
  ),
});
