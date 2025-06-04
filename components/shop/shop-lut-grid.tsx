"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Download, Palette, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface LUT {
  id: string
  title: string
  slug: string
  image: string
  price: number
  category: string
  compatibility: string[]
  featured?: boolean
  new?: boolean
}

interface ShopLUTGridProps {
  limit?: number
}

export function ShopLUTGrid({ limit }: ShopLUTGridProps) {
  const [luts, setLUTs] = useState<LUT[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll use mock data
    const mockLUTs: LUT[] = [
      {
        id: "1",
        title: "Cinematic Orange & Teal",
        slug: "cinematic-orange-teal",
        image: "/placeholder.svg?height=400&width=400",
        price: 19.99,
        category: "Cinematic",
        compatibility: ["Premiere Pro", "DaVinci Resolve", "Final Cut Pro"],
        featured: true,
      },
      {
        id: "2",
        title: "Vintage Film Emulation",
        slug: "vintage-film-emulation",
        image: "/placeholder.svg?height=400&width=400",
        price: 24.99,
        category: "Vintage",
        compatibility: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
        new: true,
      },
      {
        id: "3",
        title: "Modern Clean Look",
        slug: "modern-clean-look",
        image: "/placeholder.svg?height=400&width=400",
        price: 14.99,
        category: "Modern",
        compatibility: ["Premiere Pro", "Final Cut Pro", "Lumafusion"],
      },
      {
        id: "4",
        title: "Sunset Golden Hour",
        slug: "sunset-golden-hour",
        image: "/placeholder.svg?height=400&width=400",
        price: 17.99,
        category: "Natural",
        compatibility: ["Premiere Pro", "DaVinci Resolve", "Final Cut Pro"],
        featured: true,
      },
      {
        id: "5",
        title: "Cyberpunk Neon",
        slug: "cyberpunk-neon",
        image: "/placeholder.svg?height=400&width=400",
        price: 22.99,
        category: "Stylized",
        compatibility: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
        new: true,
      },
      {
        id: "6",
        title: "Desert Warmth",
        slug: "desert-warmth",
        image: "/placeholder.svg?height=400&width=400",
        price: 16.99,
        category: "Natural",
        compatibility: ["Premiere Pro", "DaVinci Resolve", "Final Cut Pro"],
      },
      {
        id: "7",
        title: "Nordic Blue",
        slug: "nordic-blue",
        image: "/placeholder.svg?height=400&width=400",
        price: 19.99,
        category: "Stylized",
        compatibility: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
        featured: true,
      },
      {
        id: "8",
        title: "Vintage Americana",
        slug: "vintage-americana",
        image: "/placeholder.svg?height=400&width=400",
        price: 18.99,
        category: "Vintage",
        compatibility: ["Premiere Pro", "Final Cut Pro", "DaVinci Resolve"],
      },
    ]

    setLUTs(limit ? mockLUTs.slice(0, limit) : mockLUTs)
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
          <h2 className="text-2xl font-bold">LUTs</h2>
          <Link href="/luts" className="text-primary hover:underline text-sm">
            View all LUTs
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {luts.map((lut) => (
          <div
            key={lut.id}
            className="bg-card/30 backdrop-blur-sm border border-border rounded-lg overflow-hidden group"
          >
            <Link href={`/luts/${lut.slug}`} className="block relative">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={lut.image || "/placeholder.svg"}
                  alt={lut.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {lut.featured && (
                  <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">Featured</Badge>
                )}
                {lut.new && <Badge className="absolute top-2 left-2 bg-green-500 text-white">New</Badge>}
              </div>
            </Link>

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <Link href={`/luts/${lut.slug}`} className="block">
                  <h3 className="font-semibold hover:text-primary transition-colors">{lut.title}</h3>
                </Link>
                <span className="font-bold text-primary">${lut.price}</span>
              </div>

              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Palette className="w-4 h-4 mr-1" />
                <span>{lut.category}</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {lut.compatibility.map((software) => (
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
