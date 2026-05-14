<p align="center">
  <img src="public/icon.svg" width="48" height="48" alt="luxxera logo" />
</p>

<h1 align="center">luxxera — Car Dealership Website</h1>

<p align="center">
  A premium, dark-themed car dealership website built for <strong>luxxera</strong> — a luxury automotive dealership based in Colombo, Sri Lanka. Showcases a curated inventory of high-end vehicles with cinematic visuals, smooth Framer Motion animations, and full mobile responsiveness.
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-pages--routes">Pages</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-getting-started">Setup</a> •
  <a href="#-customization-guide">Customize</a> •
  <a href="#-deployment">Deploy</a>
</p>

---

## ✨ Features

### 🏠 Homepage
- **Cinematic full-screen hero** with parallax-style gradients and a showroom backdrop image
- **Animated content entrance** using staggered Framer Motion reveals
- **Trust strip** highlighting dealership credentials (inspected inventory, location, response times)
- **Featured inventory grid** with live client-side filtering (by brand, type, transmission) and sorting (price, newest)
- **"Why Choose luxxera"** value proposition section with animated cards
- **Test drive booking section** with a showroom background and inline booking form

### 🚗 Inventory Page (`/inventory`)
- Full vehicle catalogue with all filter and sort options
- Responsive two-column card grid with hover scale animations
- Floating spec badges (top speed, acceleration, horsepower) on each card

### 📄 Vehicle Detail Pages (`/inventory/[slug]`)
- **Dynamic routes** with `generateStaticParams` for static generation at build time
- **Image gallery carousel** with thumbnail strip, navigation arrows, and dot indicators
- **Complete spec sheet** — make, model, year, engine, horsepower, top speed, 0–100 km/h, transmission, drive, colour, mileage, condition
- **Notable features** list for each vehicle
- **Enquiry form** pre-filled with the vehicle name for quick lead capture
- **Dynamic metadata** for SEO (`<title>`, `<meta description>`)

### 📞 Contact Page (`/contact`)
- Multi-channel contact cards — Phone, WhatsApp, Email, Showroom address
- Full contact form with interest selector (General Enquiry, Buy, Sell, Test Drive, Trade-In, Financing)
- Google Maps embed placeholder (ready for production)
- Test drive booking CTA section

