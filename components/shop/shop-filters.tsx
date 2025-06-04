"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Filter, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

interface ShopFiltersProps {
  activeCategory: string
  activeSort: string
  activePrice: string
}

export function ShopFilters({ activeCategory, activeSort, activePrice }: ShopFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const categories = [
    { id: "all", name: "All Resources", count: 48 },
    { id: "samples", name: "Sample Packs", count: 12 },
    { id: "luts", name: "LUTs", count: 12 },
    { id: "presets", name: "Lightroom Presets", count: 12 },
    { id: "albums", name: "Albums", count: 12 },
  ]

  const sortOptions = [
    { id: "newest", name: "Newest First" },
    { id: "oldest", name: "Oldest First" },
    { id: "price-low", name: "Price: Low to High" },
    { id: "price-high", name: "Price: High to Low" },
    { id: "popular", name: "Most Popular" },
    { id: "name", name: "Name A-Z" },
  ]

  const priceRanges = [
    { id: "all", name: "All Prices" },
    { id: "free", name: "Free" },
    { id: "under-10", name: "Under $10" },
    { id: "10-25", name: "$10 - $25" },
    { id: "25-50", name: "$25 - $50" },
    { id: "over-50", name: "Over $50" },
  ]

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value === "all") {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    params.delete("page") // Reset to first page when filtering
    router.push(`/shop?${params.toString()}`)
  }

  const clearAllFilters = () => {
    router.push("/shop")
  }

  const activeFiltersCount = [activeCategory, activeSort, activePrice].filter(
    (filter) => filter !== "all" && filter !== "newest",
  ).length

  return (
    <div className="mb-8">
      {/* Filter Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-[#fc3c44]" />
          <h2 className="text-xl font-semibold">Filter Products</h2>
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="ml-2">
              {activeFiltersCount} active
            </Badge>
          )}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={clearAllFilters} className="text-gray-400 hover:text-white">
            Clear All
          </Button>
          <div className="flex items-center gap-1 border border-border rounded-lg p-1">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Grid className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => updateFilter("category", category.id)}
            className={`justify-between h-auto p-3 ${
              activeCategory === category.id
                ? "bg-[#fc3c44] hover:bg-[#e63946] text-white"
                : "border-gray-600 text-gray-300 hover:bg-gray-800"
            }`}
          >
            <span className="text-sm font-medium">{category.name}</span>
            <Badge variant="secondary" className="ml-2 text-xs">
              {category.count}
            </Badge>
          </Button>
        ))}
      </div>

      {/* Sort and Price Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">Sort By</label>
          <Select value={activeSort} onValueChange={(value) => updateFilter("sort", value)}>
            <SelectTrigger className="bg-[#1a1a1a] border-gray-600">
              <SelectValue placeholder="Sort by..." />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.id} value={option.id}>
                  {option.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">Price Range</label>
          <Select value={activePrice} onValueChange={(value) => updateFilter("price", value)}>
            <SelectTrigger className="bg-[#1a1a1a] border-gray-600">
              <SelectValue placeholder="All prices..." />
            </SelectTrigger>
            <SelectContent>
              {priceRanges.map((range) => (
                <SelectItem key={range.id} value={range.id}>
                  {range.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
