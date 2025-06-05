"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { TrendingUp, DollarSign, Music, Globe } from "lucide-react"

const stats = [
  {
    icon: Music,
    value: "50,000+",
    label: "Songs Distributed",
    description: "Tracks successfully distributed across all platforms",
  },
  {
    icon: DollarSign,
    value: "$2.5M+",
    label: "Artist Earnings",
    description: "Total revenue generated for our artists",
  },
  {
    icon: Globe,
    value: "150+",
    label: "Countries",
    description: "Global reach across all major markets",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Success Rate",
    description: "Artists who see growth within 6 months",
  },
]

export function LandingStats() {
  return (
    <Section background="dark">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Artists Worldwide</h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Join thousands of successful artists who have grown their careers with our platform
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center group"
          >
            <motion.div
              className="w-16 h-16 bg-[#fc3c44] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <stat.icon className="w-8 h-8 text-white" />
            </motion.div>
            <motion.div
              className="text-4xl font-bold text-white mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
            >
              {stat.value}
            </motion.div>
            <div className="text-lg font-semibold text-[#fc3c44] mb-2">{stat.label}</div>
            <div className="text-sm text-gray-400">{stat.description}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
