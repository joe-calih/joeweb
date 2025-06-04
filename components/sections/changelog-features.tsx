"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Smartphone, Globe, Shield, Cpu, Palette } from "lucide-react"

export function ChangelogFeatures() {
  const features = [
    {
      icon: Zap,
      title: "Performance Boost",
      description: "50% faster loading times across all pages",
      status: "Released",
      version: "v2.1.0",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Enhanced mobile experience with touch gestures",
      status: "Released",
      version: "v2.0.5",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Platform now available in 12 languages",
      status: "Beta",
      version: "v2.2.0",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Advanced encryption and security measures",
      status: "Released",
      version: "v2.1.5",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Cpu,
      title: "AI-Powered Search",
      description: "Smart content discovery with machine learning",
      status: "Coming Soon",
      version: "v2.3.0",
      gradient: "from-red-500 to-pink-500",
    },
    {
      icon: Palette,
      title: "Dark Mode 2.0",
      description: "Redesigned dark theme with better contrast",
      status: "Released",
      version: "v2.0.8",
      gradient: "from-indigo-500 to-purple-500",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Latest <span className="text-[#fc3c44]">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the newest additions and improvements that make your creative workflow even better.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge
                      variant={
                        feature.status === "Released" ? "default" : feature.status === "Beta" ? "secondary" : "outline"
                      }
                      className={
                        feature.status === "Released"
                          ? "bg-green-500/20 text-green-400 border-green-500/30"
                          : feature.status === "Beta"
                            ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                      }
                    >
                      {feature.status}
                    </Badge>
                    <span className="text-xs text-gray-500">{feature.version}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
