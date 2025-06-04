"use client"

import { motion } from "framer-motion"

export function PrivacyUsage() {
  return (
    <div className="w-full bg-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">How We Use Your Data</h2>
          <div className="text-gray-300 space-y-6">
            <p>Information about how we use and process your personal data.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
