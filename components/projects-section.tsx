import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const projects = [
  {
    name: "AgentIC",
    note: "Private · IP Protected",
    year: "2025",
    description:
      "A robust, automated chip-design ecosystem powered by advanced agentic LLM workflows — generating error-free, tapeout-ready logic and layouts for VLSI through multi-agent orchestration.",
    tags: [
      "Agentic AI",
      "Multi-Agent System",
      "VLSI",
      "Autonomous Workflows",
    ],
    href: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="work" className="py-20 sm:py-28">
      <SectionHeading index="01" title="Selected Work" />

      <ul className="mt-2">
        {projects.map((project, i) => (
          <Reveal as="li" key={project.name} delay={i * 90}>
            <a
              href={project.href}
              className="group grid gap-6 border-b border-border py-10 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-12"
            >
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-display text-3xl leading-none tracking-tight text-foreground sm:text-4xl">
                    {project.name}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {project.note}
                  </span>
                </div>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs tracking-wide text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-3">
                <span className="font-mono text-xs tracking-widest text-muted-foreground">
                  {project.year}
                </span>
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background"
                >
                  →
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
