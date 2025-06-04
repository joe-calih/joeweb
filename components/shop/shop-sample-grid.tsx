"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Download, Music, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface SamplePack {
  id: string
  title: string
  slug: string
  image: string
  price: number
  category: string
  tags: string[]
  sampleCount: number
  fileSize: string
  featured?: boolean
  new?: boolean
}

interface ShopSampleGridProps {
  limit?: number
}

export function ShopSampleGrid({ limit }: ShopSampleGridProps) {
  const [samples, setSamples] = useState<SamplePack[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll use mock data
    const mockSamples: SamplePack[] = [
      {
        id: "1",
        title: "Hip-Hop Classics",
        slug: "hip-hop-classics",
        image: "/placeholder.svg?height=400&width=400",
        price: 29.99,
        category: "Hip-Hop",
        tags: ["drums", "loops", "one-shots"],
        sampleCount: 250,
        fileSize: "1.2 GB",
        featured: true,
      },
      {
        id: "2",
        title: "Electronic Vibes",
        slug: "electronic-vibes",
        image: "/placeholder.svg?height=400&width=400",
        price: 24.99,
        category: "Electronic",
        tags: ["synths", "drums", "fx"],
        sampleCount: 180,
        fileSize: "950 MB",
        new: true,
      },
      {
        id: "3",
        title: "Ambient Textures",
        slug: "ambient-textures",
        image: "/placeholder.svg?height=400&width=400",
        price: 19.99,
        category: "Ambient",
        tags: ["pads", "atmospheres", "textures"],
        sampleCount: 120,
        fileSize: "800 MB",
      },
      {
        id: "4",
        title: "Trap Essentials",
        slug: "trap-essentials",
        image: "/placeholder.svg?height=400&width=400",
        price: 34.99,
        category: "Trap",
        tags: ["808s", "drums", "melodies"],
        sampleCount: 300,
        fileSize: "1.5 GB",
        featured: true,
      },
      {
        id: "5",
        title: "Lofi Jazz Collection",
        slug: "lofi-jazz-collection",
        image: "/placeholder.svg?height=400&width=400",
        price: 27.99,
        category: "Lofi",
        tags: ["jazz", "drums", "keys"],
        sampleCount: 200,
        fileSize: "1.1 GB",
        new: true,
      },
      {
        id: "6",
        title: "Future Bass Essentials",
        slug: "future-bass-essentials",
        image: "/placeholder.svg?height=400&width=400",
        price: 29.99,
        category: "Future Bass",
        tags: ["synths", "drums", "vocals"],
        sampleCount: 220,
        fileSize: "1.3 GB",
      },
      {
        id: "7",
        title: "Cinematic Percussion",
        slug: "cinematic-percussion",
        image: "/placeholder.svg?height=400&width=400",
        price: 39.99,
        category: "Cinematic",
        tags: ["percussion", "impacts", "textures"],
        sampleCount: 150,
        fileSize: "2.1 GB",
        featured: true,
      },
      {
        id: "8",
        title: "Deep House Foundations",
        slug: "deep-house-foundations",
        image: "/placeholder.svg?height=400&width=400",
        price: 24.99,
        category: "House",
        tags: ["drums", "bass", "synths"],
        sampleCount: 190,
        fileSize: "1.0 GB",
      },
    ]

    setSamples(limit ? mockSamples.slice(0, limit) : mockSamples)
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
          <h2 className="text-2xl font-bold">Sample Packs</h2>
          <Link href="/samples" className="text-primary hover:underline text-sm">
            View all sample packs
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {samples.map((sample) => (
          <div
            key={sample.id}
            className="bg-card/30 backdrop-blur-sm border border-border rounded-lg overflow-hidden group"
          >
            <Link href={`/samples/${sample.slug}`} className="block relative">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={sample.image || "/placeholder.svg"}
                  alt={sample.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {sample.featured && (
                  <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">Featured</Badge>
                )}
                {sample.new && <Badge className="absolute top-2 left-2 bg-green-500 text-white">New</Badge>}
              </div>
            </Link>

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <Link href={`/samples/${sample.slug}`} className="block">
                  <h3 className="font-semibold hover:text-primary transition-colors">{sample.title}</h3>
                </Link>
                <span className="font-bold text-primary">${sample.price}</span>
              </div>

              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Music className="w-4 h-4 mr-1" />
                <span>{sample.category}</span>
                <span className="mx-2">•</span>
                <span>{sample.sampleCount} samples</span>
                <span className="mx-2">•</span>
                <span>{sample.fileSize}</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {sample.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-background text-xs rounded-full border border-border">
                    {tag}
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
