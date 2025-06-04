"use client"

import { motion } from "framer-motion"

export function PresetListingHeader() {
  return (
    <div className="bg-gradient-to-br from-[#1a1a1a] via-[#2a1a1a] to-[#1a1a1a] py-24">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Lightroom Presets</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your photos with professional-grade Lightroom presets. One-click editing solutions for stunning
            results.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-gray-400">
            <span className="bg-[#333] px-4 py-2 rounded-full">Professional Quality</span>
            <span className="bg-[#333] px-4 py-2 rounded-full">One-Click Application</span>
            <span className="bg-[#333] px-4 py-2 rounded-full">Mobile Compatible</span>
            <span className="bg-[#333] px-4 py-2 rounded-full">Commercial License</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
