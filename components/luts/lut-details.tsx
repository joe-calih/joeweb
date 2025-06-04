"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { LUT } from "@/lib/luts"

interface LUTDetailsProps {
  lut: LUT
}

export function LUTDetails({ lut }: LUTDetailsProps) {
  const [activeTab, setActiveTab] = useState("color")

  return (
    <div className="bg-[#121212] py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <Tabs defaultValue="color" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="bg-[#1a1a1a] border-b border-[#333] w-full justify-start rounded-none h-auto p-0">
            <TabsTrigger
              value="color"
              className={`px-6 py-4 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#fc3c44] data-[state=active]:text-white data-[state=active]:shadow-none text-gray-400`}
            >
              Color Specifications
            </TabsTrigger>
            <TabsTrigger
              value="compatibility"
              className={`px-6 py-4 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#fc3c44] data-[state=active]:text-white data-[state=active]:shadow-none text-gray-400`}
            >
              Compatibility
            </TabsTrigger>
            <TabsTrigger
              value="details"
              className={`px-6 py-4 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#fc3c44] data-[state=active]:text-white data-[state=active]:shadow-none text-gray-400`}
            >
              Details
            </TabsTrigger>
          </TabsList>

          <div className="mt-8">
            <TabsContent value="color" className="mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Color Temperature</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-400">Temperature</span>
                          <span className="text-white">{lut.colorSpecs?.temperature || "5600K"}</span>
                        </div>
                        <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-500 to-orange-500 w-3/4"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-400">Tint</span>
                          <span className="text-white">{lut.colorSpecs?.tint || "+5"}</span>
                        </div>
                        <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-500 to-purple-500 w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Tone</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-400">Exposure</span>
                          <span className="text-white">{lut.colorSpecs?.exposure || "+0.5"}</span>
                        </div>
                        <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                          <div className="h-full bg-white w-3/5"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-400">Contrast</span>
                          <span className="text-white">{lut.colorSpecs?.contrast || "+15"}</span>
                        </div>
                        <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                          <div className="h-full bg-white w-2/3"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-400">Highlights</span>
                          <span className="text-white">{lut.colorSpecs?.highlights || "-10"}</span>
                        </div>
                        <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                          <div className="h-full bg-white w-2/5"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-400">Shadows</span>
                          <span className="text-white">{lut.colorSpecs?.shadows || "+15"}</span>
                        </div>
                        <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                          <div className="h-full bg-white w-3/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Color</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-400">Vibrance</span>
                          <span className="text-white">{lut.colorSpecs?.vibrance || "+20"}</span>
                        </div>
                        <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-gray-500 to-pink-500 w-4/5"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-400">Saturation</span>
                          <span className="text-white">{lut.colorSpecs?.saturation || "+10"}</span>
                        </div>
                        <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-gray-500 to-red-500 w-3/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">HSL</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#1a1a1a] p-4 rounded-lg">
                        <h4 className="text-white mb-2">Orange</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Hue</span>
                            <span className="text-white">+5</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Saturation</span>
                            <span className="text-white">+15</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Luminance</span>
                            <span className="text-white">-5</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#1a1a1a] p-4 rounded-lg">
                        <h4 className="text-white mb-2">Teal</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Hue</span>
                            <span className="text-white">-10</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Saturation</span>
                            <span className="text-white">+20</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Luminance</span>
                            <span className="text-white">-5</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="compatibility" className="mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div className="bg-[#1a1a1a] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">Adobe</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Premiere Pro CC 2020+
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      After Effects CC 2020+
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Photoshop CC 2020+
                    </li>
                  </ul>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">Other NLEs</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      DaVinci Resolve 16+
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Final Cut Pro X
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                      Vegas Pro 17+ (Limited)
                    </li>
                  </ul>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">Mobile Apps</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      LumaFusion
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Adobe Premiere Rush
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      iMovie (Not Compatible)
                    </li>
                  </ul>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="details" className="mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Package Contents</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-[#fc3c44] rounded-full mr-2"></span>
                      .cube LUT files (Standard)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-[#fc3c44] rounded-full mr-2"></span>
                      .3dl LUT files (DaVinci Resolve)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-[#fc3c44] rounded-full mr-2"></span>
                      .look files (Adobe)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-[#fc3c44] rounded-full mr-2"></span>
                      PDF Installation Guide
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">License</h3>
                  <div className="bg-[#1a1a1a] p-6 rounded-lg">
                    <p className="text-gray-300 mb-4">
                      This LUT pack includes a standard license for both personal and commercial use. You may use these
                      LUTs in unlimited projects without attribution.
                    </p>
                    <p className="text-gray-300">
                      Redistribution or resale of these LUTs is strictly prohibited. For extended licensing options,
                      please contact us.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Technical Requirements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#1a1a1a] p-6 rounded-lg">
                      <h4 className="text-white font-medium mb-2">Recommended</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• 8-bit or 10-bit footage</li>
                        <li>• Rec.709 color space</li>
                        <li>• Properly exposed footage</li>
                        <li>• Log or flat profile (ideal)</li>
                      </ul>
                    </div>
                    <div className="bg-[#1a1a1a] p-6 rounded-lg">
                      <h4 className="text-white font-medium mb-2">Not Recommended</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Heavily stylized footage</li>
                        <li>• Already color graded material</li>
                        <li>• Extremely under/overexposed footage</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
