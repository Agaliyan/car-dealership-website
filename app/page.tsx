import { HomeHero } from "@/components/sections/home-hero"
import { TrustStrip } from "@/components/sections/trust-strip"
import { FeaturedInventory } from "@/components/sections/featured-inventory"
import { WhyLuxxera } from "@/components/sections/why-luxxera"
import { TestDriveSection } from "@/components/sections/test-drive-section"

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <FeaturedInventory />
      <WhyLuxxera />
      <TestDriveSection />
    </>
  )
}
