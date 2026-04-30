import type { Metadata } from "next"
import { InventoryGrid } from "@/components/sections/inventory-grid"

export const metadata: Metadata = {
  title: "Inventory | luxxera",
  description: "Browse all available luxury and performance vehicles for sale at luxxera Colombo.",
}

export default function InventoryPage() {
  return (
    <section className="bg-black pb-24 pt-16 md:pt-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-[#888888]">
            For Sale in Colombo
          </p>
          <h1 className="mt-3 text-balance text-5xl font-bold tracking-tight text-white md:text-6xl">
            Inventory
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-sm leading-relaxed text-[#888888]">
            Every car in stock is fully inspected, documented, and ready to drive away. Use the
            filters to narrow your search.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <InventoryGrid />
      </div>
    </section>
  )
}
