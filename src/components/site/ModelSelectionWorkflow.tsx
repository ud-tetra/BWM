const stages = [
  {
    title: "Define the work",
    body: "Identify the task and its requirements—coding, analysis, drafting, or independent review.",
  },
  {
    title: "Compare candidates",
    body: "Weigh AI systems from several providers—ChatGPT, Claude, Gemini, Grok—for expected usefulness and cost. These are tools, not programming frameworks.",
  },
  {
    title: "Human assignment",
    body: "I direct which model takes the work, using a structured selection rather than a fixed ranking.",
  },
  {
    title: "Semi-automated handoffs",
    body: "Some handoffs and procedures are semi-automated to support the work; the specific automated functions are not detailed here.",
  },
  {
    title: "Evaluate and revise",
    body: "Verify the result against the task, and revise the selection when the output falls short.",
  },
];

export function ModelSelectionWorkflow() {
  return (
    <section id="model-selection-workflow" aria-labelledby="msw-title" className="scroll-mt-32">
      <p className="eyebrow">Practice</p>
      <h2 id="msw-title" className="mt-3 text-3xl md:text-4xl">
        Model-selection workflow
      </h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
        A conceptual outline of how I choose and coordinate AI systems: balancing model quality
        against budget, matching scrutiny to task risk, and treating verification as a separate step
        from generation.
      </p>
      <ol className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
        {stages.map((s, i) => (
          <li key={s.title} className="min-w-0 bg-card p-6">
            <span className="font-display text-3xl text-primary" aria-hidden>
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-xl">{s.title}</h3>
            <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 max-w-3xl border-l-2 border-sage pl-4 font-sans text-sm leading-relaxed text-muted-foreground">
        Human-directed, semi-automated; not a fully autonomous router. No measured cost savings or
        model performance ranking is claimed. This is separate from the TETRA research architecture
        for governed execution.
      </p>
    </section>
  );
}
