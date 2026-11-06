import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { draftSeo, seo } from "@/lib/seo";
import { essays, JOURNAL_STATUS } from "@/data/journal";
import { expertise } from "@/data/site";
import { Section } from "@/components/site/Layout";

export const Route = createFileRoute("/journal_/$slug")({
  loader: ({ params }) => {
    const e = essays.find((x) => x.slug === params.slug);
    if (!e) throw notFound();
    return e;
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? draftSeo(
          seo(
            `${loaderData.title} — Journal`,
            loaderData.deck,
            `/journal/${params.slug}`,
            "article",
          ),
        )
      : {
          meta: [{ title: "Unavailable — Benjamin Mayes" }, { name: "robots", content: "noindex" }],
        },
  component: EssayPage,
});

function EssayPage() {
  const e = Route.useLoaderData();
  const rel = expertise.find((x) => x.slug === e.expertise);
  return (
    <article>
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 pb-16 pt-24 md:pt-32">
          <p className="eyebrow">
            {e.theme} · {JOURNAL_STATUS}
          </p>
          <h1 className="mt-6 text-4xl leading-tight md:text-6xl">{e.title}</h1>
          <p className="mt-6 font-display text-2xl italic text-muted-foreground">{e.deck}</p>
          <p className="mt-6 font-sans text-sm">
            <Link to="/journal" className="link-quiet">
              ← Back to Journal
            </Link>
          </p>
        </div>
      </header>
      <Section>
        <div className="prose-editorial mx-auto max-w-3xl">
          {e.sections.map((s, i) => (
            <div key={i}>
              {s.heading && <h2>{s.heading}</h2>}
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          ))}
        </div>
        <footer className="mx-auto mt-16 max-w-3xl border-t border-border pt-8 font-sans text-sm">
          <p className="text-muted-foreground">
            {JOURNAL_STATUS}. This essay discusses general architectural practice and does not
            describe a specific customer engagement.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            <Link to="/journal" className="link-quiet">
              All journal essays
            </Link>
            {rel && (
              <Link to="/expertise/$slug" params={{ slug: rel.slug }} className="link-quiet">
                Related expertise: {rel.title}
              </Link>
            )}
          </div>
        </footer>
      </Section>
    </article>
  );
}