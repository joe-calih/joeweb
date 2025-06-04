"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Heart, Music, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface RelatedSample {
  title: string
  producer: string
  slug: string
  cover: string
  genre: string
  price: string
  totalSamples: number
}

const relatedSamples: RelatedSample[] = [
  {
    title: "Deep House Foundations",
    producer: "House Master",
    slug: "deep-house-foundations",
    cover: "/placeholder.svg?height=300&width=300",
    genre: "Deep House",
    price: "$24.99",
    totalSamples: 38,
  },
  {
    title: "Future Bass Essentials",
    producer: "Bass Producer",
    slug: "future-bass-essentials",
    cover: "/placeholder.svg?height=300&width=300",
    genre: "Future Bass",
    price: "$27.99",
    totalSamples: 42,
  },
  {
    title: "Lo-Fi Jazz Collection",
    producer: "Jazz Vibes",
    slug: "lofi-jazz-collection",
    cover: "/placeholder.svg?height=300&width=300",
    genre: "Lo-Fi",
    price: "$19.99",
    totalSamples: 35,
  },
  {
    title: "Synthwave Retroscape",
    producer: "Retro Synth",
    slug: "synthwave-retroscape",
    cover: "/placeholder.svg?height=300&width=300",
    genre: "Synthwave",
    price: "$22.99",
    totalSamples: 40,
  },
]

export function SamplePackRelated() {
  return (
    <section className="py-16">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Related Sample Packs</h2>
        <p className="text-gray-400 text-lg">Discover more sample packs that complement your style</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedSamples.map((sample, index) => (
          <motion.div
            key={sample.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-[#1a1a1a] border-[#333] overflow-hidden hover:border-[#fc3c44] transition-all duration-300 group">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={sample.cover || "/placeholder.svg"}
                  alt={sample.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#fc3c44] hover:bg-[#e63946] rounded-full"
                  >
                    <Play className="w-4 h-4 mr-1" />
                    Preview
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="mb-3">
                  <span className="px-2 py-1 bg-[#fc3c44] bg-opacity-20 text-[#fc3c44] rounded-full text-xs">
                    {sample.genre}
                  </span>
                </div>
                <Link href={`/samples/${sample.slug}`}>
                  <h3 className="text-lg font-bold text-white hover:text-[#fc3c44] transition-colors cursor-pointer mb-1">
                    {sample.title}
                  </h3>
                </Link>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <User className="w-3 h-3" />
                  <span>{sample.producer}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <Music className="w-3 h-3" />
                  <span>{sample.totalSamples} samples</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#fc3c44]">{sample.price}</span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white rounded-full p-2">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-gray-600 hover:bg-gray-500 text-white rounded-full px-3">
                      Buy
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
