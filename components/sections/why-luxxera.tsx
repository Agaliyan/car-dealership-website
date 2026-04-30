"use client"

import { motion } from "framer-motion"
import { Search, FileText, MessagesSquare } from "lucide-react"
import { Card } from "@/components/ui/card"

const ITEMS = [
  {
    icon: Search,
    title: "Handpicked Inventory",
    body: "Every vehicle is personally selected by our team for condition, provenance, and value — no shortcuts.",
  },
  {
    icon: FileText,
    title: "Full Documentation",
    body: "Clean titles, full service history, and registration assistance. Buy with complete peace of mind.",
  },
  {
    icon: MessagesSquare,
    title: "Personal Service",
    body: "Direct line to your dedicated consultant from first enquiry to keys in hand. No call-centre runaround.",
  },
]

export function WhyLuxxera() {
  return (
    <section id="about" className="bg-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
            Why Choose luxxera
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-[#888888]">
            We&apos;re not just selling cars — we&apos;re curating the right one for you.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
            >
              <Card className="h-full rounded-[20px] border-[#1f1f1f] bg-[#0d0d0d] p-8 transition-colors duration-300 hover:border-[#333333]">
                <span className="flex size-11 items-center justify-center rounded-full border border-[#1f1f1f] bg-[#1a1a1a] text-white">
                  <item.icon className="size-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#888888]">{item.body}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
