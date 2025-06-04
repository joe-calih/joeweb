"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, Eye, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/lib/blog"

interface BlogPostHeaderProps {
  post: BlogPost
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  // Format category for URL
  const categorySlug = post.category.toLowerCase().replace(/\s+/g, "-")

  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          src={post.image || "/placeholder.svg?height=600&width=1200"}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 py-32">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center gap-4 mb-6 text-white/80">
            <Link href="/blog" className="flex items-center gap-2 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>
            <span className="text-white/40">•</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{post.views.toLocaleString()} views</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">{post.title}</h1>

          {/* Category Badge - Now under the title and clickable */}
          <Link href={`/blog/category/${categorySlug}`}>
            <Badge className="bg-[#fc3c44] text-white hover:bg-[#fc3c44]/90 mb-6 cursor-pointer">{post.category}</Badge>
          </Link>

          <p className="text-xl text-white/80 mb-8 max-w-3xl leading-relaxed">{post.excerpt}</p>
        </motion.div>
      </div>
    </div>
  )
}
