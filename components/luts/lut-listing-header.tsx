"use client"

import { motion } from "framer-motion"
import { Palette, Sparkles } from "lucide-react"

export function LUTListingHeader() {
  return (
    <div className="relative bg-gradient-to-br from-[#fc3c44] to-[#e63946] text-white py-20">
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative max-w-[1200px] mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-white/20 rounded-full p-3">
              <Palette className="w-8 h-8" />
            </div>
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Professional LUTs</h1>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Transform your footage with our collection of professional color grading LUTs. From cinematic looks to
            vintage film emulation, find the perfect style for your project.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/20 rounded-full px-4 py-2">✨ Instant Download</div>
            <div className="bg-white/20 rounded-full px-4 py-2">🎬 Professional Quality</div>
            <div className="bg-white/20 rounded-full px-4 py-2">💻 Universal Compatibility</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