### 🌐 Global Features
- **Sticky glassmorphism navbar** that transitions from transparent to blurred on scroll
- **Responsive mobile navigation** with full-screen overlay menu
- **Floating WhatsApp button** (fixed, bottom-right) with tooltip for instant messaging
- **SEO-optimized** — Open Graph tags, JSON-LD structured data (`AutoDealer` schema), per-page meta
- **Vercel Analytics** integration (production-only)
- **Geist font family** (Sans + Mono) via `next/font/google`

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router, React Server Components) |
| **Language** | [TypeScript](https://typescriptlang.org) |
| **UI Library** | [React 19](https://react.dev) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) with CSS variables design tokens |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com) (New York style, 57 components) |
| **Animations** | [Framer Motion](https://motion.dev) |
| **Icons** | [Lucide React](https://lucide.dev) |
| **Forms** | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) validation |
| **Analytics** | [Vercel Analytics](https://vercel.com/analytics) |
| **Font** | [Geist](https://vercel.com/font) (Sans & Mono) |
| **Package Manager** | npm / pnpm |

---

## 📄 Pages & Routes

| Route | Description |
|---|---|
| `/` | Homepage — hero, trust strip, featured inventory, value props, test drive CTA |
| `/inventory` | Full vehicle catalogue with filter/sort controls |
| `/inventory/[slug]` | Individual vehicle detail page (gallery, specs, enquiry form) |
| `/contact` | Contact information, message form, test drive booking |

### Available Vehicle Slugs (Demo Data)

| Slug | Vehicle |
|---|---|
| `bmw-m4-competition` | 2024 BMW M4 Competition |
| `mercedes-c-class-amg` | 2023 Mercedes-Benz C-Class AMG |
| `range-rover-sport` | 2024 Land Rover Range Rover Sport |
| `porsche-macan-gts` | 2024 Porsche Macan GTS |
| `toyota-gr-supra` | 2023 Toyota GR Supra |
| `audi-q7-quattro` | 2023 Audi Q7 Quattro |

---

## 📁 Project Structure

```
car-dealership-website/
├── app/
│   ├── globals.css              # Tailwind v4 config + monochromatic dark theme tokens
│   ├── layout.tsx               # Root layout — navbar, footer, WhatsApp FAB, SEO metadata
│   ├── page.tsx                 # Homepage — hero, trust strip, inventory, why section, CTA
│   ├── contact/
│   │   └── page.tsx             # Contact page — form, contact cards, map placeholder
│   └── inventory/
│       ├── page.tsx             # Inventory listing page
│       └── [slug]/
│           └── page.tsx         # Dynamic vehicle detail page
│
├── components/
│   ├── navbar.tsx               # Sticky glassmorphism navbar with mobile menu
│   ├── footer.tsx               # Footer with brand, links, and contact info
│   ├── car-card.tsx             # Vehicle card with image, specs, and hover animation
│   ├── spec-badge.tsx           # Floating spec badge pill component
│   ├── agent-card.tsx           # Sales consultant avatar card
│   ├── contact-form.tsx         # General contact/enquiry form
│   ├── booking-form.tsx         # Test drive booking form
│   ├── enquiry-form.tsx         # Vehicle-specific enquiry form
│   ├── whatsapp-button.tsx      # Floating WhatsApp FAB with tooltip
│   ├── theme-provider.tsx       # Theme context provider
│   ├── sections/
│   │   ├── home-hero.tsx        # Full-screen cinematic hero section
│   │   ├── trust-strip.tsx      # Social proof / credentials strip
│   │   ├── featured-inventory.tsx  # Inventory grid with client-side filters/sorting
│   │   ├── inventory-grid.tsx   # Inventory page wrapper (hides duplicate title)
│   │   ├── why-luxxera.tsx      # Value proposition cards
│   │   ├── test-drive-section.tsx  # CTA section with showroom backdrop
│   │   ├── car-gallery.tsx      # Image carousel with thumbnails
│   │   ├── car-specs.tsx        # Vehicle specification table
│   │   └── enquiry-section.tsx  # Vehicle enquiry CTA with form
│   └── ui/                      # 57 shadcn/ui primitives (button, dialog, select, etc.)
│
├── data/
│   └── cars.ts                  # Vehicle inventory data + TypeScript interfaces
│
├── hooks/
│   ├── use-mobile.ts            # Mobile breakpoint detection hook
│   └── use-toast.ts             # Toast notification hook
│
├── lib/
│   └── utils.ts                 # Utility functions (cn helper for classnames)
│
├── styles/
│   └── globals.css              # Alternate/legacy global styles
│
├── public/
│   ├── images/
│   │   ├── cars/                # Vehicle photographs (6 JPGs)
│   │   ├── hero-showroom.png    # Hero background image
│   │   ├── hero-rear.jpg/.png   # Alternate hero images
│   │   └── showroom-bg.jpg      # Test drive section background
│   ├── icon.svg                 # Favicon (SVG)
│   ├── apple-icon.png           # Apple touch icon
│   └── placeholder-*.{svg,jpg,png}  # Placeholder assets
│
├── components.json              # shadcn/ui configuration
├── next.config.mjs              # Next.js config (unoptimized images, TS error bypass)
├── tsconfig.json                # TypeScript configuration
├── postcss.config.mjs           # PostCSS configuration
├── package.json                 # Dependencies and scripts
└── .gitignore                   # Git ignore rules
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm**, **pnpm**, or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Agaliyan/car-dealership-website.git
   cd car-dealership-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open in your browser**

   Visit [http://localhost:3000](http://localhost:3000) to see the site.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## 🎨 Customization Guide

### Branding & Theme

The entire colour system is defined as CSS custom properties in [`app/globals.css`](app/globals.css). The default theme is a **pure monochromatic dark palette**:

```css
:root {
  --background: #000000;
  --foreground: #ffffff;
  --surface: #0d0d0d;
  --border: #1f1f1f;
  --muted-foreground: #888888;
  /* ... see globals.css for all tokens */
}
```

Update these variables to rebrand the entire site.

### Dealership Information

Key business details to update before going live:

| What | Where |
|---|---|
| Dealership name | `app/layout.tsx` (metadata), `components/navbar.tsx`, `components/footer.tsx` |
| Phone number | Search for `+94770000000` across the project |
| Email address | Search for `hello@luxxera.lk` |
| Address | `app/layout.tsx` (structured data), `components/footer.tsx`, `app/contact/page.tsx` |
| WhatsApp number | `components/whatsapp-button.tsx`, `components/navbar.tsx` |
| Social media URLs | `components/navbar.tsx`, `components/footer.tsx` |
| Domain / URL | `app/layout.tsx` (`metadataBase`) |

### Vehicle Inventory

All vehicle data lives in a single file: [`data/cars.ts`](data/cars.ts)

Each vehicle follows the `Car` interface:

```typescript
interface Car {
  id: string
  slug: string                           // URL-friendly identifier
  tag: "FOR SALE" | "FEATURED" | "NEW ARRIVAL"
  brand: string
  model: string
  year: number
  price: string                          // Display price (e.g., "Rs. 28,500,000")
  priceValue: number                     // Numeric price for sorting
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
  image: string                          // Primary image path
  gallery: string[]                      // Gallery image paths
  mileage: string
  condition: "Brand New" | "Pre-Owned"
  colour: string
  drive: string
}
```

To add a new vehicle:
1. Add the vehicle's photo(s) to `public/images/cars/`
2. Add a new entry to the `cars` array in `data/cars.ts`
3. The inventory pages and detail routes will update automatically

### Vehicle Images

Replace the demo images in `public/images/cars/` with real photographs. The recommended image specs:

- **Car cards**: 16:10 aspect ratio, minimum 800×500px
- **Detail gallery**: 4:3 or 16:11 aspect ratio, minimum 1200×900px
- **Hero image**: Full width, minimum 1920×1080px
- **Format**: JPG (optimized for web)

### Form Submissions

All forms (contact, booking, enquiry) currently simulate submissions with a `setTimeout` delay. To connect them to a real backend:

1. **Formspree**: Replace the `onSubmit` handler with a `fetch` call to your Formspree endpoint
2. **API Route**: Create a Next.js API route under `app/api/` and post form data to it
3. **Email Service**: Integrate with SendGrid, Resend, or similar

Look for `// DEMO: Wire to Formspree / API route in production` comments in:
- `components/contact-form.tsx`
- `components/booking-form.tsx`
- `components/enquiry-form.tsx`

### Google Maps

The contact page includes a placeholder for a Google Maps embed. Replace the placeholder `<div>` in `app/contact/page.tsx` with an `<iframe>` from Google Maps Embed API using your showroom coordinates.

---

## 🌍 Deployment

### Vercel (Recommended)

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push the repository to GitHub
2. Import the project in the [Vercel Dashboard](https://vercel.com/new)
3. Vercel will auto-detect the Next.js framework and configure the build
4. Every push to `main` will trigger an automatic deployment

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- **Netlify** — Use the `@netlify/plugin-nextjs` plugin
- **AWS Amplify** — Supports Next.js App Router
- **Docker** — Use the [Next.js Docker example](https://github.com/vercel/next.js/tree/canary/examples/with-docker)
- **Static Export** — Add `output: 'export'` to `next.config.mjs` for a fully static build

---

## 🔍 SEO

The site includes several SEO optimizations out of the box:

- ✅ **Open Graph** meta tags for social media sharing
- ✅ **JSON-LD structured data** using `AutoDealer` schema
- ✅ **Per-page metadata** — unique `<title>` and `<meta description>` for every route
- ✅ **Dynamic meta for vehicle pages** — includes car name, specs, and condition
- ✅ **Semantic HTML** — proper heading hierarchy, landmark elements
- ✅ **Responsive viewport** meta tag
- ✅ **Theme colour** meta tag (`#000000`)

---

## 📜 License

This project is a **demo/showcase** website. All vehicle data, pricing, and business information are fictional and used for demonstration purposes only.

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org) — React framework for production
- [shadcn/ui](https://ui.shadcn.com) — Beautifully designed component library
- [Tailwind CSS](https://tailwindcss.com) — Utility-first CSS framework
- [Framer Motion](https://motion.dev) — Animation library for React
- [Lucide](https://lucide.dev) — Beautiful open-source icons
- [Vercel](https://vercel.com) — Hosting and deployment platform
- [v0](https://v0.app) — AI-powered UI generation

---

<p align="center">
  Built with ❤️ for <strong>luxxera</strong> — Premium Automotive Sales in Colombo
</p>
