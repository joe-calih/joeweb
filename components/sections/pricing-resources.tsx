"use client"

import { motion } from "framer-motion"
import { Music, Camera, Palette, Mic, Headphones, BookOpen, Video, AudioWaveformIcon as Waveform } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PricingResources() {
  const resources = [
    {
      icon: Music,
      title: "Music Samples",
      description: "High-quality samples across all genres",
      items: [
        "Hip-hop beats and loops",
        "Electronic music stems",
        "Acoustic instruments",
        "Percussion and drums",
        "Ambient soundscapes",
        "World music elements",
      ],
      color: "from-[#fc3c44] to-[#e63946]",
      bgColor: "bg-[#fc3c44]/10",
      borderColor: "border-[#fc3c44]/20",
    },
    {
      icon: Camera,
      title: "Lightroom Presets",
      description: "Professional photo editing presets",
      items: [
        "Portrait enhancement",
        "Landscape photography",
        "Street photography",
        "Wedding presets",
        "Film emulation",
        "Vintage effects",
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: Palette,
      title: "LUTs & Color Grading",
      description: "Cinematic color grading lookup tables",
      items: [
        "Cinematic film looks",
        "Vintage color grades",
        "Modern clean styles",
        "Horror/thriller moods",
        "Sunset/golden hour",
        "Cyberpunk aesthetics",
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: Mic,
      title: "Vocal Samples",
      description: "Professional vocal recordings and chops",
      items: [
        "Lead vocal melodies",
        "Harmony stacks",
        "Vocal chops and cuts",
        "Adlibs and effects",
        "Spoken word samples",
        "Choir arrangements",
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      icon: Headphones,
      title: "Plugin Presets",
      description: "Ready-to-use presets for popular plugins",
      items: [
        "Serum wavetables",
        "Massive X presets",
        "Kontakt instruments",
        "Ableton Live racks",
        "Logic Pro channel EQs",
        "Pro Tools templates",
      ],
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
    },
    {
      icon: BookOpen,
      title: "Tutorials & Courses",
      description: "Learn from industry professionals",
      items: [
        "Music production basics",
        "Advanced mixing techniques",
        "Photo editing workflows",
        "Video color grading",
        "Business and marketing",
        "Industry insights",
      ],
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
    },
    {
      icon: Video,
      title: "Video Templates",
      description: "Motion graphics and video templates",
      items: [
        "After Effects templates",
        "Premiere Pro presets",
        "DaVinci Resolve projects",
        "Motion graphics elements",
        "Lower thirds and titles",
        "Transition effects",
      ],
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
    },
    {
      icon: Waveform,
      title: "Audio Plugins",
      description: "Exclusive plugins and sound libraries",
      items: [
        "Custom synthesizers",
        "Effect processors",
        "Sample libraries",
        "Drum machines",
        "Ambient generators",
        "Vocal processors",
      ],
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-500/20",
    },
  ]

  return (
    <div className="w-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] relative">
      <div className="max-w-[1400px] mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fc3c44] to-purple-500">Create</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access our comprehensive library of premium creative resources, updated weekly with fresh content
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon
            return (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-[#1a1a1a]/50 backdrop-blur-sm border-[#333] hover:border-[#fc3c44]/50 transition-all duration-300 h-full group-hover:scale-105">
                  <CardHeader className="pb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${resource.bgColor} ${resource.borderColor} border flex items-center justify-center mb-4`}
                    >
                      <IconComponent
                        className={`w-6 h-6 bg-gradient-to-r ${resource.color} bg-clip-text text-transparent`}
                      />
                    </div>
                    <CardTitle className="text-white text-xl mb-2">{resource.title}</CardTitle>
                    <p className="text-gray-400 text-sm">{resource.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {resource.items.map((item, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${resource.color}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#fc3c44]/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-[#fc3c44]/20">
            <h3 className="text-2xl font-bold text-white mb-4">New Content Every Week</h3>
            <p className="text-gray-300 mb-6">
              Our team of professional creators adds fresh samples, presets, and tutorials weekly to keep your creative
              toolkit current
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-[#fc3c44]/20 text-[#fc3c44] px-3 py-1 rounded-full">50+ New Samples Weekly</span>
              <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">25+ New Presets Weekly</span>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">10+ New LUTs Weekly</span>
              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">5+ New Tutorials Weekly</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
