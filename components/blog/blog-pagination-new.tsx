"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BlogPaginationNewProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export function BlogPaginationNew({ currentPage, totalPages, onPageChange, className = "" }: BlogPaginationNewProps) {
  if (totalPages <= 1) return null

  const getVisiblePages = () => {
    const delta = 2 // Number of pages to show on each side of current page
    const range = []
    const rangeWithDots = []

    // Always include first page
    range.push(1)

    // Calculate start and end of middle range
    const start = Math.max(2, currentPage - delta)
    const end = Math.min(totalPages - 1, currentPage + delta)

    // Add dots before middle range if needed
    if (start > 2) {
      rangeWithDots.push(1)
      if (start > 3) {
        rangeWithDots.push("...")
      }
    } else {
      rangeWithDots.push(1)
    }

    // Add middle range
    for (let i = start; i <= end; i++) {
      if (i !== 1 && i !== totalPages) {
        rangeWithDots.push(i)
      }
    }

    // Add dots after middle range if needed
    if (end < totalPages - 1) {
      if (end < totalPages - 2) {
        rangeWithDots.push("...")
      }
      rangeWithDots.push(totalPages)
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages)
    }

    // Remove duplicates and sort
    return [...new Set(rangeWithDots)].sort((a, b) => {
      if (a === "..." || b === "...") return 0
      return (a as number) - (b as number)
    })
  }

  const visiblePages = getVisiblePages()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center justify-center gap-2 mt-12 ${className}`}
    >
      {/* Previous Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-[#1a1a1a] border-[#333] text-white hover:bg-[#333] hover:border-[#fc3c44] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {visiblePages.map((page, index) => {
          if (page === "...") {
            return (
              <div key={`dots-${index}`} className="px-2 py-1 text-gray-400">
                <MoreHorizontal className="w-4 h-4" />
              </div>
            )
          }

          const pageNum = page as number
          const isActive = pageNum === currentPage

          return (
            <Button
              key={pageNum}
              variant={isActive ? "default" : "outline"}
              size="sm"
              onClick={() => onPageChange(pageNum)}
              className={
                isActive
                  ? "bg-[#fc3c44] text-white hover:bg-[#e63946] min-w-[40px]"
                  : "bg-[#1a1a1a] border-[#333] text-white hover:bg-[#333] hover:border-[#fc3c44] min-w-[40px]"
              }
            >
              {pageNum}
            </Button>
          )
        })}
      </div>

      {/* Next Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-[#1a1a1a] border-[#333] text-white hover:bg-[#333] hover:border-[#fc3c44] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </motion.div>
  )
}
