"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { LightroomPreset } from "@/lib/lightroom-presets"

interface PresetDetailsProps {
  preset: LightroomPreset
}

export function PresetDetails({ preset }: PresetDetailsProps) {
  const [activeTab, setActiveTab] = useState("adjustments")

  return (
    <div className="bg-[#121212] py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <Tabs defaultValue="adjustments" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="bg-[#1a1a1a] border-b border-[#333] w-full justify-start rounded-none h-auto p-0">
            <TabsTrigger
              value="adjustments"
              className={`px-6 py-4 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#fc3c44] data-[state=active]:text-white data-[state=active]:shadow-none text-gray-400`}
            >
              Adjustments
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
            <TabsContent value="adjustments" className="mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Basic Adjustments</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-400">Exposure</span>
                          <span className="text-white">+0.3</span>
                        </div>
                        <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                          <div className="h-full bg-white w-3/5"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-400">Contrast</span>
                          <span className="text-white">+20</span>
                        </div>
                        <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                          <div className="h-full bg-white w-2/3"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-400">Highlights</span>
                          <span className="text-white">-15</span>
                        </div>
                        <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                          <div className="h-full bg-white w-2/5"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-400">Shadows</span>
                          <span className="text-white">+25</span>
                        </div>
                        <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                          <div className="h-full bg-white w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Color</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-400">Vibrance</span>
                          <span className="text-white">+15</span>
                        </div>
                        <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-gray-500 to-pink-500 w-3/5"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-400">Saturation</span>
                          <span className="text-white">+8</span>
                        </div>
                        <div className="h-2 bg-[#333] rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-gray-500 to-red-500 w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Tone Curve</h3>
                    <div className="bg-[#1a1a1a] p-4 rounded-lg">
                      <div className="h-32 bg-gradient-to-tr from-black via-gray-600 to-white rounded"></div>
                      <p className="text-gray-400 text-sm mt-2">Custom S-curve for enhanced contrast</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Split Toning</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#1a1a1a] p-4 rounded-lg">
                        <h4 className="text-white mb-2">Highlights</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Hue</span>
                            <span className="text-white">45°</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Saturation</span>
                            <span className="text-white">12</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#1a1a1a] p-4 rounded-lg">
                        <h4 className="text-white mb-2">Shadows</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Hue</span>
                            <span className="text-white">220°</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Saturation</span>
                            <span className="text-white">8</span>
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
                  <h3 className="text-xl font-semibold text-white mb-4">Desktop</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Lightroom Classic CC
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Lightroom CC
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Lightroom 6
                    </li>
                  </ul>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">Mobile</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Lightroom Mobile (iOS)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Lightroom Mobile (Android)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                      Free version (Limited)
                    </li>
                  </ul>
                </div>

                <div className="bg-[#1a1a1a] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">File Formats</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      RAW Files (Recommended)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      JPEG Files
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      TIFF Files
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
                      .xmp preset files (Lightroom Classic)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-[#fc3c44] rounded-full mr-2"></span>
                      .dng preset files (Lightroom CC/Mobile)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-[#fc3c44] rounded-full mr-2"></span>
                      Installation guide PDF
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-[#fc3c44] rounded-full mr-2"></span>
                      Video tutorial
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">License</h3>
                  <div className="bg-[#1a1a1a] p-6 rounded-lg">
                    <p className="text-gray-300 mb-4">
                      This preset pack includes a standard license for both personal and commercial use. You may use
                      these presets in unlimited projects without attribution.
                    </p>
                    <p className="text-gray-300">
                      Redistribution or resale of these presets is strictly prohibited. For extended licensing options,
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
                        <li>• RAW format images</li>
                        <li>• Properly exposed photos</li>
                        <li>• Adobe RGB color space</li>
                        <li>• High resolution images</li>
                      </ul>
                    </div>
                    <div className="bg-[#1a1a1a] p-6 rounded-lg">
                      <h4 className="text-white font-medium mb-2">Not Recommended</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Heavily processed images</li>
                        <li>• Extremely under/overexposed photos</li>
                        <li>• Low resolution images</li>
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
