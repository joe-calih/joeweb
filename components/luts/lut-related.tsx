"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import type { LUT } from "@/lib/luts"

interface LUTRelatedProps {
  luts: LUT[]
  currentLutId: string
}

export function LUTRelated({ luts, currentLutId }: LUTRelatedProps) {
  // Filter out the current LUT and get up to 4 related LUTs
  const relatedLuts = luts.filter((lut) => lut.id !== currentLutId).slice(0, 4)

  return (
    <div className="bg-[#121212] py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Related LUTs</h2>
          <p className="text-gray-400">You might also like these color grading presets</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedLuts.map((lut, index) => (
            <motion.div
              key={lut.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/luts/${lut.slug}`}>
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={lut.previewImage || "/placeholder.svg"}
                    alt={lut.title}
                    className="w-full aspect-square object-cover"
                  />
                  {lut.featured && (
                    <div className="absolute top-2 left-2">
                      <Badge variant="outline" className="border-white text-white bg-black/40">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-white group-hover:text-[#fc3c44] transition-colors line-clamp-1 text-base">
                    {lut.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{lut.author}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>${lut.price}</span>
                    <span>•</span>
                    <span>{lut.fileSize}</span>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-1">{lut.mood}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
