"use client"

import { motion } from "framer-motion"
import { BarChart3, Globe, Headphones, Shield, Zap, Users } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "Professional LUTs",
    description:
      "Transform your videos with our collection of cinematic color grading LUTs. From vintage film looks to modern cinematic styles.",
  },
  {
    icon: BarChart3,
    title: "Lightroom Presets",
    description:
      "Enhance your photography with our professionally crafted Lightroom presets. Perfect for portraits, landscapes, and creative editing.",
  },
  {
    icon: Headphones,
    title: "Sample Packs",
    description:
      "High-quality music samples and loops across Afro House genres. Perfect for producers and musicians looking for inspiration.",
  },
  {
    icon: Users,
    title: "Creative Lessons",
    description:
      "Learn photography, music production, and video editing through our comprehensive tutorials and educational content.",
  },
  {
    icon: Globe,
    title: "Digital Resources",
    description:
      "Access a vast library of creative assets including graphics, templates, and tools to enhance your creative projects.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description:
      "All our resources are professionally created and tested to ensure the highest quality for your creative work.",
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
          Discover our comprehensive collection of creative resources
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
