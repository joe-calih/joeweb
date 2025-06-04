"use client"

import { motion } from "framer-motion"

export function ContactMap() {
  return (
    <div className="w-full bg-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Find Us <span className="text-[#fc3c44]">Worldwide</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            We're here to support artists globally with offices in major music markets
          </p>

          <div className="bg-[#0a0a0a] border border-[#333] rounded-xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#fc3c44] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🗺️</span>
              </div>
              <p className="text-gray-400">Interactive map coming soon</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
