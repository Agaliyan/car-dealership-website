"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Instagram, MessageCircle, Phone, Menu, X, Gem } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "Inventory", href: "/inventory" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-[#1f1f1f] bg-black/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="relative flex h-16 w-full items-center justify-between px-6 md:px-8">
        {/* Logo — pinned to far left edge */}
        <Link href="/" className="relative z-10 flex items-center gap-2 text-white">
          <span className="flex size-7 items-center justify-center rounded-md bg-[#1a1a1a] text-white ring-1 ring-white/10">
            <Gem className="size-3.5" />
          </span>
          <span className="text-base font-semibold tracking-tight">luxxera</span>
        </Link>

        {/* Center nav — absolutely centered to the page */}
        <nav className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 items-center justify-center gap-10 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="pointer-events-auto text-sm text-white transition-colors hover:text-[#888888]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right cluster — pinned to far right edge */}
        <div className="relative z-10 hidden items-center gap-5 md:flex">
          <Link
            href="https://instagram.com"
            aria-label="Instagram"
            className="text-white transition-colors hover:text-[#888888]"
          >
            <Instagram className="size-4" />
          </Link>
          <Link
            href="https://wa.me/94770000000"
            aria-label="WhatsApp"
            className="text-white transition-colors hover:text-[#888888]"
          >
            <MessageCircle className="size-4" />
          </Link>
          <Link
            href="tel:+94770000000"
            aria-label="Call"
            className="text-white transition-colors hover:text-[#888888]"
          >
            <Phone className="size-4" />
          </Link>
          <Button
            asChild
            className="ml-2 h-10 rounded-full bg-white px-5 text-sm font-medium text-black hover:bg-white/90"
          >
            <Link href="/contact">Book a Test Drive</Link>
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          aria-label="Toggle menu"
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 top-16 z-30 flex flex-col gap-6 bg-black px-6 pt-10 md:hidden">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-semibold tracking-tight text-white"
            >
              {l.label}
            </Link>
          ))}
          <Button
            asChild
            className="mt-4 h-12 w-full rounded-full bg-white text-black hover:bg-white/90"
          >
            <Link href="/contact" onClick={() => setOpen(false)}>
              Book a Test Drive
            </Link>
          </Button>
          <div className="mt-4 flex items-center gap-6">
            <Link href="https://instagram.com" aria-label="Instagram" className="text-white">
              <Instagram className="size-5" />
            </Link>
            <Link href="https://wa.me/94770000000" aria-label="WhatsApp" className="text-white">
              <MessageCircle className="size-5" />
            </Link>
            <Link href="tel:+94770000000" aria-label="Call" className="text-white">
              <Phone className="size-5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
