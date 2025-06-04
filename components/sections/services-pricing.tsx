"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown } from "lucide-react"

export function ServicesPricing() {
  const pricingTiers = [
    {
      name: "Essential",
      price: "$299",
      period: "per project",
      description: "Perfect for individual creators and small projects",
      icon: Zap,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Basic audio mastering",
        "Up to 5 tracks",
        "Standard turnaround (5-7 days)",
        "2 revisions included",
        "Digital delivery",
        "Basic consultation",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$599",
      period: "per project",
      description: "Ideal for serious artists and content creators",
      icon: Star,
      gradient: "from-[#fc3c44] to-[#ff6b6b]",
      features: [
        "Premium audio mastering",
        "Up to 12 tracks",
        "Priority turnaround (3-5 days)",
        "Unlimited revisions",
        "Digital + physical delivery",
        "Extended consultation",
        "Custom sample creation",
        "Mix feedback & notes",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "Comprehensive solutions for labels and businesses",
      icon: Crown,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Full production services",
        "Unlimited tracks",
        "Rush delivery (24-48 hours)",
        "Unlimited revisions",
        "All delivery formats",
        "Dedicated project manager",
        "Custom sample libraries",
        "Marketing consultation",
        "Distribution support",
        "Ongoing support",
      ],
      popular: false,
    },
  ]

  const addOnServices = [
    { name: "Rush Delivery (24h)", price: "$150" },
    { name: "Additional Revisions", price: "$50" },
    { name: "Stem Mastering", price: "$100" },
    { name: "Vinyl Mastering", price: "$200" },
    { name: "Custom Sample Pack", price: "$300" },
    { name: "Mix Consultation", price: "$100" },
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
            Service <span className="text-[#fc3c44]">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparent pricing for professional creative services. Choose the package that fits your project needs and
            budget.
          </p>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-[#fc3c44] text-white px-4 py-1">Most Popular</Badge>
                </div>
              )}
              <Card
                className={`${
                  tier.popular
                    ? "bg-gradient-to-b from-[#fc3c44]/10 to-purple-500/10 border-[#fc3c44]/30"
                    : "bg-white/5 border-white/10"
                } backdrop-blur-sm p-8 h-full relative overflow-hidden`}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tier.gradient} flex items-center justify-center`}
                    >
                      <tier.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                      <p className="text-gray-400">{tier.description}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      tier.popular
                        ? "bg-[#fc3c44] hover:bg-[#e63946] text-white"
                        : "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                    }`}
                  >
                    {tier.price === "Custom" ? "Get Quote" : "Get Started"}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Add-on Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Add-on Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addOnServices.map((addon, index) => (
                <div key={addon.name} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <span className="text-gray-300">{addon.name}</span>
                  <span className="text-white font-semibold">{addon.price}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-400 mb-4">
                Need a custom package? We offer flexible pricing for unique projects and long-term partnerships.
              </p>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Contact for Custom Quote
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
