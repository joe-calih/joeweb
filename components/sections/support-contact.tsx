"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MessageCircle, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function SupportContact() {
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
            Still need <span className="text-[#fc3c44]">help</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our support team is here to help you succeed. Choose the best way to reach us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#0a0a0a] border-[#333] hover:border-[#fc3c44] transition-all duration-300 h-full">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#fc3c44] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white">Live Chat</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4">Get instant help from our support team</p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
                  <Clock className="w-4 h-4" />
                  <span>Available 24/7</span>
                </div>
                <Button className="bg-[#fc3c44] hover:bg-[#e63946] w-full">Start Chat</Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#0a0a0a] border-[#333] hover:border-[#fc3c44] transition-all duration-300 h-full">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#fc3c44] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white">Email Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4">Send us a detailed message about your issue</p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
                  <Clock className="w-4 h-4" />
                  <span>Response within 24 hours</span>
                </div>
                <Button variant="outline" className="border-[#333] text-white hover:bg-[#333] w-full">
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#0a0a0a] border-[#333] hover:border-[#fc3c44] transition-all duration-300 h-full">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#fc3c44] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white">Phone Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-4">Speak directly with our support specialists</p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Fri, 9AM-6PM PST</span>
                </div>
                <Button variant="outline" className="border-[#333] text-white hover:bg-[#333] w-full">
                  Call Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
