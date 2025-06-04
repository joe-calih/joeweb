"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MessageCircle } from "lucide-react"
import { Section } from "@/components/ui/section"

export function ContactHero() {
  return (
    <Section background="gradient" padding="large">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 bg-[#fc3c44] rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <Mail className="w-10 h-10 text-white" />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get in <span className="text-[#fc3c44]">Touch</span>
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Have questions about our platform? Need technical support? Want to explore partnership opportunities? We're
          here to help you succeed in your music career.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-[#fc3c44] rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">Call Us</h3>
            <p className="text-gray-400">Mon-Fri, 9AM-6PM PST</p>
            <p className="text-[#fc3c44]">+1 (800) APL-MUSIC</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#fc3c44] rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">Email Us</h3>
            <p className="text-gray-400">We'll respond within 24 hours</p>
            <p className="text-[#fc3c44]">support@artists.apple.com</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#fc3c44] rounded-lg flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">Live Chat</h3>
            <p className="text-gray-400">Available 24/7</p>
            <p className="text-[#fc3c44]">Start a conversation</p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
