import Image from "next/image"

interface AgentCardProps {
  name?: string
  title?: string
  imageSrc?: string
}

export function AgentCard({
  name = "luxxera Team",
  title = "Your Personal Auto Consultant",
  // DEMO: Replace with real headshot of the dealership consultant
  imageSrc = "/placeholder.svg?height=120&width=120",
}: AgentCardProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative size-12 overflow-hidden rounded-full ring-2 ring-[#1f1f1f]">
        {/* DEMO: Headshot placeholder */}
        <Image src={imageSrc || "/placeholder.svg"} alt={`${name} — placeholder headshot`} fill className="object-cover" />
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{name}</p>
        <p className="text-xs text-[#888888]">{title}</p>
      </div>
    </div>
  )
}
