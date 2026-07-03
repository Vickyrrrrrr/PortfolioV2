import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"

const stack = [
  "Python",
  "C++",
  "Verilog",
  "JavaScript",
  "React",
  "Node.js",
  "Tailwind",
  "Docker",
  "Git",
  "Linux",
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <SectionHeading index="03" title="About" />

      <div className="mt-8 grid gap-10 sm:grid-cols-5">
        <Reveal className="space-y-4 sm:col-span-3">
          <p className="text-pretty leading-relaxed text-foreground">
            I am Vicky Nishad, an Electronics &amp; Communication Engineering
            student at the University of Lucknow. I build agentic systems that
            sit at the intersection of LLMs and hardware — the kind of
            workflows where a prompt becomes verified RTL, not just text.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Most of my time goes into open source and research around
            autonomous agents, diffusion models, and the tooling that makes
            them reliable enough to ship. When I am not building, I am writing
            about it.
          </p>
        </Reveal>

        <Reveal delay={120} className="sm:col-span-2">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Stack
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {stack.map((s) => (
              <li
                key={s}
                className="rounded-md border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground"
              >
                {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
