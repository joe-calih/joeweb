"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Music, BarChart3, Users, Zap, DollarSign, Calendar } from "lucide-react"

const features = [
  {
    icon: Music,
    title: "Professional Distribution",
    description:
      "Get your music on all major platforms including Spotify, Apple Music, Amazon Music, and 150+ more streaming services worldwide.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Track your performance with detailed insights on streams, downloads, revenue, and audience demographics across all platforms.",
  },
  {
    icon: Users,
    title: "Artist Collaboration",
    description:
      "Connect with other artists, producers, and industry professionals. Share projects and collaborate on new music seamlessly.",
  },
  {
    icon: Zap,
    title: "Instant Mastering",
    description: "AI-powered mastering tools that give your tracks professional sound quality in minutes, not hours.",
  },
  {
    icon: DollarSign,
    title: "Revenue Tracking",
    description:
      "Monitor your earnings in real-time with transparent reporting and automated royalty collection from all platforms.",
  },
  {
    icon: Calendar,
    title: "Studio Booking",
    description:
      "Book professional recording studios worldwide with our integrated booking system and exclusive member rates.",
  },
]

export function LandingFeatures() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need to Succeed</h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          From creation to distribution, we provide all the tools and services you need to build a successful music
          career
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#1a1a1a] border-[#333] h-full hover:border-[#fc3c44] transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#fc3c44] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
