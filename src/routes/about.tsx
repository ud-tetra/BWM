import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { certifications, person, roles, skills } from "@/data/site";
import { PageHero, Section } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () =>
    seo(
      "About",
      "Approximately thirty years in enterprise systems: Exchange, identity, Azure, datacenter, and AI governance architecture.",
      "/about",
      "profile",
    ),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A practitioner's view of systems."
        lede="Senior technical architect with approximately thirty years of experience designing, modernizing, and integrating enterprise technology."
      />
      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-4 space-y-6 font-sans text-sm text-muted-foreground">
            <div>
              <p className="eyebrow">Based in</p>
              <p className="mt-2 text-foreground">{person.location}</p>
            </div>
            <div>
              <p className="eyebrow">Practice</p>
              <p className="mt-2 text-foreground">Independent professional portfolio</p>
            </div>
          </aside>
          <div className="prose-editorial md:col-span-8">
            <p>
              My career began in September 1996 as an independent IT consultant. Since then, my
              roles have spanned multimedia design, IT management, systems administration, technical
              leadership, and consulting engineering. That range is the background to my current
              practice in enterprise systems architecture. My approach is to understand how a system
              behaves before deciding how it should change.
            </p>
            <p>
              From February 2000 to March 2001 I was a multimedia designer at The Creative Group,
              followed by an IT manager role at TechXpress through November 2001. I then served as a
              systems administrator at Poly Enterprises until October 2004. Independent consulting
              followed through October 2007, then a systems administrator role at SiteStuff until
              November 2008. These roles form the early chronology of my career; the technical
              perspective described here reflects my broader practice rather than a reconstruction
              of each position's day-to-day duties.
            </p>
            <h2>From operating systems to designing them</h2>
            <p>
              In November 2008 I cofounded Greentech Systems LLC and served as its technology
              director. In July 2011 I joined ARC — Austin Ribbon and Computer as a Sr. Systems
              Engineer, remaining there until July 2013. Those positions preceded the longer
              consulting roles that now anchor my professional record.
            </p>
            <p>
              From 2013 to 2020 I was a senior consulting engineer at Pivot Technology Services, and
              since November 2020 I have been a lead consultant at Computacenter US. Over those
              years the work concentrated on a few areas where I have gone deep: Microsoft Exchange
              Server, Exchange hybrid and Exchange Online migration, Microsoft 365, Active Directory
              and Entra ID, Azure and Azure Stack HCI, privileged access and PKI, virtualization,
              and the networks that tie them together across complex enterprise environments.
            </p>
            <h2>How I approach architecture</h2>
            <p>
              I think of architecture as the set of decisions that will be expensive to change
              later, and I try to make those decisions deliberately and write down why. A good
              design is one that the next team can operate without me. That is why I care about
              runbooks, reproducible inventory, and staged changes with clear rollback; they are how
              an intention survives contact with years of ordinary operation.
            </p>
            <p>
              I am wary of confident explanations that arrive before the evidence. In integration
              work especially, several causes are often plausible at once, and the honest position
              is to hold them side by side until something distinguishes them. Saying "not yet
              proven" is part of the job.
            </p>
            <h2>Where AI governance fits</h2>
            <p>
              Alongside consulting I pursue independent research and applied innovation, most
              notably in AI governance: how to give automated systems bounded, auditable authority.
              That work grows directly out of identity and privileged-access engineering. The
              separation between proposing a change, authorizing it, executing it, and verifying it
              is something administrators have practised for decades; I am interested in applying it
              carefully to AI-assisted work. This is research and framework development, not a
              deployed AI product.
            </p>
            <p>
              Theoretical physics is a secondary, independent interest, pursued under the same
              evidence discipline. This site is a personal portfolio. It does not represent any
              current or former employer, and the work examples on it are anonymized.
            </p>
          </div>
        </div>
      </Section>
      <div className="border-t border-border bg-secondary/50">
        <Section eyebrow="Timeline" title="Professional experience.">
          <ol className="relative border-l border-sage pl-8 md:ml-[25%]">
            {roles.map((r) => (
              <li key={r.org + r.period} className="relative pb-12 last:pb-0">
                <span
                  className="absolute -left-[2.3rem] top-2 size-2.5 rounded-full border border-primary bg-background"
                  aria-hidden
                />
                <p className="font-sans text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {r.period}
                </p>
                <h3 className="mt-2 text-3xl">{r.title}</h3>
                <p className="font-sans text-sm text-primary">{r.org}</p>
                <p className="mt-3 max-w-2xl leading-relaxed">{r.summary}</p>
                <p className="mt-3 font-sans text-xs text-muted-foreground">
                  {r.focus.join(" · ")}
                </p>
              </li>
            ))}
          </ol>
        </Section>
      </div>
      <Section eyebrow="Skills" title="Technical range.">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group} className="border-t border-foreground pt-4">
              <h3 className="text-xl">{s.group}</h3>
              <ul className="mt-3 space-y-1.5 font-sans text-sm text-muted-foreground">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              {s.group === "AI Systems" && (
                <Link
                  to="/expertise/$slug"
                  params={{ slug: "ai-governance" }}
                  hash="model-selection-workflow"
                  className="mt-3 inline-block font-sans text-sm link-quiet"
                >
                  See the model-selection workflow
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="mt-16 max-w-2xl">
          <p className="eyebrow">Certifications (historical)</p>
          <ul className="mt-4 space-y-2">
            {certifications.map((c) => (
              <li key={c.name} className="text-sm">
                {c.name}{" "}
                <span className="font-sans text-xs text-muted-foreground">
                  — {c.note}, earned earlier in career
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-sans text-xs text-muted-foreground">
            Listed for historical context only; current validity is not implied.
          </p>
        </div>
        <Link to="/contact" className="mt-12 inline-block font-sans text-sm link-quiet">
          Get in touch
        </Link>
      </Section>
    </>
  );
}