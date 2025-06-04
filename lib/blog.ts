import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: {
    name: string
    avatar: string
    description: string
  }
  category: string
  image: string
  views: number
  readTime: string
  content: string
  tags?: string[]
}

const postsDirectory = path.join(process.cwd(), "content/blog")

export function getAllBlogPosts(): BlogPost[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter((name) => name.endsWith(".md"))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, "")
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data, content } = matter(fileContents)

        // Calculate read time (average 200 words per minute)
        const wordCount = content.split(/\s+/).length
        const readTime = Math.ceil(wordCount / 200)

        return {
          slug,
          title: data.title,
          excerpt: data.excerpt,
          date: data.date,
          author: data.author,
          category: data.category,
          image: data.image,
          views: data.views || 0,
          readTime: `${readTime} min read`,
          content,
          tags: data.tags || [],
        }
      })

    return allPostsData.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))
  } catch (error) {
    console.error("Error reading blog posts:", error)
    return []
  }
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    // Calculate read time
    const wordCount = content.split(/\s+/).length
    const readTime = Math.ceil(wordCount / 200)

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      author: data.author,
      category: data.category,
      image: data.image,
      views: data.views || 0,
      readTime: `${readTime} min read`,
      content,
      tags: data.tags || [],
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllBlogPosts()
  return allPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase())
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 3): BlogPost[] {
  const allPosts = getAllBlogPosts()
  return allPosts.filter((post) => post.slug !== currentSlug && post.category === category).slice(0, limit)
}

export function getAllCategories(): { name: string; slug: string; count: number }[] {
  const allPosts = getAllBlogPosts()
  const categoryMap = new Map<string, number>()

  allPosts.forEach((post) => {
    const category = post.category
    categoryMap.set(category, (categoryMap.get(category) || 0) + 1)
  })

  const categories = Array.from(categoryMap.entries()).map(([name, count]) => ({
    name,
    slug: name.toLowerCase(),
    count,
  }))

  return [{ name: "All", slug: "all", count: allPosts.length }, ...categories]
}

export function paginatePosts(posts: BlogPost[], page = 1, limit = 8) {
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedPosts = posts.slice(startIndex, endIndex)
  const totalPages = Math.ceil(posts.length / limit)

  return {
    posts: paginatedPosts,
    currentPage: page,
    totalPages,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  }
}

export function getBlogCategories(): string[] {
  const allPosts = getAllBlogPosts()
  const categories = new Set<string>()

  allPosts.forEach((post) => {
    categories.add(post.category)
  })

  return Array.from(categories)
}
