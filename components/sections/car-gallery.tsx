"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SpecBadge } from "@/components/spec-badge"
import type { Car } from "@/data/cars"
import { cn } from "@/lib/utils"

export function CarGallery({ car }: { car: Car }) {
  const images = [car.image, ...car.gallery]
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setActive((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] border border-[#1f1f1f] bg-[#0d0d0d] md:aspect-[16/11]">
        {/* DEMO: Replace with real photograph of {car.brand} {car.model} */}
        <Image
          key={active}
          src={images[active] || "/placeholder.svg"}
          alt={`${car.brand} ${car.model} — placeholder image ${active + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
          priority
        />

        {/* Floating spec pills */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <SpecBadge>{car.specs.topSpeed}</SpecBadge>
          <SpecBadge>{car.specs.acceleration}</SpecBadge>
          <SpecBadge>{car.specs.horsepower}</SpecBadge>
        </div>

        {/* Carousel arrows */}
        <button
          aria-label="Previous image"
          onClick={prev}
          className="absolute left-4 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black/80"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          aria-label="Next image"
          onClick={next}
          className="absolute right-4 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black/80"
        >
          <ChevronRight className="size-4" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to image ${i + 1}`}
              onClick={() => setActive(i)}
              className={cn(
                "size-1.5 rounded-full transition-all",
                i === active ? "w-5 bg-white" : "bg-white/40 hover:bg-white/60",
              )}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 grid grid-cols-4 gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "relative aspect-[4/3] overflow-hidden rounded-[12px] border transition-colors",
              i === active ? "border-white" : "border-[#1f1f1f] hover:border-[#333333]",
            )}
            aria-label={`Show image ${i + 1}`}
          >
            {/* DEMO: Thumbnail placeholder */}
            <Image
              src={src || "/placeholder.svg"}
              alt={`${car.brand} ${car.model} thumbnail ${i + 1}`}
              fill
              className="object-cover"
              sizes="120px"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
