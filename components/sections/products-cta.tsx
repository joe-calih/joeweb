"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ProductsCTA() {
  return (
    <div className="w-full bg-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Get <span className="text-[#fc3c44]">Started</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of artists using our platform</p>
          <Button className="bg-[#fc3c44] hover:bg-[#e63946]">Start Free Trial</Button>
        </motion.div>
      </div>
    </div>
  )
}
