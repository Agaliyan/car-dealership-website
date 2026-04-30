"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Gem } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HomeHero() {
  return (
    <section className="relative -mt-16 h-screen min-h-[680px] w-full overflow-hidden bg-black">
      {/* Hero — cinematic dark rear three-quarter of a luxury coupe with red taillight glow */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-rear.jpg"
          alt="Dark luxury sports coupe rear with glowing red taillights"
          fill
          priority
          className="object-cover object-right"
          sizes="100vw"
        />
        {/* Left gradient overlay covering ~60% */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
        {/* Bottom gradient on mobile so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent md:hidden" />
      </div>

      {/* Content — anchored flush to the bottom-left of the hero at all viewports */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-12 md:px-12 md:pb-16">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: {},
            animate: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="max-w-3xl"
        >
          <motion.div
            variants={{
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
          >
            <Badge className="rounded-full border-0 bg-[#1a1a1a]/80 px-4 py-1.5 text-xs font-normal tracking-wide text-white backdrop-blur-md hover:bg-[#1a1a1a]/80">
              <Gem className="mr-1.5 size-3" />
              Chosen by more than 250 clients
            </Badge>
          </motion.div>

          <motion.h1
            variants={{
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="mt-6 text-pretty text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-7xl"
          >
            Premium Automotive
            <br />
            Sales in Colombo
          </motion.h1>

          <motion.p
            variants={{
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
            className="mt-6 max-w-xl text-pretty text-base font-light leading-relaxed text-[#aaaaaa]"
          >
            Experience unmatched craftsmanship, performance, and service — drive home a car
            that defines you.
          </motion.p>

          <motion.div
            variants={{
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
            className="mt-8"
          >
            <Button
              asChild
              className="h-12 rounded-full bg-white px-7 text-sm font-medium text-black hover:bg-white/90"
            >
              <Link href="/inventory">Choose Your Car</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
