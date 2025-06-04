"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, TrendingUp, Users, Award } from "lucide-react"

const activities = [
  {
    icon: Music,
    title: "New track uploaded",
    description: "Progressive LSD is now live on all platforms",
    time: "2 hours ago",
    type: "success",
  },
  {
    icon: TrendingUp,
    title: "Milestone reached",
    description: "You've reached 1M total streams!",
    time: "1 day ago",
    type: "achievement",
  },
  {
    icon: Users,
    title: "New followers",
    description: "250 new followers this week",
    time: "3 days ago",
    type: "growth",
  },
  {
    icon: Award,
    title: "Playlist placement",
    description: "Added to 'Electronic Vibes' playlist",
    time: "1 week ago",
    type: "feature",
  },
]

export function DashboardRecentActivity() {
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
            Recent <span className="text-[#fc3c44]">Activity</span>
          </h2>
          <p className="text-xl text-gray-300">Latest updates and notifications</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-[#1a1a1a] border-[#333]">
            <CardHeader>
              <CardTitle className="text-white">Activity Feed</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-[#0a0a0a] border border-[#333]"
                >
                  <div className="w-10 h-10 bg-[#fc3c44] rounded-lg flex items-center justify-center">
                    <activity.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium text-white">{activity.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {activity.type}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{activity.description}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
