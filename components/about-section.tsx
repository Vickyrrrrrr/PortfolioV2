const skills = [
  "Agentic AI",
  "Python",
  "C++",
  "C",
  "JavaScript",
  "React",
  "Node.js",
  "Tailwind",
  "Git",
  "HTML",
  "CSS",
  "System Design",
  "Verilog",
  "MATLAB",
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border/60 py-16 sm:py-20">
      <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        About
      </h2>

      <div className="mt-8 grid gap-10 sm:grid-cols-5">
        <div className="space-y-4 sm:col-span-3">
          <p className="text-pretty leading-relaxed text-foreground">
            I&apos;m Vicky Nishad, an Electronics and Communication Engineering
            student and a deeply passionate AI Systems Architect. My work is
            driven by a fascination with Large Language Models (LLMs) and the
            transformative power of Autonomous Agents.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            I specialize in designing and implementing Agentic Workflows that
            bridge the gap between static code and dynamic, self-evolving
            systems. Beyond engineering, I&apos;m into video editing and music
            production.
          </p>
        </div>

        <div className="sm:col-span-2">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Tools &amp; Tech
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-md bg-secondary px-3 py-1 text-sm text-secondary-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
