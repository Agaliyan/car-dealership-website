"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AgentCard } from "@/components/agent-card"
import { BookingForm } from "@/components/booking-form"

export function TestDriveSection() {
  return (
    <section id="book" className="relative overflow-hidden bg-black py-20 md:py-28">
      {/* DEMO: Wide background photo of the luxxera showroom or cars parked together */}
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=1000&width=1920"
          alt="luxxera showroom — placeholder background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
            Book Your Test Drive Today
          </h2>

          <div className="mt-10 flex flex-col items-center gap-5">
            <AgentCard
              name="Ravindu Perera"
              title="Your Personal Auto Consultant"
              imageSrc="/placeholder.svg?height=120&width=120"
            />
            <Button
              asChild
              className="h-11 rounded-full bg-white px-6 text-sm font-medium text-black hover:bg-white/90"
            >
              <Link href="tel:+94770000000">Call Us Now</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="mt-12"
        >
          <BookingForm />
        </motion.div>
      </div>
    </section>
  )
}
