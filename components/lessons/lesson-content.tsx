"use client"

import { motion } from "framer-motion"
import { CheckCircle, Clock, Download, ExternalLink, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import ReactMarkdown from "react-markdown"
import type { Lesson } from "@/lib/lessons"

interface LessonContentProps {
  lesson: Lesson
  content: string
}

export function LessonContent({ lesson, content }: LessonContentProps) {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Prerequisites */}
          {lesson.prerequisites && lesson.prerequisites.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card className="bg-blue-500/10 border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-blue-400 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Prerequisites
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {lesson.prerequisites.map((prerequisite, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        {prerequisite}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Learning Outcomes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="bg-green-500/10 border-green-500/20">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  What You'll Learn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {lesson.learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Premium Content Gate */}
          {lesson.isPremium && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-[#fc3c44]/10 border-[#fc3c44]/20">
                <CardContent className="p-8 text-center">
                  <Lock className="w-12 h-12 text-[#fc3c44] mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Premium Content</h3>
                  <p className="text-gray-400 mb-6">
                    This lesson is part of our premium content. Unlock it to access the full tutorial.
                  </p>
                  <Button size="lg" className="bg-[#fc3c44] hover:bg-[#fc3c44]/90">
                    Unlock for ${lesson.price}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Lesson Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={lesson.isPremium ? "filter blur-sm pointer-events-none" : ""}
          >
            <Card>
              <CardContent className="p-8">
                <div className="prose prose-invert prose-lg max-w-none">
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-4">{children}</h1>
                      ),
                      h2: ({ children }) => <h2 className="text-2xl font-bold text-white mt-8 mb-4">{children}</h2>,
                      h3: ({ children }) => <h3 className="text-xl font-bold text-white mt-6 mb-3">{children}</h3>,
                      p: ({ children }) => <p className="text-gray-300 leading-relaxed mb-4">{children}</p>,
                      ul: ({ children }) => (
                        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">{children}</ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-300">{children}</ol>
                      ),
                      li: ({ children }) => <li className="text-gray-300">{children}</li>,
                      strong: ({ children }) => <strong className="text-white font-semibold">{children}</strong>,
                      code: ({ children }) => (
                        <code className="bg-gray-800 text-[#fc3c44] px-2 py-1 rounded text-sm">{children}</code>
                      ),
                      pre: ({ children }) => (
                        <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4 border border-gray-700">
                          {children}
                        </pre>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-[#fc3c44] pl-4 italic text-gray-400 my-4">
                          {children}
                        </blockquote>
                      ),
                    }}
                  >
                    {content}
                  </ReactMarkdown>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Lesson Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Card>
              <CardHeader>
                <CardTitle>Lesson Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Duration</span>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{lesson.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Level</span>
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
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Category</span>
                  <span className="capitalize">{lesson.category.replace("-", " ")}</span>
                </div>

                {lesson.subcategory && (
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Topic</span>
                    <span className="capitalize">{lesson.subcategory.replace("-", " ")}</span>
                  </div>
                )}

                <Separator />

                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Published</span>
                  <span>{new Date(lesson.publishedAt).toLocaleDateString()}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Updated</span>
                  <span>{new Date(lesson.updatedAt).toLocaleDateString()}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Resources */}
          {lesson.resources && lesson.resources.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {lesson.resources.map((resource, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        {resource.type === "download" ? (
                          <Download className="w-4 h-4 text-[#fc3c44]" />
                        ) : (
                          <ExternalLink className="w-4 h-4 text-[#fc3c44]" />
                        )}
                        <span className="text-sm">{resource.name}</span>
                      </div>
                      <Button size="sm" variant="ghost" asChild>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          {resource.type === "download" ? "Download" : "Open"}
                        </a>
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Tags */}
          {lesson.tags && lesson.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {lesson.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Progress */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Completion</span>
                    <span>0%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-[#fc3c44] h-2 rounded-full" style={{ width: "0%" }} />
                  </div>
                  <Button className="w-full" variant="outline">
                    Mark as Complete
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
