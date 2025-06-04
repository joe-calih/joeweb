"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Download, ShoppingCart } from "lucide-react"
import Image from "next/image"
import type { LightroomPreset } from "@/lib/lightroom-presets"

interface PresetHeaderProps {
  preset: LightroomPreset
}

export function PresetHeader({ preset }: PresetHeaderProps) {
  return (
    <div className="bg-gradient-to-b from-[#1a1a1a] to-[#121212] py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row gap-8"
        >
          {/* Image Section - 35% width */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:max-w-[35%] flex-shrink-0"
          >
            <div className="relative group">
              <div className="aspect-square rounded-2xl overflow-hidden bg-[#333] shadow-2xl">
                <Image
                  src={preset.previewImage || "/placeholder.svg"}
                  alt={preset.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 space-y-6"
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-[#fc3c44] hover:bg-[#e63946] text-white px-3 py-1">{preset.category}</Badge>
              <Badge variant="outline" className="border-[#444] text-gray-300">
                {preset.mood}
              </Badge>
              {preset.featured && (
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1">Featured</Badge>
              )}
            </div>

            {/* Title and Author */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">{preset.title}</h1>
              <p className="text-xl text-gray-300">
                by <span className="text-[#fc3c44] font-semibold">{preset.author}</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">{preset.description}</p>

            {/* Compatibility */}
            <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#333]">
              <h3 className="text-white font-semibold mb-2">Compatible with:</h3>
              <p className="text-gray-300">{preset.compatibility}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#fc3c44] to-[#e63946] hover:from-[#e63946] hover:to-[#d32f2f] text-white border-0 rounded-xl px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Buy Now - ${preset.price}
                {preset.originalPrice && (
                  <span className="ml-2 text-sm line-through opacity-75">${preset.originalPrice}</span>
                )}
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-[#444] text-gray-300 hover:bg-[#333] hover:text-white rounded-xl px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Demo
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-[#444] text-gray-300 hover:bg-[#fc3c44] hover:text-white hover:border-[#fc3c44] rounded-xl px-4 py-3 transition-all duration-300"
              >
                <Heart className="w-5 h-5" />
              </Button>
            </div>

            {/* Additional Info */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-400 pt-4 border-t border-[#333]">
              <div>
                <span className="text-gray-500">Released:</span> {preset.datePublished}
              </div>
              <div>
                <span className="text-gray-500">File Size:</span> {preset.fileSize}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
