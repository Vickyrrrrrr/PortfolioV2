import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const roles = [
  {
    title: "Independent Research & Development",
    org: "Self-taught",
    period: "2023 — Present",
    description:
      "Architecting autonomous multi-agent systems for hardware design (AgentIC). Researching LLM architectures and prompt engineering for self-correcting logic generation. Shipping open source tooling and writing about what I learn.",
  },
  {
    title: "B.Tech, Electronics & Communication",
    org: "University of Lucknow",
    period: "2025 — Present",
    description:
      "Building foundations in digital circuit design, hardware description, and VLSI design principles. Applying them directly to projects that span from RF power amplifiers to agentic chip design.",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <SectionHeading index="04" title="Experience" />

      <ul className="mt-2">
        {roles.map((role, i) => (
          <Reveal as="li" key={role.org} delay={i * 90}>
            <div className="flex flex-col gap-1 border-b border-border py-7 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
              <div>
                <h3 className="font-medium text-foreground">
                  {role.title}{" "}
                  <span className="text-muted-foreground">· {role.org}</span>
                </h3>
                <p className="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
                  {role.description}
                </p>
              </div>
              <span className="shrink-0 font-mono text-xs text-muted-foreground">
                {role.period}
              </span>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
