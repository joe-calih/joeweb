"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, ShoppingCart, Share2 } from "lucide-react"
import type { LUT } from "@/lib/luts"

interface LUTSidebarProps {
  lut: LUT
}

export function LUTSidebar({ lut }: LUTSidebarProps) {
  const [showPurchase, setShowPurchase] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)
  const purchaseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create an Intersection Observer to detect when the sidebar enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When sidebar enters viewport, show purchase section
        if (entry.isIntersecting) {
          setShowPurchase(true)
        }
      },
      { threshold: 0.1 }, // Trigger when 10% of the element is visible
    )

    // Start observing the sidebar
    if (sidebarRef.current) {
      observer.observe(sidebarRef.current)
    }

    return () => {
      // Clean up observer on component unmount
      if (sidebarRef.current) {
        observer.unobserve(sidebarRef.current)
      }
    }
  }, [])

  return (
    <div ref={sidebarRef} className="relative">
      {/* Sticky container */}
      <div className="sticky top-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          {/* Purchase section - conditionally shown */}
          {showPurchase && (
            <motion.div
              ref={purchaseRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="bg-[#1a1a1a] rounded-lg p-6 overflow-hidden"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Purchase</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl font-bold text-white">${lut.price}</div>
                {lut.originalPrice && <div className="text-lg text-gray-400 line-through">${lut.originalPrice}</div>}
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
                <p className="text-white">{lut.author}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Released</p>
                <p className="text-white">{lut.dateCreated}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Category</p>
                <p className="text-white">{lut.category}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">File Size</p>
                <p className="text-white">{lut.fileSize}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Format</p>
                <p className="text-white">{lut.format || ".cube, .3dl, .look"}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {lut.tags?.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-[#333] hover:bg-[#444] text-white">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Share</h3>
            <Button variant="outline" className="w-full border-[#333] text-white hover:bg-[#333]">
              <Share2 className="w-4 h-4 mr-2" />
              Share LUT
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
