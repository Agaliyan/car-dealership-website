import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface SpecBadgeProps {
  children: React.ReactNode
  className?: string
}

export function SpecBadge({ children, className }: SpecBadgeProps) {
  return (
    <Badge
      className={cn(
        "rounded-full border-0 bg-[#1a1a1a]/90 px-3 py-1 text-xs font-medium tracking-wide text-white backdrop-blur-md hover:bg-[#1a1a1a]/90",
        className,
      )}
    >
      {children}
    </Badge>
  )
}
