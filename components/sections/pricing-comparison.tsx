"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PricingComparison() {
  const features = [
    {
      category: "Music Samples",
      items: [
        { name: "Monthly sample downloads", free: "5", creator: "100", professional: "500", enterprise: "Unlimited" },
        { name: "Genre variety", free: "Basic", creator: "Full", professional: "Full", enterprise: "Full + Exclusive" },
        {
          name: "Sample quality",
          free: "Standard",
          creator: "High",
          professional: "Premium",
          enterprise: "Studio Master",
        },
        { name: "Stems included", free: false, creator: true, professional: true, enterprise: true },
      ],
    },
    {
      category: "Visual Assets",
      items: [
        {
          name: "Lightroom presets",
          free: "3 total",
          creator: "50/month",
          professional: "200/month",
          enterprise: "Unlimited",
        },
        { name: "LUTs access", free: false, creator: "25/month", professional: "100/month", enterprise: "Unlimited" },
        { name: "Video templates", free: false, creator: "Basic", professional: "Premium", enterprise: "Full Library" },
        { name: "Custom requests", free: false, creator: false, professional: true, enterprise: true },
      ],
    },
    {
      category: "Learning & Support",
      items: [
        {
          name: "Tutorial access",
          free: "Basic",
          creator: "Full",
          professional: "Exclusive",
          enterprise: "Private Sessions",
        },
        { name: "Support response", free: "48h", creator: "24h", professional: "12h", enterprise: "1h" },
        { name: "1-on-1 sessions", free: false, creator: false, professional: "Monthly", enterprise: "Weekly" },
        { name: "Community access", free: true, creator: true, professional: true, enterprise: true },
      ],
    },
    {
      category: "Commercial Rights",
      items: [
        {
          name: "Commercial license",
          free: "Limited",
          creator: "Standard",
          professional: "Extended",
          enterprise: "White-label",
        },
        { name: "Attribution required", free: true, creator: false, professional: false, enterprise: false },
        { name: "Resale rights", free: false, creator: false, professional: "Limited", enterprise: "Full" },
        { name: "Client work usage", free: false, creator: true, professional: true, enterprise: true },
      ],
    },
  ]

  const plans = ["Free", "Creator", "Professional", "Enterprise"]
  const planColors = {
    Free: "text-gray-400",
    Creator: "text-[#fc3c44]",
    Professional: "text-purple-400",
    Enterprise: "text-yellow-400",
  }

  const renderValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-green-400 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-400 mx-auto" />
      )
    }
    return <span className="text-white font-medium">{value}</span>
  }

  return (
    <div className="w-full bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Feature <span className="text-[#fc3c44]">Comparison</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compare all features across our plans to find the perfect fit for your creative needs
          </p>
        </motion.div>

        <div className="space-y-8">
          {features.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1a1a1a] border-[#333] overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-[#fc3c44]/10 to-purple-500/10 border-b border-[#333]">
                  <CardTitle className="text-white text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-[#333]">
                          <th className="text-left p-4 text-gray-400 font-medium">Feature</th>
                          {plans.map((plan) => (
                            <th
                              key={plan}
                              className={`text-center p-4 font-medium ${planColors[plan as keyof typeof planColors]}`}
                            >
                              {plan}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {category.items.map((item, itemIndex) => (
                          <tr
                            key={itemIndex}
                            className="border-b border-[#333]/50 hover:bg-[#333]/20 transition-colors"
                          >
                            <td className="p-4 text-gray-300">{item.name}</td>
                            <td className="p-4 text-center">{renderValue(item.free)}</td>
                            <td className="p-4 text-center">{renderValue(item.creator)}</td>
                            <td className="p-4 text-center">{renderValue(item.professional)}</td>
                            <td className="p-4 text-center">{renderValue(item.enterprise)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] rounded-2xl p-8 border border-[#333]">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6">
              Our team is here to help you choose the right plan for your creative journey
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#fc3c44] hover:bg-[#e63946] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Contact Sales
              </button>
              <button className="bg-transparent border border-[#333] text-white hover:bg-[#333] px-6 py-3 rounded-lg font-medium transition-colors">
                View FAQ
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
