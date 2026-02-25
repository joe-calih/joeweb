import type { Metadata } from "next"
import { generateMetadata } from "@/components/seo/metadata"
import { StructuredData } from "@/components/seo/structured-data"
import { StudioHero } from "@/components/sections/studio-hero"
import { StudioFeatures } from "@/components/sections/studio-features"
import { StudioTools } from "@/components/sections/studio-tools"
import { StudioWorkflow } from "@/components/sections/studio-workflow"
import { StudioPricing } from "@/components/sections/studio-pricing"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

export const metadata: Metadata = generateMetadata({
  title: "Studio - Professional Recording & Production Tools",
  description:
    "Access professional recording studio tools, mixing software, and production resources. Create, edit, and master your music with industry-standard equipment.",
  keywords: ["recording studio", "music production", "mixing", "mastering", "audio editing"],
  url: "https://joecalih.com/studio",
})

const studioSchema = {
  "@type": "Product",
  name: "Studio",
  description: "Professional photo studio and sound recording and production tools for artists",
  category: "Studio",
}

export default function StudioPage() {
  return (
    <>
      <StructuredData type="Product" data={studioSchema} />

      <main>
        <Breadcrumbs />
        <StudioHero />
        <StudioFeatures />
        <StudioTools />
        <StudioWorkflow />
        <StudioPricing />
      </main>
    </>
  )
}
