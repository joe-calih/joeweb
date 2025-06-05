"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Video, BookOpen, ExternalLink, Clock, Users } from "lucide-react"
import { Section } from "@/components/ui/section"

const resources = [
  {
    title: "Design System Guide",
    description: "Complete guide to building and maintaining design systems",
    type: "PDF Guide",
    duration: "45 min read",
    downloads: "12.3K",
    icon: FileText,
    color: "from-blue-500 to-cyan-500",
    free: true,
  },
  {
    title: "Color Theory Masterclass",
    description: "Advanced color theory techniques for professional designers",
    type: "Video Course",
    duration: "2.5 hours",
    downloads: "8.7K",
    icon: Video,
    color: "from-purple-500 to-pink-500",
    free: false,
  },
  {
    title: "Typography Handbook",
    description: "Essential typography principles and best practices",
    type: "eBook",
    duration: "1 hour read",
    downloads: "15.1K",
    icon: BookOpen,
    color: "from-orange-500 to-red-500",
    free: true,
  },
  {
    title: "UI/UX Design Patterns",
    description: "Common design patterns and when to use them",
    type: "Resource Pack",
    duration: "30 min read",
    downloads: "9.4K",
    icon: Download,
    color: "from-green-500 to-emerald-500",
    free: true,
  },
]

export function GraphicsResources() {
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Learning Resources</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Enhance your design skills with our comprehensive collection of guides, tutorials, and educational content.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#1a1a1a] border-[#333] p-6 hover:border-[#fc3c44] transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${resource.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-[#fc3c44] border-[#fc3c44]">
                          {resource.type}
                        </Badge>
                        {resource.free && <Badge className="bg-green-500 text-white">Free</Badge>}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{resource.description}</p>

                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {resource.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {resource.downloads}
                        </div>
                      </div>

                      <Button size="sm" className="bg-[#fc3c44] hover:bg-[#e63946] text-white">
                        <Download className="w-4 h-4 mr-2" />
                        {resource.free ? "Download Free" : "Get Access"}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
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
            <ExternalLink className="w-4 h-4 mr-2" />
            View All Resources
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}
