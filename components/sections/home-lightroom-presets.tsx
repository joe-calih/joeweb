"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const presets = [
  {
    id: 1,
    slug: "cinematic-film-look",
    title: "Cinematic Film Look",
    author: "Visual Storytellers",
    cover: "/placeholder.svg?height=200&width=200",
    category: "Cinematic",
    price: 24,
    originalPrice: 35,
    mood: "Dramatic",
    description: "Professional cinematic color grading for your photos",
    featured: true,
  },
  {
    id: 2,
    slug: "vintage-analog",
    title: "Vintage Analog",
    author: "Retro Visuals",
    cover: "/placeholder.svg?height=200&width=200",
    category: "Vintage",
    price: 19,
    mood: "Nostalgic",
    description: "Classic film emulation for a timeless look",
  },
  {
    id: 3,
    slug: "modern-portrait",
    title: "Modern Portrait",
    author: "Portrait Masters",
    cover: "/placeholder.svg?height=200&width=200",
    category: "Portrait",
    price: 22,
    mood: "Clean",
    description: "Contemporary portrait editing style",
  },
  {
    id: 4,
    slug: "travel-adventure",
    title: "Travel & Adventure",
    author: "Wanderlust",
    cover: "/placeholder.svg?height=200&width=200",
    category: "Travel",
    price: 27,
    mood: "Vibrant",
    description: "Enhance your travel photography with vibrant colors",
  },
]

export function HomeLightroomPresets() {
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Lightroom Presets</h2>
            <p className="text-gray-400 text-lg">Professional presets for stunning photo editing</p>
          </div>
          <Link href="/lightroom-presets">
            <Button variant="outline" className="border-[#fc3c44] text-[#fc3c44] hover:bg-[#fc3c44] hover:text-white">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {presets.map((preset, index) => (
            <motion.div
              key={preset.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/lightroom-presets/${preset.slug}`}>
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={preset.cover || "/placeholder.svg"}
                    alt={preset.title}
                    className="w-full aspect-square object-cover"
                  />
                  {preset.featured && (
                    <div className="absolute top-2 left-2">
                      <Badge variant="outline" className="border-white text-white bg-black/40">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-white group-hover:text-[#fc3c44] transition-colors line-clamp-1 text-base">
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
    </Section>
  )
}
