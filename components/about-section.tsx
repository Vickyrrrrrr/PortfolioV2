const skills = [
  "TypeScript",
  "React / Next.js",
  "Node.js",
  "Go",
  "PostgreSQL",
  "Redis",
  "AWS",
  "Docker",
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
            I&apos;ve spent the last six years building products across the
            stack — from low-level systems work to polished user interfaces. I
            care deeply about the craft: readable code, sensible abstractions,
            and software that feels fast.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Outside of work you&apos;ll find me contributing to open source,
            writing about engineering, and chasing good coffee. I believe the
            best tools get out of your way.
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
