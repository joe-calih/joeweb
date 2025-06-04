"use client"

import { motion } from "framer-motion"
import { Search, Filter, SortAsc } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface AlbumListingHeaderProps {
  totalAlbums: number
}

export function AlbumListingHeader({ totalAlbums }: AlbumListingHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Music Albums</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Discover amazing albums from talented artists around the world. Stream, download, and support independent
          music.
        </p>
        <p className="text-sm text-gray-500 mt-2">{totalAlbums} albums available</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search albums..."
            className="pl-10 bg-[#1a1a1a] border-[#333] text-white placeholder-gray-400"
          />
        </div>

        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-[140px] bg-[#1a1a1a] border-[#333] text-white">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Genre" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-[#333]">
              <SelectItem value="all">All Genres</SelectItem>
              <SelectItem value="electronic">Electronic</SelectItem>
              <SelectItem value="hip-hop">Hip Hop</SelectItem>
              <SelectItem value="indie">Indie</SelectItem>
              <SelectItem value="jazz">Jazz</SelectItem>
              <SelectItem value="world">World Music</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[140px] bg-[#1a1a1a] border-[#333] text-white">
              <SortAsc className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-[#1a1a1a] border-[#333]">
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="title">Title A-Z</SelectItem>
              <SelectItem value="artist">Artist A-Z</SelectItem>
              <SelectItem value="price">Price</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </motion.div>
  )
}
