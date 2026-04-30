"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import type { Car } from "@/data/cars"
import { EnquiryForm } from "@/components/enquiry-form"
import { AgentCard } from "@/components/agent-card"

export function EnquirySection({ car }: { car: Car }) {
  return (
    <section
      id="enquire"
      className="relative overflow-hidden bg-black py-20 md:py-28"
    >
      {/* DEMO: Showroom interior background photo */}
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=1000&width=1920"
          alt="luxxera showroom interior — placeholder background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/80" />
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
            Enquire About This {car.brand} {car.model}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-[#aaaaaa]">
            Send us your details and we&apos;ll be in touch within the hour with availability,
            financing options, and trade-in valuations.
          </p>

          <div className="mt-10">
            <AgentCard
              name="Ravindu Perera"
              title="Your Personal Auto Consultant"
              imageSrc="/placeholder.svg?height=120&width=120"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="mt-12"
        >
          <EnquiryForm carName={`${car.brand} ${car.model}`} />
        </motion.div>
      </div>
    </section>
  )
}
