"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Play, Users, Music } from "lucide-react"
import Image from "next/image"

const artists = [
  {
    name: "Luna Martinez",
    genre: "Electronic Pop",
    image: "/placeholder.svg?height=120&width=120",
    followers: "2.3M",
    verified: true,
  },
  {
    name: "Marcus Chen",
    genre: "Hip Hop",
    image: "/placeholder.svg?height=120&width=120",
    followers: "1.8M",
    verified: true,
  },
  {
    name: "Sofia Rodriguez",
    genre: "Indie Rock",
    image: "/placeholder.svg?height=120&width=120",
    followers: "950K",
    verified: true,
  },
  {
    name: "Alex Thompson",
    genre: "Jazz Fusion",
    image: "/placeholder.svg?height=120&width=120",
    followers: "1.2M",
    verified: true,
  },
  {
    name: "Maya Patel",
    genre: "World Music",
    image: "/placeholder.svg?height=120&width=120",
    followers: "780K",
    verified: true,
  },
]

export function LandingArtistsCollaboration() {
  return (
    <Section className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Collaborate with Top Artists Worldwide</h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Connect with talented musicians, producers, and creators from around the globe. Share ideas, create
            together, and build lasting professional relationships that elevate your music career.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-[#fc3c44] hover:bg-[#e63946] text-white">
              <Users className="w-5 h-5 mr-2" />
              Join Community
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#fc3c44] text-[#fc3c44] hover:bg-[#fc3c44] hover:text-white"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Music className="w-4 h-4 text-[#fc3c44]" />
              <span>50K+ Active Artists</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#fc3c44]" />
              <span>10K+ Collaborations</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid grid-cols-5 gap-4">
            {artists.map((artist, index) => (
              <motion.div
                key={artist.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-[#2a2a2a] p-4 hover:bg-[#333] transition-all duration-300 cursor-pointer">
                  <div className="relative w-full aspect-square mb-3">
                    <Image
                      src={artist.image || "/placeholder.svg"}
                      alt={artist.name}
                      fill
                      className="rounded-xl object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {artist.verified && (
                      <div className="absolute top-2 right-2 w-4 h-4 bg-[#fc3c44] rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    )}
                  </div>

                  <div className="text-center">
                    <h3 className="font-semibold text-white text-sm mb-1 truncate">{artist.name}</h3>
                    <p className="text-xs text-gray-400 mb-2 truncate">{artist.genre}</p>
                    <p className="text-xs text-[#fc3c44] font-medium">{artist.followers}</p>
                  </div>

                  <div className="absolute inset-0 bg-[#fc3c44] bg-opacity-0 group-hover:bg-opacity-10 rounded-2xl transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#fc3c44] bg-opacity-20 rounded-full blur-xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#fc3c44] bg-opacity-10 rounded-full blur-xl" />
        </motion.div>
      </div>
    </Section>
  )
}
