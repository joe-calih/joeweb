"use client"

import { motion } from "framer-motion"
import { Play, Download } from "lucide-react"
import { Section } from "@/components/ui/section"
import Link from "next/link"

const samplePacks = [
  {
    id: 1,
    slug: "afro-house-essentials",
    title: "Afro House Essentials",
    artist: "Infinity Audio",
    cover: "/placeholder.svg?height=200&width=200",
    genre: "Afro House",
    samples: 170,
    bpm: "120-128",
    description: "Vibrant Afro House rhythms and melodies",
  },
  {
    id: 2,
    slug: "electronic-vibes",
    title: "Electronic Vibes",
    artist: "Beat Makers",
    cover: "/placeholder.svg?height=200&width=200",
    genre: "Electronic",
    samples: 85,
    bpm: "128-140",
    description: "Modern electronic sounds and textures",
  },
  {
    id: 3,
    slug: "hip-hop-classics",
    title: "Hip Hop Classics",
    artist: "Urban Sounds",
    cover: "/placeholder.svg?height=200&width=200",
    genre: "Hip Hop",
    samples: 120,
    bpm: "85-95",
    description: "Classic hip hop beats and samples",
  },
  {
    id: 4,
    slug: "ambient-textures",
    title: "Ambient Textures",
    artist: "Atmospheric",
    cover: "/placeholder.svg?height=200&width=200",
    genre: "Ambient",
    samples: 60,
    bpm: "70-90",
    description: "Ethereal ambient soundscapes",
  },
  {
    id: 5,
    slug: "trap-essentials",
    title: "Trap Essentials",
    artist: "Heavy Beats",
    cover: "/placeholder.svg?height=200&width=200",
    genre: "Trap",
    samples: 95,
    bpm: "140-160",
    description: "Hard-hitting trap elements",
  },
]

export function LandingSamplePacks() {
  return (
    <Section background="dark" padding="large">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sample Packs</h2>
          <p className="text-gray-400 text-lg">Professional sample packs for music producers and creators</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {samplePacks.map((pack, index) => (
            <motion.div
              key={pack.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/samples/${pack.slug}`}>
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={pack.cover || "/placeholder.svg"}
                    alt={pack.title}
                    className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-[#fc3c44] rounded-full w-12 h-12 flex items-center justify-center">
                      <Play className="w-5 h-5 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/60 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Download className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-semibold text-white group-hover:text-[#fc3c44] transition-colors line-clamp-1">
                    {pack.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{pack.artist}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{pack.samples} samples</span>
                    <span>•</span>
                    <span>{pack.bpm} BPM</span>
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-1">{pack.genre}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
