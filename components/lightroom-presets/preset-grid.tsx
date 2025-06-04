"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { getAllPresets, type LightroomPreset } from "@/lib/lightroom-presets"

interface PresetGridProps {
  presets?: LightroomPreset[]
  category?: string
  sort?: string
  page?: number
  itemsPerPage?: number
}

export function PresetGrid({
  presets: propPresets,
  category = "all",
  sort = "newest",
  page = 1,
  itemsPerPage = 12,
}: PresetGridProps) {
  const [presets, setPresets] = useState<LightroomPreset[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      // Use provided presets or get all presets
      let allPresets = propPresets || getAllPresets()

      // Ensure presets is always an array
      if (!Array.isArray(allPresets)) {
        allPresets = []
      }

      let filteredPresets = [...allPresets]

      // Filter by category
      if (category && category !== "all") {
        filteredPresets = filteredPresets.filter((preset) => preset.category?.toLowerCase() === category.toLowerCase())
      }

      // Sort
      switch (sort) {
        case "newest":
          filteredPresets.sort(
            (a, b) => new Date(b.releaseDate || 0).getTime() - new Date(a.releaseDate || 0).getTime(),
          )
          break
        case "oldest":
          filteredPresets.sort(
            (a, b) => new Date(a.releaseDate || 0).getTime() - new Date(b.releaseDate || 0).getTime(),
          )
          break
        case "price-low":
          filteredPresets.sort((a, b) => Number.parseFloat(a.price || "0") - Number.parseFloat(b.price || "0"))
          break
        case "price-high":
          filteredPresets.sort((a, b) => Number.parseFloat(b.price || "0") - Number.parseFloat(a.price || "0"))
          break
        default:
          break
      }

      setPresets(filteredPresets)
    } catch (error) {
      console.error("Error loading presets:", error)
      setPresets([])
    } finally {
      setLoading(false)
    }
  }, [propPresets, category, sort])

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: itemsPerPage }).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-[#1a1a1a] rounded-lg h-64"></div>
          </div>
        ))}
      </div>
    )
  }

  if (!presets || presets.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">No presets found for the selected criteria.</p>
      </div>
    )
  }

  const totalPages = Math.ceil(presets.length / itemsPerPage)
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentPresets = presets.slice(startIndex, endIndex)

  return (
    <div className="bg-[#121212] py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentPresets.map((preset, index) => (
            <motion.div
              key={preset.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/lightroom-presets/${preset.slug}`}>
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={preset.previewImage || "/placeholder.svg?height=300&width=300"}
                    alt={preset.title}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {preset.featured && (
                    <div className="absolute top-2 left-2">
                      <Badge variant="outline" className="border-white text-white bg-black/40">
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-white group-hover:text-[#fc3c44] transition-colors line-clamp-1">
                    {preset.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{preset.author}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>${preset.price}</span>
                    {preset.originalPrice && (
                      <>
                        <span className="line-through">${preset.originalPrice}</span>
                      </>
                    )}
                    <span>•</span>
                    <span>{preset.mood}</span>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-1">{preset.category}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
