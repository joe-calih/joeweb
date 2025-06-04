"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Trophy, Download, Users, Globe, Star, Zap } from "lucide-react"

export function AboutAchievements() {
  const achievements = [
    {
      icon: Download,
      number: "1M+",
      label: "Downloads",
      description: "Resources downloaded by creators worldwide",
    },
    {
      icon: Users,
      number: "50K+",
      label: "Active Users",
      description: "Creators using our platform monthly",
    },
    {
      icon: Globe,
      number: "150+",
      label: "Countries",
      description: "Global reach across all continents",
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Rating",
      description: "Average user satisfaction score",
    },
    {
      icon: Trophy,
      number: "25+",
      label: "Awards",
      description: "Industry recognition and accolades",
    },
    {
      icon: Zap,
      number: "99.9%",
      label: "Uptime",
      description: "Platform reliability and performance",
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
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Impact</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that reflect our commitment to empowering creators and building a thriving global creative
            community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8 text-center hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-[#fc3c44] to-[#ff6b6b] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-xl font-semibold text-[#fc3c44] mb-3">{achievement.label}</div>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
