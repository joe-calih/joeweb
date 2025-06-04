"use client"

import { motion } from "framer-motion"
import { Play, Heart, ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const albums = [
  {
    id: 1,
    slug: "midnight-dreams",
    title: "Midnight Dreams",
    artist: "Luna Eclipse",
    cover: "/placeholder.svg?height=200&width=200",
    genre: "Electronic",
    price: "$12.99",
    year: "2024",
  },
  {
    id: 2,
    slug: "urban-vibes",
    title: "Urban Vibes",
    artist: "City Beats",
    cover: "/placeholder.svg?height=200&width=200",
    genre: "Hip Hop",
    price: "$9.99",
    year: "2024",
  },
  {
    id: 3,
    slug: "acoustic-sessions",
    title: "Acoustic Sessions",
    artist: "River Stone",
    cover: "/placeholder.svg?height=200&width=200",
    genre: "Folk",
    price: "$11.99",
    year: "2023",
  },
  {
    id: 4,
    slug: "electronic-fusion",
    title: "Electronic Fusion",
    artist: "Synth Wave",
    cover: "/placeholder.svg?height=200&width=200",
    genre: "Electronic",
    price: "$13.99",
    year: "2024",
  },
]

export function HomeAlbums() {
  return (
    <Section background="dark" padding="large">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Albums</h2>
            <p className="text-gray-400 text-lg">Discover amazing music from talented artists</p>
          </div>
          <Link href="/album">
            <Button variant="outline" className="border-[#fc3c44] text-[#fc3c44] hover:bg-[#fc3c44] hover:text-white">
              View All Albums
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {albums.map((album, index) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-[#1a1a1a] border-[#333] overflow-hidden hover:border-[#fc3c44] transition-all duration-300 group">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={album.cover || "/placeholder.svg"}
                    alt={album.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#fc3c44] hover:bg-[#e63946]"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>

                <CardContent className="p-4">
                  <Link href={`/album/${album.slug}`}>
                    <h3 className="font-semibold text-white hover:text-[#fc3c44] transition-colors mb-1 line-clamp-1">
                      {album.title}
                    </h3>
                  </Link>
                  <p className="text-gray-400 text-sm mb-2">{album.artist}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{album.genre}</span>
                    <span>{album.year}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#fc3c44] font-bold">{album.price}</span>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-1">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
