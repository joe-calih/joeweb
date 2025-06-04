"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ShoppingCart, Share2 } from "lucide-react"
import type { LightroomPreset } from "@/lib/lightroom-presets"

interface PresetSidebarProps {
  preset: LightroomPreset
}

export function PresetSidebar({ preset }: PresetSidebarProps) {
  const [showPurchase, setShowPurchase] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowPurchase(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sidebarRef.current) {
      observer.observe(sidebarRef.current)
    }

    return () => {
      if (sidebarRef.current) {
        observer.unobserve(sidebarRef.current)
      }
    }
  }, [])

  return (
    <div ref={sidebarRef} className="relative">
      <div className="sticky top-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {showPurchase && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="bg-[#1a1a1a] rounded-lg p-6 overflow-hidden"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Purchase</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl font-bold text-white">${preset.price}</div>
                {preset.originalPrice && (
                  <div className="text-lg text-gray-400 line-through">${preset.originalPrice}</div>
                )}
              </div>
              <div className="space-y-3">
                <Button className="w-full bg-[#fc3c44] hover:bg-[#e63946] text-white">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="w-full border-[#333] text-white hover:bg-[#333]">
                  <Download className="w-4 h-4 mr-2" />
                  Download Demo
                </Button>
              </div>
            </motion.div>
          )}

          <div className="bg-[#1a1a1a] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Information</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm">Author</p>
                <p className="text-white">{preset.author}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Released</p>
                <p className="text-white">{preset.datePublished}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Category</p>
                <p className="text-white">{preset.category}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">File Size</p>
                <p className="text-white">{preset.fileSize}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Compatibility</p>
                <p className="text-white">{preset.compatibility}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Mood</h3>
            <Badge variant="secondary" className="bg-[#333] hover:bg-[#444] text-white">
              {preset.mood}
            </Badge>
          </div>

          <div className="bg-[#1a1a1a] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Share</h3>
            <Button variant="outline" className="w-full border-[#333] text-white hover:bg-[#333]">
              <Share2 className="w-4 h-4 mr-2" />
              Share Preset
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
