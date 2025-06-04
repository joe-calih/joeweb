"use client"

import { motion } from "framer-motion"
import { Package, Music, BarChart3, Globe } from "lucide-react"

export function ProductsHero() {
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
            <Package className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Powerful <span className="text-[#fc3c44]">Products</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Everything you need to distribute, promote, and monetize your music. Our comprehensive suite of tools helps
            artists at every stage of their career.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-[#fc3c44] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Music className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Distribution</h3>
              <p className="text-gray-400">Get your music on 150+ platforms worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#fc3c44] rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Analytics</h3>
              <p className="text-gray-400">Deep insights into your music performance</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#fc3c44] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Promotion</h3>
              <p className="text-gray-400">Marketing tools to grow your audience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
