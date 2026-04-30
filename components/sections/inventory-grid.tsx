"use client"

// Wrapper for the dedicated /inventory page — hides the duplicated "Cars"
// heading so the page-level <h1>Inventory</h1> remains the single title.
import { FeaturedInventory } from "@/components/sections/featured-inventory"

export function InventoryGrid() {
  return <FeaturedInventory showTitle={false} />
}
