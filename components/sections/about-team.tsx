"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Instagram } from "lucide-react"

export function AboutTeam() {
  const team = [
    {
      name: "Joe Calih",
      role: "Founder & Creative Director",
      bio: "Passionate creator with 10+ years in music production and digital content creation.",
      avatar: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      name: "Sarah Chen",
      role: "Head of Product",
      bio: "Product strategist focused on creating intuitive experiences for creators worldwide.",
      avatar: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      name: "Marcus Johnson",
      role: "Lead Audio Engineer",
      bio: "Grammy-nominated engineer bringing professional studio quality to sample packs.",
      avatar: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      name: "Elena Rodriguez",
      role: "Community Manager",
      bio: "Building bridges between creators and fostering our global creative community.",
      avatar: "/placeholder.svg?height=200&width=200",
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#",
      },
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The passionate individuals behind Joecalih, working tirelessly to empower creators and push the boundaries
            of digital creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8 text-center hover:bg-white/10 transition-all duration-300 group">
                <div className="mb-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-[#fc3c44]/20 group-hover:ring-[#fc3c44]/40 transition-all duration-300">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback className="bg-gradient-to-r from-[#fc3c44] to-[#ff6b6b] text-white text-xl font-bold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-[#fc3c44] font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">{member.bio}</p>
                </div>

                <div className="flex justify-center gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 p-2"
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 p-2"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 p-2"
                  >
                    <Instagram className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
