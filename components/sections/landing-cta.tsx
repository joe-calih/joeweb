"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Music } from "lucide-react"
import { Section } from "@/components/ui/section"
import Link from "next/link"

export function LandingCTA() {
  return (
    <Section background="gradient">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-20 h-20 bg-[#fc3c44] rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <Music className="w-10 h-10 text-white" />
        </motion.div>

        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Ready to Take Your Music Career to the Next Level?
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Join thousands of successful artists who trust our platform to distribute their music, track their
          performance, and grow their fanbase worldwide.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="bg-[#fc3c44] hover:bg-[#e63946] text-white">
            <Link href="/dashboard" className="flex items-center gap-2">
              Start Your Free Trial
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-[#333]">
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </motion.div>

        <motion.p
          className="text-sm text-gray-400 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          No credit card required • 14-day free trial • Cancel anytime
        </motion.p>
      </motion.div>
    </Section>
  )
}
