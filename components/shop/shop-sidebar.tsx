"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { ChevronDown, Filter, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

interface ShopSidebarProps {
  activeCategory?: string
  activePrice?: string
}

export function ShopSidebar({ activeCategory = "all", activePrice = "all" }: ShopSidebarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [priceRange, setPriceRange] = useState([0, 100])
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const categories = [
    { id: "all", name: "All Resources", count: 32 },
    { id: "samples", name: "Sample Packs", count: 8 },
    { id: "luts", name: "LUTs", count: 8 },
    { id: "presets", name: "Lightroom Presets", count: 8 },
    { id: "albums", name: "Albums", count: 8 },
  ]

  const priceRanges = [
    { id: "all", name: "All Prices" },
    { id: "under-10", name: "Under $10" },
    { id: "10-20", name: "$ 10 - $ 20" },
    { id: "20-30", name: "$ 20 - $ 30" },
    { id: "over-30", name: "Over $ 30" },
  ]

  const formats = [
    { id: "wav", name: "WAV", count: 8 },
    { id: "mp3", name: "MP3", count: 8 },
    { id: "cube", name: "CUBE", count: 6 },
    { id: "3dl", name: "3DL", count: 4 },
    { id: "xmp", name: "XMP", count: 8 },
    { id: "dng", name: "DNG", count: 4 },
  ]

  const handleCategoryChange = (categoryId: string) => {
    router.push(`${pathname}?category=${categoryId}`)
  }

  const handlePriceChange = (priceId: string) => {
    router.push(`${pathname}?category=${activeCategory}&price=${priceId}`)
  }

  return (
    <>
      {/* Mobile filters button */}
      <div className="lg:hidden mb-6">
        <Button
          variant="outline"
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="w-full flex items-center justify-between"
        >
          <span className="flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform ${mobileFiltersOpen ? "rotate-180" : ""}`} />
        </Button>
      </div>

      {/* Sidebar content */}
      <div
        className={`lg:block lg:w-64 flex-shrink-0 ${
          mobileFiltersOpen ? "block" : "hidden"
        } bg-card/30 backdrop-blur-sm border border-border rounded-lg p-4 mb-6 lg:mb-0 sticky top-24`}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium flex items-center">
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filters
          </h3>
          <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
            Reset All
          </Button>
        </div>

        <Accordion type="multiple" defaultValue={["categories", "price"]} className="space-y-4">
          <AccordionItem value="categories" className="border-b-0">
            <AccordionTrigger className="py-2 hover:no-underline">
              <span className="text-sm font-medium">Categories</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-1">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Checkbox
                        id={`category-${category.id}`}
                        checked={activeCategory === category.id}
                        onCheckedChange={() => handleCategoryChange(category.id)}
                        className="mr-2"
                      />
                      <label
                        htmlFor={`category-${category.id}`}
                        className="text-sm cursor-pointer hover:text-primary transition-colors"
                      >
                        {category.name}
                      </label>
                    </div>
                    <span className="text-xs text-muted-foreground">{category.count}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="price" className="border-b-0">
            <AccordionTrigger className="py-2 hover:no-underline">
              <span className="text-sm font-medium">Price Range</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-1">
                <div className="space-y-2">
                  {priceRanges.map((price) => (
                    <div key={price.id} className="flex items-center">
                      <Checkbox
                        id={`price-${price.id}`}
                        checked={activePrice === price.id}
                        onCheckedChange={() => handlePriceChange(price.id)}
                        className="mr-2"
                      />
                      <label
                        htmlFor={`price-${price.id}`}
                        className="text-sm cursor-pointer hover:text-primary transition-colors"
                      >
                        {price.name}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Slider
                    defaultValue={[0, 100]}
                    max={100}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="my-6"
                  />
                  <div className="flex items-center justify-between">
                    <span className="text-sm">${priceRange[0]}</span>
                    <span className="text-sm">${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="format" className="border-b-0">
            <AccordionTrigger className="py-2 hover:no-underline">
              <span className="text-sm font-medium">File Format</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 pt-1">
                {formats.map((format) => (
                  <div key={format.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Checkbox id={`format-${format.id}`} className="mr-2" />
                      <label
                        htmlFor={`format-${format.id}`}
                        className="text-sm cursor-pointer hover:text-primary transition-colors"
                      >
                        {format.name}
                      </label>
                    </div>
                    <span className="text-xs text-muted-foreground">{format.count}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-6 pt-6 border-t border-border">
          <Button className="w-full">Apply Filters</Button>
        </div>
      </div>
    </>
  )
}
