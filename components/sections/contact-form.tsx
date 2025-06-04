"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactForm() {
  return (
    <div className="w-full bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Send us a <span className="text-[#fc3c44]">message</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Have a question or need assistance? Fill out the form and we'll get back to you within 24 hours.
            </p>

            <Card className="bg-[#1a1a1a] border-[#333]">
              <CardHeader>
                <CardTitle className="text-white">Contact Form</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" className="bg-[#0a0a0a] border-[#333] text-white" />
                  <Input placeholder="Last Name" className="bg-[#0a0a0a] border-[#333] text-white" />
                </div>
                <Input placeholder="Email Address" type="email" className="bg-[#0a0a0a] border-[#333] text-white" />
                <Input placeholder="Subject" className="bg-[#0a0a0a] border-[#333] text-white" />
                <Textarea placeholder="Your message..." rows={4} className="bg-[#0a0a0a] border-[#333] text-white" />
                <Button className="bg-[#fc3c44] hover:bg-[#e63946] w-full">Send Message</Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Why contact us?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#fc3c44] rounded-full mt-2 flex-shrink-0" />
                  <span>Get personalized support for your music career</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#fc3c44] rounded-full mt-2 flex-shrink-0" />
                  <span>Technical assistance with platform features</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#fc3c44] rounded-full mt-2 flex-shrink-0" />
                  <span>Partnership and collaboration opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#fc3c44] rounded-full mt-2 flex-shrink-0" />
                  <span>Feedback and feature requests</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
