"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function EnquiryForm({ carName }: { carName?: string }) {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    // DEMO: Wire to Formspree / API route in production — endpoint placeholder
    await new Promise((r) => setTimeout(r, 700))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto w-full max-w-md rounded-[20px] border border-[#1f1f1f] bg-[#0d0d0d]/95 p-6 backdrop-blur-md md:p-8"
    >
      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-xs font-medium tracking-wide text-white">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your full name"
            className="h-11 rounded-full border-[#1f1f1f] bg-[#111111] px-4 text-sm text-white placeholder:text-[#666666] focus-visible:ring-white/20"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-xs font-medium tracking-wide text-white">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+94 77 000 0000"
            className="h-11 rounded-full border-[#1f1f1f] bg-[#111111] px-4 text-sm text-white placeholder:text-[#666666] focus-visible:ring-white/20"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-xs font-medium tracking-wide text-white">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            defaultValue={carName ? `Hi, I'd like to know more about the ${carName}.` : ""}
            placeholder="Tell us what you're looking for..."
            className="rounded-2xl border-[#1f1f1f] bg-[#111111] px-4 py-3 text-sm text-white placeholder:text-[#666666] focus-visible:ring-white/20"
          />
        </div>

        <Button
          type="submit"
          disabled={submitting || submitted}
          className="h-12 w-full rounded-full bg-white text-sm font-medium text-black hover:bg-white/90"
        >
          {submitted ? "Enquiry Sent ✓" : submitting ? "Sending..." : "Send Enquiry"}
        </Button>

        <p className="text-center text-xs text-[#888888]">
          By sending, you agree to our privacy policy.
        </p>
      </div>
    </form>
  )
}
