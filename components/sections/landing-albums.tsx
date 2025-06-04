"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { Section } from "@/components/ui/section"
import Link from "next/link"

const albums = [
  {
    id: 1,
    slug: "midnight-dreams",
    title: "Midnight Dreams",
    artist: "Joecalih",
    cover: "/placeholder.svg?height=200&width=200",
    year: "2024",
    tracks: 12,
  },
  {
    id: 2,
    slug: "urban-vibes",
    title: "Urban Vibes",
    artist: "Joecalih",
    cover: "/placeholder.svg?height=200&width=200",
    year: "2023",
    tracks: 10,
  },
  {
    id: 3,
    slug: "acoustic-sessions",
    title: "Acoustic Sessions",
    artist: "Joecalih",
    cover: "/placeholder.svg?height=200&width=200",
    year: "2023",
    tracks: 8,
  },
  {
    id: 4,
    slug: "electronic-fusion",
    title: "Electronic Fusion",
    artist: "Joecalih",
    cover: "/placeholder.svg?height=200&width=200",
    year: "2022",
    tracks: 14,
  },
  {
    id: 5,
    slug: "live-at-studio",
    title: "Live at Studio",
    artist: "Joecalih",
    cover: "/placeholder.svg?height=200&width=200",
    year: "2022",
    tracks: 6,
  },
]

export function LandingAlbums() {
  return (
    <Section background="dark" padding="large">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Releases</h2>
          <p className="text-gray-400 text-lg">Discover the newest tracks and albums from our featured artists</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {albums.map((album, index) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/album/${album.slug}`}>
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={album.cover || "/placeholder.svg"}
                    alt={album.title}
                    className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-[#fc3c44] rounded-full w-12 h-12 flex items-center justify-center">
                      <Play className="w-5 h-5 text-white ml-1" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-semibold text-white group-hover:text-[#fc3c44] transition-colors line-clamp-1">
                    {album.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{album.artist}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{album.year}</span>
                    <span>•</span>
                    <span>{album.tracks} tracks</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
