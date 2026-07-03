import Link from "next/link"
import { SiteNav } from "@/components/site-nav"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { BlogSection } from "@/components/blog-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-6">
        <HeroSection />
        <ProjectsSection />
        <BlogSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-8">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vicky Nishad
          </p>
          <Link
            href="/#top"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to top &uarr;
          </Link>
        </div>
      </footer>
    </div>
  )
}
