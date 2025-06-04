"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function SupportFAQ() {
  const faqs = [
    {
      question: "How long does it take for my music to appear on streaming platforms?",
      answer:
        "Most streaming platforms receive your music within 24-48 hours, but it can take up to 7 days for your release to go live. We recommend submitting your music at least 2 weeks before your planned release date.",
    },
    {
      question: "How do I get paid for my streams and downloads?",
      answer:
        "Royalties are calculated monthly and paid out 60 days after the end of each month. You can track your earnings in real-time through your dashboard and set up direct deposit for automatic payments.",
    },
    {
      question: "Can I edit my release after it's been distributed?",
      answer:
        "You can update certain metadata like track titles and artist names, but changes to audio files require a new release. Some changes may take 7-14 days to appear across all platforms.",
    },
    {
      question: "What audio formats and quality do you accept?",
      answer:
        "We accept WAV, FLAC, and high-quality MP3 files (320kbps minimum). For best results, upload WAV files at 44.1kHz/16-bit or higher. We automatically convert to the required formats for each platform.",
    },
    {
      question: "How do I submit my music to playlists?",
      answer:
        "Use our playlist pitching tool in your dashboard to submit unreleased tracks to editorial playlists. Submit at least 7 days before your release date for the best chance of consideration.",
    },
    {
      question: "Can I distribute cover songs?",
      answer:
        "Yes, but you need to obtain a mechanical license first. We partner with licensing services to help you secure the necessary rights and ensure proper royalty distribution to original songwriters.",
    },
  ]

  return (
    <div className="w-full bg-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-[#fc3c44]">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Quick answers to the most common questions from artists
          </p>
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
                className="bg-[#0a0a0a] border border-[#333] rounded-lg px-6 hover:border-[#fc3c44] transition-colors duration-300"
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
