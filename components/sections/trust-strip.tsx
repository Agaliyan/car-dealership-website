import { Trophy, ShieldCheck, MapPin, Clock } from "lucide-react"

const ITEMS = [
  { icon: Trophy, label: "Premium Inventory", sub: "Handpicked & curated" },
  { icon: ShieldCheck, label: "Fully Inspected", sub: "150-point checks" },
  { icon: MapPin, label: "Based in Colombo", sub: "Showroom on Galle Road" },
  { icon: Clock, label: "Reply Within the Hour", sub: "Mon–Sat, 9am–7pm" },
]

export function TrustStrip() {
  return (
    <section className="border-y border-[#1f1f1f] bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4 md:px-8 md:py-6">
        {ITEMS.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#1f1f1f] bg-[#0d0d0d] text-white">
              <item.icon className="size-4" />
            </span>
            <div>
              <p className="text-sm font-medium text-white">{item.label}</p>
              <p className="text-xs text-[#888888]">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
