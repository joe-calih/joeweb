"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Palette, Thermometer, Sun, Moon, Contrast } from "lucide-react"
import type { LUT } from "@/lib/luts"

interface LUTInfoProps {
  lut: LUT
}

export function LUTInfo({ lut }: LUTInfoProps) {
  return (
    <div className="bg-[#121212] py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Technical Specifications */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Palette className="w-5 h-5 text-[#fc3c44]" />
                  Color Specifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400 flex items-center gap-2">
                    <Thermometer className="w-4 h-4" />
                    Color Temperature
                  </span>
                  <span className="font-medium text-white">{lut.colorTemp}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400 flex items-center gap-2">
                    <Contrast className="w-4 h-4" />
                    Contrast
                  </span>
                  <span className="font-medium text-white">{lut.contrast}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Saturation</span>
                  <span className="font-medium text-white">{lut.saturation}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400 flex items-center gap-2">
                    <Sun className="w-4 h-4" />
                    Highlights
                  </span>
                  <span className="font-medium text-white">{lut.highlights}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400 flex items-center gap-2">
                    <Moon className="w-4 h-4" />
                    Shadows
                  </span>
                  <span className="font-medium text-white">{lut.shadows}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Compatibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Monitor className="w-5 h-5 text-[#fc3c44]" />
                  Compatibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {lut.compatibility.map((software) => (
                    <div key={software} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm text-gray-300">{software}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <h4 className="font-medium mb-3 text-white">Download Formats</h4>
                  <div className="flex flex-wrap gap-2">
                    {lut.downloadFormat.map((format) => (
                      <Badge key={format} variant="outline" className="border-gray-600 text-gray-300">
                        {format}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tags & Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="text-sm text-gray-400">Author</span>
                  <p className="font-medium text-white">{lut.author}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">Release Date</span>
                  <p className="font-medium text-white">{new Date(lut.dateCreated).toLocaleDateString()}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400">File Size</span>
                  <p className="font-medium text-white">{lut.fileSize}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-400 block mb-2">Tags</span>
                  <div className="flex flex-wrap gap-2">
                    {lut.tags.map((tag) => (
                      <Badge key={tag} className="bg-gray-800 text-gray-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
