"use client"

import { motion } from "framer-motion"
import { BookOpen, Video, Download, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function SupportResources() {
  const resources = [
    {
      icon: BookOpen,
      title: "Getting Started Guide",
      description: "Complete guide for new artists joining the platform",
      type: "PDF Guide",
      link: "#",
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video tutorials for all platform features",
      type: "Video Series",
      link: "#",
    },
    {
      icon: Download,
      title: "API Documentation",
      description: "Technical documentation for developers and integrations",
      type: "Documentation",
      link: "#",
    },
  ]

  return (
    <div className="w-full bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Additional <span className="text-[#fc3c44]">Resources</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive guides, tutorials, and documentation to help you master the platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1a1a1a] border-[#333] hover:border-[#fc3c44] transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#fc3c44] rounded-lg flex items-center justify-center mb-4">
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">{resource.title}</CardTitle>
                  <p className="text-sm text-[#fc3c44]">{resource.type}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-300 mb-6 flex-1">{resource.description}</p>
                  <Button variant="outline" className="border-[#333] text-white hover:bg-[#333] w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Access Resource
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
