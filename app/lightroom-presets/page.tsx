import type { Metadata } from "next"
import { generateMetadata } from "@/components/seo/metadata"
import { StructuredData } from "@/components/seo/structured-data"
import { PresetListingHeader } from "@/components/lightroom-presets/preset-listing-header"
import { PresetGrid } from "@/components/lightroom-presets/preset-grid"
import { getAllPresets } from "@/lib/lightroom-presets"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

export const metadata: Metadata = generateMetadata({
  title: "Professional Lightroom Presets for Photography",
  description:
    "Download premium Lightroom presets for professional photography. Enhance your photos with cinematic, vintage, modern, and artistic looks.",
  keywords: [
    "Lightroom presets",
    "photography presets",
    "photo editing",
    "Adobe Lightroom",
    "professional photography",
    "cinematic presets",
    "vintage presets",
  ],
  url: "https://joecalih.co.ke/lightroom-presets",
})

export default function LightroomPresetsPage({
  searchParams,
}: {
  searchParams: {
    category?: string
    sort?: string
    page?: string
  }
}) {
  const category = searchParams.category || "all"
  const sort = searchParams.sort || "newest"
  const currentPage = Number.parseInt(searchParams.page || "1", 10)

  // Get all presets
  const allPresets = getAllPresets()

  const presetsSchema = {
    "@type": "ItemList",
    name: "Professional Lightroom Presets Collection",
    description: "Premium Lightroom presets for professional photography and photo editing",
    url: "https://joecalih.co.ke/lightroom-presets",
    numberOfItems: allPresets.length,
    itemListElement: allPresets.map((preset, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: preset.title,
        description: preset.description,
        image: preset.previewImage,
        url: `https://joecalih.co.ke/lightroom-presets/${preset.slug}`,
        offers: {
          "@type": "Offer",
          price: preset.price,
          priceCurrency: "USD",
          availability: "InStock",
        },
      },
    })),
  }

  return (
    <>
      <StructuredData type="ItemList" data={presetsSchema} />

      <div className="min-h-screen bg-[#121212] text-white">
        <Breadcrumbs />
        <PresetListingHeader />

        <PresetGrid category={category} sort={sort} page={currentPage} itemsPerPage={12} />
      </div>
    </>
  )
}
