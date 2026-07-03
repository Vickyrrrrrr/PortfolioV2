import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { getAllPosts } from "@/lib/blog"

function formatDate(date: string) {
  const d = new Date(date)
  if (isNaN(d.getTime())) return date
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

export function BlogSection() {
  const posts = getAllPosts().slice(0, 2)

  if (posts.length === 0) return null

  return (
    <section id="blog" className="py-16 sm:py-20">
      <SectionHeading index="02" title="Writing" />

      <ul className="mt-2">
        {posts.map((post, i) => (
          <Reveal as="li" key={post.slug} delay={i * 90}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-1 border-b border-border py-7 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <div className="max-w-xl">
                <h3 className="font-display text-2xl tracking-tight text-foreground transition-colors group-hover:text-muted-foreground">
                  {post.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
              </div>
              <span className="shrink-0 font-mono text-xs text-muted-foreground">
                {formatDate(post.date)}
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>

      <Reveal>
        <Link
          href="/blog"
          className="group mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          All posts
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </Reveal>
    </section>
  )
}
