import type { Metadata } from "next"
import { generateMetadata } from "@/components/seo/metadata"
import { StructuredData } from "@/components/seo/structured-data"
import { SampleListingHeader } from "@/components/samples/sample-listing-header"
import { SampleGrid } from "@/components/samples/sample-grid"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

export const metadata: Metadata = generateMetadata({
  title: "Premium Music Sample Packs for Producers",
  description:
    "Download high-quality music sample packs for music production. Hip-hop, electronic, trap, house, and more genres. Royalty-free samples for your beats.",
  keywords: [
    "music samples",
    "sample packs",
    "music production",
    "beats",
    "loops",
    "hip-hop samples",
    "electronic samples",
    "trap samples",
    "royalty-free",
  ],
  url: "https://joecalih.co.ke/samples",
})

const samplesSchema = {
  "@type": "ItemList",
  name: "Premium Music Sample Packs Collection",
  description: "High-quality music sample packs for professional music production",
  url: "https://joecalih.co.ke/samples",
  numberOfItems: 20,
  itemListElement: [],
}

export default function SamplesPage({
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

  return (
    <>
      <StructuredData type="ItemList" data={samplesSchema} />

      <div className="min-h-screen bg-[#121212] text-white">
        <Breadcrumbs />
        <SampleListingHeader />

        <div className="max-w-[1200px] mx-auto px-4 py-16">
          <SampleGrid category={category} sort={sort} page={currentPage} itemsPerPage={12} />
        </div>
      </div>
    </>
  )
}
