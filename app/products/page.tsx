import type { Metadata } from "next"
import { generateMetadata } from "@/components/seo/metadata"
import { StructuredData } from "@/components/seo/structured-data"
import { ProductsHero } from "@/components/sections/products-hero"
import { ProductsFeatures } from "@/components/sections/products-features"
import { ProductsShowcase } from "@/components/sections/products-showcase"
import { ProductsIntegrations } from "@/components/sections/products-integrations"
import { ProductsCTA } from "@/components/sections/products-cta"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

export const metadata: Metadata = generateMetadata({
  title: "Products - Music Distribution & Analytics Tools",
  description:
    "Discover our comprehensive suite of music distribution tools, analytics platforms, and artist development products. Everything you need to succeed in the music industry.",
  keywords: ["music distribution", "analytics tools", "artist products", "music software", "streaming platforms"],
  url: "https://artists.apple.com/products",
})

const productsSchema = {
  "@type": "Product",
  name: "Apple Music for Artists Platform",
  description: "Comprehensive music distribution and analytics platform",
  category: "Music Software",
  brand: {
    "@type": "Brand",
    name: "Apple Music for Artists",
  },
}

export default function ProductsPage() {
  return (
    <>
      <StructuredData type="Product" data={productsSchema} />

      <main>
        <Breadcrumbs />
        <ProductsHero />
        <ProductsFeatures />
        <ProductsShowcase />
        <ProductsIntegrations />
        <ProductsCTA />
      </main>
    </>
  )
}
