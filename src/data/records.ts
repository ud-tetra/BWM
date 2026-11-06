// Career timeline, anonymized work cases, and publication records.
// OWNER REVIEW: confirm career dates and detailed responsibilities before editorial acceptance.
// Early-role summaries and focus labels below are neutral role categories, not verified duty inventories.
import type { ExpertiseSlug } from "./expertise";

export type Role = { org: string; title: string; period: string; summary: string; focus: string[] };

export const roles: Role[] = [
  {
    org: "Computacenter US",
    title: "Lead Consultant",
    period: "Nov 2020 — Present",
    summary:
      "Lead technical consulting across enterprise messaging, identity, hybrid cloud, datacenter, and voice integration engagements—technical designs, runbooks, investigations, and hands-on delivery.",
    focus: [
      "Exchange hybrid & Exchange Online",
      "Microsoft 365 & Entra ID",
      "Azure & Azure Stack HCI",
      "PAM / PKI",
      "Enterprise systems integration",
    ],
  },
  {
    org: "Pivot Technology Services",
    title: "Senior Consulting Engineer",
    period: "Jul 2013 — Nov 2020",
    summary:
      "Consulting engineering for enterprise infrastructure: Exchange design and migration, directory services, virtualization, networking, and the integration of on-premises and cloud services.",
    focus: [
      "Exchange Server design & migration",
      "Active Directory",
      "Virtualization",
      "Networking",
    ],
  },
  {
    org: "ARC — Austin Ribbon and Computer",
    title: "Sr. Systems Engineer",
    period: "Jul 2011 — Jul 2013",
    summary: "Served as Sr. Systems Engineer at ARC — Austin Ribbon and Computer.",
    focus: ["Systems engineering"],
  },
  {
    org: "Greentech Systems LLC",
    title: "Cofounder & Technology Director",
    period: "Nov 2008 — Jul 2011",
    summary: "Cofounded Greentech Systems LLC and served as Technology Director.",
    focus: ["Cofounder", "Technology leadership"],
  },
  {
    org: "SiteStuff",
    title: "Systems Administrator",
    period: "Oct 2007 — Nov 2008",
    summary: "Held the Systems Administrator role at SiteStuff.",
    focus: ["Systems administration"],
  },
  {
    org: "Independent",
    title: "IT Consultant",
    period: "Oct 2004 — Oct 2007",
    summary: "Worked independently as an IT consultant during this period.",
    focus: ["Independent IT consulting"],
  },
  {
    org: "Poly Enterprises",
    title: "Systems Administrator",
    period: "Nov 2001 — Oct 2004",
    summary: "Held the Systems Administrator role at Poly Enterprises.",
    focus: ["Systems administration"],
  },
  {
    org: "TechXpress",
    title: "IT Manager",
    period: "Mar 2001 — Nov 2001",
    summary: "Held the IT Manager role at TechXpress.",
    focus: ["IT management"],
  },
  {
    org: "The Creative Group",
    title: "Multimedia Designer",
    period: "Feb 2000 — Mar 2001",
    summary: "Held the Multimedia Designer role at The Creative Group.",
    focus: ["Multimedia", "Design"],
  },
  {
    org: "Independent",
    title: "IT Consultant",
    period: "Sep 1996 — Feb 2000",
    summary: "Began the career record with independent IT consulting in September 1996.",
    focus: ["Independent IT consulting"],
  },
];

export type WorkCase = {
  title: string;
  domain: string;
  context: string;
  dilemma: string;
  confirmed: string[];
  method: string;
  approach: string[];
  notClaimed: string;
  expertise: ExpertiseSlug;
};

