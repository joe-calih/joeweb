"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Music, Headphones, Zap } from "lucide-react"

interface SamplePackContentProps {
  samplePack: {
    title: string
    genre: string
    description: string
  }
}

export function SamplePackContent({ samplePack }: SamplePackContentProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="space-y-8">
      {/* Expandable Content Section */}
      <Card className="bg-[#1a1a1a] border-[#333] overflow-hidden">
        <CardContent className="p-0">
          <Button
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full p-6 text-left hover:bg-white/5 transition-colors duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">About This Sample Pack</h3>
                <p className="text-gray-400">Learn more about the production and inspiration</p>
              </div>
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </div>
          </Button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 space-y-6">
                  {/* Production Story */}
                  <div className="prose prose-invert max-w-none">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Music className="w-5 h-5 text-[#fc3c44]" />
                      Production Story
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      This {samplePack.genre.toLowerCase()} sample pack was meticulously crafted in our state-of-the-art
                      studio, drawing inspiration from the golden era of {samplePack.genre.toLowerCase()} music while
                      incorporating modern production techniques. Each sample has been carefully processed through
                      vintage analog equipment to achieve that warm, authentic sound that producers crave.
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-[#fc3c44]" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#fc3c44] rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h5 className="font-medium text-white">Professional Quality</h5>
                            <p className="text-sm text-gray-400">24-bit/44.1kHz WAV files for maximum audio fidelity</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#fc3c44] rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h5 className="font-medium text-white">Royalty-Free</h5>
                            <p className="text-sm text-gray-400">
                              Use in commercial releases without additional licensing fees
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#fc3c44] rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h5 className="font-medium text-white">Tempo Labeled</h5>
                            <p className="text-sm text-gray-400">All samples clearly marked with BPM for easy mixing</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#fc3c44] rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h5 className="font-medium text-white">Key Information</h5>
                            <p className="text-sm text-gray-400">Musical key notation for harmonic compatibility</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#fc3c44] rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h5 className="font-medium text-white">Organized Structure</h5>
                            <p className="text-sm text-gray-400">Categorized folders for drums, melodies, and FX</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#fc3c44] rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <h5 className="font-medium text-white">Bonus Content</h5>
                            <p className="text-sm text-gray-400">Includes MIDI files and project stems</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Usage Tips */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Headphones className="w-5 h-5 text-[#fc3c44]" />
                      Production Tips
                    </h4>
                    <div className="bg-black/30 rounded-lg p-4 space-y-3">
                      <p className="text-gray-300">
                        <strong className="text-white">Layering:</strong> Combine multiple drum samples to create unique
                        rhythmic patterns and add depth to your beats.
                      </p>
                      <p className="text-gray-300">
                        <strong className="text-white">Processing:</strong> Apply subtle EQ and compression to blend
                        samples seamlessly with your existing tracks.
                      </p>
                      <p className="text-gray-300">
                        <strong className="text-white">Creativity:</strong> Don't be afraid to pitch-shift, reverse, or
                        chop samples to create entirely new sounds.
                      </p>
                    </div>
                  </div>

                  {/* Technical Specifications */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Technical Specifications</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="bg-black/30 rounded-lg p-3 text-center">
                        <div className="font-semibold text-white">Format</div>
                        <div className="text-gray-400">WAV/AIFF</div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-3 text-center">
                        <div className="font-semibold text-white">Sample Rate</div>
                        <div className="text-gray-400">44.1kHz</div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-3 text-center">
                        <div className="font-semibold text-white">Bit Depth</div>
                        <div className="text-gray-400">24-bit</div>
                      </div>
                      <div className="bg-black/30 rounded-lg p-3 text-center">
                        <div className="font-semibold text-white">Compatibility</div>
                        <div className="text-gray-400">All DAWs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  )
}
