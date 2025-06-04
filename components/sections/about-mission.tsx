"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Zap, Shield, Globe, Users } from "lucide-react"

export function AboutMission() {
  const principles = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We constantly push boundaries to deliver cutting-edge creative tools and resources.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Every resource undergoes rigorous testing to ensure professional-grade quality.",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Making professional creative resources accessible to creators worldwide.",
      gradient: "from-green-400 to-teal-500",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by creators, for creators. Our community shapes everything we do.",
      gradient: "from-pink-400 to-red-500",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            To democratize creativity by providing professional-grade resources that inspire, empower, and enable
            creators to bring their visions to life without barriers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8 h-full hover:bg-white/10 transition-all duration-300 group">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${principle.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{principle.title}</h3>
                <p className="text-gray-300 leading-relaxed">{principle.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-r from-[#fc3c44]/10 to-purple-500/10 border-[#fc3c44]/20 backdrop-blur-sm p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Vision</h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A world where every creator has access to professional-grade tools and resources, regardless of their
              background, location, or budget. We envision a future where creativity knows no bounds and every idea can
              be brought to life.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
