import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail } from "lucide-react";
import { seo } from "@/lib/seo";
import { person } from "@/data/site";
import { PageHero, Section } from "@/components/site/Layout";

const topics = [
  {
    title: "Enterprise architecture",
    body: "Conversations about Exchange and Microsoft 365, identity and privileged access, Azure and hybrid datacenter design, or integration problems that sit between teams.",
  },
  {
    title: "AI governance",
    body: "Discussion of authority, approval, provenance, and verification for AI-assisted systems—framework ideas, critique, and comparison of approaches.",
  },
  {
    title: "Research collaboration",
    body: "Review of the Unified Dynamics manuscripts and repositories, reproducibility checks, or mathematical critique. Specific objections are especially welcome.",
  },
  {
    title: "Professional introductions",
    body: "Introductions from colleagues, recruiters, or organizations looking for senior architecture experience.",
  },
];

export const Route = createFileRoute("/contact")({
  head: () =>
    seo(
      "Contact",
      "Correspond with Benjamin Mayes about enterprise architecture, AI governance, or research collaboration, by email or LinkedIn.",
      "/contact",
    ),
  component: () => (
    <>
      <PageHero
        eyebrow="Contact"
        title="Correspondence."
        lede="I read every message. A short note on context and what you have in mind is the best way to start."
      />
      <Section>
        <div className="grid gap-px bg-border md:grid-cols-2">
          <a
            href={`mailto:${person.email}`}
            className="group min-w-0 bg-card p-7 sm:p-10 hover:bg-background transition-colors"
          >
            <Mail className="size-5 text-primary" aria-hidden />
            <p className="eyebrow mt-6">Email</p>
            <p className="mt-2 font-display text-3xl break-all group-hover:text-primary">
              {person.email}
            </p>
          </a>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group min-w-0 bg-card p-7 sm:p-10 hover:bg-background transition-colors"
          >
            <ArrowUpRight className="size-5 text-primary" aria-hidden />
            <p className="eyebrow mt-6">LinkedIn</p>
            <p className="mt-2 font-display text-3xl break-words [overflow-wrap:anywhere] group-hover:text-primary">
              linkedin.com/in/benwmayes<span className="sr-only"> (opens in new tab)</span>
            </p>
          </a>
        </div>
        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {topics.map((t) => (
            <div key={t.title} className="border-t border-foreground pt-5">
              <h2 className="text-2xl">{t.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{t.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 max-w-2xl border-l border-sage pl-4 font-sans text-sm leading-relaxed text-muted-foreground">
          <p>
            This is a personal portfolio. Messages here are personal correspondence and do not
            reach, or speak for, any current or former employer. Please do not send confidential
            customer information.
          </p>
          <p className="mt-3">
            {person.location}. Background:{" "}
            <Link to="/about" className="link-quiet">
              About
            </Link>{" "}
            ·{" "}
            <Link to="/research" className="link-quiet">
              Research
            </Link>
          </p>
        </div>
      </Section>
    </>
  ),
});