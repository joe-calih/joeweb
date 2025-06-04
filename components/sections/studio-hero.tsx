"use client"

import { motion } from "framer-motion"
import { Mic2 } from "lucide-react"

export function StudioHero() {
  return (
    <div className="w-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-4 py-24">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-[#fc3c44] rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Mic2 className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional <span className="text-[#fc3c44]">Studio</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Create, record, and produce your music with professional studio tools and equipment. Everything you need to
            bring your musical vision to life.
          </motion.p>
        </div>
      </div>
    </div>
  )
}
