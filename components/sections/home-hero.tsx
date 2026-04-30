"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Trophy } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HomeHero() {
  return (
    <section className="relative -mt-16 h-screen min-h-[680px] w-full overflow-hidden bg-black">
      {/* DEMO: Cinematic luxury car photo — rear quarter angle, dark moody lighting */}
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=1200&width=1920"
          alt="luxxera hero — placeholder dramatic car photograph"
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

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-16 pt-32 md:px-8 md:pb-24">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: {},
            animate: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
          }}
          className="max-w-2xl"
        >
          <motion.div
            variants={{
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
          >
            <Badge className="rounded-full border-0 bg-[#1a1a1a]/80 px-4 py-1.5 text-xs font-medium tracking-wide text-white backdrop-blur-md hover:bg-[#1a1a1a]/80">
              <Trophy className="mr-1.5 size-3" />
              Colombo&apos;s Premier Car Dealership
            </Badge>
          </motion.div>

          <motion.h1
            variants={{
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
            className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl"
          >
            Premium Cars
            <br />
            in Colombo
          </motion.h1>

          <motion.p
            variants={{
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
            className="mt-6 max-w-md text-pretty text-sm leading-relaxed text-[#aaaaaa] md:text-base"
          >
            Find your perfect vehicle from our handpicked collection of luxury and performance
            cars — fully inspected, transparently priced, ready to drive.
          </motion.p>

          <motion.div
            variants={{
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button
              asChild
              className="h-12 rounded-full bg-white px-7 text-sm font-medium text-black hover:bg-white/90"
            >
              <Link href="/inventory">Browse Inventory</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-white/30 bg-transparent px-7 text-sm font-medium text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Book a Test Drive</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
