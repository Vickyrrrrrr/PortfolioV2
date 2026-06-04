const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X / Twitter", href: "https://x.com" },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-t border-border/60 py-16 sm:py-24"
    >
      <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Contact
      </h2>

      <h3 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Let&apos;s build something together.
      </h3>
      <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
        I&apos;m open to new opportunities and interesting collaborations. The
        fastest way to reach me is by email.
      </p>

      <a
        href="mailto:hello@alexrivera.dev"
        className="mt-6 inline-block font-mono text-lg text-foreground underline underline-offset-4 transition-opacity hover:opacity-70"
      >
        hello@alexrivera.dev
      </a>

      <ul className="mt-8 flex flex-wrap gap-6">
        {socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
