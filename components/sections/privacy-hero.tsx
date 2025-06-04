"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Eye } from "lucide-react"

export function PrivacyHero() {
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
            <Shield className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Privacy <span className="text-[#fc3c44]">Policy</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal
            information when you use Apple Music for Artists.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-[#fc3c44] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Secure</h3>
              <p className="text-gray-400">Your data is encrypted and protected</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#fc3c44] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Transparent</h3>
              <p className="text-gray-400">Clear about what we collect and why</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#fc3c44] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Compliant</h3>
              <p className="text-gray-400">GDPR and CCPA compliant</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
