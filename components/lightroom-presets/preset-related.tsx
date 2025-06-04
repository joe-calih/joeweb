"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import type { LightroomPreset } from "@/lib/lightroom-presets"

interface PresetRelatedProps {
  presets: LightroomPreset[]
  currentPresetSlug: string
}

export function PresetRelated({ presets, currentPresetSlug }: PresetRelatedProps) {
  // Filter out the current preset and get up to 4 related presets
  const relatedPresets = presets.filter((preset) => preset.slug !== currentPresetSlug).slice(0, 4)

  return (
    <div className="bg-[#121212] py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Related Presets</h2>
          <p className="text-gray-400">You might also like these Lightroom presets</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedPresets.map((preset, index) => (
            <motion.div
              key={preset.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/lightroom-presets/${preset.slug}`}>
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={preset.previewImage || "/placeholder.svg"}
                    alt={preset.title}
                    className="w-full aspect-square object-cover"
                  />
                  {preset.featured && (
                    <div className="absolute top-2 left-2">
                      <Badge variant="outline" className="border-white text-white bg-black/40">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-white group-hover:text-[#fc3c44] transition-colors line-clamp-1 text-base">
                    {preset.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{preset.author}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>${preset.price}</span>
                    <span>•</span>
                    <span>{preset.fileSize}</span>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-1">{preset.mood}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
