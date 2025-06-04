"use client"

import { motion } from "framer-motion"

export function DisclaimerLiability() {
  return (
    <div className="w-full bg-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Limitation of Liability</h2>
          <div className="text-gray-300 space-y-6">
            <p>Information about our liability limitations and user responsibilities.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
