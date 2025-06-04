"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Settings, Play } from "lucide-react"
import type { LUT } from "@/lib/luts"

interface LUTInstructionsProps {
  lut: LUT
}

export function LUTInstructions({ lut }: LUTInstructionsProps) {
  const steps = [
    {
      icon: Download,
      title: "Download LUT Package",
      description: "Download and extract the LUT files to your computer",
    },
    {
      icon: FileText,
      title: "Locate LUTs Folder",
      description: "Find your editing software's LUTs directory",
    },
    {
      icon: Settings,
      title: "Apply in Lumetri Color",
      description: lut.instructions,
    },
    {
      icon: Play,
      title: "Fine-tune Settings",
      description: "Adjust intensity and other parameters as needed",
    },
  ]

  return (
    <div className="bg-[#121212] py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Installation Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#fc3c44] rounded-full flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1 text-white">{step.title}</h4>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Badge variant="outline" className="border-gray-600 text-gray-300">
                        {index + 1}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gray-800 rounded-lg">
                <h4 className="font-medium mb-2 text-white">Pro Tips</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Always work with properly exposed footage for best results</li>
                  <li>• Start with 75-85% LUT intensity and adjust as needed</li>
                  <li>• Apply color correction before adding the LUT</li>
                  <li>• Use masks for selective application when needed</li>
                  <li>• Test on different types of footage before final render</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
