"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import {
  Palette,
  Monitor,
  Smartphone,
  FileImage,
  Layers,
  Type,
  Camera,
  Zap,
  Globe,
  Package,
  Brush,
  Layout,
} from "lucide-react"
import { Section } from "@/components/ui/section"

const categories = [
  {
    icon: Palette,
    title: "Logos & Branding",
    description: "Professional logo designs and brand identity kits",
    count: "150+",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Monitor,
    title: "Web Design",
    description: "UI/UX components and website templates",
    count: "120+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile UI",
    description: "App interfaces and mobile design elements",
    count: "80+",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: FileImage,
    title: "Social Media",
    description: "Instagram, Facebook, and Twitter templates",
    count: "200+",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Layers,
    title: "Icons & Illustrations",
    description: "Vector icons and custom illustrations",
    count: "300+",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Type,
    title: "Typography",
    description: "Custom fonts and text design elements",
    count: "60+",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Stock photos and image overlays",
    count: "180+",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Zap,
    title: "Animations",
    description: "Motion graphics and animated elements",
    count: "90+",
    color: "from-teal-500 to-blue-500",
  },
  {
    icon: Globe,
    title: "Web Graphics",
    description: "Banners, headers, and web elements",
    count: "140+",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Package,
    title: "Print Design",
    description: "Business cards, flyers, and print materials",
    count: "110+",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Brush,
    title: "Digital Art",
    description: "Digital paintings and artistic elements",
    count: "70+",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: Layout,
    title: "Templates",
    description: "Ready-to-use design templates",
    count: "160+",
    color: "from-cyan-500 to-blue-500",
  },
]

export function GraphicsCategories() {
  return (
    <Section background="dark" padding="large">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Design Categories</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our comprehensive collection of design resources across multiple categories and styles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#1a1a1a] border-[#333] p-6 hover:border-[#fc3c44] transition-all duration-300 group cursor-pointer">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{category.title}</h3>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">{category.description}</p>
                  <div className="text-[#fc3c44] font-medium text-sm">{category.count} items</div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
