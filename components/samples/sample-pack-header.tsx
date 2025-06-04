"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Play, Heart, Calendar, User, Music, Clock, HardDrive } from "lucide-react"
import { motion } from "framer-motion"
import type { SamplePack } from "@/lib/types"

interface SamplePackHeaderProps {
  samplePack: SamplePack
  className?: string
}

export function SamplePackHeader({ samplePack }: SamplePackHeaderProps) {
  const [isFavorited, setIsFavorited] = useState(false)

  return (
    <section className="py-12">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[35%] flex-shrink-0"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={samplePack.cover || "/placeholder.svg?height=400&width=400"}
              alt={samplePack.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 space-y-6"
        >
          {/* Genre Badge */}
          <Badge className="bg-[#fc3c44] hover:bg-[#e63946] text-white px-3 py-1 rounded-full">
            {samplePack.genre}
          </Badge>

          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">{samplePack.title}</h1>
            <div className="flex items-center gap-2 text-gray-400 text-lg mb-4">
              <User className="w-5 h-5" />
              <span>By {samplePack.artist}</span>
            </div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">{samplePack.description}</p>

          {/* Sample Information Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-black/20 rounded-xl border border-white/10">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Music className="w-5 h-5 text-[#fc3c44]" />
              </div>
              <div className="text-2xl font-bold text-white">{samplePack.totalSamples || 45}</div>
              <div className="text-sm text-gray-400">Samples</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-5 h-5 bg-[#fc3c44] rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">♪</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-white">{samplePack.bpmRange || "120-140"}</div>
              <div className="text-sm text-gray-400">BPM Range</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <HardDrive className="w-5 h-5 text-[#fc3c44]" />
              </div>
              <div className="text-2xl font-bold text-white">{samplePack.packSize || "250MB"}</div>
              <div className="text-sm text-gray-400">Pack Size</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-5 h-5 text-[#fc3c44]" />
              </div>
              <div className="text-2xl font-bold text-white">{samplePack.duration || "15:30"}</div>
              <div className="text-sm text-gray-400">Duration</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-[#fc3c44] hover:bg-[#e63946] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-[#fc3c44]/25 transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Get Pack
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              <Play className="w-5 h-5 mr-2" />
              Preview
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => setIsFavorited(!isFavorited)}
              className={`p-3 rounded-full transition-all duration-300 ${
                isFavorited
                  ? "bg-[#fc3c44] text-white hover:bg-[#e63946]"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              <Heart className={`w-5 h-5 ${isFavorited ? "fill-current" : ""}`} />
            </Button>
          </div>

          {/* Additional Info */}
          <div className="flex items-center gap-6 text-sm text-gray-400 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Released {new Date(samplePack.releaseDate || Date.now()).toLocaleDateString()}</span>
            </div>
            <div className="text-2xl font-bold text-[#fc3c44]">{samplePack.price || "$29.99"}</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
