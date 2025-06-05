"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Music, FileText, Mic, Settings, Camera, Palette, GraduationCap, Layers } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Section } from "@/components/ui/section"
import Link from "next/link"

const searchCategories = [
  { icon: Music, label: "Albums", count: "150+", href: "/album" },
  { icon: FileText, label: "Blog", count: "150+", href: "/blog" },
  { icon: Mic, label: "Samples", count: "800+", href: "/samples" },
  { icon: Settings, label: "Presets", count: "1.2K+", href: "/lightroom-presets" },
  { icon: Camera, label: "LUTs", count: "300+", href: "/luts" },
  { icon: Palette, label: "Graphics", count: "500+", href: "/graphics" },
  { icon: GraduationCap, label: "Lessons", count: "200+", href: "/lessons" },
  { icon: Layers, label: "Shop", count: "All", href: "/shop" },
]

export function HomeHero() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <>
      {/* Main Hero Section */}
      <Section background="gradient" padding="large" className="pt-20 pb-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Discover
              <br />
              <span className="text-[#fc3c44]">Creative Resources</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Find music, sample packs, vocals, presets, LUTs, and graphic resources all in one place
            </p>
          </motion.div>

          {/* Apple-style Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
              <Input
                type="text"
                placeholder="Search for music, samples, presets, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-24 py-6 text-lg bg-white/10 backdrop-blur-md border-white/20 rounded-2xl text-white placeholder-gray-400 focus:bg-white/15 focus:border-[#fc3c44] transition-all duration-300"
              />
              <div className="absolute right-0 inset-y-0">
                <button className="h-full bg-[#fc3c44] hover:bg-[#e63946] text-white px-8 rounded-r-2xl transition-all duration-300 font-medium">
                  Search
                </button>
              </div>
            </div>
          </motion.div>

          {/* Minimal Resource Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {searchCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                >
                  <Link
                    href={category.href}
                    className="group flex items-center gap-2 px-4 py-2 text-white/80 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    <Icon className="w-4 h-4 text-[#fc3c44] group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">{category.label}</span>
                    <span className="text-xs text-gray-400">({category.count})</span>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </Section>
    </>
  )
}
