
import { cn } from "@/lib/utils"

interface HighlightedHeadingSectionProps {
  title: string
  highlight: string
  description?: string
  className?: string
  highlightClassName?: string
}

export function ReuseableBanner({
  title,
  highlight,
  description,
  className,
  highlightClassName,
}: HighlightedHeadingSectionProps) {
  const parts = title.split(new RegExp(`(${highlight})`, "gi"))

  return (
    <section
      className={cn(
        "w-full py-20 text-center  bg-gradient-to-r from-[#32C7AF] via-[#37C1A4] to-[#2E9E8E] text-white",
        className
      )}
    >
      <div className="container mx-auto px-4 lg:h[500px] flex flex-col items-center justify-center">
        <h2 className="text-5xl md:text-3xl font-semibold tracking-tight">
          {parts.map((part, index) =>
            part.toLowerCase() === highlight.toLowerCase() ? (
              <span
                key={index}
                className={cn("text-blue-900", highlightClassName)}
              >
                {part}
              </span>
            ) : (
              part
            )
          )}
        </h2>

        {description && (
          <p className="mt-6 max-w-4xl mx-auto text-lg text-white/90 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}