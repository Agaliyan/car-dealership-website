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

| Layer               | Technology                                                                         |
| ------------------- | ---------------------------------------------------------------------------------- |
| **Framework**       | [Next.js 16](https://nextjs.org) (App Router, React Server Components)             |
| **Language**        | [TypeScript](https://typescriptlang.org)                                           |
| **UI Library**      | [React 19](https://react.dev)                                                      |
| **Styling**         | [Tailwind CSS v4](https://tailwindcss.com) with CSS variables design tokens        |
| **UI Components**   | [shadcn/ui](https://ui.shadcn.com) (New York style, 57 components)                 |
| **Animations**      | [Framer Motion](https://motion.dev)                                                |
| **Icons**           | [Lucide React](https://lucide.dev)                                                 |
| **Forms**           | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) validation |
| **Analytics**       | [Vercel Analytics](https://vercel.com/analytics)                                   |
| **Font**            | [Geist](https://vercel.com/font) (Sans & Mono)                                     |
| **Package Manager** | npm / pnpm                                                                         |

---


<p align="center">
  Built with ❤️ for <strong>luxxera</strong> — Premium Automotive Sales in Colombo
</p>
