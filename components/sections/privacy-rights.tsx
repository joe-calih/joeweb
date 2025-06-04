"use client"

import { motion } from "framer-motion"

export function PrivacyRights() {
  return (
    <div className="w-full bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Your Rights</h2>
          <div className="text-gray-300 space-y-6">
            <p>Information about your privacy rights and how to exercise them.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
