"use client"

import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Section } from "@/components/ui/section"

export function BlogHeader() {
  return (
    <Section background="dark" padding="large">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Learn & Grow</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Discover the latest insights in digital marketing, SEO, content creation, and business growth
          </p>

          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search articles..."
              className="pl-12 pr-4 py-4 text-lg bg-[#1a1a1a] border-[#333] text-white placeholder-gray-400 rounded-full focus:border-[#fc3c44] transition-colors"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
