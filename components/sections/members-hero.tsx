"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Users, Search, Filter } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Input } from "@/components/ui/input"

export function MembersHero() {
  return (
    <Section background="gradient" padding="large">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 bg-[#fc3c44] rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <Users className="w-10 h-10 text-white" />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Artist <span className="text-[#fc3c44]">Community</span>
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Connect with talented artists from around the world. Discover new music, collaborate on projects, and grow
          your network in our vibrant community of creators.
        </motion.p>

        <motion.div
          className="max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search artists by name, genre, or location..."
                className="pl-10 bg-[#1a1a1a] border-[#333] text-white"
              />
            </div>
            <Button variant="outline" className="border-[#333] text-white hover:bg-[#333]">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {["All", "Pop", "Hip-Hop", "Electronic", "Rock", "Jazz", "Classical"].map((genre) => (
            <Button
              key={genre}
              variant={genre === "All" ? "default" : "outline"}
              className={
                genre === "All" ? "bg-[#fc3c44] hover:bg-[#e63946]" : "border-[#333] text-white hover:bg-[#333]"
              }
            >
              {genre}
            </Button>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
