"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Calendar, Headphones, Users } from "lucide-react"

const features = [
  {
    icon: MessageCircle,
    title: "Discussion Forums",
    description: "Connect with artists, share experiences, and get advice from the community.",
  },
  {
    icon: Calendar,
    title: "Virtual Events",
    description: "Join live sessions, workshops, and networking events with industry professionals.",
  },
  {
    icon: Headphones,
    title: "Listening Parties",
    description: "Share your latest tracks and get feedback from fellow musicians.",
  },
  {
    icon: Users,
    title: "Collaboration Hub",
    description: "Find artists to collaborate with based on genre, location, and style.",
  },
]

export function MembersCommunity() {
  return (
    <div className="w-full bg-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Join the <span className="text-[#fc3c44]">Community</span>
          </h2>
          <p className="text-xl text-gray-300">Connect, collaborate, and grow together</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1a1a1a] border-[#333] hover:border-[#fc3c44] transition-all duration-300 h-full text-center">
                <CardHeader>
                  <motion.div
                    className="w-12 h-12 bg-[#fc3c44] rounded-lg flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" className="bg-[#fc3c44] hover:bg-[#e63946] text-white">
            Join Our Community
          </Button>
          <p className="text-sm text-gray-400 mt-4">Free to join • Connect instantly • No spam, ever</p>
        </motion.div>
      </div>
    </div>
  )
}
