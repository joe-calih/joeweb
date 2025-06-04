"use client"

import { motion } from "framer-motion"
import { Check, Star, Crown, Zap, Infinity } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function PricingPlans() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      icon: Star,
      popular: false,
      savings: null,
      features: [
        "5 music samples per month",
        "3 Lightroom presets",
        "Basic tutorials access",
        "Community support",
        "Standard license",
      ],
      limits: {
        samples: "5/month",
        presets: "3 total",
        luts: "None",
        vocals: "None",
        plugins: "None",
        tutorials: "Basic only",
      },
    },
    {
      name: "Creator",
      price: "$19.99",
      period: "per month",
      description: "For content creators and hobbyists",
      icon: Zap,
      popular: true,
      savings: "Save $48/year",
      features: [
        "100 music samples per month",
        "50 Lightroom presets",
        "25 LUTs per month",
        "10 vocal samples",
        "Basic plugin presets",
        "All tutorials access",
        "Priority support",
        "Commercial license",
      ],
      limits: {
        samples: "100/month",
        presets: "50/month",
        luts: "25/month",
        vocals: "10/month",
        plugins: "Basic presets",
        tutorials: "Full access",
      },
    },
    {
      name: "Professional",
      price: "$49.99",
      period: "per month",
      description: "For serious creators and small studios",
      icon: Crown,
      popular: false,
      savings: "Save $120/year",
      features: [
        "500 music samples per month",
        "200 Lightroom presets",
        "100 LUTs per month",
        "50 vocal samples",
        "Premium plugin presets",
        "Exclusive tutorials",
        "1-on-1 support sessions",
        "Extended commercial license",
        "Early access to new content",
      ],
      limits: {
        samples: "500/month",
        presets: "200/month",
        luts: "100/month",
        vocals: "50/month",
        plugins: "Premium presets",
        tutorials: "Exclusive access",
      },
    },
    {
      name: "Enterprise",
      price: "$99.99",
      period: "per month",
      description: "For agencies, labels, and large teams",
      icon: Infinity,
      popular: false,
      savings: "Save $240/year",
      features: [
        "Unlimited downloads",
        "Complete preset library",
        "Full LUT collection",
        "Unlimited vocals",
        "All plugin presets",
        "Private tutorials",
        "Dedicated account manager",
        "White-label licensing",
        "Custom content requests",
        "API access",
      ],
      limits: {
        samples: "Unlimited",
        presets: "Unlimited",
        luts: "Unlimited",
        vocals: "Unlimited",
        plugins: "Complete library",
        tutorials: "Private sessions",
      },
    },
  ]

  return (
    <div className="w-full bg-[#0a0a0a] relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your <span className="text-[#fc3c44]">Creative Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From free resources to unlimited access - find the perfect plan for your creative needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-[#fc3c44] to-[#e63946] text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card
                  className={`bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-[#333] hover:border-[#fc3c44] transition-all duration-500 h-full group-hover:scale-105 group-hover:shadow-2xl ${
                    plan.popular ? "border-[#fc3c44] shadow-lg shadow-[#fc3c44]/20" : ""
                  }`}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                          plan.popular
                            ? "bg-gradient-to-br from-[#fc3c44] to-[#e63946]"
                            : "bg-gradient-to-br from-gray-700 to-gray-800"
                        }`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <CardTitle className="text-white text-2xl mb-2">{plan.name}</CardTitle>

                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-white">
                        {plan.price}
                        <span className="text-lg text-gray-400 font-normal">/{plan.period}</span>
                      </div>
                      {plan.savings && <div className="text-sm text-green-400 mt-1">{plan.savings}</div>}
                    </div>

                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <div className="space-y-4 mb-8 flex-1">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-[#fc3c44]/10 rounded-lg p-2 border border-[#fc3c44]/20">
                          <div className="text-[#fc3c44] font-medium">Samples</div>
                          <div className="text-white">{plan.limits.samples}</div>
                        </div>
                        <div className="bg-purple-500/10 rounded-lg p-2 border border-purple-500/20">
                          <div className="text-purple-400 font-medium">Presets</div>
                          <div className="text-white">{plan.limits.presets}</div>
                        </div>
                        <div className="bg-blue-500/10 rounded-lg p-2 border border-blue-500/20">
                          <div className="text-blue-400 font-medium">LUTs</div>
                          <div className="text-white">{plan.limits.luts}</div>
                        </div>
                        <div className="bg-green-500/10 rounded-lg p-2 border border-green-500/20">
                          <div className="text-green-400 font-medium">Vocals</div>
                          <div className="text-white">{plan.limits.vocals}</div>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                            <Check className="w-4 h-4 text-[#fc3c44] flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      className={
                        plan.popular
                          ? "bg-gradient-to-r from-[#fc3c44] to-[#e63946] hover:from-[#e63946] hover:to-[#dc2626] w-full text-white font-medium py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                          : "bg-transparent border border-[#333] text-white hover:bg-[#333] hover:border-[#fc3c44] w-full py-3 rounded-xl transition-all duration-200"
                      }
                    >
                      {plan.name === "Free" ? "Get Started" : "Start Free Trial"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">All plans include commercial licensing and 24/7 support</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="text-green-400">✓ 14-day free trial</span>
            <span className="text-green-400">✓ Cancel anytime</span>
            <span className="text-green-400">✓ No setup fees</span>
            <span className="text-green-400">✓ Instant access</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
