// Applied innovation portfolio. Five primary entries only; TETRA is the flagship.
// Claim discipline: separate what is exact under a declared mathematical model, what is
// numerical/software evidence, and what has physical or independent validation (usually none).

export type InnovationSlug = "tetra-architecture" | "mqm" | "tetraquantum" | "tetradec" | "lattix";

export type Innovation = {
  slug: InnovationSlug;
  name: string;
  tagline: string;
  status: string;
  summary: string;
  sections: { heading: string; body: string[] }[];
  evidence: { exact: string; numerical: string; physical: string };
  notClaimed: string[];
  links: { label: string; href: string }[];
  flagship?: boolean;
};

export const innovations: Innovation[] = [
  {
    slug: "tetra-architecture",
    flagship: true,
    name: "TETRA Packet Architecture",
    tagline: "Governance belongs in the execution path.",
    status: "Scoped technical reference demo",
    summary:
      "A packet-centered governance architecture for AI-assisted work. Every consequential step passes through a canonical, machine-readable packet that is checked, bounded, and recorded before anything is released.",
    sections: [
      {
        heading: "The problem it addresses",
        body: [
          "Most AI governance today lives beside the system: policy documents, review meetings, and logs inspected after the fact. That arrangement works poorly once an assistant can choose tools and change state. By the time a reviewer reads the transcript, the change has already happened.",
          "TETRA starts from a principle familiar to anyone who has run privileged access in a large enterprise: authority should be enforced where the action occurs, not described somewhere else. Governance belongs in the execution path.",
        ],
      },
      {
        heading: "How a request moves through the architecture",
        body: [
          "An input—a request, a proposed tool call, an intermediate result—is first normalized into a canonical, machine-readable packet that carries its state, scope, and provenance. Written governance is translated into executable controls that can be evaluated against that packet rather than interpreted loosely at runtime.",
          "The packet is then verified: drift from its declared scope is detected, provenance is checked, and the result is a bounded decision state that lists the next actions actually permitted. Release is provenance-linked. Anything that does not pass is routed to quarantine, human review, denial, or a controlled reentry path. Every transition is recorded, so the audit trail describes how the state changed, not just what was finally produced.",
        ],
      },
      {
        heading: "Two kinds of reentry",
        body: [
          "Work that has been paused or quarantined needs a disciplined way back in. TETRA distinguishes exact reentry, by match or equivalent canonical restoration of an approved state, from proof reentry, using machine-verifiable continuity evidence without requiring exact state identity.",
          "The distinction matters in practice. Exact reentry checks the match or canonical restoration; proof reentry evaluates continuity evidence for an evolving work item within its authorized lineage. Human approval is inserted wherever the declared policy requires it, rather than everywhere or nowhere.",
        ],
      },
      {
        heading: "Where it comes from",
        body: [
          "The design is informed directly by identity and access engineering: least privilege, separation of proposal from authorization, change control, and evidence that survives an audit. It is also informed by my own research practice, where AI assistance made it necessary to separate what was proposed, what was executed, and what was actually verified.",
          "The professional side of this thinking is described under AI governance framework architecture. TETRA is the applied, implementation-oriented expression of it.",
        ],
      },
      {
        heading: "Current status",
        body: [
          "A scoped technical reference demonstration has been prepared to exercise the packet flow end to end. It is not production deployed and it is not certified against any standard. A review bundle has been prepared for counsel; no patent filing is confirmed, and confidential mechanisms and drafts are deliberately not published here.",
        ],
      },
    ],
    evidence: {
      exact:
        "The packet model, decision states, and reentry definitions are specified precisely enough to be checked mechanically within the reference demo.",
      numerical:
        "The reference demo exercises representative flows; no performance or scale benchmarks are published.",
      physical:
        "Not applicable as a physical claim. No production deployment, customer use, or certification is claimed.",
    },
    notClaimed: [
      "Production deployment or certification",
      "Customers or commercial installations",
      "Any patent filing or pending status",
      "Measured superiority over other approaches",
    ],
    links: [],
  },
  {
    slug: "mqm",
    name: "MQM — Mayes Quantum Method",
    tagline: "Small quantum error-correcting codes, released with replayable evidence.",
    status: "Frozen code evaluation release 0.5",
    summary:
      "A research program on small quantum error-correcting code constructions, published with a frozen evaluation release, a replayable subsystem-algebra notebook, and a public tracker that separates results from open questions.",
    sections: [
      {
        heading: "What MQM is",
        body: [
          "MQM is an independent research effort examining small quantum error-correcting code constructions and the circuits that would measure them. The emphasis is on being exact about what each construction is—its parameters, its limitations, and what has and has not been tested—rather than on headline claims.",
          "The public research site documents the work, and the source is available in the MQM repository.",
        ],
      },
      {
        heading: "The frozen release",
        body: [
          "Code evaluation release 0.5 was frozen on 18 September 2026. It includes a replayable subsystem-algebra notebook and the X5 envelope, so a reader can reproduce the algebraic checks rather than take them on trust. Results outside that frozen release are not part of it.",
        ],
      },
      {
        heading: "Three scopes, stated precisely",
        body: [
          "A 4-data-qubit restricted X-only code, [[4,1,1]], with three ancillas and a selected measurement circuit. It is restricted by design and should be read that way.",
          "A Core-X5 repetition construction with five data qubits and four ancillas. Against general Pauli errors its distance is 1. It is not the [[5,1,3]] perfect code, and it should not be confused with it.",
          "A subsystem code, [[8,1,3,3]]: eight data qubits, one logical qubit, three gauge qubits, with dressed distance 3 under the ideal code algebra.",
        ],
      },
      {
        heading: "Corrections and negative results",
        body: [
          "An obstruction was found for a restricted entangler, but only for the tested family. It is not a universal no-go result. An earlier memory-performance table has been withdrawn because its replay inputs were not preserved; without inputs it could not be reproduced, so it no longer stands as evidence.",
          "Experiments have been prepared but not executed on quantum processing hardware. No quantum advantage or hardware performance is demonstrated.",
        ],
      },
      {
        heading: "The separate thermal track",
        body: [
          "A newer thermal research track appears on the project tracker. It is a separate line of investigation and is not part of the frozen code release.",
        ],
      },
    ],
    evidence: {
      exact:
        "Code parameters and subsystem algebra are exact under the declared ideal model and replayable in the notebook.",
      numerical:
        "Circuit-level analyses are software results; the withdrawn memory table is excluded.",
      physical: "None. Prepared experiments have not been run on a QPU.",
    },
    notClaimed: [
      "Execution on quantum hardware",
      "Demonstrated quantum advantage",
      "A universal no-go theorem",
      "That Core-X5 is the [[5,1,3]] code",
    ],
    links: [
      { label: "MQM research site", href: "https://mqm-research.ben-w-mayes.chatgpt.site/" },
      { label: "Codes", href: "https://mqm-research.ben-w-mayes.chatgpt.site/codes/" },
      { label: "Replay notebook", href: "https://mqm-research.ben-w-mayes.chatgpt.site/replay/" },
      { label: "Research tracker", href: "https://mqm-research.ben-w-mayes.chatgpt.site/tracker/" },
      { label: "Source on GitHub", href: "https://github.com/ud-tetra/MQM" },
    ],
  },
  {
    slug: "tetraquantum",
    name: "TetraQuantum",
    tagline:
      "A native three-dimensional code architecture, specified exactly and promoted cautiously.",
    status: "Architecture patch v0.23",
    summary:
      "An architecture study for a native 3D Tri-Tetra quantum code with a six-edge K4 gauge structure, a barycentric Reed–Muller factory, and typed erasure, replay and refresh handling.",
    sections: [
      {
        heading: "Purpose",
        body: [
          "TetraQuantum asks whether tetrahedral geometry offers a natural organizing structure for a fault-tolerant quantum architecture. It is an architecture study: it specifies components and how they relate, and it publishes the evidence status of each.",
        ],
      },
      {
        heading: "Components in patch v0.23",
        body: [
          "A native 3D Tri-Tetra code whose layout follows tetrahedral structure rather than a flattened 2D lattice. A six-edge K4 gauge, using the complete graph on four vertices—the edge structure of a tetrahedron—to organize gauge checks.",
          "A 15-block barycentric Reed–Muller factory for producing the resource states the architecture would need. Typed erasure, replay, and refresh operations, so that different failure kinds are handled by explicit, named procedures. A dual-view readout that interprets measurement results from two complementary perspectives.",
        ],
      },
      {
        heading: "What 'exact' means here",
        body: [
          "The mathematical constructions are exact only within the declared model. That is a statement about internal consistency—the definitions compose as stated—not a statement about how a physical device would behave.",
          "The project keeps a promotion ledger. The current count of constructions promoted to physical claims is zero. A noisy readout certificate, thresholds, and any hardware superiority all remain open questions.",
        ],
      },
      {
        heading: "Why publish it in this form",
        body: [
          "Quantum architecture is an area where elegant structure is easily mistaken for practical advantage. Publishing the evidence page and tracker alongside the architecture makes the boundary visible: readers can see what is defined, what is checked, and what is still unknown.",
        ],
      },
    ],
    evidence: {
      exact:
        "Code, gauge, and factory constructions are exact within the declared mathematical model.",
      numerical: "Software checks support internal consistency; no noisy threshold is established.",
      physical: "Physical promotion count is 0. No hardware results.",
    },
    notClaimed: [
      "An error threshold",
      "Hardware superiority",
      "A noisy readout certificate",
      "Physical implementation",
    ],
    links: [
      { label: "TetraQuantum site", href: "https://ud-tetra-quantum.lovable.app/" },
      { label: "Architecture", href: "https://ud-tetra-quantum.lovable.app/architecture" },
      { label: "Evidence", href: "https://ud-tetra-quantum.lovable.app/evidence" },
      { label: "Tracker", href: "https://ud-tetra-quantum.lovable.app/tracker" },
    ],
  },
  {
    slug: "tetradec",
    name: "TetraDEC",
    tagline: "Tetrahedral meshes and discrete exterior calculus for physical simulation.",
    status: "Investigation",
    summary:
      "An investigation into unstructured tetrahedral/Delaunay discretization combined with discrete exterior calculus, aimed at silicon photonics, RF and electromagnetic simulation, and GPU solver research.",
    sections: [
      {
        heading: "The idea",
        body: [
          "Electromagnetic simulation is usually performed on structured grids or on finite-element meshes. TetraDEC investigates a different combination: unstructured tetrahedral meshes built by Delaunay methods, paired with discrete exterior calculus (DEC), which represents fields on the vertices, edges, faces and cells of the mesh. Discrete exterior derivative composition d²=0 and related topological incidence identities hold exactly for a valid oriented complex; material/constitutive models, boundary conditions, numerical convergence and matching measurements need separate evaluation.",
        ],
      },
      {
        heading: "Target domains",
        body: [
          "Silicon photonics, where small curved features challenge structured grids. RF and electromagnetic simulation more broadly. And GPU solver research, where the question is how well unstructured DEC operators map onto modern parallel hardware.",
        ],
      },
      {
        heading: "Being precise about the method",
        body: [
          "An unstructured tetrahedral discretization is still a mesh; TetraDEC is not meshless. Tetrahedra can follow curved geometry more closely than a staircase grid, but they approximate it; geometry is not universally exact.",
          "Comparative performance claims made on the external site are not established by matched, reproducible benchmarks. This portfolio does not claim that any acceleration has been achieved.",
        ],
      },
      {
        heading: "What would count as progress",
        body: [
          "A fair comparison would fix the problem, accuracy target, and hardware, publish inputs and code, and compare against established solvers on equal terms. Until such a benchmark exists, TetraDEC remains an investigation into a promising combination of methods.",
        ],
      },
    ],
    evidence: {
      exact:
        "Discrete exterior derivative composition d²=0 and related topological incidence identities hold exactly for a valid oriented complex. Constitutive models, boundary conditions, convergence and measurement agreement require separate evaluation.",
      numerical: "Exploratory solver work only; no independent reproducible benchmark.",
      physical: "No validation against fabricated devices or measurements is claimed.",
    },
    notClaimed: [
      "Achieved acceleration: external performance claims lack matched, reproducible benchmarks",
      "Universally exact geometry",
      "A meshless method",
      "Commercial availability",
    ],
    links: [{ label: "TetraDEC site", href: "https://tetradec.com/" }],
  },
  {
    slug: "lattix",
    name: "Lattix Systems",
    tagline: "GPU spatial data structures and contact solving, in developer preview.",
    status: "Developer preview",
    summary:
      "A developer preview of WebGPU spatial and particle components with available C++/HLSL source for evaluation. The Voxifold domain name is legacy only.",
    sections: [
      {
        heading: "Components",
        body: [
          "Lattix Spatial is a flat hashed grid with explicit capacity and bounded probing, so memory use and worst-case lookup cost are declared rather than discovered. Lattix Particles is a sphere-contact reference solver. Lattix Lab provides conformance and profiling tooling so behavior can be checked across devices.",
          "Finite bounded lookup effort does not guarantee successful admission, and core allocation budgets do not represent the full GPU or engine memory footprint.",
          "C++ and HLSL source is available for evaluation, alongside a WebGPU path that runs in the browser.",
        ],
      },
      {
        heading: "What the evidence currently shows",
        body: [
          "The site reports one WebGPU trial of 2,048 vectors with zero mismatches against the reference. That is a single trial, not independent validation across all devices.",
          "Scenes of 10,000 particles run. Some passing fixtures processed zero contacts, which means they passed without exercising the contact path; a high-speed fixture overflowed. These are reported as found, because they define the next work.",
        ],
      },
      {
        heading: "What is planned, not shipped",
        body: [
          "Unity and Unreal integrations are planned and have not shipped. Fair comparison evidence for the kernel, the solver, and integration (the C12 evidence item) remains open.",
        ],
      },
      {
        heading: "Naming",
        body: [
          "Lattix Systems is the current name. The Voxifold domain that hosts the preview is legacy only.",
        ],
      },
    ],
    evidence: {
      exact: "Capacity and probing bounds are explicit by design.",
      numerical:
        "One 2,048-vector WebGPU trial with 0 mismatches; 10K-particle scenes; known fixture gaps.",
      physical: "Not applicable. No independent all-device validation.",
    },
    notClaimed: [
      "Shipped Unity or Unreal integrations",
      "Validation across all devices",
      "Fair comparison results (open)",
      "A commercial product",
    ],
    links: [
      { label: "Lattix preview", href: "https://voxifold-systems.ben-w-mayes.chatgpt.site/" },
      {
        label: "How it works",
        href: "https://voxifold-systems.ben-w-mayes.chatgpt.site/how-it-works",
      },
      { label: "Developers", href: "https://voxifold-systems.ben-w-mayes.chatgpt.site/developers" },
      { label: "Benchmarks", href: "https://voxifold-systems.ben-w-mayes.chatgpt.site/benchmarks" },
    ],
  },
];