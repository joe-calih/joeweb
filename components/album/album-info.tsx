"use client"

import { motion } from "framer-motion"
import { Calendar, Music, User, Building } from "lucide-react"

interface AlbumInfoProps {
  data: {
    releaseDate: string
    genre: string
    label: string
    producer: string
    totalTracks: number
    duration: string
  }
}

export function AlbumInfo({ data }: AlbumInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-[#1a1a1a] rounded-lg p-6 border border-[#333]"
    >
      <h3 className="text-lg font-semibold text-white mb-4">Album Information</h3>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Calendar className="w-4 h-4 text-[#fc3c44]" />
          <div>
            <p className="text-sm text-gray-400">Release Date</p>
            <p className="text-white">{new Date(data.releaseDate).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Music className="w-4 h-4 text-[#fc3c44]" />
          <div>
            <p className="text-sm text-gray-400">Genre</p>
            <p className="text-white">{data.genre}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Building className="w-4 h-4 text-[#fc3c44]" />
          <div>
            <p className="text-sm text-gray-400">Label</p>
            <p className="text-white">{data.label}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <User className="w-4 h-4 text-[#fc3c44]" />
          <div>
            <p className="text-sm text-gray-400">Producer</p>
            <p className="text-white">{data.producer}</p>
          </div>
        </div>

        <div className="pt-4 border-t border-[#333]">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-[#fc3c44]">{data.totalTracks}</p>
              <p className="text-sm text-gray-400">Tracks</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#fc3c44]">{data.duration}</p>
              <p className="text-sm text-gray-400">Duration</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
