"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Mail, Users } from "lucide-react"
import Link from "next/link"

export function AboutCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-[#fc3c44]/10 to-purple-500/10 border-[#fc3c44]/20 backdrop-blur-sm p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Creative Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Ready to take your creativity to the next level? Join thousands of creators who trust Joecalih for their
              professional creative resources.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#fc3c44] to-[#ff6b6b] hover:from-[#e63946] hover:to-[#ff5252] text-white text-lg px-8 py-4 h-auto"
              >
                <Link href="/shop">
                  <Users className="w-5 h-5 mr-2" />
                  Start Creating
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-4 h-auto"
              >
                <Link href="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                </Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
