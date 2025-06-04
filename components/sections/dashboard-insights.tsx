"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Target, Lightbulb, Calendar } from "lucide-react"

const insights = [
  {
    icon: TrendingUp,
    title: "Peak Performance Time",
    description: "Your music performs best on Friday evenings between 6-9 PM",
    type: "timing",
    impact: "High",
  },
  {
    icon: Target,
    title: "Audience Demographics",
    description: "Your primary audience is 18-34 years old, predominantly from urban areas",
    type: "audience",
    impact: "Medium",
  },
  {
    icon: Lightbulb,
    title: "Genre Recommendation",
    description: "Consider exploring ambient electronic - it's trending in your region",
    type: "creative",
    impact: "Medium",
  },
  {
    icon: Calendar,
    title: "Release Strategy",
    description: "Releasing on Thursdays could increase your first-week streams by 15%",
    type: "strategy",
    impact: "High",
  },
]

export function DashboardInsights() {
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
            AI <span className="text-[#fc3c44]">Insights</span>
          </h2>
          <p className="text-xl text-gray-300">Personalized recommendations and insights</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1a1a1a] border-[#333] hover:border-[#fc3c44] transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#fc3c44] rounded-lg flex items-center justify-center">
                        <insight.icon className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-white">{insight.title}</CardTitle>
                    </div>
                    <Badge variant={insight.impact === "High" ? "default" : "secondary"}>{insight.impact} Impact</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{insight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
