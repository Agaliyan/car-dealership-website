export interface Car {
  id: string
  slug: string
  tag: "FOR SALE" | "FEATURED" | "NEW ARRIVAL"
  brand: string
  model: string
  year: number
  price: string
  priceValue: number
  type: "Sports" | "Sedan" | "SUV" | "Coupe"
  transmission: "Automatic" | "Manual"
  specs: {
    topSpeed: string
    acceleration: string
    horsepower: string
    engine: string
  }
  features: string[]
  description: string
  image: string // DEMO: Replace with real photo
  gallery: string[] // DEMO: Replace with real gallery photos
  mileage: string
  condition: "Brand New" | "Pre-Owned"
  colour: string
  drive: string
}

// DEMO DATA — All vehicles below use placeholder images. Replace with real
// photography from the luxxera Colombo showroom before going live.
export const cars: Car[] = [
  {
    id: "1",
    slug: "bmw-m4-competition",
    tag: "FEATURED",
    brand: "BMW",
    model: "M4 Competition",
    year: 2024,
    price: "Rs. 28,500,000",
    priceValue: 28500000,
    type: "Sports",
    transmission: "Automatic",
    specs: {
      topSpeed: "280 km/h",
      acceleration: "4.2 sec",
      horsepower: "400 hp",
      engine: "3.0L Twin-Turbo I6",
    },
    features: [
      "M Carbon bucket seats",
      "Adaptive M suspension",
      "M Drive Professional",
      "Harman Kardon surround sound",
      "Laser headlights",
    ],
    description:
      "Track-bred precision meets daily-drive comfort. The M4 Competition delivers explosive performance and razor-sharp handling, finished to luxxera's exacting standards.",
    image: "/placeholder.svg?height=900&width=1400",
    gallery: [
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
    ],
    mileage: "120 km",
    condition: "Brand New",
    colour: "Alpine White",
    drive: "Rear-Wheel Drive",
  },
  {
    id: "2",
    slug: "mercedes-c-class-amg",
    tag: "FOR SALE",
    brand: "Mercedes-Benz",
    model: "C-Class AMG",
    year: 2023,
    price: "Rs. 19,800,000",
    priceValue: 19800000,
    type: "Sedan",
    transmission: "Automatic",
    specs: {
      topSpeed: "250 km/h",
      acceleration: "5.1 sec",
      horsepower: "340 hp",
      engine: "2.0L Turbo I4 Hybrid",
    },
    features: [
      "AMG Performance steering",
      "MBUX infotainment",
      "Burmester 3D sound",
      "Panoramic sunroof",
      "Ambient lighting",
    ],
    description:
      "Executive sophistication with AMG performance DNA. A perfectly balanced sedan for Colombo's boardrooms and weekend getaways alike.",
    image: "/placeholder.svg?height=900&width=1400",
    gallery: [
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
    ],
    mileage: "8,400 km",
    condition: "Pre-Owned",
    colour: "Obsidian Black",
    drive: "All-Wheel Drive",
  },
  {
    id: "3",
    slug: "range-rover-sport",
    tag: "NEW ARRIVAL",
    brand: "Land Rover",
    model: "Range Rover Sport",
    year: 2024,
    price: "Rs. 34,000,000",
    priceValue: 34000000,
    type: "SUV",
    transmission: "Automatic",
    specs: {
      topSpeed: "220 km/h",
      acceleration: "6.0 sec",
      horsepower: "295 hp",
      engine: "3.0L Mild-Hybrid I6",
    },
    features: [
      "Terrain Response 2",
      "Air suspension",
      "Meridian sound system",
      "Heated rear seats",
      "Configurable cabin lighting",
    ],
    description:
      "Commanding presence with go-anywhere capability. The Range Rover Sport blends British luxury with serious off-road pedigree.",
    image: "/placeholder.svg?height=900&width=1400",
    gallery: [
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
    ],
    mileage: "350 km",
    condition: "Brand New",
    colour: "Santorini Black",
    drive: "All-Wheel Drive",
  },
  {
    id: "4",
    slug: "porsche-macan-gts",
    tag: "FEATURED",
    brand: "Porsche",
    model: "Macan GTS",
    year: 2024,
    price: "Rs. 31,500,000",
    priceValue: 31500000,
    type: "SUV",
    transmission: "Automatic",
    specs: {
      topSpeed: "260 km/h",
      acceleration: "4.8 sec",
      horsepower: "370 hp",
      engine: "2.9L Twin-Turbo V6",
    },
    features: [
      "Porsche Active Suspension Management",
      "Sport Chrono Package",
      "BOSE surround sound",
      "Alcantara interior",
      "21-inch RS Spyder wheels",
    ],
    description:
      "The driver's SUV. Porsche's GTS treatment turns the Macan into a precision instrument that's equally at home on a track or city street.",
    image: "/placeholder.svg?height=900&width=1400",
    gallery: [
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
    ],
    mileage: "1,200 km",
    condition: "Brand New",
    colour: "Carmine Red",
    drive: "All-Wheel Drive",
  },
  {
    id: "5",
    slug: "toyota-gr-supra",
    tag: "FOR SALE",
    brand: "Toyota",
    model: "GR Supra",
    year: 2023,
    price: "Rs. 22,000,000",
    priceValue: 22000000,
    type: "Sports",
    transmission: "Automatic",
    specs: {
      topSpeed: "250 km/h",
      acceleration: "4.3 sec",
      horsepower: "382 hp",
      engine: "3.0L Turbo I6",
    },
    features: [
      "Adaptive Variable Suspension",
      "Active differential",
      "JBL premium audio",
      "Heads-up display",
      "Wireless Apple CarPlay",
    ],
    description:
      "A modern legend reborn. The GR Supra fuses Toyota's racing heritage with cutting-edge engineering for an unforgettable driving experience.",
    image: "/placeholder.svg?height=900&width=1400",
    gallery: [
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
    ],
    mileage: "6,800 km",
    condition: "Pre-Owned",
    colour: "Renaissance Red",
    drive: "Rear-Wheel Drive",
  },
  {
    id: "6",
    slug: "audi-q7-quattro",
    tag: "FOR SALE",
    brand: "Audi",
    model: "Q7 Quattro",
    year: 2023,
    price: "Rs. 27,500,000",
    priceValue: 27500000,
    type: "SUV",
    transmission: "Automatic",
    specs: {
      topSpeed: "230 km/h",
      acceleration: "5.9 sec",
      horsepower: "330 hp",
      engine: "3.0L TFSI V6",
    },
    features: [
      "Quattro all-wheel drive",
      "Virtual Cockpit Plus",
      "Bang & Olufsen 3D sound",
      "Adaptive air suspension",
      "Seven-seat configuration",
    ],
    description:
      "Refined family luxury without compromise. The Q7 carries seven in absolute comfort while delivering Audi's signature performance.",
    image: "/placeholder.svg?height=900&width=1400",
    gallery: [
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
    ],
    mileage: "12,500 km",
    condition: "Pre-Owned",
    colour: "Glacier White",
    drive: "All-Wheel Drive",
  },
]

export function getCarBySlug(slug: string): Car | undefined {
  return cars.find((c) => c.slug === slug)
}
