import type { Metadata } from "next"
import { generateMetadata } from "@/components/seo/metadata"
import { StructuredData } from "@/components/seo/structured-data"
import { ShopHeader } from "@/components/shop/shop-header"
import { ShopFilters } from "@/components/shop/shop-filters"
import { ShopProductGrid } from "@/components/shop/shop-product-grid"
import { ShopPagination } from "@/components/shop/shop-pagination"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

export const metadata: Metadata = generateMetadata({
  title: "Creative Resources Shop",
  description:
    "Browse and purchase premium creative resources including music samples, LUTs, Lightroom presets, and albums.",
  keywords: [
    "creative shop",
    "digital resources",
    "music samples",
    "LUTs",
    "Lightroom presets",
    "albums",
    "digital downloads",
  ],
  url: "https://joecalih.co.ke/shop",
})

const shopSchema = {
  "@type": "ItemList",
  name: "Joecalih Creative Resources Shop",
  description: "Premium creative resources for music producers, photographers, and content creators",
  url: "https://joecalih.co.ke/shop",
  numberOfItems: 4,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Music Samples",
      url: "https://joecalih.co.ke/shop?category=samples",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "LUTs",
      url: "https://joecalih.co.ke/shop?category=luts",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Lightroom Presets",
      url: "https://joecalih.co.ke/shop?category=presets",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Albums",
      url: "https://joecalih.co.ke/shop?category=albums",
    },
  ],
}

export default function ShopPage({
  searchParams,
}: {
  searchParams: {
    category?: string
    sort?: string
    price?: string
    page?: string
  }
}) {
  const category = searchParams.category || "all"
  const sort = searchParams.sort || "newest"
  const price = searchParams.price || "all"
  const currentPage = Number.parseInt(searchParams.page || "1", 10)

  return (
    <>
      <StructuredData type="ItemList" data={shopSchema} />

      <div className="min-h-screen bg-[#121212] text-white">
        <Breadcrumbs />
        <ShopHeader />

        <div className="max-w-[1200px] mx-auto px-4 py-8">
          {/* Filters Section */}
          <ShopFilters activeCategory={category} activeSort={sort} activePrice={price} />

          {/* Products Grid */}
          <ShopProductGrid category={category} sort={sort} price={price} page={currentPage} itemsPerPage={12} />

          {/* Pagination */}
          <ShopPagination currentPage={currentPage} category={category} sort={sort} price={price} />
        </div>
      </div>
    </>
  )
}
