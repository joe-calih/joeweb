"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import type { Lesson } from "@/lib/lessons"

interface LessonNavigationProps {
  currentLesson: Lesson
  previousLesson?: Lesson | null
  nextLesson?: Lesson | null
}

export function LessonNavigation({ currentLesson, previousLesson, nextLesson }: LessonNavigationProps) {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <div className="space-y-6">
        {/* Back to Category */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Button variant="ghost" asChild className="text-gray-400 hover:text-white">
            <Link href={`/lessons/${currentLesson.category}/${currentLesson.subcategory}`}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {currentLesson.subcategory?.replace("-", " ")} Lessons
            </Link>
          </Button>
        </motion.div>

        {/* Previous/Next Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Previous Lesson */}
          <div>
            {previousLesson ? (
              <Card className="h-full hover:bg-gray-800/50 transition-colors">
                <CardContent className="p-6">
                  <Link
                    href={`/lessons/${previousLesson.category}/${previousLesson.subcategory}/${previousLesson.slug}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                        <ChevronLeft className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Previous Lesson</p>
                        <h3 className="font-medium text-white hover:text-[#fc3c44] transition-colors">
                          {previousLesson.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">{previousLesson.duration}</p>
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-full opacity-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                      <ChevronLeft className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Previous Lesson</p>
                      <h3 className="font-medium text-gray-500">No previous lesson</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Next Lesson */}
          <div>
            {nextLesson ? (
              <Card className="h-full hover:bg-gray-800/50 transition-colors">
                <CardContent className="p-6">
                  <Link href={`/lessons/${nextLesson.category}/${nextLesson.subcategory}/${nextLesson.slug}`}>
                    <div className="flex items-start gap-4">
                      <div>
                        <p className="text-sm text-gray-400 mb-1 text-right">Next Lesson</p>
                        <h3 className="font-medium text-white hover:text-[#fc3c44] transition-colors text-right">
                          {nextLesson.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1 text-right">{nextLesson.duration}</p>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-full opacity-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div>
                      <p className="text-sm text-gray-400 mb-1 text-right">Next Lesson</p>
                      <h3 className="font-medium text-gray-500 text-right">No next lesson</h3>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
