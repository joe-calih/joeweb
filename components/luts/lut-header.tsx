"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download, ShoppingCart, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import type { LUT } from "@/lib/luts"

interface LUTHeaderProps {
  lut: LUT
}

export function LUTHeader({ lut }: LUTHeaderProps) {
  // State to track the currently displayed main image
  const [mainImage, setMainImage] = useState(lut.previewImage || "/placeholder.svg?height=400&width=400")

  // Sample gallery images - in a real app, these would come from the LUT data
  const galleryImages = [
    lut.previewImage || "/placeholder.svg?height=400&width=400&text=Main",
    "/placeholder.svg?height=400&width=400&text=Example 1",
    "/placeholder.svg?height=400&width=400&text=Example 2",
    "/placeholder.svg?height=400&width=400&text=Example 3",
  ]

  return (
    <div className="bg-[#1a1a1a] py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex gap-8">
          {/* Main Image - 38% width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-[38%] flex-shrink-0"
          >
            <div className="rounded-lg overflow-hidden">
              <Image
                src={mainImage || "/placeholder.svg"}
                alt={lut.title}
                width={400}
                height={400}
                className="w-full aspect-square object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className={`rounded-lg overflow-hidden cursor-pointer transition-all duration-200 flex-shrink-0 ${
                    mainImage === img ? "ring-2 ring-[#fc3c44]" : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => setMainImage(img)}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${lut.title} example ${i + 1}`}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* LUT Info - Remaining width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-[#fc3c44] text-white">{lut.category}</Badge>
                  {lut.featured && (
                    <Badge variant="outline" className="border-white text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{lut.title}</h1>
                <p className="text-gray-400">by {lut.author}</p>
              </div>

              <p className="text-gray-300 text-lg">{lut.description}</p>

              <div className="flex items-center gap-4">
                <div className="text-2xl font-bold text-white">${lut.price}</div>
                {lut.originalPrice && <div className="text-lg text-gray-400 line-through">${lut.originalPrice}</div>}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#fc3c44] hover:bg-[#e63946] text-white flex-1">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  className="border-[#fc3c44] text-[#fc3c44] hover:bg-[#fc3c44] hover:text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Demo
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>

              <div className="border-t border-[#333] pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm">File Size</p>
                    <p className="text-white">{lut.fileSize}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Format</p>
                    <p className="text-white">{lut.format || ".cube, .3dl"}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Released</p>
                    <p className="text-white">{lut.dateCreated}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Mood</p>
                    <p className="text-white">{lut.mood}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
