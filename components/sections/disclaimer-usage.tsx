"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react"

export function DisclaimerUsage() {
  const usageRules = [
    {
      type: "allowed",
      icon: CheckCircle,
      title: "Commercial Use",
      description: "Use our samples and presets in commercial projects and releases",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      type: "allowed",
      icon: CheckCircle,
      title: "Modification",
      description: "Edit, remix, and modify content to fit your creative vision",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      type: "restricted",
      icon: XCircle,
      title: "Redistribution",
      description: "Cannot resell or redistribute original files as standalone products",
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20",
    },
    {
      type: "restricted",
      icon: XCircle,
      title: "Exclusive Claims",
      description: "Cannot claim exclusive ownership or copyright of original content",
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20",
    },
    {
      type: "warning",
      icon: AlertTriangle,
      title: "Attribution",
      description: "Credit required for free downloads, optional for premium content",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
    },
    {
      type: "info",
      icon: Info,
      title: "Platform Usage",
      description: "Respect community guidelines and platform terms of service",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Usage <span className="text-[#fc3c44]">Guidelines</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Understanding how you can use our creative resources and what restrictions apply to ensure compliance and
            proper usage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usageRules.map((rule, index) => (
            <motion.div
              key={rule.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`${rule.bgColor} ${rule.borderColor} border backdrop-blur-sm p-6 h-full`}>
                <div className="flex items-start gap-4">
                  <div className={`${rule.color} mt-1`}>
                    <rule.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{rule.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{rule.description}</p>
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
          <Card className="bg-gradient-to-r from-[#fc3c44]/10 to-purple-500/10 border-[#fc3c44]/20 backdrop-blur-sm p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Clarification?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                If you have questions about usage rights or need special licensing arrangements, our legal team is here
                to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:legal@joecalih.co.ke"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#fc3c44] hover:bg-[#e63946] text-white rounded-lg transition-colors"
                >
                  Contact Legal Team
                </a>
                <a
                  href="/support"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  Get Support
                </a>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
