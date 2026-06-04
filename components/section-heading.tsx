import { Reveal } from "@/components/reveal"

type SectionHeadingProps = {
  index: string
  title: string
}

export function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-4 border-b border-border pb-4">
        <span className="font-mono text-xs tracking-widest text-muted-foreground">
          {index}
        </span>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">
          {title}
        </h2>
      </div>
    </Reveal>
  )
}
