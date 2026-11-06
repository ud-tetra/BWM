import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { expertise, workCases } from "@/data/site";
import { allJournalEntries } from "@/data/journal";
import { PageHero, Section } from "@/components/site/Layout";
import { ModelSelectionWorkflow } from "@/components/site/ModelSelectionWorkflow";

export const Route = createFileRoute("/expertise/$slug")({
  loader: ({ params }) => {
    const e = expertise.find((x) => x.slug === params.slug);
    if (!e) throw notFound();
    return e;
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? seo(loaderData.title, loaderData.short, `/expertise/${params.slug}`, "article")
      : { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] },
  component: Detail,
});

function Detail() {
  const e = Route.useLoaderData();
  const others = expertise.filter((x) => x.slug !== e.slug);
  return (
    <>
      <PageHero eyebrow="Expertise" title={e.title} lede={e.intro} />
      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="prose-editorial md:col-span-8">
            {e.sections.map((s) => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            ))}
          </div>
          <aside className="md:col-span-4">
            <div className="lg:sticky lg:top-32 border border-border bg-card p-7">
              <p className="eyebrow">Capabilities</p>
              <ul className="mt-4 space-y-2.5 font-sans text-sm">
                {e.capabilities.map((c) => (
                  <li key={c} className="border-b border-border pb-2.5">
                    {c}
                  </li>
                ))}
              </ul>
              {e.relatedWork.length > 0 && (
                <>
                  <p className="eyebrow mt-8">Related anonymized work</p>
                  <ul className="mt-3 space-y-2 font-sans text-sm">
                    {e.relatedWork
                      .filter((t) => workCases.some((w) => w.title === t))
                      .map((t) => (
                        <li key={t}>
                          <Link to="/work" className="link-quiet">
                            {t}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </>
              )}
              {e.relatedJournal.length > 0 && (
                <>
                  <p className="eyebrow mt-8">Related essays</p>
                  <ul className="mt-3 space-y-2 font-sans text-sm">
                    {e.relatedJournal.map((slug) => {
                      const j = allJournalEntries.find((x) => x.slug === slug);
                      if (!j) return null;
                      return (
                        <li key={slug}>
                          {slug === "authority-before-action" ? (
                            <Link to="/journal/authority-before-action" className="link-quiet">
                              {j.title}
                            </Link>
                          ) : (
                            <Link to="/journal/$slug" params={{ slug }} className="link-quiet">
                              {j.title}
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          </aside>
        </div>
      </Section>
      {e.slug === "ai-governance" && (
        <Section className="border-t border-border">
          <ModelSelectionWorkflow />
        </Section>
      )}
      <Section eyebrow="Related" className="border-t border-border">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((o) => (
            <Link
              key={o.slug}
              to="/expertise/$slug"
              params={{ slug: o.slug }}
              className="border-t border-foreground pt-4 font-display text-xl hover:text-primary"
            >
              {o.title}
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
