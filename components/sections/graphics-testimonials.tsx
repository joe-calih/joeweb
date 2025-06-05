"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import { Section } from "@/components/ui/section"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    company: "DesignStudio",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "The graphics collection is absolutely stunning. The quality and variety have transformed our client projects completely.",
  },
  {
    name: "Mike Chen",
    role: "Brand Manager",
    company: "TechCorp",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "Professional, modern designs that perfectly match our brand aesthetic. The templates saved us weeks of work.",
  },
  {
    name: "Emily Rodriguez",
    role: "Freelance Designer",
    company: "Independent",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "As a freelancer, these resources have been invaluable. High-quality designs that impress clients every time.",
  },
  {
    name: "David Park",
    role: "Marketing Lead",
    company: "StartupCo",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content: "The social media templates alone have increased our engagement by 300%. Incredible value for money.",
  },
]

export function GraphicsTestimonials() {
  return (
    <Section background="default" padding="large">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What Designers Say</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Trusted by thousands of designers, agencies, and brands worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1a1a1a] border-[#333] p-8 hover:border-[#fc3c44] transition-all duration-300 group relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-[#fc3c44]/20" />

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">"{testimonial.content}"</p>

                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
