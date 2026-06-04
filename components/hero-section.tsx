export function HeroSection() {
  return (
    <section id="top" className="pt-20 pb-16 sm:pt-28 sm:pb-24">
      <p className="font-mono text-sm text-muted-foreground">
        Software Engineer
      </p>
      <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
        I build fast, reliable, and well-crafted web products.
      </h1>
      <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
        I&apos;m Alex Rivera, a full-stack engineer focused on clean
        architecture and thoughtful interfaces. Currently building tools that
        make developers&apos; lives easier.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#work"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
