import { Reveal } from "@/components/reveal"

export function HeroSection() {
  return (
    <section id="top" className="pt-24 pb-20 sm:pt-36 sm:pb-28">
      <Reveal>
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/40" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
          </span>
          Available for work · Lucknow, IN
        </div>
      </Reveal>

      <Reveal delay={80}>
        <h1 className="mt-8 text-balance font-display text-5xl leading-[1.05] tracking-tight text-foreground sm:text-7xl">
          Vicky Nishad — software engineer building{" "}
          <span className="italic">agentic systems</span> for hardware and the
          web.
        </h1>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          I&apos;m an Electronics &amp; Communication student and AI systems
          architect. I design autonomous, multi-agent workflows that bridge the
          gap between static code and dynamic, self-evolving systems.
        </p>
      </Reveal>

      <Reveal delay={240}>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-medium text-foreground"
          >
            View selected work
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Get in touch
          </a>
        </div>
      </Reveal>
    </section>
  )
}
