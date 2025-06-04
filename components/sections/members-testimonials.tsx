"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Electronic Producer",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "The community here is incredible. I've collaborated with artists from 5 different countries and learned so much from their unique perspectives and styles.",
  },
  {
    name: "Maya Patel",
    role: "Singer-Songwriter",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "Finding other artists to work with has never been easier. The platform's networking features helped me connect with my current band members.",
  },
  {
    name: "Jordan Kim",
    role: "Hip-Hop Artist",
    image: "/placeholder.svg?height=60&width=60",
    content:
      "This community gave me the confidence to share my music. The feedback and support from fellow artists has been invaluable to my growth.",
  },
]

export function MembersTestimonials() {
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
            Member <span className="text-[#fc3c44]">Stories</span>
          </h2>
          <p className="text-xl text-gray-300">Success stories from our community</p>
        </motion.div>

        <Section>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#1a1a1a] border-[#333] h-full hover:border-[#fc3c44] transition-all duration-300">
                  <CardContent className="p-6">
                    <Quote className="w-8 h-8 text-[#fc3c44] mb-4" />
                    <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}
