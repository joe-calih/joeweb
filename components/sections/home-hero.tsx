"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Search,
  Music,
  FileText,
  Mic,
  Settings,
  Camera,
  Palette,
  TrendingUp,
  GraduationCap,
  Layers,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Section } from "@/components/ui/section"

const searchCategories = [
  { icon: Music, label: "Music", count: "2.5K+", href: "/samples" },
  { icon: FileText, label: "Blog Posts", count: "150+", href: "/blog" },
  { icon: Mic, label: "Vocals", count: "800+", href: "/vocals" },
  { icon: Settings, label: "Presets", count: "1.2K+", href: "/lightroom-presets" },
  { icon: Camera, label: "LUTs", count: "300+", href: "/luts" },
  { icon: Palette, label: "Graphics", count: "500+", href: "/graphics" },
  { icon: GraduationCap, label: "Tutorials", count: "200+", href: "/blog" },
  { icon: Layers, label: "Albums", count: "150+", href: "/album" },
]

export function HomeHero() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  return (
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
          className="max-w-2xl mx-auto mb-10"
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

        {/* Search Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 mb-12 max-w-5xl mx-auto"
        >
          {searchCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setActiveCategory(category.label.toLowerCase())}
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/15 hover:border-[#fc3c44] transition-all duration-300 group-hover:scale-105">
                  <Icon className="w-6 h-6 text-[#fc3c44] mx-auto mb-2" />
                  <h3 className="text-white font-semibold mb-1 text-sm">{category.label}</h3>
                  <p className="text-gray-400 text-xs">{category.count}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Music className="w-8 h-8 text-[#fc3c44]" />
            </div>
            <div className="text-3xl font-bold text-white">5K+</div>
            <div className="text-sm text-gray-400">Resources</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <TrendingUp className="w-8 h-8 text-[#fc3c44]" />
            </div>
            <div className="text-3xl font-bold text-white">50K+</div>
            <div className="text-sm text-gray-400">Downloads</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <FileText className="w-8 h-8 text-[#fc3c44]" />
            </div>
            <div className="text-3xl font-bold text-white">150+</div>
            <div className="text-sm text-gray-400">Blog Posts</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Palette className="w-8 h-8 text-[#fc3c44]" />
            </div>
            <div className="text-3xl font-bold text-white">500+</div>
            <div className="text-sm text-gray-400">Graphics</div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
