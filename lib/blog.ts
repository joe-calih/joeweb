import path from "path"
import matter from "gray-matter"

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  subcategory?: string
  tags: string[]
  image?: string
  author: {
    name: string
    avatar?: string
  }
  views: number
  featured?: boolean
}

export interface BlogCategory {
  name: string
  slug: string
  count: number
}

// Check if we're in a server environment
const isServer = typeof window === "undefined"

let fs: any = null
if (isServer) {
  try {
    fs = require("fs")
  } catch (error) {
    console.warn("fs module not available")
  }
}

const contentDirectory = isServer ? path.join(process.cwd(), "content/blog") : ""

export function getAllBlogPosts(): BlogPost[] {
  if (!isServer || !fs) {
    return getMockBlogPosts()
  }

  try {
    if (!fs.existsSync(contentDirectory)) {
      console.error("Blog content directory does not exist:", contentDirectory)
      return getMockBlogPosts()
    }

    const fileNames = fs.readdirSync(contentDirectory)
    const allPostsData = fileNames
      .filter((name: string) => name.endsWith(".md"))
      .map((fileName: string) => {
        const slug = fileName.replace(/\.md$/, "")
        const fullPath = path.join(contentDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data, content } = matter(fileContents)

        return {
          slug,
          title: data.title || slug.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase()),
          excerpt: data.excerpt || data.description || content.substring(0, 160) + "...",
          content,
          date: data.date || data.publishedAt || new Date().toISOString(),
          readTime: data.readTime || `${Math.ceil(content.split(" ").length / 200)} min read`,
          category: data.category || "General",
          subcategory: data.subcategory,
          tags: data.tags || [],
          image: data.image || data.featuredImage || "/placeholder.svg?height=400&width=600",
          author: {
            name: data.author?.name || data.author || "Joe Calih",
            avatar: data.author?.avatar,
          },
          views: data.views || Math.floor(Math.random() * 10000) + 1000,
          featured: data.featured || false,
        } as BlogPost
      })

    return allPostsData.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
  } catch (error) {
    console.error("Error reading blog posts:", error)
    return getMockBlogPosts()
  }
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  if (!isServer || !fs) {
    return getMockBlogPosts().find((post) => post.slug === slug) || null
  }

  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`)
    if (!fs.existsSync(fullPath)) {
      console.error("Blog post file does not exist:", fullPath)
      return getMockBlogPosts().find((post) => post.slug === slug) || null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || slug.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase()),
      excerpt: data.excerpt || data.description || content.substring(0, 160) + "...",
      content,
      date: data.date || data.publishedAt || new Date().toISOString(),
      readTime: data.readTime || `${Math.ceil(content.split(" ").length / 200)} min read`,
      category: data.category || "General",
      subcategory: data.subcategory,
      tags: data.tags || [],
      image: data.image || data.featuredImage || "/placeholder.svg?height=400&width=600",
      author: {
        name: data.author?.name || data.author || "Joe Calih",
        avatar: data.author?.avatar,
      },
      views: data.views || Math.floor(Math.random() * 10000) + 1000,
      featured: data.featured || false,
    } as BlogPost
  } catch (error) {
    console.error("Error reading blog post:", error)
    return getMockBlogPosts().find((post) => post.slug === slug) || null
  }
}

export function getBlogCategories(): BlogCategory[] {
  const posts = getAllBlogPosts()
  const categoryCount: { [key: string]: number } = {}

  posts.forEach((post) => {
    if (post.category && typeof post.category === "string") {
      categoryCount[post.category] = (categoryCount[post.category] || 0) + 1
    }
  })

  return Object.entries(categoryCount).map(([name, count]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, "-"),
    count,
  }))
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 3): BlogPost[] {
  const allPosts = getAllBlogPosts()
  return allPosts.filter((post) => post.slug !== currentSlug && post.category === category).slice(0, limit)
}

function getMockBlogPosts(): BlogPost[] {
  return [
    {
      slug: "20-ways-to-increase-website-traffic-in-2025",
      title: "20 Ways to Increase Website Traffic in 2025",
      excerpt: "Discover proven strategies to boost your website traffic and grow your online presence in 2025.",
      content: "# 20 Ways to Increase Website Traffic in 2025\n\nContent here...",
      date: "2024-12-01",
      readTime: "8 min read",
      category: "Marketing",
      subcategory: "Traffic Generation",
      tags: ["SEO", "Marketing", "Traffic"],
      image: "/placeholder.svg?height=400&width=600",
      author: { name: "Joe Calih" },
      views: 5420,
      featured: true,
    },
    {
      slug: "complete-guide-to-seo-optimization",
      title: "Complete Guide to SEO Optimization",
      excerpt: "Master the fundamentals of SEO and learn how to optimize your website for search engines.",
      content: "# Complete Guide to SEO Optimization\n\nContent here...",
      date: "2024-11-28",
      readTime: "12 min read",
      category: "SEO",
      tags: ["SEO", "Optimization", "Search"],
      image: "/placeholder.svg?height=400&width=600",
      author: { name: "Joe Calih" },
      views: 3890,
    },
    {
      slug: "content-creation-tips-for-creators",
      title: "Content Creation Tips for Creators",
      excerpt: "Essential tips and strategies for creating engaging content that resonates with your audience.",
      content: "# Content Creation Tips for Creators\n\nContent here...",
      date: "2024-11-25",
      readTime: "6 min read",
      category: "Content Creation",
      tags: ["Content", "Creation", "Tips"],
      image: "/placeholder.svg?height=400&width=600",
      author: { name: "Joe Calih" },
      views: 2340,
    },
    {
      slug: "ai-content-creation-strategies-for-2025",
      title: "AI Content Creation Strategies for 2025",
      excerpt: "Explore how artificial intelligence is revolutionizing content creation and marketing strategies.",
      content: "# AI Content Creation Strategies for 2025\n\nContent here...",
      date: "2024-11-20",
      readTime: "10 min read",
      category: "AI Technology",
      tags: ["AI", "Content", "Strategy"],
      image: "/placeholder.svg?height=400&width=600",
      author: { name: "Joe Calih" },
      views: 4560,
    },
    {
      slug: "digital-transformation-guide",
      title: "Digital Transformation Guide",
      excerpt: "A comprehensive guide to digital transformation for modern businesses.",
      content: "# Digital Transformation Guide\n\nContent here...",
      date: "2024-11-15",
      readTime: "15 min read",
      category: "Digital Transformation",
      tags: ["Digital", "Transformation", "Business"],
      image: "/placeholder.svg?height=400&width=600",
      author: { name: "Joe Calih" },
      views: 1890,
    },
    {
      slug: "sustainable-business-practices",
      title: "Sustainable Business Practices",
      excerpt: "Learn how to implement sustainable practices in your business operations.",
      content: "# Sustainable Business Practices\n\nContent here...",
      date: "2024-11-10",
      readTime: "7 min read",
      category: "Business",
      tags: ["Sustainability", "Business", "Practices"],
      image: "/placeholder.svg?height=400&width=600",
      author: { name: "Joe Calih" },
      views: 2100,
    },
    {
      slug: "social-media-marketing-strategies",
      title: "Social Media Marketing Strategies",
      excerpt: "Effective social media marketing strategies to grow your brand and engage your audience.",
      content: "# Social Media Marketing Strategies\n\nContent here...",
      date: "2024-11-05",
      readTime: "9 min read",
      category: "Marketing",
      tags: ["Social Media", "Marketing", "Strategy"],
      image: "/placeholder.svg?height=400&width=600",
      author: { name: "Joe Calih" },
      views: 3200,
    },
    {
      slug: "email-marketing-best-practices",
      title: "Email Marketing Best Practices",
      excerpt: "Learn the best practices for email marketing to increase engagement and conversions.",
      content: "# Email Marketing Best Practices\n\nContent here...",
      date: "2024-10-30",
      readTime: "11 min read",
      category: "Marketing",
      tags: ["Email", "Marketing", "Best Practices"],
      image: "/placeholder.svg?height=400&width=600",
      author: { name: "Joe Calih" },
      views: 2800,
    },
    {
      slug: "video-marketing-trends-for-2025",
      title: "Video Marketing Trends for 2025",
      excerpt: "Discover the latest video marketing trends that will dominate 2025.",
      content: "# Video Marketing Trends for 2025\n\nContent here...",
      date: "2024-10-25",
      readTime: "8 min read",
      category: "Marketing",
      tags: ["Video", "Marketing", "Trends"],
      image: "/placeholder.svg?height=400&width=600",
      author: { name: "Joe Calih" },
      views: 4100,
    },
    {
      slug: "e-commerce-personalization-strategies",
      title: "E-commerce Personalization Strategies",
      excerpt: "How to implement personalization strategies to boost e-commerce sales.",
      content: "# E-commerce Personalization Strategies\n\nContent here...",
      date: "2024-10-20",
      readTime: "10 min read",
      category: "Business",
      tags: ["E-commerce", "Personalization", "Sales"],
      image: "/placeholder.svg?height=400&width=600",
      author: { name: "Joe Calih" },
      views: 2650,
    },
    {
      slug: "data-privacy-compliance-guide",
      title: "Data Privacy Compliance Guide",
      excerpt: "A comprehensive guide to data privacy compliance for businesses.",
      content: "# Data Privacy Compliance Guide\n\nContent here...",
      date: "2024-10-15",
      readTime: "13 min read",
      category: "Business",
      tags: ["Privacy", "Compliance", "Data"],
      image: "/placeholder.svg?height=400&width=600",
      author: { name: "Joe Calih" },
      views: 1950,
    },
    {
      slug: "advanced-seo-techniques-to-boost-ranking",
      title: "Advanced SEO Techniques to Boost Ranking",
      excerpt: "Advanced SEO strategies to improve your website's search engine rankings.",
      content: "# Advanced SEO Techniques to Boost Ranking\n\nContent here...",
      date: "2024-10-10",
      readTime: "14 min read",
      category: "SEO",
      tags: ["SEO", "Advanced", "Ranking"],
      image: "/placeholder.svg?height=400&width=600",
      author: { name: "Joe Calih" },
      views: 5200,
    },
    {
      slug: "best-seo-optimization-website-practices",
      title: "Best SEO Optimization Website Practices",
      excerpt: "Essential SEO practices every website owner should implement.",
      content: "# Best SEO Optimization Website Practices\n\nContent here...",
      date: "2024-10-05",
      readTime: "9 min read",
      category: "SEO",
      tags: ["SEO", "Optimization", "Website"],
      image: "/placeholder.svg?height=400&width=600",
      author: { name: "Joe Calih" },
      views: 3750,
    },
    {
      slug: "how-to-write-seo-friendly-content",
      title: "How to Write SEO-Friendly Content",
      excerpt: "Learn how to create content that ranks well in search engines.",
      content: "# How to Write SEO-Friendly Content\n\nContent here...",
      date: "2024-09-30",
      readTime: "7 min read",
      category: "Content Creation",
      tags: ["SEO", "Content", "Writing"],
      image: "/placeholder.svg?height=400&width=600",
      author: { name: "Joe Calih" },
      views: 4300,
    },
    {
      slug: "digital-marketing-strategies-2025",
      title: "Digital Marketing Strategies 2025",
      excerpt: "The most effective digital marketing strategies for 2025.",
      content: "# Digital Marketing Strategies 2025\n\nContent here...",
      date: "2024-09-25",
      readTime: "12 min read",
      category: "Digital Transformation",
      tags: ["Digital Marketing", "Strategy", "2025"],
      image: "/placeholder.svg?height=400&width=600",
      author: { name: "Joe Calih" },
      views: 3900,
    },
  ]
}
