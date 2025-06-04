"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Crown, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingCTA() {
  return (
    <div className="w-full bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#fc3c44]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-gradient-to-br from-[#fc3c44] to-[#e63946] rounded-2xl flex items-center justify-center shadow-2xl"
            >
              <Crown className="w-10 h-10 text-white" />
            </motion.div>
          </div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc3c44] to-purple-500">
              Transform
            </span>{" "}
            Your Creativity?
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Join thousands of creators who have elevated their work with our premium resources. Start your 14-day free
            trial today - no credit card required.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button className="bg-gradient-to-r from-[#fc3c44] to-[#e63946] hover:from-[#e63946] hover:to-[#dc2626] text-white font-medium px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 group">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8 py-4 rounded-xl text-lg backdrop-blur-sm transition-all duration-200"
            >
              View All Plans
            </Button>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: Sparkles,
                title: "Instant Access",
                description: "Start downloading premium content immediately after signup",
                color: "from-[#fc3c44] to-[#e63946]",
              },
              {
                icon: Zap,
                title: "No Commitment",
                description: "Cancel anytime during your trial with no questions asked",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Crown,
                title: "Premium Quality",
                description: "Studio-grade samples and professionally crafted presets",
                color: "from-yellow-500 to-orange-500",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-green-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 font-medium">🎉 Special Launch Offer: 50% Off First Month</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
