"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Shield, Lock, Eye, Server, Key, AlertTriangle } from "lucide-react"

export function PrivacySecurity() {
  const securityMeasures = [
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "All data transmission is protected with industry-standard SSL/TLS encryption",
      features: ["256-bit SSL encryption", "Secure data transmission", "Protected API endpoints"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Lock,
      title: "Secure Data Storage",
      description: "Your personal information is stored in encrypted databases with restricted access",
      features: ["Encrypted databases", "Access controls", "Regular security audits"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Key,
      title: "Authentication Security",
      description: "Multi-factor authentication and secure login processes protect your account",
      features: ["Two-factor authentication", "Secure password policies", "Session management"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Our servers are hosted in secure facilities with 24/7 monitoring",
      features: ["SOC 2 compliant hosting", "24/7 monitoring", "Regular backups"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Eye,
      title: "Privacy by Design",
      description: "Privacy considerations are built into every feature and process",
      features: ["Data minimization", "Purpose limitation", "Privacy impact assessments"],
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Comprehensive procedures for handling any security incidents",
      features: ["24-hour response time", "User notification", "Forensic analysis"],
      gradient: "from-yellow-500 to-orange-500",
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
            Data <span className="text-[#fc3c44]">Security</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We implement comprehensive security measures to protect your personal information and ensure your privacy is
            maintained at all times.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityMeasures.map((measure, index) => (
            <motion.div
              key={measure.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 p-6 h-full">
                <div className="mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${measure.gradient} flex items-center justify-center mb-4`}
                  >
                    <measure.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{measure.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{measure.description}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">Features</h4>
                  <ul className="space-y-2">
                    {measure.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-[#fc3c44] rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
              <div className="w-16 h-16 bg-gradient-to-r from-[#fc3c44] to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Security Certifications</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our platform meets industry-leading security standards and compliance requirements to ensure your data
                is always protected.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-2">
                  <span className="text-white font-semibold">SOC 2 Type II</span>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-2">
                  <span className="text-white font-semibold">GDPR Compliant</span>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-2">
                  <span className="text-white font-semibold">ISO 27001</span>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-lg px-4 py-2">
                  <span className="text-white font-semibold">CCPA Compliant</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
