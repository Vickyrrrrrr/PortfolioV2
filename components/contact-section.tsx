import { Github, Instagram, Linkedin } from "lucide-react"
import type { SVGProps } from "react"

function XLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  )
}

const socials = [
  { label: "X", href: "https://x.com/unfilteredlogix", icon: XLogo },
  { label: "GitHub", href: "https://github.com/Vickyrrrrrr/", icon: Github },
  {
    label: "Instagram",
    href: "https://instagram.com/vicky.socials/",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vicky-nishad-117855369/",
    icon: Linkedin,
  },
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
        Let&apos;s Connect.
      </h3>
      <p className="mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
        I&apos;m open to new opportunities and interesting collaborations on AI
        systems and agentic workflows. Find me across the web below.
      </p>

      <ul className="mt-8 flex flex-wrap items-center gap-3">
        {socials.map((social) => {
          const Icon = social.icon
          return (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
