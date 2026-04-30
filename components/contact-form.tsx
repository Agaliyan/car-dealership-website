"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const INTERESTS = [
  "General Enquiry",
  "Buy a Car",
  "Sell My Car",
  "Book a Test Drive",
  "Trade-In Valuation",
  "Financing Options",
]

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    // DEMO: Wire to Formspree / API route in production
    await new Promise((r) => setTimeout(r, 700))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <div className="rounded-[20px] border border-[#1f1f1f] bg-[#0d0d0d] p-6 md:p-10">
      <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
        Send us a message
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-[#888888]">
        Tell us what you&apos;re looking for and we&apos;ll match you with the right vehicle.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="cf-name" className="text-xs font-medium tracking-wide text-white">
              Full Name
            </Label>
            <Input
              id="cf-name"
              name="name"
              required
              placeholder="Your full name"
              className="h-11 rounded-full border-[#1f1f1f] bg-[#111111] px-4 text-sm text-white placeholder:text-[#666666] focus-visible:ring-white/20"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cf-phone" className="text-xs font-medium tracking-wide text-white">
              Phone Number
            </Label>
            <Input
              id="cf-phone"
              name="phone"
              type="tel"
              required
              placeholder="+94 77 000 0000"
              className="h-11 rounded-full border-[#1f1f1f] bg-[#111111] px-4 text-sm text-white placeholder:text-[#666666] focus-visible:ring-white/20"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="cf-email" className="text-xs font-medium tracking-wide text-white">
            Email
          </Label>
          <Input
            id="cf-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="h-11 rounded-full border-[#1f1f1f] bg-[#111111] px-4 text-sm text-white placeholder:text-[#666666] focus-visible:ring-white/20"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-xs font-medium tracking-wide text-white">Interest</Label>
          <Select name="interest" defaultValue={INTERESTS[0]}>
            <SelectTrigger className="h-11 w-full rounded-full border-[#1f1f1f] bg-[#111111] px-4 text-sm text-white focus-visible:ring-white/20">
              <SelectValue placeholder="What are you interested in?" />
            </SelectTrigger>
            <SelectContent className="border-[#1f1f1f] bg-[#0d0d0d] text-white">
              {INTERESTS.map((i) => (
                <SelectItem key={i} value={i} className="focus:bg-[#1a1a1a] focus:text-white">
                  {i}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="cf-message" className="text-xs font-medium tracking-wide text-white">
            Message
          </Label>
          <Textarea
            id="cf-message"
            name="message"
            rows={5}
            placeholder="Tell us a bit about what you're after..."
            className="rounded-2xl border-[#1f1f1f] bg-[#111111] px-4 py-3 text-sm text-white placeholder:text-[#666666] focus-visible:ring-white/20"
          />
        </div>

        <Button
          type="submit"
          disabled={submitting || submitted}
          className="h-12 w-full rounded-full bg-white text-sm font-medium text-black hover:bg-white/90"
        >
          {submitted ? "Message Sent ✓" : submitting ? "Sending..." : "Send Message"}
        </Button>

        <p className="text-center text-xs text-[#888888]">
          We typically reply within the hour during showroom hours.
        </p>
      </form>
    </div>
  )
}
