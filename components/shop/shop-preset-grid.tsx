"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Camera, Download, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Preset {
  id: string
  title: string
  slug: string
  image: string
  price: number
  category: string
  compatibility: string[]
  presetCount: number
  featured?: boolean
  new?: boolean
}

interface ShopPresetGridProps {
  limit?: number
}

export function ShopPresetGrid({ limit }: ShopPresetGridProps) {
  const [presets, setPresets] = useState<Preset[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll use mock data
    const mockPresets: Preset[] = [
      {
        id: "1",
        title: "Cinematic Film Look",
        slug: "cinematic-film-look",
        image: "/placeholder.svg?height=400&width=400",
        price: 24.99,
        category: "Cinematic",
        compatibility: ["Lightroom Classic", "Lightroom Mobile", "ACR"],
        presetCount: 15,
        featured: true,
      },
      {
        id: "2",
        title: "Vintage Analog",
        slug: "vintage-analog",
        image: "/placeholder.svg?height=400&width=400",
        price: 19.99,
        category: "Vintage",
        compatibility: ["Lightroom Classic", "Lightroom Mobile"],
        presetCount: 12,
        new: true,
      },
      {
        id: "3",
        title: "Modern Portrait",
        slug: "modern-portrait",
        image: "/placeholder.svg?height=400&width=400",
        price: 29.99,
        category: "Portrait",
        compatibility: ["Lightroom Classic", "Lightroom Mobile", "ACR"],
        presetCount: 20,
      },
      {
        id: "4",
        title: "Travel Adventure",
        slug: "travel-adventure",
        image: "/placeholder.svg?height=400&width=400",
        price: 22.99,
        category: "Travel",
        compatibility: ["Lightroom Classic", "Lightroom Mobile", "ACR"],
        presetCount: 18,
        featured: true,
      },
      {
        id: "5",
        title: "Minimalist Monochrome",
        slug: "minimalist-monochrome",
        image: "/placeholder.svg?height=400&width=400",
        price: 17.99,
        category: "Black & White",
        compatibility: ["Lightroom Classic", "Lightroom Mobile"],
        presetCount: 10,
        new: true,
      },
      {
        id: "6",
        title: "Sunset Glow",
        slug: "sunset-glow",
        image: "/placeholder.svg?height=400&width=400",
        price: 19.99,
        category: "Landscape",
        compatibility: ["Lightroom Classic", "Lightroom Mobile", "ACR"],
        presetCount: 12,
      },
      {
        id: "7",
        title: "Urban Street",
        slug: "urban-street",
        image: "/placeholder.svg?height=400&width=400",
        price: 24.99,
        category: "Urban",
        compatibility: ["Lightroom Classic", "Lightroom Mobile", "ACR"],
        presetCount: 15,
        featured: true,
      },
      {
        id: "8",
        title: "Pastel Dreams",
        slug: "pastel-dreams",
        image: "/placeholder.svg?height=400&width=400",
        price: 21.99,
        category: "Fashion",
        compatibility: ["Lightroom Classic", "Lightroom Mobile"],
        presetCount: 14,
      },
    ]

    setPresets(limit ? mockPresets.slice(0, limit) : mockPresets)
    setLoading(false)
  }, [limit])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(limit || 8)].map((_, i) => (
          <div key={i} className="bg-card/30 animate-pulse rounded-lg overflow-hidden">
            <div className="h-48 bg-muted"></div>
            <div className="p-4 space-y-3">
              <div className="h-5 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="h-8 bg-muted rounded w-full mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {!limit && (
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Lightroom Presets</h2>
          <Link href="/lightroom-presets" className="text-primary hover:underline text-sm">
            View all presets
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {presets.map((preset) => (
          <div
            key={preset.id}
            className="bg-card/30 backdrop-blur-sm border border-border rounded-lg overflow-hidden group"
          >
            <Link href={`/lightroom-presets/${preset.slug}`} className="block relative">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={preset.image || "/placeholder.svg"}
                  alt={preset.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {preset.featured && (
                  <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">Featured</Badge>
                )}
                {preset.new && <Badge className="absolute top-2 left-2 bg-green-500 text-white">New</Badge>}
              </div>
            </Link>

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <Link href={`/lightroom-presets/${preset.slug}`} className="block">
                  <h3 className="font-semibold hover:text-primary transition-colors">{preset.title}</h3>
                </Link>
                <span className="font-bold text-primary">${preset.price}</span>
              </div>

              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Camera className="w-4 h-4 mr-1" />
                <span>{preset.category}</span>
                <span className="mx-2">•</span>
                <span>{preset.presetCount} presets</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {preset.compatibility.map((software) => (
                  <span key={software} className="px-2 py-0.5 bg-background text-xs rounded-full border border-border">
                    {software}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  Preview
                </Button>
                <Button size="sm" className="flex-1">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
