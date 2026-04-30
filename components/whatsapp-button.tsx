"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function WhatsAppButton() {
  const message = encodeURIComponent("Hi, I'm interested in a vehicle at luxxera.")
  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={`https://wa.me/94770000000?text=${message}`}
            target="_blank"
            aria-label="Chat with us on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-black/40 transition-transform hover:scale-105"
          >
            <MessageCircle className="size-5" />
          </Link>
        </TooltipTrigger>
        <TooltipContent side="left" className="border-[#1f1f1f] bg-[#0d0d0d] text-white">
          Chat with us
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
