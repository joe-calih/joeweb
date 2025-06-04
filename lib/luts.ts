import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface LUT {
  id: string
  slug: string
  title: string
  description: string
  author: string
  price: string
  originalPrice?: string
  category: string
  mood: string
  tags: string[]
  previewImage: string
  beforeImage?: string
  afterImage?: string
  fileSize: string
  format?: string
  downloadFormat: string[]
  compatibility: string[]
  colorTemp: string
  contrast: string
  saturation: string
  highlights: string
  shadows: string
  dateCreated: string
  featured: boolean
  content: string
}

const lutsDirectory = path.join(process.cwd(), "content/luts")

export function getAllLUTs(): LUT[] {
  try {
    // Check if directory exists
    if (!fs.existsSync(lutsDirectory)) {
      console.warn("LUTs directory not found, returning empty array")
      return []
    }

    const fileNames = fs.readdirSync(lutsDirectory)
    const allLutsData = fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => {
        try {
          const id = fileName.replace(/\.md$/, "")
          const fullPath = path.join(lutsDirectory, fileName)
          const fileContents = fs.readFileSync(fullPath, "utf8")
          const { data, content } = matter(fileContents)

          return {
            id,
            slug: data.slug || id,
            content,
            ...data,
          } as LUT
        } catch (error) {
          console.error(`Error reading LUT file ${fileName}:`, error)
          return null
        }
      })
      .filter(Boolean) as LUT[]

    return allLutsData.sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime())
  } catch (error) {
    console.error("Error loading LUTs data:", error)
    return []
  }
}

export function getLUTBySlug(slug: string): LUT | null {
  try {
    const allLuts = getAllLUTs()
    return allLuts.find((lut) => lut.slug === slug) || null
  } catch (error) {
    console.error(`Error getting LUT by slug ${slug}:`, error)
    return null
  }
}

export function getFeaturedLUTs(limit = 4): LUT[] {
  try {
    const allLuts = getAllLUTs()
    return allLuts.filter((lut) => lut.featured).slice(0, limit)
  } catch (error) {
    console.error("Error getting featured LUTs:", error)
    return []
  }
}

export function getLUTsByCategory(category: string): LUT[] {
  try {
    const allLuts = getAllLUTs()
    return allLuts.filter((lut) => lut.category.toLowerCase() === category.toLowerCase())
  } catch (error) {
    console.error(`Error getting LUTs by category ${category}:`, error)
    return []
  }
}

export function getLUTCategories(): string[] {
  try {
    const allLuts = getAllLUTs()
    const categories = allLuts.map((lut) => lut.category)
    return [...new Set(categories)].sort()
  } catch (error) {
    console.error("Error getting LUT categories:", error)
    return []
  }
}
