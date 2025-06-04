"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Independent Artist",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "This platform completely transformed my music career. The analytics helped me understand my audience better, and the distribution network got my music heard worldwide.",
  },
  {
    name: "Marcus Rodriguez",
    role: "Producer & DJ",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "The professional mastering tools are incredible. My tracks now sound radio-ready, and the instant distribution feature saved me weeks of manual work.",
  },
  {
    name: "Emma Chen",
    role: "Singer-Songwriter",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "I've tried many platforms, but none compare to this. The fan engagement tools helped me build a loyal following, and the revenue tracking is transparent and detailed.",
  },
  {
    name: "Alex Thompson",
    role: "Electronic Producer",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "The collaboration tools are game-changing. I've connected with amazing artists and the platform's workflow features make remote production seamless and efficient.",
  },
]

export function LandingTestimonials() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Artists Say About Us</h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Don't just take our word for it - hear from successful artists who've grown their careers with our platform
        </p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-6">
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
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-[#fc3c44] mb-4" />
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#fc3c44] text-[#fc3c44]" />
                      ))}
                    </div>
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
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
