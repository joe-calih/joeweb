"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, BarChart3, Users, Settings, Music, Share } from "lucide-react"

const actions = [
  {
    icon: Upload,
    title: "Upload New Track",
    description: "Release your latest music to all platforms",
    action: "Upload",
  },
  {
    icon: BarChart3,
    title: "View Analytics",
    description: "Deep dive into your performance metrics",
    action: "Analyze",
  },
  {
    icon: Users,
    title: "Promote Music",
    description: "Create marketing campaigns for your tracks",
    action: "Promote",
  },
  {
    icon: Settings,
    title: "Account Settings",
    description: "Manage your profile and preferences",
    action: "Settings",
  },
  {
    icon: Music,
    title: "Manage Catalog",
    description: "Edit and organize your music library",
    action: "Manage",
  },
  {
    icon: Share,
    title: "Share Progress",
    description: "Share your achievements on social media",
    action: "Share",
  },
]

export function DashboardQuickActions() {
  return (
    <div className="w-full bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Quick <span className="text-[#fc3c44]">Actions</span>
          </h2>
          <p className="text-xl text-gray-300">Common tasks and shortcuts</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1a1a1a] border-[#333] hover:border-[#fc3c44] transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#fc3c44] rounded-lg flex items-center justify-center mb-4">
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">{action.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">{action.description}</p>
                  <Button className="w-full bg-[#fc3c44] hover:bg-[#e63946]">{action.action}</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
