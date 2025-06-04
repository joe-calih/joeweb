"use client"

import { motion } from "framer-motion"

export function ProductsIntegrations() {
  return (
    <div className="w-full bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            <span className="text-[#fc3c44]">Integrations</span>
          </h2>
          <p className="text-xl text-gray-300">Connect with your favorite tools</p>
        </motion.div>
      </div>
    </div>
  )
}
