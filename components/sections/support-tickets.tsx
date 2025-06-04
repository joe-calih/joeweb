"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Ticket, Clock, CheckCircle, Plus, Search } from "lucide-react"

export function SupportTickets() {
  const ticketStats = [
    {
      label: "Average Response",
      value: "< 2 hours",
      icon: Clock,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
    },
    {
      label: "Resolution Rate",
      value: "98.5%",
      icon: CheckCircle,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      label: "Active Tickets",
      value: "24/7",
      icon: Ticket,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
    },
  ]

  const recentTickets = [
    {
      id: "#TK-2024-001",
      title: "Download link not working",
      status: "Resolved",
      priority: "High",
      created: "2 hours ago",
      category: "Technical",
    },
    {
      id: "#TK-2024-002",
      title: "License clarification needed",
      status: "In Progress",
      priority: "Medium",
      created: "4 hours ago",
      category: "Licensing",
    },
    {
      id: "#TK-2024-003",
      title: "Refund request",
      status: "Pending",
      priority: "Low",
      created: "1 day ago",
      category: "Billing",
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
            Support <span className="text-[#fc3c44]">Tickets</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get personalized help with our ticketing system. Track your requests and get expert assistance from our
            support team.
          </p>
        </motion.div>

        {/* Ticket Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {ticketStats.map((stat, index) => (
            <Card key={stat.label} className={`${stat.bgColor} border-white/10 backdrop-blur-sm p-6 text-center`}>
              <div className={`w-12 h-12 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </Card>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Create Ticket */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-[#fc3c44]/10 to-purple-500/10 border-[#fc3c44]/20 backdrop-blur-sm p-8 h-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#fc3c44] to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Plus className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Create New Ticket</h3>
                <p className="text-gray-300 mb-6">
                  Can't find the answer you're looking for? Submit a support ticket and our team will help you out.
                </p>
                <Button className="w-full bg-[#fc3c44] hover:bg-[#e63946] text-white mb-4">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Ticket
                </Button>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  <Search className="w-4 h-4 mr-2" />
                  Search Existing
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Recent Tickets */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Recent Tickets</h3>
              <div className="space-y-4">
                {recentTickets.map((ticket, index) => (
                  <motion.div
                    key={ticket.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-mono text-gray-400">{ticket.id}</span>
                            <Badge
                              variant={
                                ticket.status === "Resolved"
                                  ? "default"
                                  : ticket.status === "In Progress"
                                    ? "secondary"
                                    : "outline"
                              }
                              className={
                                ticket.status === "Resolved"
                                  ? "bg-green-500/20 text-green-400 border-green-500/30"
                                  : ticket.status === "In Progress"
                                    ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                                    : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                              }
                            >
                              {ticket.status}
                            </Badge>
                          </div>
                          <h4 className="text-lg font-semibold text-white mb-2">{ticket.title}</h4>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span>{ticket.category}</span>
                            <span>•</span>
                            <span>Priority: {ticket.priority}</span>
                            <span>•</span>
                            <span>{ticket.created}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-[#fc3c44] hover:bg-[#fc3c44]/10">
                          View Details
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
