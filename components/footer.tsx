import Link from "next/link"
import { Gem, Instagram, MessageCircle, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] bg-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-3 md:px-8">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2 text-white">
            <span className="flex size-7 items-center justify-center rounded-full bg-white text-black">
              <Gem className="size-3.5" />
            </span>
            <span className="text-base font-semibold tracking-tight">luxxera</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#888888]">
            Colombo&apos;s premier destination for luxury and performance vehicles. Curated
            inventory, transparent pricing, personal service.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <Link href="https://instagram.com" aria-label="Instagram" className="text-white hover:text-[#888888]">
              <Instagram className="size-4" />
            </Link>
            <Link href="https://wa.me/94770000000" aria-label="WhatsApp" className="text-white hover:text-[#888888]">
              <MessageCircle className="size-4" />
            </Link>
            <Link href="tel:+94770000000" aria-label="Call" className="text-white hover:text-[#888888]">
              <Phone className="size-4" />
            </Link>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-xs font-medium uppercase tracking-widest text-white">Explore</h4>
          <ul className="mt-4 space-y-3 text-sm text-[#888888]">
            <li>
              <Link href="/inventory" className="hover:text-white">
                Inventory
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-white">
                About luxxera
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Book a Test Drive
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Sell Your Car
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-medium uppercase tracking-widest text-white">Visit Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-[#888888]">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-white" />
              <span>123 Galle Road, Colombo 03, Sri Lanka</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-white" />
              <a href="tel:+94770000000" className="hover:text-white">
                +94 77 000 0000
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-white" />
              <a href="mailto:hello@luxxera.lk" className="hover:text-white">
                hello@luxxera.lk
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#1f1f1f]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-6 text-xs text-[#888888] md:flex-row md:items-center md:px-8">
          <p>© 2025 luxxera. All rights reserved.</p>
          <p>Showroom by appointment · Mon–Sat 9am–7pm</p>
        </div>
      </div>
    </footer>
  )
}
