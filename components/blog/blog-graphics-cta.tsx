"use client"

import { motion } from "framer-motion"
import { ArrowRight, Palette, Camera, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function BlogGraphicsCTA() {
  return (
    <div className="bg-[#121212] py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-[#333] h-64"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Palette className="w-6 h-6 text-[#fc3c44]" />
                <span className="text-[#fc3c44] font-semibold text-sm uppercase tracking-wider">
                  Creative Resources
                </span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Elevate Your Creative Projects
              </h3>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Discover premium LUTs, Lightroom presets, and sample packs to enhance your creative workflow.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-[#fc3c44] hover:bg-[#e63946] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#fc3c44]/25"
                >
                  <Link href="/shop" className="flex items-center gap-2">
                    Browse All Resources
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#333] text-white hover:bg-[#333] px-8 py-3 rounded-full font-semibold"
                >
                  <Link href="/samples" className="flex items-center gap-2">
                    <Music className="w-5 h-5" />
                    Sample Packs
                  </Link>
                </Button>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative overflow-hidden lg:order-2">
              <img
                src="/placeholder.svg?height=256&width=600"
                alt="Creative Resources"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/60 lg:bg-gradient-to-r lg:from-black/60 lg:via-transparent lg:to-transparent" />

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute top-8 right-8 w-12 h-12 bg-[#fc3c44]/20 backdrop-blur-sm rounded-full flex items-center justify-center"
              >
                <Camera className="w-6 h-6 text-[#fc3c44]" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 right-16 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
              >
                <Music className="w-5 h-5 text-white" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
