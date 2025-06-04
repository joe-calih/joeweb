"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BlogPaginationProps {
  currentPage: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
  baseUrl: string
}

export function BlogPagination({ currentPage, totalPages, hasNextPage, hasPrevPage, baseUrl }: BlogPaginationProps) {
  if (totalPages <= 1) return null

  const getPageUrl = (page: number) => {
    const url = new URL(baseUrl, "http://localhost")
    url.searchParams.set("page", page.toString())
    return url.pathname + url.search
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#121212] py-16"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-center gap-4">
          {hasPrevPage && (
            <Link href={getPageUrl(currentPage - 1)}>
              <Button
                variant="outline"
                className="bg-[#1a1a1a] border-[#333] text-white hover:bg-[#333] hover:border-[#fc3c44]"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
            </Link>
          )}

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Link key={page} href={getPageUrl(page)}>
                <Button
                  variant={page === currentPage ? "default" : "outline"}
                  className={
                    page === currentPage
                      ? "bg-[#fc3c44] text-white hover:bg-[#e63946]"
                      : "bg-[#1a1a1a] border-[#333] text-white hover:bg-[#333] hover:border-[#fc3c44]"
                  }
                >
                  {page}
                </Button>
              </Link>
            ))}
          </div>

          {hasNextPage && (
            <Link href={getPageUrl(currentPage + 1)}>
              <Button
                variant="outline"
                className="bg-[#1a1a1a] border-[#333] text-white hover:bg-[#333] hover:border-[#fc3c44]"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          )}
        </div>

        <div className="text-center mt-6 text-gray-400">
          Page {currentPage} of {totalPages}
        </div>
      </div>
    </motion.div>
  )
}
