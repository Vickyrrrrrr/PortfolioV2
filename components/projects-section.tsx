import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const projects = [
  {
    name: "AgentIC",
    tagline: "Prompt to GDSII",
    year: "2025",
    description:
      "An agentic chip-design system that takes a natural language prompt and carries it through the full VLSI flow — RTL generation, synthesis, place-and-route, DRC/LVS verification — until you have a tapeout-ready GDSII. Multi-agent orchestration lets each stage self-correct, so the logic that leaves the pipeline is actually verified, not just generated.",
    tags: ["Agentic AI", "Multi-Agent", "VLSI", "Verilog", "EDA"],
    href: "https://www.buildstack.live",
    status: "Private · IP Protected",
  },
  {
    name: "Argus",
    tagline: "Sandboxed web vulnerability scanner",
    year: "2025",
    description:
      "Argus runs automated security scans against your web application from inside an isolated sandbox. It spins up a throwaway environment, drives a headless browser through your routes, fires common attack payloads, and hands back a prioritized report — without your infrastructure ever touching the exploit traffic directly.",
    tags: ["Security", "Sandboxing", "Python", "Automation"],
    href: "https://github.com/Vickyrrrrrr/argus",
    status: "Open Source",
  },
]

export function ProjectsSection() {
  return (
    <section id="work" className="py-16 sm:py-20">
      <SectionHeading index="01" title="Selected Work" />

      <ul className="mt-2">
        {projects.map((project, i) => (
          <Reveal as="li" key={project.name} delay={i * 90}>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group grid gap-5 border-b border-border py-9 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-12"
            >
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-display text-3xl leading-none tracking-tight text-foreground sm:text-4xl">
                    {project.name}
                  </h3>
                  <span className="font-display text-lg text-muted-foreground">
                    {project.tagline}
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
                  &rarr;
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