// Anonymized. Confirmed = owner-confirmed facts; Representative method = typical approach; Not claimed = explicit limits.
export const workCases: WorkCase[] = [
  {
    title: "Identity integration through healthcare mergers",
    domain: "Identity & Directory",
    expertise: "identity",
    context:
      "Identity and directory integration for a large healthcare organization during mergers and acquisitions.",
    dilemma:
      "Acquired organizations bring their own Active Directory forests and applications. Converging too quickly risks clinical access; converging too slowly leaves duplicated identities and inconsistent control. The architecture has to let separate directories cooperate before they converge.",
    confirmed: [
      "Identity and directory integration for a large healthcare organization",
      "Mergers and acquisitions context",
    ],
    method:
      "A representative approach maps forests, trusts, and application authentication dependencies first, then designs synchronization toward a target identity platform and sequences each stage around clinical continuity with a defined rollback.",
    approach: [
      "Map Active Directory forests and trust relationships",
      "Inventory application authentication dependencies",
      "Design synchronization toward the target identity platform",
      "Sequence migration around clinical continuity",
    ],
    notClaimed:
      "Organization names, user counts, timelines, specific deliverables, and measured outcomes.",
  },
  {
    title: "CyberArk privileged access for a defense contractor",
    domain: "Privileged Access",
    expertise: "identity",
    context:
      "Deployment of CyberArk Privileged Access Manager for a major U.S. defense contractor.",
    dilemma:
      "The system protecting the most powerful credentials must be resilient, yet its recovery position should not share production's day-to-day exposure. Redundancy and recovery isolation pull in different directions and both have to be satisfied.",
    confirmed: [
      "All component servers deployed in redundant configurations",
      "Dedicated DR Vault at a separate site",
      "DR Vault kept offline during normal operations",
    ],
    method:
      "A representative approach places components for redundancy, separates production and disaster-recovery vaults, and documents operational procedures so the secure path is also the practical one for administrators.",
    approach: [
      "Place components for redundancy",
      "Separate production and disaster-recovery vaults",
      "Document operational procedures for privileged access",
    ],
    notClaimed:
      "Customer identity, air-gapping, recovery point or time objectives, replication details, certifications, or results.",
  },
  {
    title: "Three-node Azure Stack HCI cluster",
    domain: "Azure & Datacenter",
    expertise: "hybrid-cloud",
    context:
      "A three-node Azure Stack HCI cluster where network design determines storage behavior.",
    dilemma:
      "In a hyperconverged cluster, storage reliability depends on the network. RDMA storage traffic needs consistent lossless configuration across every host and switch, and a three-node design leaves limited margin for drift or maintenance.",
    confirmed: [
      "Cisco Nexus switching",
      "RoCEv2 for storage traffic",
      "Dedicated storage VLANs and jumbo frames",
      "Azure Arc integration",
    ],
    method:
      "A representative approach validates RDMA prerequisites, keeps MTU consistent end to end, baselines firmware and drivers across nodes, and treats cluster validation output as evidence to resolve rather than a formality.",
    approach: [
      "Validate RDMA and lossless-network prerequisites",
      "Keep MTU consistent end to end",
      "Baseline drivers and firmware before cluster validation",
    ],
    notClaimed: "Acceptance metrics, performance results, or customer identity.",
  },
  {
    title: "Exchange and Microsoft 365 migration methodology",
    domain: "Messaging",
    expertise: "exchange",
    context:
      "A representative methodology drawn from long Exchange hybrid and migration practice—a typical approach, not one engagement.",
    dilemma:
      "Hybrid is introduced as temporary but often lasts years. Every migration must balance speed against coexistence risk in calendars, permissions, and mail routing, and must end with a supportable plan for the last on-premises server.",
    confirmed: ["Long-standing Exchange Server, hybrid, and Exchange Online migration experience"],
    method:
      "A representative approach assesses transport, namespaces, and certificates; configures hybrid; runs pilot waves chosen to expose problems; stages batches around permission relationships; and plans decommissioning from the start.",
    approach: [
      "Assess transport, namespaces, and certificates",
      "Configure hybrid and run pilot waves",
      "Stage batch migration with coexistence checks",
      "Plan on-premises decommissioning",
    ],
    notClaimed: "Specific engagements, mailbox counts, or outcomes.",
  },
  {
    title: "Enterprise single sign-on with Entra ID",
    domain: "Identity & Access",
    expertise: "identity",
    context: "Integration of enterprise applications with Azure / Entra ID for single sign-on.",
    dilemma:
      "Each application integration is small, but together they define the organization's access model. Without a repeatable pattern, assignment, claims, and Conditional Access are decided differently every time.",
    confirmed: ["Enterprise SSO integration with Azure / Entra ID"],
    method:
      "A representative approach configures enterprise application authentication, defines assignment and ownership models, and considers Conditional Access implications during design rather than afterwards.",
    approach: [
      "Configure enterprise application authentication",
      "Define assignment and permission models",
      "Consider Conditional Access implications",
    ],
    notClaimed: "Specific protocols, platforms, applications, or outcomes.",
  },
  {
    title: "Azure-hosted Cisco vCUBE performance investigation",
    domain: "Voice & Networks",
    expertise: "systems-integration",
    context:
      "Investigation of concurrent-call issues on a Cisco vCUBE in Azure between Sonus SBCs and Webex Calling.",
    dilemma:
      "Several explanations were plausible and each pointed to a different remedy. Declaring a cause too early would have been convenient and possibly wrong.",
    confirmed: [
      "Cisco vCUBE between Sonus SBCs and Webex Calling",
      "Investigation of concurrent-call issues",
    ],
    method:
      "The investigation held competing hypotheses—VM CPU SKU suitability, burstable CPU credit behavior, SR-IOV / accelerated networking, and QFP data-plane throughput—and looked for evidence that would distinguish them.",
    approach: [
      "Review Azure VM CPU SKU suitability",
      "Examine CPU burst-credit behavior",
      "Check SR-IOV / accelerated networking",
      "Inspect QFP data-plane indicators",
    ],
    notClaimed: "A root cause or fix. The root cause was not proven.",
  },
];

