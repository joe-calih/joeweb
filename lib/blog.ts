import fs from "fs"
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

const contentDirectory = path.join(process.cwd(), "content/blog")

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(contentDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(contentDirectory)
  const allPostsData = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "")
      const fullPath = path.join(contentDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || "",
        excerpt: data.excerpt || "",
        content,
        date: data.date || "",
        readTime: data.readTime || "5 min read",
        category: data.category || "General",
        tags: data.tags || [],
        image: data.image,
        author: {
          name: data.author?.name || "Joe Calih",
          avatar: data.author?.avatar,
        },
        views: data.views || Math.floor(Math.random() * 10000) + 1000,
        featured: data.featured || false,
      } as BlogPost
    })

  return allPostsData.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || "",
      excerpt: data.excerpt || "",
      content,
      date: data.date || "",
      readTime: data.readTime || "5 min read",
      category: data.category || "General",
      tags: data.tags || [],
      image: data.image,
      author: {
        name: data.author?.name || "Joe Calih",
        avatar: data.author?.avatar,
      },
      views: data.views || Math.floor(Math.random() * 10000) + 1000,
      featured: data.featured || false,
    } as BlogPost
  } catch {
    return null
  }
}

export function getBlogCategories(): BlogCategory[] {
  const posts = getAllBlogPosts()
  const categoryCount: { [key: string]: number } = {}

  posts.forEach((post) => {
    categoryCount[post.category] = (categoryCount[post.category] || 0) + 1
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
