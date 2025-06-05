"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import type { BlogPost } from "@/lib/blog"

interface BlogFeaturedPostProps {
  post: BlogPost
}

export function BlogFeaturedPost({ post }: BlogFeaturedPostProps) {
  return (
    <div className="bg-[#121212] py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link href={`/blog/${post.slug}`}>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-[#333] hover:border-[#fc3c44] transition-all duration-500 group cursor-pointer h-80">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
                {/* Image Section */}
                <div className="relative overflow-hidden lg:order-1">
                  <img
                    src="/placeholder.svg?height=320&width=600"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/60" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#fc3c44] text-white hover:bg-[#fc3c44] text-xs px-3 py-1">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-8 flex flex-col justify-center lg:order-2">
                  <div className="flex items-center gap-4 text-gray-400 mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-[#fc3c44] transition-colors mb-4 leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-gray-300 text-base leading-relaxed mb-6 line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full border-2 border-[#333]"
                      />
                      <div>
                        <p className="text-white font-medium text-sm">{post.author.name}</p>
                        <p className="text-gray-400 text-xs">{post.author.role || "Author"}</p>
                      </div>
                    </div>

                    <div className="flex items-center text-[#fc3c44] font-semibold group-hover:text-white transition-colors">
                      Read Article
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
