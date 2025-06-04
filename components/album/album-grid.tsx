"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Heart, ShoppingCart, Calendar, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Album {
  title: string
  artist: string
  slug: string
  cover: string
  releaseDate: string
  genre: string
  price: string
  description: string
}

interface AlbumGridProps {
  albums: Album[]
}

const ITEMS_PER_PAGE = 6

export function AlbumGrid({ albums }: AlbumGridProps) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(albums.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentAlbums = albums.slice(startIndex, endIndex)

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentAlbums.map((album, index) => (
          <motion.div
            key={album.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-[#1a1a1a] border-[#333] overflow-hidden hover:border-[#fc3c44] transition-all duration-300 group">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={album.cover || "/placeholder.svg"}
                  alt={album.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#fc3c44] hover:bg-[#e63946]"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Preview
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <Link href={`/album/${album.slug}`}>
                    <h3 className="text-xl font-bold text-white hover:text-[#fc3c44] transition-colors cursor-pointer mb-1">
                      {album.title}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                    <User className="w-3 h-3" />
                    <span>{album.artist}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(album.releaseDate).getFullYear()}</span>
                    </div>
                    <span className="px-2 py-1 bg-[#fc3c44] bg-opacity-20 text-[#fc3c44] rounded-full">
                      {album.genre}
                    </span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{album.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#fc3c44]">{album.price}</span>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-[#fc3c44] hover:bg-[#e63946]">
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Buy
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="border-[#333] text-white hover:bg-[#333]"
          >
            Previous
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              onClick={() => setCurrentPage(page)}
              className={
                currentPage === page ? "bg-[#fc3c44] hover:bg-[#e63946]" : "border-[#333] text-white hover:bg-[#333]"
              }
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="border-[#333] text-white hover:bg-[#333]"
          >
            Next
          </Button>
        </div>
      )}
    </div>
  )
}
