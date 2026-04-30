"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { cars } from "@/data/cars"

interface BookingFormProps {
  defaultVehicleSlug?: string
}

export function BookingForm({ defaultVehicleSlug }: BookingFormProps) {
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
    <form
      onSubmit={onSubmit}
      className="mx-auto w-full max-w-md rounded-[20px] border border-[#1f1f1f] bg-[#0d0d0d]/95 p-6 backdrop-blur-md md:p-8"
    >
      <div className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-xs font-medium tracking-wide text-white">
            Full Name
          </Label>
          <Input
            id="fullName"
            name="fullName"
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
          <Label className="text-xs font-medium tracking-wide text-white">Choose Your Vehicle</Label>
          <Select name="vehicle" defaultValue={defaultVehicleSlug ?? cars[0].slug}>
            <SelectTrigger className="h-11 w-full rounded-full border-[#1f1f1f] bg-[#111111] px-4 text-sm text-white focus-visible:ring-white/20">
              <SelectValue placeholder="Select a vehicle" />
            </SelectTrigger>
            <SelectContent className="border-[#1f1f1f] bg-[#0d0d0d] text-white">
              {cars.map((c) => (
                <SelectItem key={c.slug} value={c.slug} className="focus:bg-[#1a1a1a] focus:text-white">
                  {c.brand} {c.model}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="date" className="text-xs font-medium tracking-wide text-white">
            Preferred Test Drive Date
          </Label>
          <Input
            id="date"
            name="date"
            type="date"
            required
            className="h-11 rounded-full border-[#1f1f1f] bg-[#111111] px-4 text-sm text-white placeholder:text-[#666666] focus-visible:ring-white/20 [color-scheme:dark]"
          />
        </div>

        <Button
          type="submit"
          disabled={submitting || submitted}
          className="h-12 w-full rounded-full bg-white text-sm font-medium text-black hover:bg-white/90"
        >
          {submitted ? "Request Received ✓" : submitting ? "Sending..." : "Book Test Drive"}
        </Button>

        <p className="text-center text-xs text-[#888888]">
          We&apos;ll confirm your booking within the hour.
        </p>
      </div>
    </form>
  )
}
