"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Heart, Share2, ExternalLink } from "lucide-react"

export function ChangelogCommunity() {
  const feedback = [
    {
      user: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Music Producer",
      },
      content: "The new AI search feature is incredible! Found exactly what I needed in seconds.",
      likes: 24,
      replies: 5,
      time: "2 hours ago",
    },
    {
      user: {
        name: "Marcus Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Photographer",
      },
      content: "Mobile optimization is a game changer. The app feels so smooth now!",
      likes: 18,
      replies: 3,
      time: "5 hours ago",
    },
    {
      user: {
        name: "Elena Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Content Creator",
      },
      content: "Love the new dark mode. Much easier on the eyes during late night sessions.",
      likes: 31,
      replies: 8,
      time: "1 day ago",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Community <span className="text-[#fc3c44]">Feedback</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what our community is saying about the latest updates and share your own feedback.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            {feedback.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={item.user.avatar || "/placeholder.svg"} alt={item.user.name} />
                      <AvatarFallback>
                        {item.user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-white">{item.user.name}</span>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-400">{item.user.role}</span>
                        <span className="text-sm text-gray-500 ml-auto">{item.time}</span>
                      </div>
                      <p className="text-gray-300 mb-4">{item.content}</p>
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{item.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                          <MessageSquare className="w-4 h-4" />
                          <span className="text-sm">{item.replies}</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <Card className="bg-gradient-to-br from-[#fc3c44]/10 to-purple-500/10 border-[#fc3c44]/20 backdrop-blur-sm p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Join the Conversation</h3>
              <p className="text-gray-300 mb-6">
                Share your thoughts on our latest updates and help shape the future of our platform.
              </p>
              <div className="space-y-4">
                <Button className="w-full bg-[#fc3c44] hover:bg-[#e63946] text-white">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Share Feedback
                </Button>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Join Discord Community
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
