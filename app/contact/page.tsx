import type { Metadata } from "next"
import Link from "next/link"
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { TestDriveSection } from "@/components/sections/test-drive-section"

export const metadata: Metadata = {
  title: "Contact luxxera | Book a Test Drive in Colombo",
  description:
    "Get in touch with luxxera. Book a test drive or enquire about any vehicle in our Colombo showroom.",
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-black pb-24 pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Left */}
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-[#888888]">
                Talk to a consultant
              </p>
              <h1 className="mt-3 text-balance text-5xl font-bold tracking-tight text-white md:text-6xl">
                Get In Touch
              </h1>
              <p className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-[#888888]">
                Drop in for a coffee, call us, or message us on WhatsApp. We&apos;ll respond within
                the hour during showroom hours — Mon–Sat 9am–7pm.
              </p>

              <ul className="mt-10 space-y-5">
                <li>
                  <Link
                    href="tel:+94770000000"
                    className="group flex items-center gap-4 rounded-[20px] border border-[#1f1f1f] bg-[#0d0d0d] p-5 transition-colors hover:border-[#333333]"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-white">
                      <Phone className="size-4" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#888888]">Call</p>
                      <p className="mt-0.5 text-sm font-medium text-white">+94 77 000 0000</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://wa.me/94770000000"
                    className="group flex items-center gap-4 rounded-[20px] border border-[#1f1f1f] bg-[#0d0d0d] p-5 transition-colors hover:border-[#333333]"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-white">
                      <MessageCircle className="size-4" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#888888]">WhatsApp</p>
                      <p className="mt-0.5 text-sm font-medium text-white">Chat with our team</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:hello@luxxera.lk"
                    className="group flex items-center gap-4 rounded-[20px] border border-[#1f1f1f] bg-[#0d0d0d] p-5 transition-colors hover:border-[#333333]"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-white">
                      <Mail className="size-4" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#888888]">Email</p>
                      <p className="mt-0.5 text-sm font-medium text-white">hello@luxxera.lk</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <div className="flex items-center gap-4 rounded-[20px] border border-[#1f1f1f] bg-[#0d0d0d] p-5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-white">
                      <MapPin className="size-4" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#888888]">Showroom</p>
                      <p className="mt-0.5 text-sm font-medium text-white">
                        123 Galle Road, Colombo 03, Sri Lanka
                      </p>
                    </div>
                  </div>
                </li>
              </ul>

              {/* DEMO: Embed a dark-styled Google Map of the Colombo showroom address */}
              <div className="mt-8 aspect-[16/10] w-full overflow-hidden rounded-[20px] border border-[#1f1f1f] bg-[#0d0d0d]">
                <div className="flex h-full w-full items-center justify-center text-xs text-[#666666]">
                  {/* DEMO: Google Maps dark embed — Colombo showroom location */}
                  Map embed placeholder — Colombo, Sri Lanka
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <TestDriveSection />
    </>
  )
}
