"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Play, Heart, Share2, Download, ExternalLink } from "lucide-react"
import Link from "next/link"

interface AlbumActionsProps {
  data: {
    title: string
    artist: string
    price: string
    streamingLinks: {
      spotify: string
      appleMusic: string
      amazonMusic?: string
      youtubeMusic?: string
      youtube?: string
      soundcloud?: string
      deezer?: string
      tidal?: string
      pandora?: string
      anghami?: string
      shazam?: string
    }
    appleMusicEmbed?: string
  }
}

const streamingPlatforms = [
  { name: "Spotify", key: "spotify", color: "#1DB954" },
  { name: "Apple Music", key: "appleMusic", color: "#FA243C" },
  { name: "Amazon Music", key: "amazonMusic", color: "#FF9900" },
  { name: "YouTube Music", key: "youtubeMusic", color: "#FF0000" },
  { name: "YouTube", key: "youtube", color: "#FF0000" },
  { name: "SoundCloud", key: "soundcloud", color: "#FF5500" },
  { name: "Deezer", key: "deezer", color: "#FEAA2D" },
  { name: "Tidal", key: "tidal", color: "#000000" },
  { name: "Pandora", key: "pandora", color: "#005483" },
  { name: "Anghami", key: "anghami", color: "#8B5CF6" },
  { name: "Shazam", key: "shazam", color: "#0066FF" },
]

export function AlbumActions({ data }: AlbumActionsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="space-y-6"
    >
      {/* Apple Music Embed */}
      {data.appleMusicEmbed && (
        <Card className="bg-[#1a1a1a] border-[#333] overflow-hidden">
          <CardContent className="p-0">
            <iframe
              src={data.appleMusicEmbed}
              width="100%"
              height="450"
              frameBorder="0"
              allow="autoplay *; encrypted-media *; fullscreen *"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              className="rounded-lg"
            />
          </CardContent>
        </Card>
      )}

      {/* Purchase & Actions */}
      <Card className="bg-[#1a1a1a] border-[#333]">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-2xl font-bold text-[#fc3c44]">{data.price}</p>
              <p className="text-sm text-gray-400">Digital Download</p>
            </div>
            <Button className="bg-[#fc3c44] hover:bg-[#e63946] text-white">
              <Download className="w-4 h-4 mr-2" />
              Buy Now
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Button variant="outline" size="sm" className="border-[#333] text-gray-300 hover:bg-[#333]">
              <Play className="w-4 h-4 mr-1" />
              Play
            </Button>
            <Button variant="outline" size="sm" className="border-[#333] text-gray-300 hover:bg-[#333]">
              <Heart className="w-4 h-4 mr-1" />
              Like
            </Button>
            <Button variant="outline" size="sm" className="border-[#333] text-gray-300 hover:bg-[#333]">
              <Share2 className="w-4 h-4 mr-1" />
              Share
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Streaming Links */}
      <Card className="bg-[#1a1a1a] border-[#333]">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Listen On</h3>
          <div className="space-y-2">
            {streamingPlatforms.map((platform) => {
              const link = data.streamingLinks[platform.key as keyof typeof data.streamingLinks]
              if (!link) return null

              return (
                <Link
                  key={platform.key}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-[#2a2a2a] hover:bg-[#333] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: platform.color }} />
                    <span className="text-white font-medium">{platform.name}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </Link>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
