import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cars, getCarBySlug } from "@/data/cars"
import { CarGallery } from "@/components/sections/car-gallery"
import { CarSpecs } from "@/components/sections/car-specs"
import { EnquirySection } from "@/components/sections/enquiry-section"

export async function generateStaticParams() {
  return cars.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const car = getCarBySlug(slug)
  if (!car) return { title: "Car not found | luxxera" }
  return {
    title: `${car.brand} ${car.model} for Sale in Colombo | luxxera`,
    description: `${car.year} ${car.brand} ${car.model} available at luxxera. ${car.specs.horsepower}, ${car.specs.topSpeed} top speed. ${car.condition}.`,
  }
}

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const car = getCarBySlug(slug)
  if (!car) notFound()

  return (
    <>
      <section className="bg-black pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            {/* Left column */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <Link
                href="/inventory"
                className="inline-flex items-center gap-1 text-xs text-[#888888] hover:text-white"
              >
                <ChevronLeft className="size-3.5" />
                Back to Inventory
              </Link>

              <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                Buy {car.brand} {car.model} in Colombo
              </h1>

              <p className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-[#888888]">
                {car.description}
              </p>

              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-2xl font-semibold text-white">{car.price}</span>
                <span className="text-xs uppercase tracking-widest text-[#888888]">
                  {car.condition}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-11 rounded-full bg-white px-6 text-sm font-medium text-black hover:bg-white/90"
                >
                  <Link href="#enquire">Enquire Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-full border-white/30 bg-transparent px-6 text-sm font-medium text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/contact">Book a Test Drive</Link>
                </Button>
              </div>
            </div>

            {/* Right column */}
            <CarGallery car={car} />
          </div>

          {/* Vehicle Details */}
          <CarSpecs car={car} />
        </div>
      </section>

      <EnquirySection car={car} />
    </>
  )
}
