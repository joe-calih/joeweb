"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Lightbulb, Rocket, Heart, Target } from "lucide-react"

export function AboutStory() {
  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Started as a passion project to share high-quality creative resources with fellow creators.",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
    },
    {
      year: "2021",
      title: "First 1000 Users",
      description: "Reached our first milestone with creators from over 50 countries using our resources.",
      icon: Rocket,
      color: "from-blue-500 to-purple-500",
    },
    {
      year: "2022",
      title: "Community Growth",
      description: "Built a thriving community of creators sharing knowledge and collaborating on projects.",
      icon: Heart,
      color: "from-pink-500 to-red-500",
    },
    {
      year: "2023",
      title: "Global Impact",
      description: "Expanded to serve creators worldwide with localized content and support.",
      icon: Target,
      color: "from-green-500 to-teal-500",
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
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Journey</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From a simple idea to a global platform empowering creators worldwide. Here's how we've grown together with
            our amazing community.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#fc3c44] to-transparent hidden md:block" />

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:gap-16 gap-8`}
              >
                <div className="flex-1 max-w-lg">
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${milestone.color} flex items-center justify-center`}
                      >
                        <milestone.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-[#fc3c44]">{milestone.year}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{milestone.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="relative hidden md:block">
                  <div className="w-6 h-6 bg-[#fc3c44] rounded-full border-4 border-gray-900" />
                </div>

                <div className="flex-1 max-w-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
