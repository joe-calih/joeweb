"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Heart, Star, Handshake, Lightbulb, Award, Users } from "lucide-react"

export function AboutValues() {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "Everything we do is fueled by genuine passion for creativity and helping others succeed.",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We maintain the highest standards in everything we create and deliver.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Handshake,
      title: "Integrity",
      description: "Honest, transparent, and ethical in all our interactions and business practices.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly exploring new ways to enhance the creative process and experience.",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Uncompromising commitment to delivering professional-grade resources.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building meaningful connections and supporting creators on their journey.",
      gradient: "from-pink-500 to-purple-500",
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
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Values</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The core principles that guide our decisions, shape our culture, and define how we serve our creative
            community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8 h-full hover:bg-white/10 transition-all duration-300 group">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
