"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, ExternalLink, Award, Music, Video, Palette } from "lucide-react"

export function ServicesPortfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "Electronic Album Mastering",
      client: "Neon Pulse Records",
      category: "Audio Mastering",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete mastering suite for 12-track electronic album with dynamic range optimization",
      tags: ["Mastering", "Electronic", "Album"],
      icon: Music,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Music Video Color Grading",
      client: "Indie Artist Collective",
      category: "Video Post-Production",
      image: "/placeholder.svg?height=300&width=400",
      description: "Cinematic color grading and visual effects for indie music video production",
      tags: ["Color Grading", "Music Video", "VFX"],
      icon: Video,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Custom Sample Pack Creation",
      client: "Urban Beats Studio",
      category: "Music Production",
      image: "/placeholder.svg?height=300&width=400",
      description: "Bespoke trap and hip-hop sample pack with 50+ unique loops and one-shots",
      tags: ["Sample Pack", "Hip-Hop", "Custom"],
      icon: Music,
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      title: "Brand Identity & Motion Graphics",
      client: "Creative Agency",
      category: "Design & Animation",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete brand identity with animated logo and motion graphics package",
      tags: ["Branding", "Motion Graphics", "Animation"],
      icon: Palette,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      title: "Podcast Audio Enhancement",
      client: "Tech Talk Podcast",
      category: "Audio Post-Production",
      image: "/placeholder.svg?height=300&width=400",
      description: "Audio cleanup, noise reduction, and enhancement for weekly podcast series",
      tags: ["Podcast", "Audio Cleanup", "Enhancement"],
      icon: Music,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      id: 6,
      title: "Documentary Sound Design",
      client: "Independent Filmmaker",
      category: "Sound Design",
      image: "/placeholder.svg?height=300&width=400",
      description: "Complete sound design and audio post-production for feature documentary",
      tags: ["Sound Design", "Documentary", "Film"],
      icon: Video,
      gradient: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-[#fc3c44]">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our recent work and see how we've helped creators and businesses achieve their creative goals with
            professional services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center`}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="ghost" className="bg-black/50 text-white hover:bg-black/70">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-[#fc3c44]/30 text-[#fc3c44]">
                      {item.category}
                    </Badge>
                    <span className="text-sm text-gray-400">{item.client}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm" className="text-[#fc3c44] hover:bg-[#fc3c44]/10 p-0">
                      View Details
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-[#fc3c44]/10 to-purple-500/10 border-[#fc3c44]/20 backdrop-blur-sm p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#fc3c44] to-purple-500 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to Start Your Project?</h3>
                <p className="text-gray-300">
                  Let's discuss your creative vision and bring it to life with our professional services.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-[#fc3c44] hover:bg-[#e63946] text-white">Get Quote</Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  View All Work
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
