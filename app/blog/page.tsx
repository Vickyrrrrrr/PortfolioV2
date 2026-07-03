import Link from "next/link"
import { SiteNav } from "@/components/site-nav"
import { getAllPosts } from "@/lib/blog"
import { Reveal } from "@/components/reveal"

export const metadata = {
  title: "Blog — Vicky Nishad",
  description: "Writing about LLMs, agentic systems, hardware, and the things I build.",
}

function formatDate(date: string) {
  const d = new Date(date)
  if (isNaN(d.getTime())) return date
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-6">
        <section className="pt-24 pb-16 sm:pt-32 sm:pb-20">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              02 — Writing
            </p>
            <h1 className="mt-5 font-display text-5xl tracking-tight text-foreground sm:text-6xl">
              Blog
            </h1>
            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
              Notes on the systems I build, the hackathons I run, and the ideas
              I am working through.
            </p>
          </Reveal>
        </section>

        <ul className="border-t border-border">
          {posts.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 80}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-1 border-b border-border py-7 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <div className="max-w-xl">
                  <h2 className="font-display text-2xl tracking-tight text-foreground transition-colors group-hover:text-muted-foreground">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs tracking-wide text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {formatDate(post.date)}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </main>
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-8">
          <Link
            href="/"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            &larr; Back home
          </Link>
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vicky Nishad
          </p>
        </div>
      </footer>
    </div>
  )
}
