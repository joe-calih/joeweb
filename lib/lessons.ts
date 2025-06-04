import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface Lesson {
  slug: string
  title: string
  description: string
  category: string
  subcategory?: string
  level: "beginner" | "intermediate" | "advanced"
  duration: string
  isPremium: boolean
  price?: number
  instructor: {
    name: string
    avatar: string
    bio: string
  }
  image: string
  content: string
  tags: string[]
  prerequisites?: string[]
  learningOutcomes: string[]
  resources?: {
    name: string
    url: string
    type: "video" | "download" | "link"
  }[]
  order: number
  publishedAt: string
  updatedAt: string
}

export interface LessonCategory {
  slug: string
  name: string
  description: string
  image: string
  subcategories: LessonSubcategory[]
}

export interface LessonSubcategory {
  slug: string
  name: string
  description: string
  lessons: Lesson[]
}

const lessonsDirectory = path.join(process.cwd(), "content/lessons")

export function getAllLessons(): Lesson[] {
  try {
    const categories = fs.readdirSync(lessonsDirectory)
    const allLessons: Lesson[] = []

    categories.forEach((category) => {
      const categoryPath = path.join(lessonsDirectory, category)
      if (fs.statSync(categoryPath).isDirectory()) {
        const subcategories = fs.readdirSync(categoryPath)

        subcategories.forEach((subcategory) => {
          const subcategoryPath = path.join(categoryPath, subcategory)
          if (fs.statSync(subcategoryPath).isDirectory()) {
            const lessonFiles = fs.readdirSync(subcategoryPath).filter((file) => file.endsWith(".md"))

            lessonFiles.forEach((file) => {
              const filePath = path.join(subcategoryPath, file)
              const fileContents = fs.readFileSync(filePath, "utf8")
              const { data, content } = matter(fileContents)

              const lesson: Lesson = {
                slug: file.replace(/\.md$/, ""),
                title: data.title,
                description: data.description,
                category,
                subcategory,
                level: data.level,
                duration: data.duration,
                isPremium: data.isPremium || false,
                price: data.price,
                instructor: data.instructor,
                image: data.image,
                content,
                tags: data.tags || [],
                prerequisites: data.prerequisites,
                learningOutcomes: data.learningOutcomes || [],
                resources: data.resources,
                order: data.order || 0,
                publishedAt: data.publishedAt,
                updatedAt: data.updatedAt,
              }

              allLessons.push(lesson)
            })
          }
        })
      }
    })

    return allLessons.sort((a, b) => a.order - b.order)
  } catch (error) {
    console.error("Error reading lessons:", error)
    return []
  }
}

export function getLessonBySlug(category: string, subcategory: string, slug: string): Lesson | null {
  try {
    const filePath = path.join(lessonsDirectory, category, subcategory, `${slug}.md`)
    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      description: data.description,
      category,
      subcategory,
      level: data.level,
      duration: data.duration,
      isPremium: data.isPremium || false,
      price: data.price,
      instructor: data.instructor,
      image: data.image,
      content,
      tags: data.tags || [],
      prerequisites: data.prerequisites,
      learningOutcomes: data.learningOutcomes || [],
      resources: data.resources,
      order: data.order || 0,
      publishedAt: data.publishedAt,
      updatedAt: data.updatedAt,
    }
  } catch (error) {
    console.error(`Error reading lesson ${category}/${subcategory}/${slug}:`, error)
    return null
  }
}

export function getLessonsByCategory(category: string): Lesson[] {
  const allLessons = getAllLessons()
  return allLessons.filter((lesson) => lesson.category === category)
}

export function getLessonsBySubcategory(category: string, subcategory: string): Lesson[] {
  const allLessons = getAllLessons()
  return allLessons.filter((lesson) => lesson.category === category && lesson.subcategory === subcategory)
}

export function getLessonCategories(): LessonCategory[] {
  try {
    const categories = fs.readdirSync(lessonsDirectory)
    const lessonCategories: LessonCategory[] = []

    categories.forEach((categorySlug) => {
      const categoryPath = path.join(lessonsDirectory, categorySlug)
      if (fs.statSync(categoryPath).isDirectory()) {
        const subcategories = fs.readdirSync(categoryPath)
        const subcategoryData: LessonSubcategory[] = []

        subcategories.forEach((subcategorySlug) => {
          const subcategoryPath = path.join(categoryPath, subcategorySlug)
          if (fs.statSync(subcategoryPath).isDirectory()) {
            const lessons = getLessonsBySubcategory(categorySlug, subcategorySlug)

            subcategoryData.push({
              slug: subcategorySlug,
              name: subcategorySlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
              description: `Learn ${subcategorySlug.replace(/-/g, " ")} techniques and best practices`,
              lessons,
            })
          }
        })

        lessonCategories.push({
          slug: categorySlug,
          name: categorySlug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
          description: `Master ${categorySlug.replace(/-/g, " ")} with our comprehensive courses`,
          image: `/placeholder.svg?height=400&width=600`,
          subcategories: subcategoryData,
        })
      }
    })

    return lessonCategories
  } catch (error) {
    console.error("Error reading lesson categories:", error)
    return []
  }
}

export function getRelatedLessons(currentSlug: string, category: string, subcategory: string, limit = 3): Lesson[] {
  const lessons = getLessonsBySubcategory(category, subcategory)
  return lessons.filter((lesson) => lesson.slug !== currentSlug).slice(0, limit)
}

export function getNextLesson(currentSlug: string, category: string, subcategory: string): Lesson | null {
  const lessons = getLessonsBySubcategory(category, subcategory)
  const currentIndex = lessons.findIndex((lesson) => lesson.slug === currentSlug)

  if (currentIndex !== -1 && currentIndex < lessons.length - 1) {
    return lessons[currentIndex + 1]
  }

  return null
}

export function getPreviousLesson(currentSlug: string, category: string, subcategory: string): Lesson | null {
  const lessons = getLessonsBySubcategory(category, subcategory)
  const currentIndex = lessons.findIndex((lesson) => lesson.slug === currentSlug)

  if (currentIndex > 0) {
    return lessons[currentIndex - 1]
  }

  return null
}
