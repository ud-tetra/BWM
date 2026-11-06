import { createFileRoute, Link } from "@tanstack/react-router";
import { draftSeo, seo } from "@/lib/seo";
import { Section } from "@/components/site/Layout";

export const Route = createFileRoute("/journal_/authority-before-action")({
  head: () =>
    draftSeo(
      seo(
        "A System Can Propose a Change. That Doesn't Mean It Has Permission. — Journal",
        "Capability is not authority: on governing AI systems that can propose, and execute, consequential changes.",
        "/journal/authority-before-action",
      ),
    ),
  component: () => (
    <article>
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 pb-16 pt-24 md:pt-32">
          <p className="eyebrow">Editorial proof — not yet published</p>
          <h1 className="mt-6 text-4xl leading-tight md:text-5xl">
            A System Can Propose a Change. That Doesn't Mean It Has Permission.
          </h1>
          <p className="mt-6 font-sans text-sm text-muted-foreground">
            <Link to="/journal" className="link-quiet">
              ← Back to Journal
            </Link>
          </p>
        </div>
      </header>

      <Section>
        <div className="mx-auto max-w-3xl space-y-6 font-serif text-lg leading-relaxed">
          <p>
            Over the years I've worked on infrastructure where a seemingly simple change could
            affect messaging, identity, connectivity, or an entire application environment.
          </p>
          <p>
            There is a difference between knowing how to make a change and having the authority to
            make it. Good engineering depends on respecting that difference.
          </p>
          <p>
            As AI systems become capable of choosing tools and executing work, that old lesson
            becomes increasingly relevant.
          </p>

          <h2 className="pt-8 text-3xl">Capability is not authority</h2>
          <p>
            Imagine asking an AI assistant to investigate an Exchange mail-flow problem. It might
            inspect configuration, compare transport paths, and recommend a connector change. Those
            are useful tasks. But a technically plausible recommendation is not authorization to
            modify production.
          </p>
          <p>
            The question isn't whether the AI can produce a command. It is whether that command
            falls within an approved scope, is supported by evidence, and can be executed under
            appropriate controls.
          </p>
          <p>
            This is familiar territory in enterprise identity and privileged access management. We
            limit permissions because even a legitimate administrator—or a legitimate
            application—should not have unlimited authority.
          </p>
          <p>An AI agent deserves no exemption from that principle.</p>

          <h2 className="pt-8 text-3xl">Four separate events</h2>
          <p>I think about governed automation as four distinct events:</p>
          <div className="space-y-4 border-l-2 border-border pl-6">
            <p>
              <strong>Proposed.</strong> A system identifies an action it believes would help.
            </p>
            <p>
              <strong>Authorized.</strong> An identified principal permits that specific action,
              within defined boundaries.
            </p>
            <p>
              <strong>Executed.</strong> A tool or service attempts the action, and the system
              records what actually happened.
            </p>
            <p>
              <strong>Verified.</strong> Independent evidence shows whether the intended state or
              outcome was achieved.
            </p>
          </div>
          <p>Those are not synonyms.</p>
          <p>
            An API returning success is not necessarily proof that an application is healthy. A
            saved transcript is not necessarily evidence that a configuration change was
            appropriate. A clever explanation does not make a scientific derivation valid.
          </p>

          <h2 className="pt-8 text-3xl">Why this became personal research</h2>
          <p>
            I began developing these ideas while using AI to explore Unified Dynamics, my
            independent research into finite geometry and physical theory.
          </p>
          <p>
            I could visualize structures before I could formalize them mathematically. AI made it
            easier to translate those ideas into precise definitions, equations, and testable code.
            It also made it easy to generate persuasive but unsupported connections.
          </p>
          <p>
            I needed a process that would keep the mathematics honest: explicit assumptions,
            versioned source material, preserved calculations, hashed artifacts, and a clear
            distinction between proven statements, numerical experiments, and hypotheses.
          </p>
          <p>
            The governance question became the same one I had encountered in enterprise engineering:
            How do we know what the system did, whether it was permitted to do it, and whether the
            result is supported?
          </p>

          <h2 className="pt-8 text-3xl">Build the boundary into the system</h2>
          <p>That is the direction of my AI governance framework work today.</p>
          <p>
            It is not enough to tell an AI system to be careful. The architecture should place
            enforceable boundaries around tools, privileges, approval, and state changes. It should
            record enough evidence to review the work. And it should define what happens when a
            request exceeds its authority.
          </p>
          <p>
            A useful assistant should be able to do substantial work. But responsibility for
            consequential actions should remain explicit.
          </p>
          <p>
            The principle is simple:{" "}
            <strong>
              ability does not imply permission, and completion does not imply verification.
            </strong>
          </p>
          <p>
            That is not an argument against AI autonomy. It is an argument for designing autonomy
            that an organization can understand and trust.
          </p>
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Related</p>
          <div className="mt-6 grid gap-px bg-border md:grid-cols-3">
            <Link to="/journal" className="bg-background p-6 transition-colors hover:bg-secondary">
              <h3 className="text-xl">Journal</h3>
              <p className="mt-2 text-sm text-muted-foreground">Notes on enduring systems.</p>
            </Link>
            <Link
              to="/expertise/$slug"
              params={{ slug: "ai-governance" }}
              className="bg-background p-6 transition-colors hover:bg-secondary"
            >
              <h3 className="text-xl">AI Governance Framework Architecture</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Boundaries, auditability, accountability for AI systems.
              </p>
            </Link>
            <Link to="/research" className="bg-background p-6 transition-colors hover:bg-secondary">
              <h3 className="text-xl">Research</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Unified Dynamics and finite geometry.
              </p>
            </Link>
          </div>
        </div>
      </Section>
    </article>
  ),
});