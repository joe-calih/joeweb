"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Heart, ExternalLink } from "lucide-react"
import { Section } from "@/components/ui/section"

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Website Design",
    category: "Web Design",
    image: "/placeholder.svg?height=400&width=600",
    client: "TechStore",
    year: "2024",
    featured: true,
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile UI",
    image: "/placeholder.svg?height=400&width=600",
    client: "FinanceApp",
    year: "2024",
    featured: false,
  },
  {
    id: 3,
    title: "Brand Identity System",
    category: "Branding",
    image: "/placeholder.svg?height=400&width=600",
    client: "StartupCo",
    year: "2023",
    featured: true,
  },
  {
    id: 4,
    title: "Social Media Campaign",
    category: "Social Media",
    image: "/placeholder.svg?height=400&width=600",
    client: "FashionBrand",
    year: "2024",
    featured: false,
  },
]

export function GraphicsPortfolio() {
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Featured Portfolio</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcase of our best design work and client projects across various industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1a1a1a] border-[#333] overflow-hidden group hover:border-[#fc3c44] transition-all duration-300">
                <div className="relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.featured && <Badge className="absolute top-4 left-4 bg-[#fc3c44] text-white">Featured</Badge>}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Details
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-[#fc3c44] border-[#fc3c44]">
                      {item.category}
                    </Badge>
                    <span className="text-sm text-gray-400">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">Client: {item.client}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        2.3K
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        892
                      </span>
                    </div>
                    <Button size="sm" className="bg-[#fc3c44] hover:bg-[#e63946] text-white">
                      View Project
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            variant="outline"
            className="border-[#fc3c44] text-[#fc3c44] hover:bg-[#fc3c44] hover:text-white"
          >
            View Full Portfolio
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}
