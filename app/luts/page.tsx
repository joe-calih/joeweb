import type { Metadata } from "next"
import { generateMetadata } from "@/components/seo/metadata"
import { StructuredData } from "@/components/seo/structured-data"
import { LUTListingHeader } from "@/components/luts/lut-listing-header"
import { LUTGrid } from "@/components/luts/lut-grid"
import { getAllLUTs } from "@/lib/luts"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

export const metadata: Metadata = generateMetadata({
  title: "Professional LUTs for Video Color Grading",
  description:
    "Download premium LUTs (Look-Up Tables) for professional video color grading. Compatible with DaVinci Resolve, Premiere Pro, Final Cut Pro, and more.",
  keywords: [
    "LUTs",
    "color grading",
    "video editing",
    "cinematic LUTs",
    "DaVinci Resolve",
    "Premiere Pro",
    "Final Cut Pro",
    "professional video",
  ],
  url: "https://joecalih.co.ke/luts",
})

const lutsSchema = {
  "@type": "ItemList",
  name: "Professional Video LUTs Collection",
  description: "Premium LUTs for professional video color grading and cinematic looks",
  url: "https://joecalih.co.ke/luts",
  numberOfItems: getAllLUTs().length,
  itemListElement: getAllLUTs().map((lut, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: lut.title,
      description: lut.description,
      image: lut.previewImage,
      url: `https://joecalih.co.ke/luts/${lut.slug}`,
      offers: {
        "@type": "Offer",
        price: lut.price,
        priceCurrency: "USD",
        availability: "InStock",
      },
    },
  })),
}

export default function LUTsPage({
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
      <StructuredData type="ItemList" data={lutsSchema} />

      <div className="min-h-screen bg-[#121212] text-white">
        <Breadcrumbs />
        <LUTListingHeader />

        <div className="max-w-[1200px] mx-auto px-4 py-16">
          <LUTGrid category={category} sort={sort} page={currentPage} itemsPerPage={12} />
        </div>
      </div>
    </>
  )
}
