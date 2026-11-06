import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { researchPortals, researchRepos } from "@/data/site";
import { Ext, PageHero, Section } from "@/components/site/Layout";

const classes = [
  {
    label: "Exact mathematical finding",
    note: "Follows from the stated definitions by exact calculation.",
  },
  {
    label: "Numerical result",
    note: "Computed with captured code, inputs, and outputs; subject to approximation.",
  },
  { label: "Hypothesis", note: "A proposal not yet derived or tested." },
  {
    label: "Empirically verified",
    note: "Confirmed against independent experiment. No UD claim is currently in this class.",
  },
];

export const Route = createFileRoute("/research")({
  head: () =>
    seo(
      "Research",
      "Unified Dynamics: an independent research program in discrete tetrahedral geometry, governed by strict evidence boundaries. Not an experimentally confirmed theory.",
      "/research",
    ),
  component: () => (
    <>
      <PageHero
        eyebrow="Foundational research · Secondary to professional practice"
        title="I could see the shapes before I could write the equations."
        lede="Unified Dynamics is an ongoing independent research program—not an experimentally confirmed fundamental theory."
      />
      <Section eyebrow="Origin" title="Where the work began.">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="prose-editorial md:col-span-8">
            <p>
              For as long as I can remember I have seen shapes before I could describe them.
              Patterns, symmetries, the way one structure folds into another—these arrive for me as
              images first. For most of my life I had no mathematical language to express them, let
              alone to test whether they meant anything. They stayed private, a way of thinking
              rather than a body of work.
            </p>
            <p>
              Unified Dynamics began as an attempt to take those images seriously. The question is
              narrow to state and difficult to answer: could discrete tetrahedral geometry—counting,
              symmetries, and explicitly declared dynamics on a complex of tetrahedra—give rise to
              behavior that resembles physics? It is a geometric, discrete hypothesis. It is not a
              claim that the answer is yes.
            </p>
            <h2>A rule I do not break</h2>
            <p>
              One principle is non-negotiable: I do not insert known physical constants to force a
              derivation to fit. If a number only appears because the answer was put in, it is not a
              derivation, however elegant the surrounding mathematics looks. Internal results that
              follow from geometry, counting, and dynamics are kept separate from any mapping to
              physical quantities, and both are kept separate from empirical verification.
            </p>
            <p>
              There is one deliberate exception, and it is labeled as such. The UD-Physics discovery
              sandbox may perform explicit fits against experimental values to explore where a
              structure might lead. A fit in the sandbox is marked as a fit. It is never presented
              as a derived result, and it does not migrate into the core repository as one.
            </p>
            <h2>What AI made possible, and what it got wrong</h2>
            <p>
              AI tools finally gave me a way to formalize what I had been visualizing—to turn images
              into definitions, definitions into calculations, and calculations into something
              another person could check. That was genuinely enabling. It was also sobering. AI
              systems can produce mathematics that is fluent, well-formatted, and wrong. A plausible
              derivation with a quietly invented step reads almost exactly like a correct one.
            </p>
            <p>
              So I did what I would do with any consequential system in enterprise engineering: I
              put governance around it. Assumptions are written down at the source. Work lives in
              version control. Exact rational arithmetic is used wherever possible instead of
              floating-point approximations. Code, inputs, outputs, and SHA-256 hashes are captured
              so that a result can be rerun and compared. Failures and no-go results are recorded
              rather than discarded. And independent review is invited, because the person who
              produced a result is the worst-placed person to judge it.
            </p>
            <p>
              That discipline became the bridge to my{" "}
              <Link to="/expertise/$slug" params={{ slug: "ai-governance" }} className="link-quiet">
                AI governance work
              </Link>
              . The questions are the same in a laboratory notebook and in a production change: what
              was proposed, under what authority, what actually ran, and how was the outcome
              verified?
            </p>
            <h2>What this work is, and is not</h2>
            <p>
              The exact mathematical structures I report are statements about a defined model. They
              are not established physical theory. There is no independent empirical validation of
              Unified Dynamics, and I do not claim that it replaces the Standard Model or General
              Relativity. A hash shows that a result has not changed; it does not show that it is
              true.
            </p>
            <p>
              This research is secondary to my professional practice and pursued independently. I
              publish manuscripts as preprints and repository deposits so that they can be read and
              criticized, and I keep the code public so that criticism can be specific. The
              manuscripts are listed on{" "}
              <Link to="/publications" className="link-quiet">
                Publications
              </Link>
              ; the repositories are{" "}
              <a
                className="link-quiet"
                href="https://github.com/ud-tetra/UD"
                target="_blank"
                rel="noopener noreferrer"
              >
                ud-tetra/UD
              </a>{" "}
              and{" "}
              <a
                className="link-quiet"
                href="https://github.com/ud-tetra/UD-Physics"
                target="_blank"
                rel="noopener noreferrer"
              >
                ud-tetra/UD-Physics
              </a>
              . Related reflections on evidence appear in the{" "}
              <Link to="/journal" className="link-quiet">
                Journal
              </Link>
              .
            </p>
          </div>
          <aside className="md:col-span-4">
            <div className="border border-border bg-card p-7">
              <p className="eyebrow">Status</p>
              <p className="mt-3 text-sm leading-relaxed">
                Independent and ongoing. No independent empirical validation is claimed, and UD is
                not a validated replacement for the Standard Model or General Relativity.
              </p>
            </div>
          </aside>
        </div>
      </Section>
      <div className="border-y border-border bg-secondary/50">
        <Section eyebrow="Evidence boundaries" title="How claims are governed.">
          <div className="grid gap-12 md:grid-cols-12">
            <ul className="prose-editorial md:col-span-6">
              <li>Version-controlled Git repositories</li>
              <li>Traceable, explicitly stated assumptions</li>
              <li>Exact rational arithmetic wherever possible</li>
              <li>Captured code, inputs, outputs, and hashes</li>
              <li>Independent review invited</li>
              <li>Recorded failures and no-go results</li>
            </ul>
            <div className="md:col-span-6">
              <p className="eyebrow">Every result is classified</p>
              <dl className="mt-4">
                {classes.map((c) => (
                  <div key={c.label} className="border-t border-border py-3">
                    <dt className="font-display text-xl">{c.label}</dt>
                    <dd className="text-sm text-muted-foreground">{c.note}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3 font-sans text-sm">
            <p className="border-l-2 border-primary pl-4">
              A hash proves an artifact has not changed. It does not prove the science is true.
            </p>
            <p className="border-l-2 border-primary pl-4">
              A numerical match is not a physical derivation.
            </p>
            <p className="border-l-2 border-primary pl-4">
              Fitting to experiment is permitted in the UD-Physics discovery sandbox, but a fit is
              never presented as a derived physical claim.
            </p>
          </div>
        </Section>
      </div>
      <Section eyebrow="Sources" title="Repositories and overviews.">
        <div className="grid gap-12 md:grid-cols-2">
          <ul className="space-y-3">
            {researchRepos.map((r) => (
              <li key={r.href}>
                <Ext href={r.href}>{r.label}</Ext>
              </li>
            ))}
          </ul>
          <ul className="space-y-3">
            {researchPortals.map((r) => (
              <li key={r.href}>
                <Ext href={r.href}>{r.label}</Ext>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-sans text-sm">
          <Link to="/publications" className="link-quiet">
            Publications and DOI records
          </Link>
          <Link to="/journal" className="link-quiet">
            Journal essays (editorial proof)
          </Link>
        </div>
      </Section>
    </>
  ),
});
