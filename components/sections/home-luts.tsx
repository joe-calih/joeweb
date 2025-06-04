"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const luts = [
  {
    id: 1,
    slug: "cinematic-orange-teal",
    title: "Cinematic Orange & Teal",
    author: "Color Grading Pro",
    cover: "/placeholder.svg?height=200&width=200",
    category: "Cinematic",
    price: 29,
    originalPrice: 39,
    mood: "Blockbuster",
    description: "Hollywood-style orange and teal color grading",
    featured: true,
  },
  {
    id: 2,
    slug: "vintage-film-emulation",
    title: "Vintage Film Emulation",
    author: "Retro Studios",
    cover: "/placeholder.svg?height=200&width=200",
    category: "Vintage",
    price: 25,
    mood: "Nostalgic",
    description: "Authentic 35mm film look with grain",
  },
  {
    id: 3,
    slug: "modern-clean-look",
    title: "Modern Clean Look",
    author: "Digital Arts",
    cover: "/placeholder.svg?height=200&width=200",
    category: "Modern",
    price: 22,
    mood: "Clean",
    description: "Contemporary corporate video style",
  },
  {
    id: 4,
    slug: "sunset-golden-hour",
    title: "Sunset Golden Hour",
    author: "Nature Films",
    cover: "/placeholder.svg?height=200&width=200",
    category: "Natural",
    price: 27,
    mood: "Warm",
    description: "Romantic golden hour warmth",
  },
]

export function HomeLUTs() {
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional LUTs</h2>
            <p className="text-gray-400 text-lg">Color grading LUTs for cinematic video production</p>
          </div>
          <Link href="/luts">
            <Button variant="outline" className="border-[#fc3c44] text-[#fc3c44] hover:bg-[#fc3c44] hover:text-white">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {luts.map((lut, index) => (
            <motion.div
              key={lut.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/luts/${lut.slug}`}>
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={lut.cover || "/placeholder.svg"}
                    alt={lut.title}
                    className="w-full aspect-square object-cover"
                  />
                  {lut.featured && (
                    <div className="absolute top-2 left-2">
                      <Badge variant="outline" className="border-white text-white bg-black/40">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-white group-hover:text-[#fc3c44] transition-colors line-clamp-1 text-base">
                    {lut.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{lut.author}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>${lut.price}</span>
                    {lut.originalPrice && (
                      <>
                        <span className="line-through">${lut.originalPrice}</span>
                      </>
                    )}
                    <span>•</span>
                    <span>{lut.mood}</span>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-1">{lut.category}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
