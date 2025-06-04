"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Music, Users, ExternalLink } from "lucide-react"
import Image from "next/image"

const artists = [
  {
    name: "Sarah Johnson",
    genre: "Pop",
    location: "Los Angeles, CA",
    followers: "45.2K",
    image: "/placeholder.svg?height=120&width=120",
    verified: true,
    topTrack: "Midnight Dreams",
    monthlyListeners: "2.1M",
  },
  {
    name: "Marcus Rodriguez",
    genre: "Hip-Hop",
    location: "Atlanta, GA",
    followers: "78.5K",
    image: "/placeholder.svg?height=120&width=120",
    verified: true,
    topTrack: "City Lights",
    monthlyListeners: "3.4M",
  },
  {
    name: "Emma Chen",
    genre: "Electronic",
    location: "Berlin, Germany",
    followers: "32.1K",
    image: "/placeholder.svg?height=120&width=120",
    verified: false,
    topTrack: "Neon Pulse",
    monthlyListeners: "1.8M",
  },
  {
    name: "David Thompson",
    genre: "Rock",
    location: "London, UK",
    followers: "56.7K",
    image: "/placeholder.svg?height=120&width=120",
    verified: true,
    topTrack: "Thunder Road",
    monthlyListeners: "2.9M",
  },
  {
    name: "Luna Martinez",
    genre: "Jazz",
    location: "New York, NY",
    followers: "23.4K",
    image: "/placeholder.svg?height=120&width=120",
    verified: false,
    topTrack: "Blue Moon",
    monthlyListeners: "890K",
  },
  {
    name: "Alex Kim",
    genre: "Classical",
    location: "Vienna, Austria",
    followers: "19.8K",
    image: "/placeholder.svg?height=120&width=120",
    verified: true,
    topTrack: "Symphony No. 1",
    monthlyListeners: "654K",
  },
]

export function MembersDirectory() {
  return (
    <div className="w-full bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Artist <span className="text-[#fc3c44]">Directory</span>
          </h2>
          <p className="text-xl text-gray-300">Browse and connect with talented artists</p>
        </motion.div>

        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          ></motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <motion.div
                key={artist.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#1a1a1a] border-[#333] hover:border-[#fc3c44] transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative">
                        <Image
                          src={artist.image || "/placeholder.svg"}
                          alt={artist.name}
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                        {artist.verified && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#fc3c44] rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-1">{artist.name}</h3>
                        <Badge variant="secondary" className="mb-2">
                          {artist.genre}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-400 mb-2">
                          <MapPin className="w-3 h-3 mr-1" />
                          {artist.location}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Monthly Listeners</span>
                        <span className="text-white font-medium">{artist.monthlyListeners}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Followers</span>
                        <span className="text-white font-medium">{artist.followers}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Top Track</span>
                        <span className="text-white font-medium">{artist.topTrack}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-[#fc3c44] hover:bg-[#e63946]">
                        <Music className="w-3 h-3 mr-1" />
                        Listen
                      </Button>
                      <Button size="sm" variant="outline" className="border-[#333] text-white hover:bg-[#333]">
                        <Users className="w-3 h-3 mr-1" />
                        Follow
                      </Button>
                      <Button size="sm" variant="outline" className="border-[#333] text-white hover:bg-[#333]">
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" className="border-[#333] text-white hover:bg-[#333]">
              Load More Artists
            </Button>
          </motion.div>
        </Section>
      </div>
    </div>
  )
}
