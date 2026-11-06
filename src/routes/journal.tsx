import { createFileRoute, Link } from "@tanstack/react-router";
import { draftSeo, seo } from "@/lib/seo";
import { essays, featuredArticle, JOURNAL_STATUS } from "@/data/journal";
import { PageHero, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/journal")({
  head: () =>
    draftSeo(
      seo(
        "Journal",
        "Essays on enterprise architecture, messaging, identity, runbooks, decommissioning, and AI governance.",
        "/journal",
      ),
    ),
  component: JournalIndex,
});

function JournalIndex() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Notes on enduring systems."
        lede="Six essays on systems architecture and governance, written from practice. All are in editorial proof and not yet published."
      />
      <Section>
        <Link
          to="/journal/authority-before-action"
          className="block border border-border bg-card p-8 transition-colors hover:border-primary md:p-12"
        >
          <p className="eyebrow">
            {featuredArticle.theme} · {JOURNAL_STATUS}
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl leading-snug md:text-4xl">
            {featuredArticle.title}
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            {featuredArticle.deck}
          </p>
          <p className="mt-6 font-sans text-sm link-quiet">Read the essay →</p>
        </Link>
        <ul className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {essays.map((j) => (
            <li key={j.slug} className="bg-background">
              <Link
                to="/journal/$slug"
                params={{ slug: j.slug }}
                className="group block h-full p-8 transition-colors hover:bg-secondary"
              >
                <p className="eyebrow">{j.theme}</p>
                <h2 className="mt-5 text-3xl group-hover:text-primary transition-colors">
                  {j.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{j.deck}</p>
                <p className="mt-6 font-sans text-sm link-quiet">Read →</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 font-sans text-sm text-muted-foreground">
          Comments or corrections?{" "}
          <Link to="/contact" className="link-quiet">
            Send a note
          </Link>
          .
        </p>
      </Section>
    </>
  );
}