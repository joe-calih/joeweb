"use client"

import { motion } from "framer-motion"
import { Play, Heart, MoreHorizontal, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AlbumTrackListProps {
  content: string
  albumSlug: string
}

export function AlbumTrackList({ content, albumSlug }: AlbumTrackListProps) {
  // Parse tracks from markdown content
  const trackMatches =
    content.match(/\d+\.\s\*\*(.*?)\*\*.*?-.*?(\d+:\d+).*?-.*?\*(.*?)\*.*?-.*?(\d+)\sBPM(.*?)(?=\n|$)/g) || []

  const tracks = trackMatches.map((track, index) => {
    const match = track.match(/(\d+)\.\s\*\*(.*?)\*\*.*?-.*?(\d+:\d+).*?-.*?\*(.*?)\*.*?-.*?(\d+)\sBPM(.*?)$/)
    const featMatch = track.match(/\*feat\.\s(.*?)\*/)

    return {
      number: match?.[1] || (index + 1).toString(),
      title: match?.[2] || `Track ${index + 1}`,
      duration: match?.[3] || "0:00",
      genre: match?.[4] || "Unknown",
      bpm: match?.[5] || "0",
      featuring: featMatch?.[1] || null,
    }
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Track List</h2>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Clock className="w-4 h-4" />
          <span>Duration</span>
        </div>
      </div>

      <div className="space-y-1">
        {tracks.map((track, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group flex items-center gap-4 p-3 rounded-lg hover:bg-[#1a1a1a] transition-colors cursor-pointer"
          >
            <div className="w-8 text-center">
              <span className="text-gray-400 group-hover:hidden">{track.number}</span>
              <Button variant="ghost" size="sm" className="hidden group-hover:flex w-8 h-8 p-0 hover:bg-[#fc3c44]">
                <Play className="w-3 h-3" />
              </Button>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-white group-hover:text-[#fc3c44] transition-colors truncate">
                {track.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>{track.genre}</span>
                <span>•</span>
                <span>{track.bpm} BPM</span>
                {track.featuring && (
                  <>
                    <span>•</span>
                    <span>feat. {track.featuring}</span>
                  </>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="w-4 h-4" />
              </Button>
              <span className="text-gray-400 text-sm w-12 text-right">{track.duration}</span>
              <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
