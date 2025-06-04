"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Music, Users, TrendingUp } from "lucide-react"
import { Section } from "@/components/ui/section"
import Link from "next/link"

export function LandingHero() {
  return (
    <Section background="gradient" padding="large" className="pt-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empower Your <span className="text-[#fc3c44]">Music Career</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join thousands of artists using our platform to distribute music, track performance, and grow their
              fanbase worldwide. Get the insights you need to succeed.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" className="bg-[#fc3c44] hover:bg-[#e63946] text-white">
                <Link href="/dashboard" className="flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-[#333]">
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Music className="w-8 h-8 text-[#fc3c44]" />
                </div>
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-sm text-gray-400">Songs Distributed</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-[#fc3c44]" />
                </div>
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-sm text-gray-400">Active Artists</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="w-8 h-8 text-[#fc3c44]" />
                </div>
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative bg-gradient-to-br from-[#fc3c44] to-[#e63946] rounded-2xl p-8 shadow-2xl">
              <div className="bg-[#1a1a1a] rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold">Artist Dashboard</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="bg-[#333] rounded-lg p-3">
                    <div className="text-sm text-gray-400">Monthly Streams</div>
                    <div className="text-2xl font-bold text-white">2.4M</div>
                    <div className="text-sm text-green-400">+15% from last month</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#333] rounded-lg p-3">
                      <div className="text-sm text-gray-400">Followers</div>
                      <div className="text-lg font-bold text-white">45.2K</div>
                    </div>
                    <div className="bg-[#333] rounded-lg p-3">
                      <div className="text-sm text-gray-400">Revenue</div>
                      <div className="text-lg font-bold text-white">$3.2K</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
