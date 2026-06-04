const roles = [
  {
    company: "Vercel",
    title: "Senior Software Engineer",
    period: "2023 — Present",
    description:
      "Lead engineer on developer tooling. Shipped performance improvements that cut build times by 40%.",
  },
  {
    company: "Linear",
    title: "Software Engineer",
    period: "2021 — 2023",
    description:
      "Built core sync infrastructure and real-time collaboration features used by thousands of teams.",
  },
  {
    company: "Stripe",
    title: "Software Engineer",
    period: "2019 — 2021",
    description:
      "Worked on payments APIs and internal platform tooling, focusing on reliability and developer experience.",
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-t border-border/60 py-16 sm:py-20"
    >
      <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Experience
      </h2>

      <ul className="mt-8 flex flex-col">
        {roles.map((role) => (
          <li
            key={role.company}
            className="flex flex-col gap-1 border-b border-border/60 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
          >
            <div>
              <h3 className="font-medium text-foreground">
                {role.title}{" "}
                <span className="text-muted-foreground">· {role.company}</span>
              </h3>
              <p className="mt-1 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
                {role.description}
              </p>
            </div>
            <span className="shrink-0 font-mono text-xs text-muted-foreground">
              {role.period}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
