"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Figma, Palette, Monitor, Smartphone, Download, Star, Users, ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/section"

const tools = [
  {
    name: "Figma Templates",
    description: "Ready-to-use Figma design files and components",
    icon: Figma,
    downloads: "15.2K",
    rating: 4.9,
    users: "2.3K",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Adobe Creative Suite",
    description: "Photoshop, Illustrator, and InDesign templates",
    icon: Palette,
    downloads: "23.1K",
    rating: 4.8,
    users: "3.7K",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Sketch Resources",
    description: "Sketch symbols, templates, and design systems",
    icon: Monitor,
    downloads: "8.9K",
    rating: 4.7,
    users: "1.2K",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Mobile Design Kits",
    description: "iOS and Android app design templates",
    icon: Smartphone,
    downloads: "12.5K",
    rating: 4.9,
    users: "1.8K",
    color: "from-green-500 to-emerald-500",
  },
]

export function GraphicsTools() {
  return (
    <Section background="default" padding="large">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Design Tools & Resources</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional templates and resources for all major design tools and platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#1a1a1a] border-[#333] p-8 hover:border-[#fc3c44] transition-all duration-300 group">
                  <div className="flex items-start gap-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tool.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{tool.name}</h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">{tool.description}</p>

                      <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          {tool.downloads}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          {tool.rating}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {tool.users}
                        </div>
                      </div>

                      <Button className="bg-[#fc3c44] hover:bg-[#e63946] text-white">
                        Browse Templates
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
