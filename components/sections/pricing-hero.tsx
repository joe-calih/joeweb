"use client"

import { motion } from "framer-motion"
import { Crown, Sparkles, Star } from "lucide-react"

export function PricingHero() {
  return (
    <div className="w-full bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#fc3c44]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-32 relative">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="w-24 h-24 bg-gradient-to-br from-[#fc3c44] to-[#e63946] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl"
          >
            <Crown className="w-12 h-12 text-white" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-yellow-400 font-medium">Premium Membership</span>
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Unlock Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc3c44] to-purple-500">
              Creative
            </span>{" "}
            Potential
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Access thousands of premium music samples, Lightroom presets, LUTs, vocals, plugins, and exclusive
            tutorials. Everything you need to create professional content.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              "10,000+ Premium Assets",
              "Weekly New Releases",
              "Commercial License Included",
              "Cancel Anytime",
              "24/7 Priority Support",
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(252, 60, 68, 0.1)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Sparkles className="w-4 h-4 text-[#fc3c44]" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fc3c44]/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-[#fc3c44]/30">
              <span className="text-white font-medium">🎉 Limited Time: 50% Off First Month</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
