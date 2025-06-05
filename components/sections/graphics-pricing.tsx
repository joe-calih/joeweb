"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Download, Users } from "lucide-react"
import { Section } from "@/components/ui/section"

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for getting started with basic graphics",
    features: [
      "50+ free graphics",
      "Basic templates",
      "Standard resolution",
      "Personal use license",
      "Community support",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "Ideal for freelancers and small agencies",
    features: [
      "500+ premium graphics",
      "All template categories",
      "High resolution files",
      "Commercial use license",
      "Priority support",
      "Monthly new releases",
    ],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For large teams and organizations",
    features: [
      "Unlimited graphics access",
      "Custom design requests",
      "Brand kit integration",
      "Extended commercial license",
      "Dedicated account manager",
      "Team collaboration tools",
      "API access",
    ],
    popular: false,
    cta: "Contact Sales",
  },
]

export function GraphicsPricing() {
  return (
    <Section background="dark" padding="large">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan for your design needs. All plans include commercial licensing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`bg-[#1a1a1a] border-[#333] p-8 hover:border-[#fc3c44] transition-all duration-300 relative ${plan.popular ? "border-[#fc3c44] scale-105" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#fc3c44] text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#fc3c44] flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular ? "bg-[#fc3c44] hover:bg-[#e63946] text-white" : "bg-transparent border border-[#fc3c44] text-[#fc3c44] hover:bg-[#fc3c44] hover:text-white"}`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-4">All plans include 30-day money-back guarantee</p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              <span>Instant downloads</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Team collaboration</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Commercial license</span>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
