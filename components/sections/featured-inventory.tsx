"use client"

import { useState, useMemo } from "react"
import { ChevronDown } from "lucide-react"
import { CarCard } from "@/components/car-card"
import { cars } from "@/data/cars"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

type FilterKey = "brand" | "type" | "transmission" | "sort"

interface FilterDef {
  key: FilterKey
  label: string
  options: string[]
}

const SORT_OPTIONS = ["Most Relevant", "Price: Low to High", "Price: High to Low", "Newest"]

export function FeaturedInventory({ showTitle = true }: { showTitle?: boolean } = {}) {
  const filterDefs: FilterDef[] = useMemo(() => {
    const brands = Array.from(new Set(cars.map((c) => c.brand)))
    const types = Array.from(new Set(cars.map((c) => c.type)))
    const transmissions = Array.from(new Set(cars.map((c) => c.transmission)))
    return [
      { key: "brand", label: "Brand", options: ["All", ...brands] },
      { key: "type", label: "Car Type", options: ["All", ...types] },
      { key: "transmission", label: "Transmission", options: ["All", ...transmissions] },
      { key: "sort", label: "Most Relevant", options: SORT_OPTIONS },
    ]
  }, [])

  const [active, setActive] = useState<Record<FilterKey, string>>({
    brand: "All",
    type: "All",
    transmission: "All",
    sort: "Most Relevant",
  })

  const filtered = useMemo(() => {
    let list = cars.filter(
      (c) =>
        (active.brand === "All" || c.brand === active.brand) &&
        (active.type === "All" || c.type === active.type) &&
        (active.transmission === "All" || c.transmission === active.transmission),
    )
    if (active.sort === "Price: Low to High") list = [...list].sort((a, b) => a.priceValue - b.priceValue)
    if (active.sort === "Price: High to Low") list = [...list].sort((a, b) => b.priceValue - a.priceValue)
    if (active.sort === "Newest") list = [...list].sort((a, b) => b.year - a.year)
    return list
  }, [active])

  return (
    <section id="inventory" className="bg-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {showTitle && (
          <div className="text-center">
            <h2 className="text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
              Cars
            </h2>
          </div>
        )}

        {/* Filters */}
        <div
          className={cn(
            "no-scrollbar flex flex-nowrap items-center justify-start gap-3 overflow-x-auto px-1 md:justify-center",
            showTitle ? "mt-8" : "mt-0",
          )}
        >
          {filterDefs.map((f) => {
            const isDefault =
              (f.key !== "sort" && active[f.key] === "All") ||
              (f.key === "sort" && active.sort === "Most Relevant")
            return (
              <DropdownMenu key={f.key}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={cn(
                      "inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-4 text-xs font-medium transition-colors",
                      isDefault
                        ? "border-[#1f1f1f] bg-[#1a1a1a] text-white hover:bg-[#222222]"
                        : "border-white bg-white text-black hover:bg-white/90",
                    )}
                  >
                    <span>{isDefault ? f.label : active[f.key]}</span>
                    <ChevronDown className="size-3" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="border-[#1f1f1f] bg-[#0d0d0d] text-white"
                >
                  {f.options.map((opt) => (
                    <DropdownMenuItem
                      key={opt}
                      onClick={() => setActive((s) => ({ ...s, [f.key]: opt }))}
                      className="text-sm focus:bg-[#1a1a1a] focus:text-white"
                    >
                      {opt}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )
          })}
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {filtered.map((car, i) => (
            <CarCard key={car.id} car={car} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-sm text-[#888888]">
            No cars match these filters. Try clearing one to see more results.
          </p>
        )}
      </div>
    </section>
  )
}
