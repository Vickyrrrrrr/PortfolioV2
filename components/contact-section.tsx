const socials = [{ label: "Twitter / X", href: "https://x.com" }]

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
        Let&apos;s Connect.
      </h3>
      <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
        I&apos;m open to new opportunities and interesting collaborations on AI
        systems and agentic workflows. The fastest way to reach me is on
        Twitter / X.
      </p>

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
