"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Heart, Calendar, User, Music } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Sample {
  title: string
  producer: string
  slug: string
  cover: string
  releaseDate: string
  genre: string
  price: string
  description: string
  bpm: string
  key: string
  totalSamples: number
}

interface SampleGridProps {
  samples?: Sample[]
  category?: string
  sort?: string
  page?: number
  itemsPerPage?: number
}

const ITEMS_PER_PAGE = 6

// Mock data for samples
const mockSamples: Sample[] = [
  {
    title: "Afro House Essentials",
    producer: "DJ Afrobeat",
    slug: "afro-house-essentials",
    cover: "/placeholder.svg?height=300&width=300",
    releaseDate: "2024-01-15",
    genre: "Afro House",
    price: "$29.99",
    description: "Premium Afro House samples with authentic African percussion and melodic elements.",
    bpm: "120",
    key: "Am",
    totalSamples: 45,
  },
  {
    title: "Electronic Vibes",
    producer: "SynthMaster",
    slug: "electronic-vibes",
    cover: "/placeholder.svg?height=300&width=300",
    releaseDate: "2024-01-10",
    genre: "Electronic",
    price: "$24.99",
    description: "Modern electronic samples perfect for EDM and progressive house tracks.",
    bpm: "128",
    key: "Cm",
    totalSamples: 38,
  },
  {
    title: "Hip Hop Classics",
    producer: "BeatMaker Pro",
    slug: "hip-hop-classics",
    cover: "/placeholder.svg?height=300&width=300",
    releaseDate: "2024-01-05",
    genre: "Hip Hop",
    price: "$19.99",
    description: "Classic hip hop samples with vintage drums and soulful melodies.",
    bpm: "90",
    key: "Gm",
    totalSamples: 52,
  },
  {
    title: "Trap Essentials",
    producer: "TrapKing",
    slug: "trap-essentials",
    cover: "/placeholder.svg?height=300&width=300",
    releaseDate: "2023-12-20",
    genre: "Trap",
    price: "$22.99",
    description: "Hard-hitting trap samples with 808s and modern percussion.",
    bpm: "140",
    key: "Em",
    totalSamples: 41,
  },
]

export function SampleGrid({
  samples: propSamples,
  category = "all",
  sort = "newest",
  page = 1,
  itemsPerPage = ITEMS_PER_PAGE,
}: SampleGridProps) {
  const [samples, setSamples] = useState<Sample[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      // Use provided samples or fallback to mock data
      let allSamples = propSamples || mockSamples

      // Ensure samples is always an array
      if (!Array.isArray(allSamples)) {
        allSamples = []
      }

      let filteredSamples = [...allSamples]

      // Filter by category
      if (category && category !== "all") {
        filteredSamples = filteredSamples.filter((sample) => sample.genre?.toLowerCase() === category.toLowerCase())
      }

      // Sort
      switch (sort) {
        case "newest":
          filteredSamples.sort(
            (a, b) => new Date(b.releaseDate || 0).getTime() - new Date(a.releaseDate || 0).getTime(),
          )
          break
        case "oldest":
          filteredSamples.sort(
            (a, b) => new Date(a.releaseDate || 0).getTime() - new Date(b.releaseDate || 0).getTime(),
          )
          break
        case "price-low":
          filteredSamples.sort(
            (a, b) =>
              Number.parseFloat(a.price?.replace("$", "") || "0") - Number.parseFloat(b.price?.replace("$", "") || "0"),
          )
          break
        case "price-high":
          filteredSamples.sort(
            (a, b) =>
              Number.parseFloat(b.price?.replace("$", "") || "0") - Number.parseFloat(a.price?.replace("$", "") || "0"),
          )
          break
        default:
          break
      }

      setSamples(filteredSamples)
    } catch (error) {
      console.error("Error loading samples:", error)
      setSamples([])
    } finally {
      setLoading(false)
    }
  }, [propSamples, category, sort])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: itemsPerPage }).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-[#1a1a1a] rounded-lg h-96"></div>
          </div>
        ))}
      </div>
    )
  }

  if (!samples || samples.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">No samples found for the selected criteria.</p>
      </div>
    )
  }

  const totalPages = Math.ceil(samples.length / itemsPerPage)
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentSamples = samples.slice(startIndex, endIndex)

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentSamples.map((sample, index) => (
          <motion.div
            key={sample.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-[#1a1a1a] border-[#333] overflow-hidden hover:border-[#fc3c44] transition-all duration-300 group">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={sample.cover || "/placeholder.svg?height=300&width=300"}
                  alt={sample.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#fc3c44] hover:bg-[#e63946] rounded-full"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Preview
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <Link href={`/samples/${sample.slug}`}>
                    <h3 className="text-xl font-bold text-white hover:text-[#fc3c44] transition-colors cursor-pointer mb-1">
                      {sample.title}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                    <User className="w-3 h-3" />
                    <span>{sample.producer}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{sample.releaseDate ? new Date(sample.releaseDate).getFullYear() : "N/A"}</span>
                    </div>
                    <span className="px-2 py-1 bg-[#fc3c44] bg-opacity-20 text-[#fc3c44] rounded-full">
                      {sample.genre}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>{sample.bpm} BPM</span>
                    <span>Key: {sample.key}</span>
                    <div className="flex items-center gap-1">
                      <Music className="w-3 h-3" />
                      <span>{sample.totalSamples} samples</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{sample.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#fc3c44]">{sample.price}</span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white rounded-full">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-gray-600 hover:bg-gray-500 text-white rounded-full">
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
            className="border-[#333] text-white hover:bg-[#333] rounded-full"
          >
            Previous
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <Button
              key={pageNum}
              variant={page === pageNum ? "default" : "outline"}
              onClick={() => (window.location.href = `?category=${category}&sort=${sort}&page=${pageNum}`)}
              className={
                page === pageNum
                  ? "bg-[#fc3c44] hover:bg-[#e63946] rounded-full"
                  : "border-[#333] text-white hover:bg-[#333] rounded-full"
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
            className="border-[#333] text-white hover:bg-[#333] rounded-full"
          >
            Next
          </Button>
        </div>
      )}
    </div>
  )
}
