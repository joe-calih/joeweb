"use client"

import { motion } from "framer-motion"
import { Mic, TrendingUp, Users, Award, Music, Headphones } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ServicesOfferings() {
  const services = [
    {
      icon: Mic,
      title: "Professional Mastering",
      description: "Grammy-winning engineers master your tracks to industry standards",
      price: "From $50",
      features: ["Stereo mastering", "Streaming optimization", "Multiple format delivery", "Revision included"],
    },
    {
      icon: TrendingUp,
      title: "Music Marketing",
      description: "Strategic promotion campaigns to grow your audience",
      price: "From $200",
      features: ["Playlist pitching", "Social media strategy", "PR outreach", "Performance analytics"],
    },
    {
      icon: Users,
      title: "Artist Development",
      description: "One-on-one mentorship from industry professionals",
      price: "From $150/hr",
      features: ["Career strategy", "Brand development", "Industry connections", "Goal setting"],
    },
    {
      icon: Award,
      title: "Sync Licensing",
      description: "Get your music placed in films, TV shows, and commercials",
      price: "Commission-based",
      features: ["Sync opportunities", "License negotiation", "Rights management", "Royalty collection"],
    },
    {
      icon: Music,
      title: "Music Production",
      description: "Full production services from demo to finished track",
      price: "From $500",
      features: ["Arrangement", "Recording", "Mixing", "Producer collaboration"],
    },
    {
      icon: Headphones,
      title: "Mixing Services",
      description: "Professional mixing to bring your vision to life",
      price: "From $100",
      features: ["Multi-track mixing", "Creative processing", "Stem delivery", "Unlimited revisions"],
    },
  ]

  return (
    <div className="w-full bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-[#fc3c44]">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional services designed to elevate your music and accelerate your career
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1a1a1a] border-[#333] hover:border-[#fc3c44] transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#fc3c44] rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                  <p className="text-[#fc3c44] font-semibold">{service.price}</p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#fc3c44] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-[#fc3c44] hover:bg-[#e63946] w-full">Learn More</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
