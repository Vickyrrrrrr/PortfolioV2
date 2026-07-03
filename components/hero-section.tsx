import { Reveal } from "@/components/reveal"

export function HeroSection() {
  return (
    <section id="top" className="grain pt-24 pb-16 sm:pt-32 sm:pb-20">
      <Reveal>
        <p className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/40" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
          </span>
          Available for work
        </p>
      </Reveal>

      <Reveal delay={80}>
        <h1 className="mt-7 text-balance font-display text-[2.5rem] leading-[1.08] tracking-tight text-foreground sm:text-6xl">
          Vicky Nishad
        </h1>
      </Reveal>

      <Reveal delay={140}>
        <p className="mt-3 text-pretty font-display text-2xl leading-snug text-muted-foreground sm:text-3xl">
          Curious mind, building across the stack — from silicon to agents.
        </p>
      </Reveal>

      <Reveal delay={220}>
        <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
          ECE student at the University of Lucknow. I live in the overlap
          between LLMs, agentic workflows, chip design, and electronics —
          exploring how far natural language can reach into hardware. I learn
          by building, ship open source along the way, and write about
          whatever I am figuring out.
        </p>
      </Reveal>

      <Reveal delay={300}>
        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
          <a
            href="/#work"
            className="group inline-flex items-center gap-2 border-b border-foreground pb-0.5 text-sm font-medium text-foreground"
          >
            View work
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <a
            href="/blog"
            className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Read blog
          </a>
          <a
            href="/#contact"
            className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Get in touch
          </a>
        </div>
      </Reveal>
    </section>
  )
}
