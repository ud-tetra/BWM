// Editable content source for the whole site. Update arrays here; pages render from them.

export const person = {
  name: "Benjamin Mayes",
  title: "Systems Architect & Independent Researcher",
  location: "Cedar Park / Austin, Texas area",
  email: "benwmayes@yahoo.com",
  linkedin: "https://www.linkedin.com/in/benwmayes",
  github: "https://github.com/ud-tetra/MQM",
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Messaging",
    items: ["Exchange Server", "Exchange Online", "Exchange hybrid", "Microsoft 365"],
  },
  { group: "Identity & Security", items: ["Active Directory", "Entra ID", "PAM", "PKI"] },
  {
    group: "Cloud & Datacenter",
    items: ["Azure", "Azure Stack HCI", "Virtualization", "Datacenter design"],
  },
  {
    group: "Networks",
    items: [
      "Enterprise networking",
      "Unified communications",
      "Cloud infrastructure and networking",
    ],
  },
  {
    group: "Practice",
    items: ["Technical designs", "Runbooks", "Migration planning", "AI governance frameworks"],
  },
  {
    group: "AI Systems",
    items: [
      "Multi-model AI orchestration",
      "Human-directed, semi-automated routing",
      "Cost-aware LLM selection",
      "ChatGPT / Claude / Gemini / Grok",
    ],
  },
];

export const certifications = [
  { name: "MCTS — Microsoft Certified Technology Specialist", note: "Historical" },
  { name: "MCITP — Microsoft Certified IT Professional", note: "Historical" },
  { name: "VCP5 — VMware Certified Professional", note: "Historical" },
];

import type { Expertise, Pillar } from "./expertise";
export { expertise, type Expertise, type Pillar, type ExpertiseSlug } from "./expertise";

export const pillars: { name: Pillar; summary: string; slugs: Expertise["slug"][] }[] = [
  {
    name: "Enterprise Platforms",
    summary:
      "Exchange Server, Microsoft 365, and Azure hybrid estates—designed, migrated, and kept operable.",
    slugs: ["exchange", "hybrid-cloud"],
  },
  {
    name: "Identity & Security",
    summary:
      "Active Directory, Entra ID, healthcare M&A identity integration, CyberArk PAM, and PKI.",
    slugs: ["identity"],
  },
  {
    name: "Integration & Reliability",
    summary: "Networking, Cisco vCUBE voice, and datacenter infrastructure where systems meet.",
    slugs: ["systems-integration", "hybrid-cloud"],
  },
];

export {
  roles,
  workCases,
  publications,
  type Role,
  type WorkCase,
  type Publication,
} from "./records";
export { innovations, type Innovation, type InnovationSlug } from "./innovations";

export const researchPortals = [
  {
    label: "Unified Dynamics — public overview",
    href: "https://unified-dynamics-public.ben-w-mayes.chatgpt.site/",
  },
  {
    label: "Tetrahedral Packet Complexes — public overview",
    href: "https://tetrahedral-packet-complexes.ben-w-mayes.chatgpt.site/",
  },
];

export const researchRepos = [
  { label: "UD — core repository", href: "https://github.com/ud-tetra/UD" },
  { label: "UD-Physics — discovery sandbox", href: "https://github.com/ud-tetra/UD-Physics" },
];

export const nav = [
  { to: "/about", label: "About" },
  { to: "/expertise", label: "Expertise" },
  { to: "/work", label: "Selected Work" },
  { to: "/innovation", label: "Innovation" },
  { to: "/research", label: "Research" },
  { to: "/contact", label: "Contact" },
] as const;

// Not in primary navigation; linked from Research and the footer.
export const secondaryNav = [
  { to: "/journal", label: "Journal" },
  { to: "/publications", label: "Publications" },
] as const;