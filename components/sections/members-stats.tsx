"use client"

import { motion } from "framer-motion"
import { Users, Globe, Music, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Active Artists",
    description: "Musicians from around the world",
  },
  {
    icon: Globe,
    value: "85",
    label: "Countries",
    description: "Global community reach",
  },
  {
    icon: Music,
    value: "50,000+",
    label: "Tracks Shared",
    description: "Original compositions uploaded",
  },
  {
    icon: Award,
    value: "500+",
    label: "Collaborations",
    description: "Successful artist partnerships",
  },
]

export function MembersStats() {
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
            Community <span className="text-[#fc3c44]">Stats</span>
          </h2>
          <p className="text-xl text-gray-300">Our growing artist community</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
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
      </div>
    </div>
  )
}
