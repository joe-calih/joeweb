"use client"

import { motion } from "framer-motion"
import { GraduationCap, Play, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LessonsHero() {
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
            <GraduationCap className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Learn from <span className="text-[#fc3c44]">Experts</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Master your craft with expert-led music lessons. Learn production, songwriting, marketing, and business
            skills from industry professionals who've worked with top artists.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="bg-[#fc3c44] hover:bg-[#e63946]">
              <Play className="w-4 h-4 mr-2" />
              Start Learning
            </Button>
            <Button size="lg" variant="outline" className="border-[#333] text-white hover:bg-[#333]">
              Browse Courses
            </Button>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-[#fc3c44] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Expert Instructors</h3>
              <p className="text-gray-400">Learn from Grammy-winning producers and successful artists</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#fc3c44] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Play className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Interactive Content</h3>
              <p className="text-gray-400">Hands-on lessons with real-world projects and feedback</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#fc3c44] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Certificates</h3>
              <p className="text-gray-400">Earn industry-recognized certificates upon completion</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
