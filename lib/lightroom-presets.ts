import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface LightroomPreset {
  title: string
  slug: string
  author: string
  authorLink?: string
  category: string
  price: number
  originalPrice?: number
  fileSize: string
  compatibility: string
  mood: string
  description: string
  featured: boolean
  previewImage: string
  beforeImage: string
  afterImage: string
  datePublished: string
  content: string
}

const presetsDirectory = path.join(process.cwd(), "content/lightroom-presets")

export function getAllPresets(): LightroomPreset[] {
  try {
    // Check if directory exists
    if (!fs.existsSync(presetsDirectory)) {
      console.warn("Lightroom presets directory does not exist:", presetsDirectory)
      return []
    }

    const fileNames = fs.readdirSync(presetsDirectory)
    const allPresetsData = fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => {
        // Remove ".md" from file name to get id
        const slug = fileName.replace(/\.md$/, "")

        // Read markdown file as string
        const fullPath = path.join(presetsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the slug
        return {
          slug,
          content: matterResult.content,
          ...(matterResult.data as Omit<LightroomPreset, "slug" | "content">),
        }
      })

    // Sort presets by date
    return allPresetsData.sort((a, b) => {
      if (a.datePublished < b.datePublished) {
        return 1
      } else {
        return -1
      }
    })
  } catch (error) {
    console.error("Error getting lightroom presets:", error)
    return []
  }
}

export function getPresetBySlug(slug: string): LightroomPreset | null {
  try {
    const fullPath = path.join(presetsDirectory, `${slug}.md`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const matterResult = matter(fileContents)

    return {
      slug,
      content: matterResult.content,
      ...(matterResult.data as Omit<LightroomPreset, "slug" | "content">),
    }
  } catch (error) {
    console.error(`Error getting preset by slug ${slug}:`, error)
    return null
  }
}

export function getFeaturedPresets(): LightroomPreset[] {
  const allPresets = getAllPresets()
  return allPresets.filter((preset) => preset.featured)
}

export function getPresetsByCategory(category: string): LightroomPreset[] {
  const allPresets = getAllPresets()
  return allPresets.filter((preset) => preset.category.toLowerCase() === category.toLowerCase())
}

export function getRelatedPresets(slug: string, limit = 4): LightroomPreset[] {
  const allPresets = getAllPresets()
  const currentPreset = allPresets.find((preset) => preset.slug === slug)

  if (!currentPreset) return []

  return allPresets
    .filter(
      (preset) =>
        preset.slug !== slug && (preset.category === currentPreset.category || preset.mood === currentPreset.mood),
    )
    .slice(0, limit)
}

export function getAllPresetCategories(): string[] {
  const allPresets = getAllPresets()
  const categories = new Set(allPresets.map((preset) => preset.category))
  return Array.from(categories)
}
