"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export function HomepageCTA() {
  return (
    <div className="bg-[#121212] py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] border border-[#333] shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Creative Resources"
                className="w-full h-full object-cover min-h-[300px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
            </div>

            {/* Content Side */}
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Ready to Transform
                <br />
                <span className="bg-gradient-to-r from-[#fc3c44] to-[#e63946] bg-clip-text text-transparent">
                  Your Creative Work?
                </span>
              </h2>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Join thousands of creators who trust our premium collection of sample packs, LUTs, Lightroom presets,
                and music.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#fc3c44] mb-1">10K+</div>
                  <div className="text-gray-400 text-sm">Creators</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#fc3c44] mb-1">500+</div>
                  <div className="text-gray-400 text-sm">Resources</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#fc3c44] mb-1">24/7</div>
                  <div className="text-gray-400 text-sm">Support</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/samples">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#fc3c44] to-[#e63946] hover:from-[#e63946] hover:to-[#d32f2f] text-white border-0 rounded-xl px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group w-full sm:w-auto"
                  >
                    <Download className="mr-2 w-4 h-4" />
                    Browse Resources
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>

                <Link href="/blog">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-[#444] text-gray-300 hover:bg-[#333] hover:text-white rounded-xl px-6 py-3 font-semibold transition-all duration-300 w-full sm:w-auto"
                  >
                    Read Our Blog
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
