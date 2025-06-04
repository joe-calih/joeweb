"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from "lucide-react"
import type { LUT } from "@/lib/luts"

interface LUTBeforeAfterProps {
  lut: LUT
}

export function LUTBeforeAfter({ lut }: LUTBeforeAfterProps) {
  const [showAfter, setShowAfter] = useState(true)

  return (
    <div className="bg-[#121212] py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Before & After Comparison</CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowAfter(!showAfter)}
                  className="flex items-center gap-2 border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  {showAfter ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  {showAfter ? "Show Before" : "Show After"}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Before Image */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-300">Before</h4>
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <img
                      src={lut.beforeImage || "/placeholder.svg"}
                      alt="Before applying LUT"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-black/70 text-white px-2 py-1 rounded text-sm">Original</span>
                    </div>
                  </div>
                </div>

                {/* After Image */}
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-300">After</h4>
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <img
                      src={lut.afterImage || "/placeholder.svg"}
                      alt="After applying LUT"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#fc3c44] text-white px-2 py-1 rounded text-sm">With LUT</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Comparison */}
              <div className="mt-8">
                <h4 className="font-medium mb-4 text-white">Interactive Preview</h4>
                <div className="relative aspect-video rounded-lg overflow-hidden cursor-pointer">
                  <motion.img
                    src={showAfter ? lut.afterImage : lut.beforeImage}
                    alt={showAfter ? "After applying LUT" : "Before applying LUT"}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2 py-1 rounded text-sm text-white ${showAfter ? "bg-[#fc3c44]" : "bg-black/70"}`}
                    >
                      {showAfter ? "With LUT Applied" : "Original Footage"}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <Button
                      size="sm"
                      onClick={() => setShowAfter(!showAfter)}
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                    >
                      Toggle View
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
