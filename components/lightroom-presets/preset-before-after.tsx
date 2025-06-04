"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import type { LightroomPreset } from "@/lib/lightroom-presets"

interface PresetBeforeAfterProps {
  preset: LightroomPreset
}

export function PresetBeforeAfter({ preset }: PresetBeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  return (
    <div className="bg-[#121212] py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Before & After</h2>
          <p className="text-gray-400">See the transformation with our preset</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-lg">
            {/* Before Image */}
            <img
              src={preset.beforeImage || "/placeholder.svg?height=800&width=600"}
              alt="Before"
              className="w-full h-auto"
            />

            {/* After Image with clip-path */}
            <div
              className="absolute top-0 left-0 w-full h-full overflow-hidden"
              style={{
                clipPath: `polygon(${sliderPosition}% 0%, 100% 0%, 100% 100%, ${sliderPosition}% 100%)`,
              }}
            >
              <img
                src={preset.afterImage || "/placeholder.svg?height=800&width=600"}
                alt="After"
                className="w-full h-auto"
              />
            </div>

            {/* Slider Line */}
            <div className="absolute top-0 bottom-0 w-0.5 bg-white" style={{ left: `${sliderPosition}%` }}>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-2 border-gray-300 cursor-pointer"></div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-sm">Before</div>
            <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded text-sm">After</div>
          </div>

          {/* Slider Control */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={handleSliderChange}
            className="w-full mt-4 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          />
        </motion.div>
      </div>
    </div>
  )
}
