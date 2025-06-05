"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Eye, Heart } from "lucide-react"
import { Section } from "@/components/ui/section"

const showcaseItems = [
  {
    id: 1,
    title: "Modern Logo Collection",
    category: "Logos",
    image: "/placeholder.svg?height=300&width=400",
    downloads: "2.3K",
    views: "15.2K",
    likes: "892",
    featured: true,
  },
  {
    id: 2,
    title: "Social Media Templates",
    category: "Social Media",
    image: "/placeholder.svg?height=300&width=400",
    downloads: "1.8K",
    views: "12.1K",
    likes: "654",
    featured: false,
  },
  {
    id: 3,
    title: "Web UI Components",
    category: "UI/UX",
    image: "/placeholder.svg?height=300&width=400",
    downloads: "3.1K",
    views: "18.7K",
    likes: "1.2K",
    featured: true,
  },
  {
    id: 4,
    title: "Brand Identity Kit",
    category: "Branding",
    image: "/placeholder.svg?height=300&width=400",
    downloads: "1.5K",
    views: "9.8K",
    likes: "567",
    featured: false,
  },
  {
    id: 5,
    title: "Icon Pack Collection",
    category: "Icons",
    image: "/placeholder.svg?height=300&width=400",
    downloads: "4.2K",
    views: "25.3K",
    likes: "1.8K",
    featured: true,
  },
  {
    id: 6,
    title: "Print Design Templates",
    category: "Print",
    image: "/placeholder.svg?height=300&width=400",
    downloads: "987",
    views: "7.2K",
    likes: "423",
    featured: false,
  },
]

export function GraphicsShowcase() {
  return (
    <Section background="default" padding="large" id="showcase">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Featured Graphics</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our most popular and trending design resources, carefully curated for creative professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
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
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.featured && <Badge className="absolute top-3 left-3 bg-[#fc3c44] text-white">Featured</Badge>}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button size="sm" className="bg-white text-black hover:bg-gray-200">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-[#fc3c44] border-[#fc3c44]">
                      {item.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Heart className="w-4 h-4" />
                      {item.likes}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        {item.downloads}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {item.views}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-[#fc3c44] text-[#fc3c44] hover:bg-[#fc3c44] hover:text-white"
                    >
                      Download
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
          <Button size="lg" className="bg-[#fc3c44] hover:bg-[#e63946] text-white">
            View All Graphics
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}
