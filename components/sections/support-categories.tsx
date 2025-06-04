"use client"

import { motion } from "framer-motion"
import { Music, BarChart3, CreditCard, Settings, Users, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SupportCategories() {
  const categories = [
    {
      icon: Music,
      title: "Music Distribution",
      description: "Upload, distribute, and manage your music releases",
      articles: 24,
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Understanding your streaming data and audience",
      articles: 18,
    },
    {
      icon: CreditCard,
      title: "Payments & Royalties",
      description: "Payment schedules, royalty calculations, and tax info",
      articles: 15,
    },
    {
      icon: Settings,
      title: "Account Settings",
      description: "Profile management, security, and preferences",
      articles: 12,
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working with teams, labels, and other artists",
      articles: 9,
    },
    {
      icon: Globe,
      title: "International",
      description: "Global distribution, territories, and localization",
      articles: 21,
    },
  ]

  return (
    <div className="w-full bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Browse by <span className="text-[#fc3c44]">Category</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find help articles organized by topic to quickly get the answers you need
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1a1a1a] border-[#333] hover:border-[#fc3c44] transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#fc3c44] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white group-hover:text-[#fc3c44] transition-colors duration-300">
                        {category.title}
                      </CardTitle>
                      <p className="text-sm text-gray-400">{category.articles} articles</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{category.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
