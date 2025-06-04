"use client"

import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function PricingFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "What's included in the free trial?",
      answer:
        "Your 14-day free trial includes full access to your chosen plan's features. You can download samples, presets, LUTs, and access all tutorials. No credit card required to start.",
    },
    {
      question: "Can I use the content commercially?",
      answer:
        "Yes! All paid plans include commercial licensing. Creator and Professional plans allow client work usage, while Enterprise includes white-label licensing for resale.",
    },
    {
      question: "How often is new content added?",
      answer:
        "We add fresh content weekly: 50+ new music samples, 25+ Lightroom presets, 10+ LUTs, and 5+ tutorials. Premium members get early access to new releases.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "You can cancel your subscription at any time. You'll continue to have access until the end of your current billing period, and you can keep any content you've already downloaded.",
    },
    {
      question: "What file formats are provided?",
      answer:
        "Music samples come in WAV/AIFF, presets in .lrtemplate/.xmp, LUTs in .cube format, and plugins in VST/AU/AAX. All formats are compatible with industry-standard software.",
    },
    {
      question: "Is there a student discount?",
      answer:
        "Yes! Students get 50% off any paid plan with valid student ID verification. The discount applies for up to 4 years of study.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "You can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at your next billing cycle. Unused downloads don't carry over between plans.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. All payments are processed securely through Stripe.",
    },
    {
      question: "Do you offer team or bulk pricing?",
      answer:
        "Yes! Enterprise plans include team management features. For larger teams (10+ users), contact our sales team for custom pricing and additional features.",
    },
    {
      question: "What if I need help or support?",
      answer:
        "We offer 24/7 support for all users. Free users get community support, Creator plan users get email support within 24h, Professional users get priority support within 12h, and Enterprise users get dedicated support within 1 hour.",
    },
  ]

  return (
    <div className="w-full bg-[#0a0a0a]">
      <div className="max-w-[1000px] mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-[#fc3c44]">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about our pricing and membership plans
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1a1a1a] border-[#333] hover:border-[#fc3c44]/50 transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-[#333]/20 transition-colors"
                  >
                    <span className="text-white font-medium text-lg pr-4">{faq.question}</span>
                    <div className="flex-shrink-0">
                      {openItems.includes(index) ? (
                        <Minus className="w-5 h-5 text-[#fc3c44]" />
                      ) : (
                        <Plus className="w-5 h-5 text-[#fc3c44]" />
                      )}
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openItems.includes(index) ? "auto" : 0,
                      opacity: openItems.includes(index) ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-300 leading-relaxed">{faq.answer}</div>
                  </motion.div>
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
              Our support team is here to help you find the perfect plan for your needs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#fc3c44] hover:bg-[#e63946] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Contact Support
              </button>
              <button className="bg-transparent border border-[#333] text-white hover:bg-[#333] px-6 py-3 rounded-lg font-medium transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
