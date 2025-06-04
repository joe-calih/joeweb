"use client"

import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ShopPaginationProps {
  currentPage: number
  category: string
  sort: string
  price: string
  totalPages?: number
}

export function ShopPagination({
  currentPage,
  category,
  sort,
  price,
  totalPages = 4, // Mock total pages - replace with actual calculation
}: ShopPaginationProps) {
  const router = useRouter()

  const buildUrl = (page: number) => {
    const params = new URLSearchParams()
    if (category !== "all") params.set("category", category)
    if (sort !== "newest") params.set("sort", sort)
    if (price !== "all") params.set("price", price)
    if (page > 1) params.set("page", page.toString())

    return `/shop${params.toString() ? `?${params.toString()}` : ""}`
  }

  const goToPage = (page: number) => {
    router.push(buildUrl(page))
  }

  const getVisiblePages = () => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...")
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages)
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  if (totalPages <= 1) return null

  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="border-gray-600"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Previous
      </Button>

      <div className="flex items-center gap-1">
        {getVisiblePages().map((page, index) => (
          <div key={index}>
            {page === "..." ? (
              <span className="px-3 py-2 text-gray-400">...</span>
            ) : (
              <Button
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => goToPage(page as number)}
                className={
                  currentPage === page ? "bg-[#fc3c44] hover:bg-[#e63946]" : "border-gray-600 hover:bg-gray-800"
                }
              >
                {page}
              </Button>
            )}
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="border-gray-600"
      >
        Next
        <ChevronRight className="w-4 h-4 ml-1" />
      </Button>
    </div>
  )
}
