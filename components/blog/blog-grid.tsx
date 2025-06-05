"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import type { BlogPost } from "@/lib/blog"

interface BlogGridProps {
  posts: BlogPost[]
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link href={`/blog/${post.slug}`}>
            <Card className="bg-[#1a1a1a] border-[#333] hover:border-[#fc3c44] transition-all duration-300 overflow-hidden group cursor-pointer h-full">
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg?height=200&width=300"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <CardContent className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#fc3c44] transition-colors mb-3 line-clamp-2 flex-1">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed flex-1">{post.excerpt}</p>

                <div className="flex items-center justify-end">
                  <div className="flex items-center text-[#fc3c44] font-medium group-hover:text-white transition-colors">
                    <span className="mr-2">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
