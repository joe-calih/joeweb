"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ContactFAQ() {
  const faqs = [
    {
      question: "What's the best way to contact support?",
      answer:
        "For technical issues, use our live chat feature available 24/7. For business inquiries, email us at business@artists.apple.com. For urgent matters, call our support line.",
    },
    {
      question: "How quickly will I receive a response?",
      answer:
        "Live chat responses are immediate during business hours. Email responses typically come within 24 hours. Phone support is available Monday-Friday, 9AM-6PM in your local timezone.",
    },
    {
      question: "Can I schedule a call with your team?",
      answer:
        "Yes! Pro and Enterprise customers can schedule calls with our support specialists. Use the calendar link in your dashboard or contact your account manager directly.",
    },
    {
      question: "Do you offer support in multiple languages?",
      answer:
        "We provide support in English, Spanish, French, German, Japanese, and Mandarin. Select your preferred language when contacting us for assistance.",
    },
  ]

  return (
    <div className="w-full bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Contact <span className="text-[#fc3c44]">FAQ</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Quick answers about getting in touch with our team</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#1a1a1a] border border-[#333] rounded-lg px-6 hover:border-[#fc3c44] transition-colors duration-300"
              >
                <AccordionTrigger className="text-white hover:text-[#fc3c44] text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pt-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  )
}
