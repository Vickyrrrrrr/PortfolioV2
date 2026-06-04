const projects = [
  {
    name: "AgentIC (Private / IP Protected)",
    year: "2025",
    description:
      "A robust, automated chip design ecosystem powered by advanced Agentic LLM workflows. Designed to generate error-free, tapeout-ready logic and layouts for VLSI using multi-agent orchestration.",
    tags: ["LLMs / Agentic AI", "Multi-Agent System", "VLSI", "Autonomous Workflows"],
    href: "#",
  },
  {
    name: "The Nanosecond Arbiter",
    year: "2025",
    description:
      "Ultra-low latency lock-free HFT matching engine built with Rust. Achieves 19ns latency and 51M+ ops/sec throughput using atomic operations and a zero-copy, lock-free SPSC ring buffer architecture.",
    tags: ["Rust", "VLSI", "HFT", "Lock-Free"],
    href: "#",
  },
  {
    name: "EduNews",
    year: "2024",
    description:
      "Modern educational news platform with real-time article streaming, smart notifications, and Firebase authentication. Features infinite scroll, category filtering, bookmarks, and a glassmorphism UI.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Firebase"],
    href: "#",
  },
  {
    name: "SwasthQ",
    year: "2024",
    description:
      "AI-powered healthcare queue management system using Agentic Workflows. Features smart patient registration, real-time queue tracking, hospital kiosk integration, and a doctor's dashboard to streamline OPD workflows.",
    tags: ["Next.js", "Agentic AI", "Healthcare", "Firebase"],
    href: "#",
  },
  {
    name: "Buildstack",
    year: "2024",
    description:
      "A comprehensive development platform built with Next.js 16 and Firebase. Features secure authentication via NextAuth and modern UI components using Lucide React.",
    tags: ["Next.js 16", "Firebase", "NextAuth", "TailwindCSS"],
    href: "#",
  },
  {
    name: "Dawakhana",
    year: "2024",
    description:
      "An online pharmacy and healthcare platform built with Next.js 16. Integrates Razorpay for secure payments and Firebase for backend services, with smooth animations powered by Framer Motion.",
    tags: ["Next.js 16", "Razorpay", "Firebase", "Framer Motion"],
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
