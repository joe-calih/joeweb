"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, MessageCircle, Share2, Award, ExternalLink, Heart, Eye, Download } from "lucide-react"
import { Section } from "@/components/ui/section"

const communityStats = [
  {
    icon: Users,
    value: "50K+",
    label: "Active Designers",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Share2,
    value: "25K+",
    label: "Shared Projects",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MessageCircle,
    value: "100K+",
    label: "Community Posts",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    value: "500+",
    label: "Featured Designs",
    color: "from-orange-500 to-red-500",
  },
]

const featuredPosts = [
  {
    author: "Alex Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    title: "Modern Logo Design Trends 2024",
    image: "/placeholder.svg?height=200&width=300",
    likes: 234,
    views: "1.2K",
    downloads: 89,
    badge: "Trending",
  },
  {
    author: "Sarah Kim",
    avatar: "/placeholder.svg?height=40&width=40",
    title: "Color Psychology in Branding",
    image: "/placeholder.svg?height=200&width=300",
    likes: 189,
    views: "890",
    downloads: 67,
    badge: "Featured",
  },
]

export function GraphicsCommunity() {
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Join Our Community</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Connect with fellow designers, share your work, and get inspired by the creative community.
          </p>
        </motion.div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#1a1a1a] border-[#333] p-6 text-center hover:border-[#fc3c44] transition-all duration-300 group">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Featured Community Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1a1a1a] border-[#333] overflow-hidden hover:border-[#fc3c44] transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-[#fc3c44] text-white">{post.badge}</Badge>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={post.avatar || "/placeholder.svg"} alt={post.author} className="w-8 h-8 rounded-full" />
                    <span className="text-white font-medium text-sm">{post.author}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-4">{post.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {post.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        {post.downloads}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="bg-[#fc3c44] hover:bg-[#e63946] text-white mr-4">
            <Users className="w-4 h-4 mr-2" />
            Join Community
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#fc3c44] text-[#fc3c44] hover:bg-[#fc3c44] hover:text-white"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Gallery
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}
