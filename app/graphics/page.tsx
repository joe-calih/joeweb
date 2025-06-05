import type { Metadata } from "next"
import { generateMetadata } from "@/components/seo/metadata"
import { StructuredData } from "@/components/seo/structured-data"
import { GraphicsHero } from "@/components/sections/graphics-hero"
import { GraphicsShowcase } from "@/components/sections/graphics-showcase"
import { GraphicsCategories } from "@/components/sections/graphics-categories"
import { GraphicsTools } from "@/components/sections/graphics-tools"
import { GraphicsPortfolio } from "@/components/sections/graphics-portfolio"
import { GraphicsProcess } from "@/components/sections/graphics-process"
import { GraphicsResources } from "@/components/sections/graphics-resources"
import { GraphicsTestimonials } from "@/components/sections/graphics-testimonials"
import { GraphicsPricing } from "@/components/sections/graphics-pricing"
import { GraphicsFAQ } from "@/components/sections/graphics-faq"
import { GraphicsCommunity } from "@/components/sections/graphics-community"
import { GraphicsCTA } from "@/components/sections/graphics-cta"

export const metadata: Metadata = generateMetadata({
  title: "Graphics & Design Resources - Professional Templates & Assets",
  description:
    "Discover premium graphics, design templates, logos, icons, and visual assets. Professional design resources for creators, marketers, and businesses.",
  keywords: [
    "graphics",
    "design templates",
    "logos",
    "icons",
    "visual assets",
    "design resources",
    "creative graphics",
    "professional templates",
  ],
  url: "https://joecalih.co.ke/graphics",
})

const graphicsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Graphics & Design Resources",
  description: "Premium graphics, design templates, and visual assets for creative professionals",
  url: "https://joecalih.co.ke/graphics",
  mainEntity: {
    "@type": "ItemList",
    name: "Graphics Collection",
    numberOfItems: 500,
    itemListElement: [
      {
        "@type": "CreativeWork",
        name: "Logo Templates",
        description: "Professional logo design templates",
      },
      {
        "@type": "CreativeWork",
        name: "Social Media Graphics",
        description: "Ready-to-use social media templates",
      },
      {
        "@type": "CreativeWork",
        name: "Web Design Elements",
        description: "UI/UX design components and elements",
      },
    ],
  },
}

export default function GraphicsPage() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <main>
        <StructuredData type="CollectionPage" data={graphicsSchema} />

        <GraphicsHero />
        <GraphicsShowcase />
        <GraphicsCategories />
        <GraphicsTools />
        <GraphicsPortfolio />
        <GraphicsProcess />
        <GraphicsResources />
        <GraphicsTestimonials />
        <GraphicsPricing />
        <GraphicsFAQ />
        <GraphicsCommunity />
        <GraphicsCTA />
      </main>
    </div>
  )
}
