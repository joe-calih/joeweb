"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Disc, Music, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Album {
  id: string
  title: string
  artist: string
  slug: string
  cover: string
  price: number
  genre: string
  trackCount: number
  featured?: boolean
  new?: boolean
}

interface ShopAlbumGridProps {
  limit?: number
}

export function ShopAlbumGrid({ limit }: ShopAlbumGridProps) {
  const [albums, setAlbums] = useState<Album[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll use mock data
    const mockAlbums: Album[] = [
      {
        id: "1",
        title: "Midnight Dreams",
        artist: "Luna Echo",
        slug: "midnight-dreams",
        cover: "/placeholder.svg?height=400&width=400",
        price: 9.99,
        genre: "Electronic",
        trackCount: 12,
        featured: true,
      },
      {
        id: "2",
        title: "Urban Vibes",
        artist: "Metro Collective",
        slug: "urban-vibes",
        cover: "/placeholder.svg?height=400&width=400",
        price: 8.99,
        genre: "Hip-Hop",
        trackCount: 10,
        new: true,
      },
      {
        id: "3",
        title: "Acoustic Sessions",
        artist: "Sierra Wood",
        slug: "acoustic-sessions",
        cover: "/placeholder.svg?height=400&width=400",
        price: 7.99,
        genre: "Acoustic",
        trackCount: 8,
      },
      {
        id: "4",
        title: "Electronic Fusion",
        artist: "Pulse Wave",
        slug: "electronic-fusion",
        cover: "/placeholder.svg?height=400&width=400",
        price: 9.99,
        genre: "Electronic",
        trackCount: 14,
        featured: true,
      },
      {
        id: "5",
        title: "Live at Studio",
        artist: "The Resonance",
        slug: "live-at-studio",
        cover: "/placeholder.svg?height=400&width=400",
        price: 11.99,
        genre: "Rock",
        trackCount: 9,
        new: true,
      },
      {
        id: "6",
        title: "Neon Nights",
        artist: "Synth Collective",
        slug: "neon-nights",
        cover: "/placeholder.svg?height=400&width=400",
        price: 8.99,
        genre: "Synthwave",
        trackCount: 10,
      },
      {
        id: "7",
        title: "Soul Sessions",
        artist: "Melody James",
        slug: "soul-sessions",
        cover: "/placeholder.svg?height=400&width=400",
        price: 9.99,
        genre: "Soul",
        trackCount: 11,
        featured: true,
      },
      {
        id: "8",
        title: "Cosmic Journey",
        artist: "Astral Project",
        slug: "cosmic-journey",
        cover: "/placeholder.svg?height=400&width=400",
        price: 10.99,
        genre: "Ambient",
        trackCount: 8,
      },
    ]

    setAlbums(limit ? mockAlbums.slice(0, limit) : mockAlbums)
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
          <h2 className="text-2xl font-bold">Albums</h2>
          <Link href="/album" className="text-primary hover:underline text-sm">
            View all albums
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {albums.map((album) => (
          <div
            key={album.id}
            className="bg-card/30 backdrop-blur-sm border border-border rounded-lg overflow-hidden group"
          >
            <Link href={`/album/${album.slug}`} className="block relative">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={album.cover || "/placeholder.svg"}
                  alt={album.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {album.featured && (
                  <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">Featured</Badge>
                )}
                {album.new && <Badge className="absolute top-2 left-2 bg-green-500 text-white">New</Badge>}
              </div>
            </Link>

            <div className="p-4">
              <div className="flex flex-col mb-2">
                <Link href={`/album/${album.slug}`} className="block">
                  <h3 className="font-semibold hover:text-primary transition-colors">{album.title}</h3>
                </Link>
                <span className="text-sm text-muted-foreground">{album.artist}</span>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Disc className="w-4 h-4 mr-1" />
                  <span>{album.genre}</span>
                  <span className="mx-2">•</span>
                  <span>{album.trackCount} tracks</span>
                </div>
                <span className="font-bold text-primary">${album.price}</span>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Music className="w-4 h-4 mr-2" />
                  Preview
                </Button>
                <Button size="sm" className="flex-1">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Buy Album
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
