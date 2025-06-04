"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const blogPosts = [
  {
    slug: "20-ways-to-increase-website-traffic-in-2025",
    title: "20 Ways to Increase Website Traffic in 2025",
    excerpt:
      "Get in-depth lessons on how to increase website SEO & traffic with advanced tools and practices. Learn the most paramount SEO in optimization.",
    date: "2024-09-22",
    readTime: "8 min read",
    category: "SEO",
    image: "/Traffic.webp",
    views: 589,
  },
  {
    slug: "complete-guide-to-seo-optimization",
    title: "Complete Guide to SEO Optimization in 2025",
    excerpt:
      "Master the art of SEO with this comprehensive guide covering keyword research, on-page optimization, technical SEO, and link building strategies.",
    date: "2024-01-20",
    readTime: "12 min read",
    category: "SEO",
    image: "/seo-guide.webp",
    views: 1247,
  },
  {
    slug: "social-media-marketing-strategies",
    title: "Social Media Marketing Strategies That Drive Results",
    excerpt:
      "Discover proven social media marketing strategies to grow your brand, engage your audience, and drive conversions across all major platforms.",
    date: "2024-01-18",
    readTime: "10 min read",
    category: "Marketing",
    image: "/social-media.webp",
    views: 892,
  },
  {
    slug: "email-marketing-best-practices",
    title: "Email Marketing Best Practices for 2025",
    excerpt:
      "Learn the latest email marketing strategies to boost open rates, increase engagement, and drive conversions with proven best practices and techniques.",
    date: "2024-01-15",
    readTime: "9 min read",
    category: "Marketing",
    image: "/email-marketing.webp",
    views: 1156,
  },
  {
    slug: "content-creation-tips-for-creators",
    title: "Content Creation Tips for Modern Creators",
    excerpt:
      "Discover essential content creation strategies, tools, and techniques to build your audience, improve engagement, and monetize your creative work effectively.",
    date: "2024-01-12",
    readTime: "11 min read",
    category: "Content",
    image: "/content-creation.webp",
    views: 743,
  },
  {
    slug: "digital-transformation-guide",
    title: "Digital Transformation Guide for Modern Businesses",
    excerpt:
      "Navigate the digital transformation journey with proven strategies, tools, and frameworks to modernize your business and stay competitive in 2025.",
    date: "2024-01-10",
    readTime: "13 min read",
    category: "Business",
    image: "/digital-transformation.webp",
    views: 1034,
  },
]

export function HomeBlog() {
  const [loading, setLoading] = useState(false)

  const loadMorePosts = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      // Navigate to blog page
      window.location.href = "/blog"
    }, 500)
  }

  return (
    <Section background="dark" padding="large">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Latest from Our Blog</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Stay updated with the latest insights, tutorials, and industry trends
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="bg-[#1a1a1a] border-[#333] hover:border-[#fc3c44] transition-all duration-300 overflow-hidden group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg?height=200&width=300"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
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

                    <h3 className="text-xl font-bold text-white group-hover:text-[#fc3c44] transition-colors mb-3 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center text-[#fc3c44] font-medium group-hover:text-white transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button
            onClick={loadMorePosts}
            disabled={loading}
            size="lg"
            className="bg-[#fc3c44] hover:bg-[#e63946] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            {loading ? "Loading..." : "View All Posts"}
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}
