"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Lightbulb, Palette, Code, Rocket, ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/section"

const processSteps = [
  {
    step: "01",
    title: "Discovery & Research",
    description: "We analyze your brand, target audience, and design requirements to create a strategic foundation.",
    icon: Lightbulb,
    color: "from-purple-500 to-pink-500",
  },
  {
    step: "02",
    title: "Design & Creation",
    description: "Our team crafts unique, professional designs that align with your brand identity and goals.",
    icon: Palette,
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: "03",
    title: "Development & Refinement",
    description: "We develop and refine the designs based on feedback, ensuring pixel-perfect execution.",
    icon: Code,
    color: "from-orange-500 to-red-500",
  },
  {
    step: "04",
    title: "Delivery & Launch",
    description: "Final assets are delivered in all required formats, ready for immediate implementation.",
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
  },
]

export function GraphicsProcess() {
  return (
    <Section background="default" padding="large">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Design Process</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A proven methodology that ensures exceptional results for every project, from concept to completion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="bg-[#1a1a1a] border-[#333] p-6 hover:border-[#fc3c44] transition-all duration-300 group h-full">
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-[#fc3c44] mb-2">{step.step}</div>
                    <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </Card>

                {/* Arrow connector */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-[#fc3c44]" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
