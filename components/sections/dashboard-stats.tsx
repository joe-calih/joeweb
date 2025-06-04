"use client"

import { motion } from "framer-motion"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardStats() {
  const stats = [
    { title: "Total Plays", value: "2,847,392", change: 15.2, period: "vs last month" },
    { title: "Monthly Listeners", value: "45,231", change: -2.1, period: "vs last month" },
    { title: "Revenue", value: "$3,247.89", change: 22.5, period: "vs last month" },
    { title: "Followers", value: "12,847", change: 8.7, period: "vs last month" },
    { title: "Saves", value: "8,392", change: 0, period: "vs last month" },
    { title: "Shares", value: "1,247", change: 45.2, period: "vs last month" },
  ]

  const getTrendIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="w-4 h-4 text-green-400" />
    if (change < 0) return <TrendingDown className="w-4 h-4 text-red-400" />
    return <Minus className="w-4 h-4 text-gray-400" />
  }

  const getTrendColor = (change: number) => {
    if (change > 0) return "text-green-400"
    if (change < 0) return "text-red-400"
    return "text-gray-400"
  }

  return (
    <div className="w-full bg-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Performance <span className="text-[#fc3c44]">Overview</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Track your music's performance across all platforms with detailed metrics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#0a0a0a] border-[#333] hover:border-[#fc3c44] transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">{stat.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="flex items-center gap-2">
                    {getTrendIcon(stat.change)}
                    <span className={`text-sm ${getTrendColor(stat.change)}`}>
                      {stat.change !== 0 && (stat.change > 0 ? "+" : "")}
                      {stat.change}%
                    </span>
                    <span className="text-xs text-gray-500">{stat.period}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
