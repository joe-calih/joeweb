"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, FileText, Bell, Clock } from "lucide-react"

export function DisclaimerUpdates() {
  const updates = [
    {
      date: "January 3, 2025",
      version: "v3.1",
      type: "Major Update",
      title: "Enhanced Privacy Controls",
      description: "Updated data handling procedures and user privacy controls in compliance with latest regulations.",
      changes: ["GDPR compliance improvements", "Enhanced data encryption", "User consent management"],
    },
    {
      date: "December 15, 2024",
      version: "v3.0",
      type: "Policy Update",
      title: "Commercial Usage Terms",
      description: "Clarified commercial usage rights and licensing terms for premium content.",
      changes: ["Commercial licensing clarity", "Attribution requirements", "Revenue sharing terms"],
    },
    {
      date: "November 20, 2024",
      version: "v2.9",
      type: "Minor Update",
      title: "Platform Guidelines",
      description: "Updated community guidelines and platform usage policies.",
      changes: ["Community standards", "Content moderation", "User behavior guidelines"],
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
            Terms <span className="text-[#fc3c44]">Updates</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed about changes to our terms of service and legal policies. We maintain transparency in all
            updates.
          </p>
        </motion.div>

        <div className="space-y-8">
          {updates.map((update, index) => (
            <motion.div
              key={update.version}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-1/4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#fc3c44] to-[#ff6b6b] rounded-full flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <Badge
                          variant={
                            update.type === "Major Update"
                              ? "default"
                              : update.type === "Policy Update"
                                ? "secondary"
                                : "outline"
                          }
                          className={
                            update.type === "Major Update"
                              ? "bg-[#fc3c44]/20 text-[#fc3c44] border-[#fc3c44]/30"
                              : update.type === "Policy Update"
                                ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                          }
                        >
                          {update.type}
                        </Badge>
                        <div className="text-sm text-gray-400 mt-1">{update.version}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{update.date}</span>
                    </div>
                  </div>

                  <div className="lg:w-3/4">
                    <h3 className="text-2xl font-bold text-white mb-4">{update.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{update.description}</p>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Changes:</h4>
                      <ul className="space-y-2">
                        {update.changes.map((change, changeIndex) => (
                          <li key={changeIndex} className="flex items-center gap-3 text-gray-300">
                            <div className="w-2 h-2 bg-[#fc3c44] rounded-full" />
                            {change}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 backdrop-blur-sm p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                <p className="text-gray-300">
                  Subscribe to notifications to receive updates about changes to our terms and policies.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
                  <Bell className="w-4 h-4 mr-2 inline" />
                  Subscribe to Updates
                </button>
                <button className="px-6 py-3 border border-white/20 text-white hover:bg-white/10 rounded-lg transition-colors">
                  <Clock className="w-4 h-4 mr-2 inline" />
                  View History
                </button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
