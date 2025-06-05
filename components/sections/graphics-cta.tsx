"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Palette, Sparkles } from "lucide-react"
import { Section } from "@/components/ui/section"
import Link from "next/link"

export function GraphicsCTA() {
  return (
    <Section background="gradient" padding="large">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#fc3c44]/10 rounded-full blur-xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.2, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div className="relative z-10">
              <motion.div
                className="flex justify-center mb-6"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-[#fc3c44] to-[#ff6b6b] rounded-2xl flex items-center justify-center">
                  <Palette className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to Create
                <br />
                <span className="text-[#fc3c44]">Amazing Graphics?</span>
              </motion.h2>

              <motion.p
                className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Join thousands of designers who trust our premium graphics collection. Start creating professional
                designs today with our comprehensive library of templates, icons, and visual assets.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button size="lg" className="bg-white text-[#fc3c44] hover:bg-gray-100 h-14 px-8 text-lg font-semibold">
                  <Download className="w-5 h-5 mr-3" />
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 h-14 px-8 text-lg font-semibold"
                >
                  <Link href="/shop" className="flex items-center gap-3">
                    Browse Collection
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <Sparkles className="w-8 h-8 text-[#fc3c44]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Premium Quality</h3>
                  <p className="text-gray-400 text-sm">Professional-grade graphics designed by experts</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <Download className="w-8 h-8 text-[#fc3c44]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Instant Access</h3>
                  <p className="text-gray-400 text-sm">Download immediately after purchase</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <Palette className="w-8 h-8 text-[#fc3c44]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Commercial License</h3>
                  <p className="text-gray-400 text-sm">Use in client projects and commercial work</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
