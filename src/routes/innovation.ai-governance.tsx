import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { seo } from "@/lib/seo";
import { PageHero, Section } from "@/components/site/Layout";

// Legacy URL kept as a bridge: AI governance now lives under Expertise, with TETRA as its applied form.
export const Route = createFileRoute("/innovation/ai-governance")({
  head: () => {
    const h = seo(
      "AI Governance",
      "AI governance now lives under Expertise; its applied research form is TETRA Packet Architecture.",
      "/innovation/ai-governance",
    );
    return { ...h, meta: [...h.meta, { name: "robots", content: "noindex, follow" }] };
  },
  component: () => (
    <>
      <PageHero
        eyebrow="Applied innovation"
        title="AI governance has moved."
        lede="AI governance is presented as professional framework expertise, with TETRA Packet Architecture as its applied research expression."
      />
      <Section>
        <div className="grid gap-px bg-border md:grid-cols-2">
          <Link
            to="/expertise/$slug"
            params={{ slug: "ai-governance" }}
            className="group flex items-center justify-between bg-card p-8"
          >
            <span className="font-display text-2xl group-hover:text-primary">
              AI Governance Framework Architecture
            </span>
            <ArrowRight className="size-5 text-primary" aria-hidden />
          </Link>
          <Link
            to="/innovation/$slug"
            params={{ slug: "tetra-architecture" }}
            className="group flex items-center justify-between bg-card p-8"
          >
            <span className="font-display text-2xl group-hover:text-primary">
              TETRA Packet Architecture
            </span>
            <ArrowRight className="size-5 text-primary" aria-hidden />
          </Link>
        </div>
      </Section>
    </>
  ),
});
