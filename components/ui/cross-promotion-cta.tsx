"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Palette, Camera } from "lucide-react"
import Link from "next/link"

interface CrossPromotionCTAProps {
  currentPage: "luts" | "lightroom-presets"
}

export function CrossPromotionCTA({ currentPage }: CrossPromotionCTAProps) {
  const isLutsPage = currentPage === "luts"

  const targetPage = isLutsPage ? "lightroom-presets" : "luts"
  const targetTitle = isLutsPage ? "Lightroom Presets" : "Professional LUTs"
  const targetDescription = isLutsPage
    ? "Transform your photos with one-click Lightroom presets. Perfect for portraits, landscapes, and creative photography."
    : "Enhance your videos with cinematic color grading LUTs. Compatible with Premiere Pro, DaVinci Resolve, and Final Cut Pro."

  const Icon = isLutsPage ? Camera : Palette

  return (
    <div className="bg-[#121212] py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] border border-[#333] shadow-2xl"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fillOpacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          </div>

          <div className="relative p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Icon and Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#fc3c44] to-[#e63946] mb-6 shadow-lg"
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                >
                  Explore {targetTitle}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-gray-300 mb-8 max-w-2xl"
                >
                  {targetDescription}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link href={`/${targetPage}`}>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#fc3c44] to-[#e63946] hover:from-[#e63946] hover:to-[#d32f2f] text-white border-0 rounded-xl px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      Browse {targetTitle}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#444] text-gray-300 hover:bg-[#333] hover:text-white rounded-xl px-8 py-3 text-lg font-semibold transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </div>

              {/* Visual Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex-shrink-0"
              >
                <div className="relative">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl bg-gradient-to-br from-[#fc3c44]/20 to-[#e63946]/20 border border-[#fc3c44]/30 flex items-center justify-center backdrop-blur-sm">
                    <Icon className="w-24 h-24 md:w-32 md:h-32 text-[#fc3c44]" />
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-br from-[#fc3c44] to-[#e63946] shadow-lg"
                  />
                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-gradient-to-br from-[#e63946] to-[#fc3c44] shadow-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#fc3c44]/5 to-[#e63946]/5 pointer-events-none" />
        </motion.div>
      </div>
    </div>
  )
}
