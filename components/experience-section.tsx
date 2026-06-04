const roles = [
  {
    company: "Independent Research & Development",
    title: "Tech Enthusiast & Self-Taught Developer",
    period: "2023 — Present",
    description:
      "Architecting and building autonomous multi-agent systems for hardware engineering (AgentIC). Conducting deep research into LLM architectures and prompt engineering for robust, self-correcting logic generation, and sharing AI insights through technical workshops and communities.",
  },
  {
    company: "University of Lucknow",
    title: "Electronics & Communication Student",
    period: "2025 — Present",
    description:
      "Pursuing a B.Tech in Electronics and Communication Engineering. Building foundational skills in digital circuit design and hardware description, and exploring VLSI design principles to contribute high-impact solutions in the field.",
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
