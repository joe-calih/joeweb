"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Section } from "@/components/ui/section"

const faqs = [
  {
    question: "What file formats are included with the graphics?",
    answer:
      "All graphics come in multiple formats including PNG, JPG, SVG, AI, PSD, and Figma files. This ensures compatibility with all major design tools and platforms.",
  },
  {
    question: "Can I use these graphics for commercial projects?",
    answer:
      "Yes! All our premium graphics come with commercial licensing, allowing you to use them in client projects, products for sale, and commercial applications without additional fees.",
  },
  {
    question: "How often do you add new graphics?",
    answer:
      "We add new graphics weekly, with major collection updates monthly. Premium subscribers get early access to new releases and exclusive content.",
  },
  {
    question: "Do you offer custom design services?",
    answer:
      "Yes, our Enterprise plan includes custom design requests. We can create bespoke graphics tailored to your specific brand requirements and style guidelines.",
  },
  {
    question: "What's the difference between free and premium graphics?",
    answer:
      "Free graphics are basic templates with standard resolution and personal use licensing. Premium graphics offer higher quality, more variety, commercial licensing, and additional file formats.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely! You can cancel your subscription at any time. You'll continue to have access to your downloaded graphics and can use them according to the license terms.",
  },
  {
    question: "Do you provide design tutorials and guides?",
    answer:
      "Yes, we offer comprehensive tutorials, design guides, and best practice resources to help you make the most of our graphics and improve your design skills.",
  },
  {
    question: "Is there a limit to how many graphics I can download?",
    answer:
      "Free users can download up to 5 graphics per month. Professional plan users get 100 downloads monthly, while Enterprise users have unlimited downloads.",
  },
]

export function GraphicsFAQ() {
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to know about our graphics collection and services.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#1a1a1a] border-[#333] rounded-lg px-6 hover:border-[#fc3c44] transition-colors duration-300"
              >
                <AccordionTrigger className="text-white hover:text-[#fc3c44] text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </Section>
  )
}
