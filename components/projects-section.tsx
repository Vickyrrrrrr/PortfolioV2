const projects = [
  {
    name: "Atlas",
    year: "2025",
    description:
      "A distributed job scheduler with a real-time dashboard, handling millions of tasks daily across regions.",
    tags: ["TypeScript", "Go", "PostgreSQL"],
    href: "#",
  },
  {
    name: "Lumen UI",
    year: "2024",
    description:
      "An open-source React component library focused on accessibility and tiny bundle size. 4k+ stars.",
    tags: ["React", "Tailwind", "Radix"],
    href: "#",
  },
  {
    name: "Drift",
    year: "2024",
    description:
      "A collaborative markdown editor with offline-first sync and conflict-free merging.",
    tags: ["Next.js", "CRDT", "WebSockets"],
    href: "#",
  },
  {
    name: "Pulse",
    year: "2023",
    description:
      "Lightweight uptime monitoring with smart alerting and a clean status page builder.",
    tags: ["Node.js", "Redis", "Vercel"],
    href: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="work" className="border-t border-border/60 py-16 sm:py-20">
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Selected Work
        </h2>
      </div>

      <ul className="mt-8 flex flex-col">
        {projects.map((project) => (
          <li key={project.name}>
            <a
              href={project.href}
              className="group flex flex-col gap-3 border-b border-border/60 py-6 transition-colors hover:bg-secondary/40 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
            >
              <div className="max-w-xl">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-medium text-foreground">
                    {project.name}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="font-mono text-sm text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
