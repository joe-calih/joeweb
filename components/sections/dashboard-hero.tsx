"use client"

import { motion } from "framer-motion"
import { BarChart3, TrendingUp, Users, DollarSign } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardHero() {
  return (
    <Section background="gradient" padding="large">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Music <span className="text-[#fc3c44]">Dashboard</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Track your performance, understand your audience, and grow your music career with comprehensive analytics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: BarChart3, title: "Total Streams", value: "2.4M", change: "+15%" },
            { icon: Users, title: "Monthly Listeners", value: "45.2K", change: "+8%" },
            { icon: DollarSign, title: "Revenue", value: "$3,247", change: "+22%" },
            { icon: TrendingUp, title: "Growth Rate", value: "12.5%", change: "+3%" },
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-[#1a1a1a] border-[#333] hover:border-[#fc3c44] transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">{stat.title}</CardTitle>
                  <stat.icon className="h-4 w-4 text-[#fc3c44]" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <p className="text-xs text-green-400">{stat.change} from last month</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
