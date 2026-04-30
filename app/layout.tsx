import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "luxxera | Premium Cars in Colombo",
  description:
    "Browse luxxera's handpicked collection of luxury and performance vehicles. Colombo's trusted automotive dealership.",
  generator: "v0.app",
  metadataBase: new URL("https://luxxera.lk"),
  openGraph: {
    title: "luxxera | Premium Cars in Colombo",
    description:
      "Discover handpicked luxury and performance cars at luxxera Colombo. Book a test drive today.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: "luxxera",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Galle Road",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
  url: "https://luxxera.lk",
  telephone: "+94770000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} bg-background`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