export type Publication = {
  title: string;
  author: string;
  venue: string;
  doi: string;
  type: string;
  date: string;
  note?: string;
  synopsis: string;
};

export const publications: Publication[] = [
  {
    title:
      "Distinction Dynamics: Emergent Geometry, Matter, and Gauge Interactions from a Packet Routing Substrate",
    author: "Benjamin Mayes",
    venue: "Zenodo",
    type: "Preprint",
    date: "2026-04-12",
    doi: "https://doi.org/10.5281/zenodo.22645424",
    synopsis:
      "This preprint explores whether geometry, matter-like structure, and gauge-like interactions can be described as emergent behavior of a discrete substrate in which packets of distinction are routed between elements. It sets out the substrate's definitions, the routing rules, and the counting and symmetry arguments used to connect them to familiar structures. The manuscript is written as an exploratory theoretical proposal: it states its assumptions explicitly and separates internal mathematical consequences from suggested physical interpretations. It does not claim experimental confirmation, and any correspondence with known physics is presented as a hypothesis to examine rather than an established result. Readers should treat it as a deposited research manuscript open to scrutiny, not a peer-reviewed or empirically validated theory.",
  },
  {
    title: "Unified Dynamics as an Accommodation-Channel Extension of General Relativity",
    author: "Benjamin Mayes",
    venue: "Zenodo",
    type: "Repository manuscript",
    date: "2026-04-15",
    note: "Zenodo's “Peer review” resource category does not indicate completed journal peer review.",
    doi: "https://doi.org/10.5281/zenodo.19582493",
    synopsis:
      "This manuscript examines how Unified Dynamics might be framed as an extension of General Relativity through an additional accommodation channel, rather than as a replacement for it. It discusses how such a channel could be introduced, what consistency conditions it must respect, and where it would be expected to reduce to established relativistic behavior. The deposit's resource category on Zenodo should not be read as evidence of completed journal peer review; no such review is claimed. The work is presented as a theoretical proposal under development, with its assumptions and open questions stated. It makes no claim of observational or experimental confirmation and does not assert that Unified Dynamics supersedes General Relativity.",
  },
  {
    title:
      "Unified Dynamics on Tetrahedral Packet Complexes: Exact Closure, Hodge–Dirac Transport, Branch Dynamics, and Retriangulation",
    author: "Benjamin Mayes",
    venue: "Zenodo",
    type: "Preprint",
    date: "2026-09-05",
    note: "Includes a reproducibility supplement.",
    doi: "https://doi.org/10.5281/zenodo.22365961",
    synopsis:
      "This preprint develops the mathematical machinery of Unified Dynamics on tetrahedral packet complexes. It addresses exact closure conditions, transport built on Hodge–Dirac operators, the dynamics of branching structures, and retriangulation moves that change the complex while preserving declared invariants. Results are worked in exact arithmetic where possible and are accompanied by a reproducibility supplement so that computations can be rerun and checked. The exact mathematical structures it reports are statements about the defined model; they are not established physical theory. Any mapping from those structures to physical quantities is labeled as interpretation, and no independent empirical validation is claimed.",
  },
];
