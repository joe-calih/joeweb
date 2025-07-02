"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to distribute my music?",
    answer:
      "Your music will be live on major streaming platforms within 24-48 hours. Some platforms may take up to 7 days for the first release, but subsequent releases are typically faster.",
  },
  {
    question: "What percentage of royalties do I keep?",
    answer:
      "You keep 85% of all royalties generated from your music. We only take a 15% commission to cover platform fees and our services. There are no hidden fees or additional charges.",
  },
  {
    question: "Can I distribute music that's already on other platforms?",
    answer:
      "Yes, but you'll need to ensure you have the rights to distribute the music and that it's not exclusively licensed to another distributor. We can help you transition from other platforms.",
  },
  {
    question: "Do you provide ISRC codes?",
    answer:
      "Yes, we automatically generate ISRC codes for all your tracks at no additional cost. If you already have ISRC codes, you can use those instead.",
  },
  {
    question: "What analytics and reporting do you provide?",
    answer:
      "We provide comprehensive analytics including streaming numbers, revenue tracking, audience demographics, geographic data, and playlist placements across all platforms.",
  },
  {
    question: "Is there a minimum contract period?",
    answer:
      "No, there's no minimum contract period. You can cancel your account at any time, though we recommend keeping your music live for at least 6 months to see meaningful results.",
  },
]

export function LandingFAQ() {
  return (
    <Section background="dark" verticalPadding="sm">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Get answers to the most common questions about our platform and services
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-[#1a1a1a] border-[#333] rounded-lg px-4">
              <AccordionTrigger className="text-white hover:text-[#fc3c44] text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-400 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </Section>
  )
}
