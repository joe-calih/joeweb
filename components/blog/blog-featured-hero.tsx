"use client"

import Link from "next/link"
import { Calendar, Clock, Eye, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { BlogPost } from "@/lib/blog"

interface BlogFeaturedHeroProps {
  post: BlogPost
}

export function BlogFeaturedHero({ post }: BlogFeaturedHeroProps) {
  return (
    <section className="bg-black py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <Link href={`/blog/${post.slug}`}>
            <div className="relative hover:opacity-90 transition-opacity cursor-pointer">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg?height=300&width=500"}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Link>

          {/* Content */}
          <div className="space-y-4">
            <Link href={`/blog/${post.slug}`}>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white hover:text-[#fc3c44] transition-colors cursor-pointer">
                {post.title}
              </h1>
            </Link>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed line-clamp-3">{post.excerpt}</p>

            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{(post.views || 0).toLocaleString()}</span>
              </div>
            </div>

            <Link href={`/blog/${post.slug}`}>
              <Button variant="ghost" className="text-[#fc3c44] hover:text-white p-0 h-auto font-semibold group">
                Read More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
