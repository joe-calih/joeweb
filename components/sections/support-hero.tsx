"use client"

import { motion } from "framer-motion"
import { HelpCircle, Search, MessageCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SupportHero() {
  return (
    <div className="w-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-4 py-24">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-[#fc3c44] rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <HelpCircle className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            How can we <span className="text-[#fc3c44]">help</span>?
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Find answers to your questions, access documentation, and get support from our team. We're here to help you
            succeed.
          </motion.p>

          <motion.div
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search for help articles, guides, and tutorials..."
                className="pl-12 pr-4 py-4 text-lg bg-[#1a1a1a] border-[#333] text-white rounded-xl"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#fc3c44] hover:bg-[#e63946]">
                Search
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-[#1a1a1a] border border-[#333] rounded-xl p-6 hover:border-[#fc3c44] transition-all duration-300">
              <MessageCircle className="w-8 h-8 text-[#fc3c44] mb-4" />
              <h3 className="font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-gray-400 text-sm">Get instant help from our support team</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#333] rounded-xl p-6 hover:border-[#fc3c44] transition-all duration-300">
              <HelpCircle className="w-8 h-8 text-[#fc3c44] mb-4" />
              <h3 className="font-semibold text-white mb-2">Help Center</h3>
              <p className="text-gray-400 text-sm">Browse our comprehensive knowledge base</p>
            </div>
            <div className="bg-[#1a1a1a] border border-[#333] rounded-xl p-6 hover:border-[#fc3c44] transition-all duration-300">
              <Search className="w-8 h-8 text-[#fc3c44] mb-4" />
              <h3 className="font-semibold text-white mb-2">Documentation</h3>
              <p className="text-gray-400 text-sm">Detailed guides and API documentation</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
