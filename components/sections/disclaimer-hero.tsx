"use client"

import { motion } from "framer-motion"
import { Scale, FileText } from "lucide-react"

export function DisclaimerHero() {
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
            <Scale className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Disclaimer & <span className="text-[#fc3c44]">Terms</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Please read these terms and conditions carefully before using our platform. By accessing or using Apple
            Music for Artists, you agree to be bound by these terms.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4 text-sm text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Last updated: January 1, 2025</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
