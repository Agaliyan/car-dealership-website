"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import type { Car } from "@/data/cars"
import { SpecBadge } from "@/components/spec-badge"

interface CarCardProps {
  car: Car
  index?: number
}

export function CarCard({ car, index = 0 }: CarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
      whileHover={{ scale: 1.02 }}
    >
      <Link href={`/inventory/${car.slug}`} className="group block">
        <div className="overflow-hidden rounded-[20px] border border-[#1f1f1f] bg-[#0d0d0d] transition-colors duration-300 group-hover:border-[#333333]">
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            {/* DEMO: Replace with real photograph of {car.brand} {car.model} */}
            <Image
              src={car.image || "/placeholder.svg"}
              alt={`${car.brand} ${car.model} — placeholder`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              <SpecBadge>{car.specs.topSpeed}</SpecBadge>
              <SpecBadge>{car.specs.acceleration}</SpecBadge>
              <SpecBadge>{car.specs.horsepower}</SpecBadge>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-start justify-between gap-4 px-1">
          <div>
            <h3 className="text-base font-semibold text-white">
              {car.brand} {car.model}
            </h3>
            <p className="mt-1 text-sm text-[#888888]">from {car.price}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 text-sm text-white transition-colors group-hover:text-[#888888]">
            Learn More <ChevronRight className="size-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
