"use client"

import { motion } from "framer-motion"

export function PrivacyContact() {
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
          <h2 className="text-3xl font-bold text-white mb-8">Privacy Questions?</h2>
          <p className="text-gray-300 mb-8">Contact our privacy team for assistance</p>
        </motion.div>
      </div>
    </div>
  )
}
