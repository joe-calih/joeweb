"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function PricingTestimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Music Producer",
      plan: "Professional",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      quote:
        "The sample quality is incredible. I've used these in multiple commercial releases and they always deliver that professional sound I'm looking for.",
      highlight: "Professional sound quality",
    },
    {
      name: "Marcus Rodriguez",
      role: "Content Creator",
      plan: "Creator",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      quote:
        "The Lightroom presets have completely transformed my photography workflow. My Instagram engagement has increased by 300% since using them.",
      highlight: "300% engagement increase",
    },
    {
      name: "Emily Watson",
      role: "Video Editor",
      plan: "Professional",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      quote:
        "The LUTs are cinema-quality. I've used them on client projects worth over $50k and they always impress. Worth every penny.",
      highlight: "$50k+ client projects",
    },
    {
      name: "David Kim",
      role: "Label Owner",
      plan: "Enterprise",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      quote:
        "Managing multiple artists is so much easier with the Enterprise plan. The unlimited access and white-label licensing is a game-changer.",
      highlight: "Game-changing for labels",
    },
    {
      name: "Lisa Thompson",
      role: "Photographer",
      plan: "Creator",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      quote:
        "I've tried other preset packs, but nothing comes close to the quality and variety here. My clients always ask how I achieve these looks.",
      highlight: "Unmatched quality",
    },
    {
      name: "Alex Johnson",
      role: "YouTuber",
      plan: "Professional",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      quote:
        "The tutorials alone are worth the subscription. I've learned techniques that have taken my content to the next level.",
      highlight: "Next-level content",
    },
  ]

  const planColors = {
    Creator: "from-[#fc3c44] to-[#e63946]",
    Professional: "from-purple-500 to-purple-600",
    Enterprise: "from-yellow-500 to-orange-500",
  }

  return (
    <div className="w-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#fc3c44]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Creators <span className="text-[#fc3c44]">Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied creators who have transformed their work with our premium resources
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-[#1a1a1a]/50 backdrop-blur-sm border-[#333] hover:border-[#fc3c44]/50 transition-all duration-300 h-full group-hover:scale-105">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-[#fc3c44]/30 absolute -top-2 -left-2" />
                    <p className="text-gray-300 leading-relaxed pl-6">"{testimonial.quote}"</p>
                  </div>

                  {/* Highlight */}
                  <div className="mb-6">
                    <span className="bg-gradient-to-r from-[#fc3c44]/20 to-purple-500/20 text-[#fc3c44] px-3 py-1 rounded-full text-sm font-medium">
                      {testimonial.highlight}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-[#fc3c44] text-white">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="text-white font-medium">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                    <div
                      className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${planColors[testimonial.plan as keyof typeof planColors]} text-white`}
                    >
                      {testimonial.plan}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#fc3c44]/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-[#fc3c44]/20">
            <h3 className="text-2xl font-bold text-white mb-4">Join 50,000+ Happy Creators</h3>
            <p className="text-gray-300 mb-6">Start your creative journey today with a 14-day free trial</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#fc3c44]">50,000+</div>
                <div className="text-gray-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">4.9/5</div>
                <div className="text-gray-400">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">98%</div>
                <div className="text-gray-400">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">1M+</div>
                <div className="text-gray-400">Downloads</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
