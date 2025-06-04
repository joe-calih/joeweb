"use client"

import { motion } from "framer-motion"
import { Clock, Lock, Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { LessonSubcategory } from "@/lib/lessons"

interface LessonSubcategoryListProps {
  subcategories: LessonSubcategory[]
  categorySlug: string
}

export function LessonSubcategoryList({ subcategories, categorySlug }: LessonSubcategoryListProps) {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16">
      <div className="space-y-12">
        {subcategories.map((subcategory, index) => (
          <motion.div
            key={subcategory.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="space-y-6"
          >
            {/* Subcategory Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{subcategory.name}</h2>
                <p className="text-gray-400">{subcategory.description}</p>
              </div>
              <Badge variant="secondary">{subcategory.lessons.length} lessons</Badge>
            </div>

            {/* Lessons List */}
            <div className="space-y-4">
              {subcategory.lessons.map((lesson, lessonIndex) => (
                <Card key={lesson.slug} className="hover:bg-gray-800/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      {/* Lesson Number */}
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium">{lessonIndex + 1}</span>
                      </div>

                      {/* Lesson Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-medium text-white mb-2 hover:text-[#fc3c44] transition-colors">
                              <Link href={`/lessons/${categorySlug}/${subcategory.slug}/${lesson.slug}`}>
                                {lesson.title}
                              </Link>
                            </h3>
                            <p className="text-gray-400 text-sm mb-3 line-clamp-2">{lesson.description}</p>

                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{lesson.duration}</span>
                              </div>

                              <Badge
                                className={
                                  lesson.level === "beginner"
                                    ? "bg-green-500/10 text-green-500 border-green-500/20"
                                    : lesson.level === "intermediate"
                                      ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                                      : "bg-red-500/10 text-red-500 border-red-500/20"
                                }
                              >
                                {lesson.level}
                              </Badge>

                              {lesson.isPremium && (
                                <Badge className="bg-[#fc3c44]/10 text-[#fc3c44] border-[#fc3c44]/20">
                                  <Lock className="w-3 h-3 mr-1" />
                                  Premium
                                </Badge>
                              )}
                            </div>
                          </div>

                          {/* Action Button */}
                          <div className="flex-shrink-0">
                            <Button asChild variant="ghost" size="sm">
                              <Link href={`/lessons/${categorySlug}/${subcategory.slug}/${lesson.slug}`}>
                                {lesson.isPremium ? <Lock className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
