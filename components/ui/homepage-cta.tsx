"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Download, Heart } from "lucide-react"
import Link from "next/link"

export function HomepageCTA() {
  return (
    <div className="bg-[#121212] py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] border border-[#333] shadow-2xl"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fillOpacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          </div>

          <div className="relative p-8 md:p-16">
            <div className="text-center max-w-4xl mx-auto">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#fc3c44]/20 to-[#e63946]/20 border border-[#fc3c44]/30 rounded-full px-4 py-2 mb-6">
                  <Star className="w-4 h-4 text-[#fc3c44]" />
                  <span className="text-[#fc3c44] font-medium text-sm">Premium Creative Resources</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Ready to Transform
                  <br />
                  <span className="bg-gradient-to-r from-[#fc3c44] to-[#e63946] bg-clip-text text-transparent">
                    Your Creative Work?
                  </span>
                </h2>

                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of creators who trust our premium collection of sample packs, LUTs, Lightroom presets,
                  and music. Start creating professional content today.
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#fc3c44] mb-2">10K+</div>
                  <div className="text-gray-400">Happy Creators</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#fc3c44] mb-2">500+</div>
                  <div className="text-gray-400">Premium Resources</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#fc3c44] mb-2">24/7</div>
                  <div className="text-gray-400">Support Available</div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link href="/samples">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#fc3c44] to-[#e63946] hover:from-[#e63946] hover:to-[#d32f2f] text-white border-0 rounded-xl px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group min-w-[200px]"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Browse All Resources
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>

                <Link href="/blog">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#444] text-gray-300 hover:bg-[#333] hover:text-white rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300 min-w-[200px]"
                  >
                    <Heart className="mr-2 w-5 h-5" />
                    Read Our Blog
                  </Button>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-12 pt-8 border-t border-[#333]"
              >
                <p className="text-gray-500 text-sm mb-4">Trusted by creators worldwide</p>
                <div className="flex justify-center items-center gap-8 opacity-60">
                  <div className="text-gray-500 font-medium">Adobe Creative Suite</div>
                  <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  <div className="text-gray-500 font-medium">DaVinci Resolve</div>
                  <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  <div className="text-gray-500 font-medium">Final Cut Pro</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-10 right-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#fc3c44]/20 to-[#e63946]/20 border border-[#fc3c44]/30"
          />

          <motion.div
            animate={{
              rotate: [360, 0],
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute bottom-10 left-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#e63946]/20 to-[#fc3c44]/20 border border-[#e63946]/30"
          />

          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#fc3c44]/5 to-[#e63946]/5 pointer-events-none" />
        </motion.div>
      </div>
    </div>
  )
}
