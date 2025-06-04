"use client"

import { motion } from "framer-motion"
import { Clock, Star, Lock, Play, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Lesson } from "@/lib/lessons"

interface LessonHeaderProps {
  lesson: Lesson
}

export function LessonHeader({ lesson }: LessonHeaderProps) {
  const levelColors = {
    beginner: "bg-green-500/10 text-green-500 border-green-500/20",
    intermediate: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    advanced: "bg-red-500/10 text-red-500 border-red-500/20",
  }

  return (
    <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Category Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="capitalize">{lesson.category.replace("-", " ")}</span>
              <span>/</span>
              <span className="capitalize">{lesson.subcategory?.replace("-", " ")}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{lesson.title}</h1>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed">{lesson.description}</p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4">
              <Badge className={levelColors[lesson.level]}>{lesson.level}</Badge>

              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4" />
                <span>{lesson.duration}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-400">
                <BookOpen className="w-4 h-4" />
                <span>{lesson.learningOutcomes.length} Learning Outcomes</span>
              </div>

              {lesson.isPremium && (
                <Badge className="bg-[#fc3c44]/10 text-[#fc3c44] border-[#fc3c44]/20">
                  <Lock className="w-3 h-3 mr-1" />
                  Premium
                </Badge>
              )}
            </div>

            {/* Instructor */}
            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
              <Avatar className="w-12 h-12">
                <AvatarImage src={lesson.instructor.avatar || "/placeholder.svg"} alt={lesson.instructor.name} />
                <AvatarFallback>{lesson.instructor.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">{lesson.instructor.name}</h3>
                <p className="text-sm text-gray-400">{lesson.instructor.bio}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {lesson.isPremium ? (
                <Button size="lg" className="bg-[#fc3c44] hover:bg-[#fc3c44]/90">
                  <Lock className="w-4 h-4 mr-2" />
                  Unlock for ${lesson.price}
                </Button>
              ) : (
                <Button size="lg" className="bg-[#fc3c44] hover:bg-[#fc3c44]/90">
                  <Play className="w-4 h-4 mr-2" />
                  Start Learning
                </Button>
              )}

              <Button variant="outline" size="lg">
                <Star className="w-4 h-4 mr-2" />
                Save for Later
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
              <img src={lesson.image || "/placeholder.svg"} alt={lesson.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 bg-[#fc3c44] rounded-full flex items-center justify-center shadow-lg"
                >
                  <Play className="w-6 h-6 text-white ml-1" />
                </motion.button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-[#fc3c44]">4.9</div>
                <div className="text-sm text-gray-400">Rating</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-[#fc3c44]">2.5k</div>
                <div className="text-sm text-gray-400">Students</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-[#fc3c44]">95%</div>
                <div className="text-sm text-gray-400">Complete</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
