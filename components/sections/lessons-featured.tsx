"use client"

import { motion } from "framer-motion"

export function LessonsFeatured() {
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
            Featured <span className="text-[#fc3c44]">Courses</span>
          </h2>
          <p className="text-xl text-gray-300">Popular lessons from top instructors</p>
        </motion.div>
      </div>
    </div>
  )
}
