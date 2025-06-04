"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Heart, ShoppingCart, Calendar, User, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getAllLUTs, type LUT } from "@/lib/luts"

interface LUTGridProps {
  category?: string
  sort?: string
  page?: number
  itemsPerPage?: number
}

export function LUTGrid({ category = "all", sort = "newest", page = 1, itemsPerPage = 12 }: LUTGridProps) {
  const [luts, setLuts] = useState<LUT[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const allLuts = getAllLUTs()
      let filteredLuts = allLuts || []

      // Filter by category
      if (category && category !== "all") {
        filteredLuts = filteredLuts.filter((lut) => lut.category?.toLowerCase() === category.toLowerCase())
      }

      // Sort
      switch (sort) {
        case "newest":
          filteredLuts.sort((a, b) => new Date(b.releaseDate || 0).getTime() - new Date(a.releaseDate || 0).getTime())
          break
        case "oldest":
          filteredLuts.sort((a, b) => new Date(a.releaseDate || 0).getTime() - new Date(b.releaseDate || 0).getTime())
          break
        case "price-low":
          filteredLuts.sort((a, b) => Number.parseFloat(a.price || "0") - Number.parseFloat(b.price || "0"))
          break
        case "price-high":
          filteredLuts.sort((a, b) => Number.parseFloat(b.price || "0") - Number.parseFloat(a.price || "0"))
          break
        default:
          break
      }

      setLuts(filteredLuts)
    } catch (error) {
      console.error("Error loading LUTs:", error)
      setLuts([])
    } finally {
      setLoading(false)
    }
  }, [category, sort])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: itemsPerPage }).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-[#1a1a1a] rounded-lg h-64"></div>
          </div>
        ))}
      </div>
    )
  }

  if (!luts || luts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">No LUTs found for the selected criteria.</p>
      </div>
    )
  }

  const totalPages = Math.ceil(luts.length / itemsPerPage)
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentLuts = luts.slice(startIndex, endIndex)

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentLuts.map((lut, index) => (
          <motion.div
            key={lut.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-[#1a1a1a] border-[#333] overflow-hidden hover:border-[#fc3c44] transition-all duration-300 group">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={lut.previewImage || "/placeholder.svg?height=300&width=400"}
                  alt={lut.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#fc3c44] hover:bg-[#e63946]"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Preview
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <Link href={`/luts/${lut.slug}`}>
                    <h3 className="text-xl font-bold text-white hover:text-[#fc3c44] transition-colors cursor-pointer mb-1">
                      {lut.title}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                    <User className="w-3 h-3" />
                    <span>{lut.author}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{lut.releaseDate ? new Date(lut.releaseDate).getFullYear() : "N/A"}</span>
                    </div>
                    <span className="px-2 py-1 bg-[#fc3c44] bg-opacity-20 text-[#fc3c44] rounded-full">
                      {lut.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>{lut.mood}</span>
                    <div className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      <span>{lut.fileFormat}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{lut.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#fc3c44]">${lut.price}</span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-[#fc3c44] hover:bg-[#e63946]">
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Buy
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          <Button
            variant="outline"
            onClick={() => (window.location.href = `?category=${category}&sort=${sort}&page=${Math.max(1, page - 1)}`)}
            disabled={page === 1}
            className="border-[#333] text-white hover:bg-[#333]"
          >
            Previous
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <Button
              key={pageNum}
              variant={page === pageNum ? "default" : "outline"}
              onClick={() => (window.location.href = `?category=${category}&sort=${sort}&page=${pageNum}`)}
              className={
                page === pageNum ? "bg-[#fc3c44] hover:bg-[#e63946]" : "border-[#333] text-white hover:bg-[#333]"
              }
            >
              {pageNum}
            </Button>
          ))}

          <Button
            variant="outline"
            onClick={() =>
              (window.location.href = `?category=${category}&sort=${sort}&page=${Math.min(totalPages, page + 1)}`)
            }
            disabled={page === totalPages}
            className="border-[#333] text-white hover:bg-[#333]"
          >
            Next
          </Button>
        </div>
      )}
    </div>
  )
}
