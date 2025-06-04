"use client"

import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { LessonCategory } from "@/lib/lessons"

interface LessonCategoryGridProps {
  categories: LessonCategory[]
}

export function LessonCategoryGrid({ categories }: LessonCategoryGridProps) {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Learning Path</h2>
        <p className="text-xl text-gray-400">Structured courses designed to take you from beginner to expert</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={category.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="h-full group hover:bg-gray-800/50 transition-all duration-300 border-gray-700 hover:border-[#fc3c44]/50">
              <CardHeader className="p-0">
                <div className="relative aspect-video rounded-t-lg overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-[#fc3c44]/90 text-white">{category.subcategories.length} Topics</Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 group-hover:text-[#fc3c44] transition-colors">
                  {category.name}
                </CardTitle>

                <p className="text-gray-400 mb-4 line-clamp-2">{category.description}</p>

                <div className="space-y-3 mb-6">
                  {category.subcategories.slice(0, 3).map((subcategory) => (
                    <div key={subcategory.slug} className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">{subcategory.name}</span>
                      <span className="text-gray-500">{subcategory.lessons.length} lessons</span>
                    </div>
                  ))}
                  {category.subcategories.length > 3 && (
                    <div className="text-sm text-gray-500">+{category.subcategories.length - 3} more topics</div>
                  )}
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{category.subcategories.reduce((total, sub) => total + sub.lessons.length, 0)} lessons</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>2.5k students</span>
                  </div>
                </div>

                <Button asChild className="w-full group-hover:bg-[#fc3c44] group-hover:text-white transition-colors">
                  <Link href={`/lessons/${category.slug}`}>
                    Explore Course
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
