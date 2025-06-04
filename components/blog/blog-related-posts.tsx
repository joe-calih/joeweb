"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, Eye, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { BlogPost } from "@/lib/blog"

interface BlogRelatedPostsProps {
  posts: BlogPost[]
}

export function BlogRelatedPosts({ posts }: BlogRelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <div className="bg-[#1a1a1a] py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Related Articles</h2>
          <p className="text-gray-400 text-lg">Continue reading with these related posts</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="bg-[#121212] border-[#333] hover:border-[#fc3c44] transition-all duration-300 overflow-hidden group cursor-pointer h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg?height=250&width=400"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#fc3c44] text-white hover:bg-[#fc3c44]">{post.category}</Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center gap-4 text-white/80 text-sm">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
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

                    <h3 className="text-lg font-bold text-white group-hover:text-[#fc3c44] transition-colors mb-3 line-clamp-2 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 mb-4 line-clamp-2 leading-relaxed text-sm">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.author.avatar || "/placeholder.svg?height=32&width=32"}
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full border border-[#333]"
                        />
                        <span className="text-gray-400 text-sm">{post.author.name}</span>
                      </div>

                      <div className="flex items-center text-[#fc3c44] font-medium group-hover:text-white transition-colors text-sm">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
