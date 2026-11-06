// Expertise detail content. Each area: 6–8 sections, two paragraphs each.
// Facts are owner-confirmed; no customer names, metrics, or outcomes are claimed.

export type Pillar =
  "Enterprise Platforms" | "Identity & Security" | "Integration & Reliability" | "AI Governance";

export type ExpertiseSlug =
  "exchange" | "identity" | "hybrid-cloud" | "systems-integration" | "ai-governance";

export type Expertise = {
  slug: ExpertiseSlug;
  title: string;
  pillar: Pillar;
  short: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  capabilities: string[];
  relatedWork: string[];
  relatedJournal: string[]; // journal slugs
};

export const expertise: Expertise[] = [
  {
    slug: "exchange",
    pillar: "Enterprise Platforms",
    title: "Exchange & Enterprise Messaging",
    short:
      "Exchange Server, hybrid, Exchange Online migration, mail flow, and PowerShell automation.",
    intro:
      "Messaging is infrastructure people only notice when it fails. A large share of my career has been spent designing, upgrading, migrating, and finally retiring Microsoft Exchange—on-premises, in hybrid, and in Exchange Online.",
    sections: [
      {
        heading: "Hybrid as a deliberate architecture",
        paragraphs: [
          "Exchange hybrid is usually introduced as a bridge, and bridges have a way of staying up. I treat it as a production architecture from the first design session: which namespaces clients will resolve, where Autodiscover points at each stage, which servers publish hybrid services, and which side of the organization owns each decision.",
          "The practical question is not whether hybrid works on the day the wizard finishes, but whether it still behaves predictably after certificate renewals, staff turnover, and a few years of incremental change. That shapes choices about server roles, documentation, and how much configuration is captured as script rather than remembered.",
        ],
      },
      {
        heading: "Namespaces, Autodiscover, and certificates",
        paragraphs: [
          "Most hybrid trouble is visible first as a client symptom—password prompts, missing calendars, a profile that will not build—and traced later to namespace or certificate design. I map every published name, which certificate covers it, where it terminates, and which load balancer or reverse proxy sits in between.",
          "Certificates deserve a lifecycle, not an expiry surprise. That means knowing which services bind them, which connectors reference them by name, and what a renewal touches. A short, rehearsed renewal procedure is worth more than a long design document nobody reads in the week the certificate lapses.",
        ],
      },
      {
        heading: "Free/busy, OAuth, and coexistence behavior",
        paragraphs: [
          "Users judge a migration by whether they can still see each other's calendars. Cross-premises free/busy depends on OAuth configuration, the organization relationship, and Autodiscover resolving correctly from both directions. I test these paths explicitly with mailboxes on each side rather than inferring them from the hybrid configuration report.",
          "Coexistence also covers delegate access, shared mailboxes, and send-as permissions that may not behave identically across premises. Documenting what is supported during the transition, and what is not, lets support teams answer questions honestly instead of escalating every report as an outage.",
        ],
      },
      {
        heading: "Mail routing and transport security",
        paragraphs: [
          "Many migration incidents are transport incidents. I trace mail end to end: MX records, inbound and outbound connectors, smart hosts, TLS requirements, Exchange Online Protection, and third-party gateways such as Proofpoint where they sit in front of or behind Microsoft 365. Each hop is a decision about who is authoritative for filtering and routing.",
          "Application relays are the quiet risk. Scanners, line-of-business systems, and appliances often send through an on-premises server nobody has inventoried. Message trace and connector logs provide evidence; assumptions about which devices still relay are replaced with a list that can be tested and signed off.",
        ],
      },
      {
        heading: "Migration in reversible waves",
        paragraphs: [
          "Good migrations are dull. Pilot groups are chosen to expose problems early—delegates, heavy calendar users, shared mailbox owners—rather than to produce an easy first success. Batches are planned around permission relationships so that people who work closely together move together.",
          "Every wave has entry criteria, a communication plan, a validation step, and a defined way to pause. Runbooks are written so an operations team can execute a wave without the architect in the room, and so the next wave benefits from what the previous one revealed.",
        ],
      },
      {
        heading: "Reproducible inventory with PowerShell",
        paragraphs: [
          "I prefer an inventory that can be regenerated to one that was typed into a spreadsheet once. PowerShell collects mailboxes, permissions, forwarding rules, connectors, certificates, and virtual directory settings in a form that can be compared between runs. Differences between two snapshots are often more informative than either snapshot alone.",
          "The same scripts that inventory an environment can validate it after change. That turns a migration's evidence from screenshots into repeatable output, and it gives the organization something durable to keep when the project team leaves.",
        ],
      },
      {
        heading: "Retiring the last server",
        paragraphs: [
          "When the last mailbox has moved, an Exchange server frequently remains for recipient management, directory attribute handling, or relay. Removing it is a design decision with supportability implications, not a cleanup task. I review how recipients will be managed afterwards and what tooling replaces the console administrators relied on.",
          "Decommissioning is sequenced: confirm no remaining relay or application dependency, preserve what must be preserved, document the final state, and only then remove servers in a supported way. The goal is an environment where no one later discovers a dependency by turning something off.",
        ],
      },
    ],
    capabilities: [
      "Exchange Server design and upgrade",
      "Exchange hybrid configuration",
      "Exchange Online migration",
      "Autodiscover and certificate design",
      "Mail flow, TLS, EOP and gateway routing",
      "PowerShell inventory and validation",
      "Migration and decommissioning runbooks",
    ],
    relatedWork: ["Exchange and Microsoft 365 migration methodology"],
    relatedJournal: [
      "long-life-of-exchange-hybrid",
      "retiring-the-last-server",
      "runbooks-as-architecture",
    ],
  },
  {
    slug: "identity",
    pillar: "Identity & Security",
    title: "Identity & Security Governance",
    short:
      "Active Directory, Entra ID SSO, healthcare M&A identity integration, CyberArk PAM, and PKI.",
    intro:
      "Every enterprise system rests on identity. I work across Active Directory and Entra ID, privileged access management, and public key infrastructure—the layers that decide who can do what, and how that is proven afterwards.",
    sections: [
      {
        heading: "Directory integration through mergers",
        paragraphs: [
          "I have worked on identity and directory integration for a large healthcare organization through mergers and acquisitions. Each acquisition arrives with its own Active Directory forest, naming conventions, administrative habits, and applications that assume their directory is the only one.",
          "The architectural choice is rarely whether to converge but in what order. Trusts and name resolution provide early cooperation; synchronization toward a target identity platform provides a path to convergence; and the sequence is governed by which applications can tolerate change and when.",
        ],
      },
      {
        heading: "Trusts, synchronization, and clinical continuity",
        paragraphs: [
          "In healthcare the constraint that outranks the others is that clinical services keep working. Before any account moves, I want to know which clinical and business applications authenticate against which directory, by what protocol, and with which service accounts.",
          "Trusts are scoped deliberately rather than opened broadly, and synchronization rules are written with attention to duplicate identities, attribute ownership, and which source is authoritative for each person during the transition. Rollback is planned for each stage, because a rushed identity change in a hospital has consequences beyond IT.",
        ],
      },
      {
        heading: "Entra ID and enterprise single sign-on",
        paragraphs: [
          "Hybrid identity succeeds when the on-premises directory is clean and synchronized with intent. Enterprise application single sign-on then adds its own decisions: which users and groups are assigned, which claims the application expects, and who owns the application registration over time.",
          "Conditional Access concepts—location, device state, risk, and authentication strength—should be considered while the integration is designed, not retrofitted after users complain. The aim is a pattern that application owners can repeat without re-litigating the security model for each new integration.",
        ],
      },
      {
        heading: "Privileged access with CyberArk",
        paragraphs: [
          "I worked on a CyberArk Privileged Access Manager deployment for a major U.S. defense contractor. All component servers were deployed in redundant configurations, and a dedicated disaster-recovery Vault was placed at a separate site and kept offline during normal operations.",
          "That design reflects a broader principle: the system protecting the most powerful credentials must itself be resilient and must have a recovery position that is not exposed to the same day-to-day risk as production. I do not claim particular recovery objectives or an air-gapped design for that engagement; the confirmed facts are the redundancy and the separate offline DR Vault.",
        ],
      },
      {
        heading: "Privileged identity as an operating model",
        paragraphs: [
          "Privileged access management is as much about daily operation as about vault architecture. Administrators need a secure path that is also a practical one, or they will find workarounds. Onboarding accounts, rotating credentials, recording sessions, and handling emergency access all need procedures people can follow under pressure.",
          "Tiering administrative access—separating who can touch domain controllers from who can touch workstations—limits how far one compromised credential can reach. These ideas predate PAM products, and they apply equally to service accounts and, increasingly, to automated agents.",
        ],
      },
      {
        heading: "PKI and certificate lifecycle",
        paragraphs: [
          "Public key infrastructure is easy to install and hard to operate well. Design decisions about hierarchy, offline roots, issuing authorities, revocation publication, and template permissions determine whether certificates remain trustworthy years later.",
          "Lifecycle is where most failures happen: certificates nobody knew existed expire, templates grant enrollment more widely than intended, or revocation lists stop publishing. Inventory, ownership, and renewal procedures are the unglamorous parts of PKI that keep it from becoming an outage generator.",
        ],
      },
    ],
    capabilities: [
      "Active Directory forests and trusts",
      "Healthcare M&A identity integration",
      "Entra ID enterprise SSO",
      "Conditional Access design considerations",
      "CyberArk Privileged Access Manager",
      "Administrative tiering",
      "PKI design and lifecycle",
    ],
    relatedWork: [
      "Identity integration through healthcare mergers",
      "CyberArk privileged access for a defense contractor",
      "Enterprise single sign-on with Entra ID",
    ],
    relatedJournal: ["privileged-access-as-a-model-for-ai-authority"],
  },
  {
    slug: "hybrid-cloud",
    pillar: "Enterprise Platforms",
    title: "Azure, Hybrid & Datacenter",
    short:
      "Azure, Azure Stack HCI / Azure Local, Cisco Nexus RoCEv2 storage networking, and Azure Arc.",
    intro:
      "Most enterprises live in both worlds. My work in Azure, Azure Stack HCI (now Azure Local), VMware and Windows Server virtualization focuses on hybrid estates that are coherent rather than accidental.",
    sections: [
      {
        heading: "Three-node hyperconverged clusters",
        paragraphs: [
          "I have worked on a three-node Azure Stack HCI cluster. Hyperconverged infrastructure brings compute and storage onto the same nodes, which means the cluster's storage behavior is inseparable from its network design and from the consistency of each node's configuration.",
          "A three-node design has specific considerations around resiliency, maintenance windows, and capacity reserved for a node being offline. Those decisions are best made explicitly, with the workload owners, before hardware is ordered rather than after the first patch cycle.",
        ],
      },
      {
        heading: "RDMA storage networking on Cisco Nexus",
        paragraphs: [
          "Storage traffic on that cluster used RoCEv2 over Cisco Nexus switching, with dedicated storage VLANs and jumbo frames. RDMA over converged Ethernet depends on lossless-network prerequisites being configured consistently on hosts and switches alike.",
          "Most problems here are drift: one port with a different MTU, a priority setting missing on one switch, a host adapter configured slightly differently from its peers. I validate the configuration end to end and keep a record of the intended state so drift can be detected rather than discovered.",
        ],
      },
      {
        heading: "Firmware, drivers, and deployment validation",
        paragraphs: [
          "Hyperconverged platforms are sensitive to the versions of firmware and drivers beneath them. Baselining those versions across nodes before cluster validation removes a whole category of intermittent faults that are otherwise difficult to reproduce.",
          "Cluster validation is evidence, not a formality. Its warnings are read and either resolved or documented with a reason. The same discipline applies to later updates: a change to firmware or drivers is a change to the storage system.",
        ],
      },
      {
        heading: "Azure Arc and hybrid management",
        paragraphs: [
          "The cluster was integrated with Azure Arc, which extends Azure management and governance to on-premises resources. Arc changes the operating model: policy, monitoring, and access can be expressed in one place, but identities and permissions on both sides need deliberate design.",
          "Hybrid management works best when the organization is clear about which plane is authoritative for which task. Otherwise administrators end up making the same change twice, or worse, making conflicting changes in two consoles.",
        ],
      },
      {
        heading: "Virtualization: VMware and Windows Server",
        paragraphs: [
          "Much enterprise infrastructure still runs on VMware or Hyper-V, and many organizations operate both while they decide on a direction. Migration between platforms is not only a conversion of disks; networking, backup integration, monitoring, and operational tooling all move too.",
          "I approach platform changes by inventorying what depends on the hypervisor—agents, backup products, licensing assumptions—so that the plan addresses the surrounding ecosystem as well as the virtual machines themselves.",
        ],
      },
      {
        heading: "Backup and recovery as design inputs",
        paragraphs: [
          "Backup is often designed last and tested rarely. I prefer to treat recovery as a design input: what must be restorable, to where, by whom, and how that is demonstrated. A backup job that reports success has not shown that a restore works.",
          "For hyperconverged and hybrid platforms, recovery planning also considers the platform itself—cluster configuration, identity dependencies, and the documentation needed to rebuild if the people who built it are unavailable.",
        ],
      },
      {
        heading: "Azure VMs and cloud networking",
        paragraphs: [
          "In Azure, virtual machine sizing, CPU behavior, accelerated networking, and virtual network design interact in ways that matter for latency-sensitive or throughput-sensitive workloads. Burstable SKUs, for example, behave differently under sustained load than under short peaks.",
          "Placement decisions—what runs in Azure, what stays on premises, what connects the two—should be explicit and recorded, with reasons tied to latency, regulation, cost, and operations rather than to the direction of the most recent project.",
        ],
      },
    ],
    capabilities: [
      "Azure Stack HCI / Azure Local",
      "Cisco Nexus RoCEv2 storage networking",
      "Azure Arc",
      "VMware and Windows Server virtualization",
      "Firmware/driver baselining and cluster validation",
      "Backup and recovery planning",
      "Azure VM and virtual network design",
    ],
    relatedWork: [
      "Three-node Azure Stack HCI cluster",
      "Azure-hosted Cisco vCUBE performance investigation",
    ],
    relatedJournal: ["runbooks-as-architecture", "evidence-not-assurances"],
  },
  {
    slug: "systems-integration",
    pillar: "Integration & Reliability",
    title: "Infrastructure, Networks & Unified Communications",
    short:
      "Cisco switching, virtual networking, Cisco vCUBE with Sonus SBCs and Webex Calling, and integration discipline.",
    intro:
      "Systems rarely fail in isolation; they fail at their seams. Integration work—networks, voice, and the connective tissue between platforms—is where breadth of experience matters most and where confident guesses are most dangerous.",
    sections: [
      {
        heading: "Switching and datacenter foundations",
        paragraphs: [
          "Routing, switching, name resolution, load balancing, and firewall policy underpin every service above them. Much of my work with Cisco datacenter switching has been in support of platforms built on top—storage networks, virtualization hosts, and messaging servers.",
          "Troubleshooting starts at the foundation, with evidence gathered layer by layer. An application symptom that turns out to be an MTU mismatch or an asymmetric route is common enough that I check those before accepting higher-level explanations.",
        ],
      },
      {
        heading: "Virtual networking and SR-IOV",
        paragraphs: [
          "Virtualization adds network layers that are easy to forget: virtual switches, host adapters, offloads, and in cloud environments, accelerated networking built on SR-IOV. Whether traffic passes through a software path or a hardware-assisted one can change performance characteristics substantially.",
          "I confirm what the data path actually is rather than what it is intended to be. A setting enabled in one place and not honored in another is a frequent source of behavior that looks inexplicable until the path is drawn.",
        ],
      },
      {
        heading: "Cloud-hosted voice with Cisco vCUBE",
        paragraphs: [
          "I have investigated concurrent-call issues on a Cisco vCUBE hosted in Azure, sitting between Sonus session border controllers and Webex Calling. vCUBE—the virtual Cisco Unified Border Element—acts as the SIP border, and its performance depends on the virtual machine, the CPU, the network path, and its own data plane together.",
          "Voice is unforgiving: signaling may succeed while media fails, or failures may appear only above a certain number of simultaneous calls. Those patterns narrow the search, but they do not by themselves identify a cause.",
        ],
      },
      {
        heading: "SIP, TLS, and RTP",
        paragraphs: [
          "Voice integration means following a call through SIP signaling, often protected by TLS, and RTP media that may take a different path from the signaling. Certificates, cipher support, codec negotiation, and NAT behavior each have to agree on both sides of every border element.",
          "Captures and call traces are the primary evidence. I prefer to compare a working call with a failing one at the same point in the path, because differences are easier to reason about than a single trace in isolation.",
        ],
      },
      {
        heading: "Competing hypotheses, held honestly",
        paragraphs: [
          "In the vCUBE investigation several explanations were plausible: Azure VM CPU SKU suitability, burstable CPU credit behavior under sustained load, accelerated networking and SR-IOV behavior, and data-plane (QFP) throughput indicators. Each predicts somewhat different evidence.",
          "The root cause of that incident was not proven, and I do not claim otherwise. What the work demonstrates is method: listing hypotheses, identifying what would distinguish them, and declining to declare a cause because one explanation is convenient.",
        ],
      },
      {
        heading: "Integration discipline",
        paragraphs: [
          "Connecting systems built at different times by different teams is safer with clear interface boundaries, documented dependencies, and staged cutovers. I write down who owns each side of an interface and what each side expects, because many integration failures are really disagreements about responsibility.",
          "Cutover plans include the checks that confirm success and the conditions that trigger rollback. That is not bureaucracy; it is how a team avoids discovering at two in the morning that nobody agreed what 'working' meant.",
        ],
      },
    ],
    capabilities: [
      "Cisco switching and datacenter networking",
      "Virtual networking and SR-IOV",
      "Cisco vCUBE in Azure",
      "Sonus SBC and Webex Calling integration",
      "SIP/TLS/RTP troubleshooting",
      "Hypothesis-driven investigation",
      "Dependency mapping and cutover planning",
    ],
    relatedWork: [
      "Azure-hosted Cisco vCUBE performance investigation",
      "Three-node Azure Stack HCI cluster",
    ],
    relatedJournal: ["evidence-not-assurances", "runbooks-as-architecture"],
  },
  {
    slug: "ai-governance",
    pillar: "AI Governance",
    title: "AI Governance Framework Architecture",
    short:
      "Independent framework R&D applying identity and access engineering to AI-assisted systems.",
    intro:
      "The governance questions raised by AI are systems architecture questions: what can a system do, under whose authority, and how is that recorded? This is independent framework research and development informed by identity and access engineering. It does not describe commercial installations or a deployed product.",
    sections: [
      {
        heading: "Capability is not authority",
        paragraphs: [
          "A technically plausible recommendation is not authorization to change production. In identity engineering this is ordinary: an administrator who knows how to reset a password still needs to be permitted to reset that particular password. AI agents deserve no exemption from that principle.",
          "The more capable a system becomes, the more important the distinction is. Capability determines what a system could do; authority determines what it may do here, now, for this principal. Governance design begins by keeping those two separate.",
        ],
      },
      {
        heading: "Identity and delegated authority",
        paragraphs: [
          "Every consequential action should be attributable to an identified principal—a person, a service, or an agent acting on someone's behalf. Delegation should be explicit about who delegated, what was delegated, and when it expires.",
          "Borrowing from privileged access practice, authority can be scoped by resource, action, and time, and elevated only through a recorded approval. An agent that inherits a human's full permissions by default is a design gap, not a convenience.",
        ],
      },
      {
        heading: "Proposed, authorized, executed, verified",
        paragraphs: [
          "I separate four events that are often collapsed into one: a change is proposed, the proposal is authorized, the change is executed, and the result is independently verified. Each event has a different actor, different evidence, and a different failure mode.",
          "An API returning success shows that something executed. It does not show that the intended outcome exists. Verification is a separate check, ideally by a different mechanism than the one that made the change.",
        ],
      },
      {
        heading: "Bounded delegated execution",
        paragraphs: [
          "Useful assistants must be able to do substantial work, so the goal is bounds rather than prohibition. A bounded execution defines the permitted actions, the resources in scope, and what happens when a request exceeds that scope—stop, ask, or escalate.",
          "Enforcement belongs in the execution path, not only in a policy document. If the boundary can be bypassed by phrasing a request differently, it is advice rather than a control.",
        ],
      },
      {
        heading: "Approval where policy requires it",
        paragraphs: [
          "Human approval is valuable where it adds judgment and costly where it adds only friction. Policy should say which classes of action require approval, by whom, and with what information in front of the approver.",
          "An approval that shows the approver nothing but a summary is a rubber stamp. The approver should see what will change, under what authority, and how it will be checked afterwards.",
        ],
      },
      {
        heading: "Provenance, audit, and durable artifacts",
        paragraphs: [
          "Outputs should be linked to the inputs, instructions, and authority that produced them. Durable artifacts—records that persist after the session ends—let a reviewer reconstruct what happened without relying on the system's own narrative.",
          "Audit is for people who were not present. It should be readable by an auditor or a successor engineer, and it should record refusals and failures as well as successes.",
        ],
      },
      {
        heading: "Integrity is not truth",
        paragraphs: [
          "A SHA-256 hash proves that an artifact has not changed since it was hashed. It says nothing about whether the artifact is correct. This distinction matters both in operations and in AI-assisted research, where a perfectly preserved record of a wrong derivation is still wrong.",
          "Integrity mechanisms are necessary for trustworthy evidence, but they are not a substitute for review, testing, or, in science, empirical validation.",
        ],
      },
      {
        heading: "Human-directed multi-model orchestration",
        paragraphs: [
          "I designed a structured model-selection process for AI-assisted work, choosing among OpenAI ChatGPT, Anthropic Claude, Google Gemini, xAI Grok, and potentially other models according to expected usefulness, cost, and task profile. Coding, analysis, drafting, and review present different requirements; selection is directed by me rather than determined by a fixed ranking of models. These are model ecosystems, not software frameworks. Some handoffs and actions are semi-automated, but the workflow is not a fully autonomous dynamic routing engine.",
          "Model selection does not establish that an output is correct or authorize a consequential action. Outputs still require verification and review appropriate to the task, with human decisions retained at the approval boundary. This routing workflow is distinct from TETRA governed execution: it concerns which model to use and how to coordinate the work, rather than claiming enforceable execution controls. No measured cost savings, comparative benchmarks, or production installation is claimed.",
        ],
      },
      {
        heading: "From principle to applied architecture",
        paragraphs: [
          "TETRA Packet Architecture is my applied research expression of these ideas: a packet-centered design for governed AI execution. It is experimental. It is not commercially deployed, certified, or patented.",
          "The work is informed by real identity and privileged-access engineering, and it is offered as architecture for discussion and review rather than as a product claim.",
        ],
      },
    ],
    capabilities: [
      "Governance framework design",
      "Delegated-authority models",
      "Bounded-execution patterns",
      "Approval and provenance models",
      "Audit and durable evidence design",
      "Policy-to-control translation",
      "Multi-model AI orchestration",
      "Cost-aware LLM selection",
      "Semi-automated workflow routing",
    ],
    relatedWork: ["CyberArk privileged access for a defense contractor"],
    relatedJournal: [
      "authority-before-action",
      "privileged-access-as-a-model-for-ai-authority",
      "evidence-not-assurances",
    ],
  },
];