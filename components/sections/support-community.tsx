"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Users, Star, ExternalLink, Heart, Reply } from "lucide-react"

export function SupportCommunity() {
  const discussions = [
    {
      id: 1,
      title: "Best practices for mixing with our trap samples?",
      author: {
        name: "Alex Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        badge: "Pro User",
      },
      category: "Music Production",
      replies: 12,
      likes: 24,
      solved: true,
      time: "2 hours ago",
      preview:
        "I've been experimenting with the new trap essentials pack and wondering about the best mixing techniques...",
    },
    {
      id: 2,
      title: "LUT installation guide for DaVinci Resolve",
      author: {
        name: "Sarah Martinez",
        avatar: "/placeholder.svg?height=40&width=40",
        badge: "Expert",
      },
      category: "Video Editing",
      replies: 8,
      likes: 15,
      solved: false,
      time: "4 hours ago",
      preview: "Can someone walk me through the process of installing LUTs in DaVinci Resolve? I'm having trouble...",
    },
    {
      id: 3,
      title: "Lightroom preset compatibility with mobile app",
      author: {
        name: "Mike Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        badge: "Community Helper",
      },
      category: "Photography",
      replies: 6,
      likes: 9,
      solved: true,
      time: "1 day ago",
      preview: "Are the desktop presets compatible with Lightroom mobile? I want to edit on the go...",
    },
  ]

  const communityStats = [
    { label: "Active Members", value: "15.2K", icon: Users },
    { label: "Discussions", value: "3.8K", icon: MessageSquare },
    { label: "Solutions", value: "2.1K", icon: Star },
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
            Community <span className="text-[#fc3c44]">Support</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with fellow creators, share knowledge, and get help from our vibrant community of artists and
            experts.
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {communityStats.map((stat, index) => (
            <Card key={stat.label} className="bg-white/5 border-white/10 backdrop-blur-sm p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#fc3c44] to-[#ff6b6b] rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </Card>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Discussions */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Recent Discussions</h3>
              <div className="space-y-6">
                {discussions.map((discussion, index) => (
                  <motion.div
                    key={discussion.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage
                            src={discussion.author.avatar || "/placeholder.svg"}
                            alt={discussion.author.name}
                          />
                          <AvatarFallback>
                            {discussion.author.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-1">{discussion.title}</h4>
                              <div className="flex items-center gap-3 text-sm text-gray-400">
                                <span>{discussion.author.name}</span>
                                <Badge variant="secondary" className="text-xs">
                                  {discussion.author.badge}
                                </Badge>
                                <span>•</span>
                                <span>{discussion.time}</span>
                              </div>
                            </div>
                            {discussion.solved && (
                              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                                <Star className="w-3 h-3 mr-1" />
                                Solved
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-300 mb-4">{discussion.preview}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Badge variant="outline" className="border-[#fc3c44]/30 text-[#fc3c44]">
                                {discussion.category}
                              </Badge>
                              <div className="flex items-center gap-4 text-sm text-gray-400">
                                <span className="flex items-center gap-1">
                                  <Reply className="w-4 h-4" />
                                  {discussion.replies}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Heart className="w-4 h-4" />
                                  {discussion.likes}
                                </span>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="text-[#fc3c44] hover:bg-[#fc3c44]/10">
                              Join Discussion
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Community Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-gradient-to-br from-[#fc3c44]/10 to-purple-500/10 border-[#fc3c44]/20 backdrop-blur-sm p-6">
              <h3 className="text-xl font-bold text-white mb-4">Join Our Community</h3>
              <p className="text-gray-300 mb-6">
                Connect with thousands of creators, share your work, and get expert advice.
              </p>
              <div className="space-y-3">
                <Button className="w-full bg-[#fc3c44] hover:bg-[#e63946] text-white">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Start Discussion
                </Button>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Browse Topics
                </Button>
              </div>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Popular Topics</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Music Production</span>
                  <span className="text-sm text-gray-400">1.2K posts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Video Editing</span>
                  <span className="text-sm text-gray-400">856 posts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Photography</span>
                  <span className="text-sm text-gray-400">743 posts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">General Help</span>
                  <span className="text-sm text-gray-400">624 posts</span>
                </div>
              </div>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Community Guidelines</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#fc3c44] rounded-full mt-2" />
                  Be respectful and constructive
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#fc3c44] rounded-full mt-2" />
                  Search before posting
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#fc3c44] rounded-full mt-2" />
                  Use clear, descriptive titles
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#fc3c44] rounded-full mt-2" />
                  Mark solutions when found
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
