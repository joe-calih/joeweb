"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, Eye } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { BlogPost } from "@/lib/blog"

interface BlogGridNewProps {
  posts: BlogPost[]
  loading?: boolean
}

export function BlogGridNew({ posts, loading = false }: BlogGridNewProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden animate-pulse">
            <div className="aspect-video bg-[#333]" />
            <div className="p-5 space-y-4">
              <div className="h-4 bg-[#333] rounded w-3/4" />
              <div className="h-4 bg-[#333] rounded w-1/2" />
              <div className="space-y-2">
                <div className="h-3 bg-[#333] rounded" />
                <div className="h-3 bg-[#333] rounded w-5/6" />
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="text-2xl font-bold text-gray-400 mb-4">No posts found</h3>
        <p className="text-gray-500">Try adjusting your filters or check back later for new content.</p>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {posts.map((post, index) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="bg-[#1a1a1a] border-[#333] overflow-hidden hover:border-[#fc3c44] transition-all duration-300 group h-full flex flex-col">
            <Link href={`/blog/${post.slug}`}>
              <div className="aspect-video overflow-hidden cursor-pointer">
                <img
                  src={post.image || "/placeholder.svg?height=200&width=300"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>

            <CardHeader className="p-5 pb-3 flex-1">
              <Link href={`/blog/${post.slug}`}>
                <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-[#fc3c44] transition-colors cursor-pointer">
                  {post.title}
                </CardTitle>
              </Link>
            </CardHeader>

            <CardContent className="p-5 pt-0 pb-3 flex-1">
              <p className="text-sm text-gray-400 line-clamp-3 mb-4">{post.excerpt}</p>

              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  <span>{(post.views || 0).toLocaleString()}</span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="p-5 pt-0 flex justify-end">
              <Link href={`/blog/${post.slug}`}>
                <Button variant="ghost" className="text-[#fc3c44] hover:text-white transition-all duration-300 group">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
