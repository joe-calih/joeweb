"use client"

import { motion } from "framer-motion"

export function DisclaimerTerms() {
  return (
    <div className="w-full bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="prose prose-invert max-w-none"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Terms of Service</h2>
          <div className="text-gray-300 space-y-6">
            <p>By accessing and using Apple Music for Artists, you agree to these terms and conditions.</p>
            <p>These terms govern your use of our platform and services.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
