import { notFound } from "next/navigation"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import { SiteNav } from "@/components/site-nav"
import { getAllSlugs, getPost } from "@/lib/blog"

export const dynamicParams = false

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then((p) => {
    const post = getPost(p.slug)
    if (!post) return { title: "Not found" }
    return {
      title: `${post.title} — Vicky Nishad`,
      description: post.description,
    }
  })
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-6">
        <article className="pt-24 pb-16 sm:pt-32 sm:pb-20">
          <Link
            href="/blog"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            &larr; All posts
          </Link>

          <header className="mt-8 border-b border-border pb-8">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs tracking-wide text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {post.description}
            </p>
            <p className="mt-4 font-mono text-xs text-muted-foreground">
              {formatDate(post.date)}
            </p>
          </header>

          <div className="prose-blog mt-10">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </main>
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-8">
          <Link
            href="/blog"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            &larr; All posts
          </Link>
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vicky Nishad
          </p>
        </div>
      </footer>
    </div>
  )
}
