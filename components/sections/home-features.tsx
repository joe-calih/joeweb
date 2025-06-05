"use client"

import { motion } from "framer-motion"
import { BarChart3, Globe, Headphones, Shield, Zap, Users } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Get detailed insights into your music performance, audience demographics, and streaming patterns across all platforms.",
  },
  {
    icon: Globe,
    title: "Global Distribution",
    description:
      "Distribute your music to 150+ streaming platforms worldwide including Spotify, Apple Music, and YouTube Music.",
  },
  {
    icon: Headphones,
    title: "Professional Mastering",
    description: "AI-powered mastering tools to ensure your tracks sound professional and radio-ready.",
  },
  {
    icon: Shield,
    title: "Rights Protection",
    description: "Protect your intellectual property with our comprehensive copyright and royalty management system.",
  },
  {
    icon: Zap,
    title: "Instant Releases",
    description: "Release your music instantly to all major platforms with our lightning-fast distribution network.",
  },
  {
    icon: Users,
    title: "Fan Engagement",
    description: "Connect with your audience through our integrated social tools and fan engagement features.",
  },
]

export function HomeFeatures() {
  return (
    <Section id="features">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need to Succeed</h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Our comprehensive platform provides all the tools and insights you need to grow your music career
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#1a1a1a] border-[#333] hover:border-[#fc3c44] transition-all duration-300 h-full group">
              <CardHeader>
                <motion.div
                  className="w-12 h-12 bg-[#fc3c44] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </motion.div>
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
