import path from "path"
import matter from "gray-matter"
import type { SamplePack } from "./types"

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

const samplesDirectory = isServer ? path.join(process.cwd(), "content/samples") : ""

export function getAllSamples(): SamplePack[] {
  if (!isServer || !fs) {
    return getMockSamples()
  }

  try {
    if (!fs.existsSync(samplesDirectory)) {
      return getMockSamples()
    }

    const fileNames = fs.readdirSync(samplesDirectory)
    const allSamples = fileNames
      .filter((name: string) => name.endsWith(".md"))
      .map((name: string) => {
        const slug = name.replace(/\.md$/, "")
        return getSampleBySlug(slug)
      })
      .filter((sample): sample is SamplePack => sample !== null)

    return allSamples.sort((a, b) => {
      const dateA = new Date(a.releaseDate || "2024-01-01")
      const dateB = new Date(b.releaseDate || "2024-01-01")
      return dateB.getTime() - dateA.getTime()
    })
  } catch (error) {
    console.error("Error reading samples directory:", error)
    return getMockSamples()
  }
}

export function getSampleBySlug(slug: string): SamplePack | null {
  if (!isServer || !fs) {
    return getMockSamples().find((sample) => sample.slug === slug) || null
  }

  try {
    const fullPath = path.join(samplesDirectory, `${slug}.md`)

    if (!fs.existsSync(fullPath)) {
      return getMockSamples().find((sample) => sample.slug === slug) || null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || "Untitled Sample Pack",
      artist: data.artist || "Unknown Artist",
      description: data.description || content.substring(0, 200) + "...",
      genre: data.genre || "Electronic",
      mood: data.mood,
      coverImage: data.coverImage || data.cover || `/placeholder.svg?height=400&width=400`,
      cover: data.cover || data.coverImage || `/placeholder.svg?height=400&width=400`,
      releaseDate: data.releaseDate || new Date().toISOString(),
      price: data.price || "$29.99",
      totalSamples: data.totalSamples || 45,
      bpmRange: data.bpmRange || "120-140",
      packSize: data.packSize || "250MB",
      duration: data.duration || "15:30",
      samples: data.samples || [],
    }
  } catch (error) {
    console.error(`Error reading sample ${slug}:`, error)
    return getMockSamples().find((sample) => sample.slug === slug) || null
  }
}

export function getRelatedSamples(currentSlug: string, limit = 4): SamplePack[] {
  const allSamples = getAllSamples()
  const currentSample = getSampleBySlug(currentSlug)

  if (!currentSample) return []

  return allSamples
    .filter((sample) => sample.slug !== currentSlug)
    .filter((sample) => sample.genre === currentSample.genre)
    .slice(0, limit)
}

export function getSamplesByGenre(genre: string): SamplePack[] {
  const allSamples = getAllSamples()
  return allSamples.filter((sample) => sample.genre.toLowerCase() === genre.toLowerCase())
}

function getMockSamples(): SamplePack[] {
  return [
    {
      slug: "afro-house-essentials",
      title: "Afro House Essentials",
      artist: "Joecalih",
      description: "Essential Afro House samples with authentic African rhythms and modern production techniques.",
      genre: "Afro House",
      mood: "Energetic",
      coverImage: "/placeholder.svg?height=400&width=400",
      cover: "/placeholder.svg?height=400&width=400",
      releaseDate: "2024-01-15",
      price: "$29.99",
      totalSamples: 45,
      bpmRange: "120-125",
      packSize: "250MB",
      duration: "15:30",
      samples: [],
    },
    {
      slug: "electronic-vibes",
      title: "Electronic Vibes",
      artist: "Joecalih",
      description: "Modern electronic samples perfect for contemporary dance music production.",
      genre: "Electronic",
      mood: "Uplifting",
      coverImage: "/placeholder.svg?height=400&width=400",
      cover: "/placeholder.svg?height=400&width=400",
      releaseDate: "2024-01-10",
      price: "$24.99",
      totalSamples: 38,
      bpmRange: "128-132",
      packSize: "180MB",
      duration: "12:45",
      samples: [],
    },
    {
      slug: "hip-hop-classics",
      title: "Hip Hop Classics",
      artist: "Joecalih",
      description: "Classic hip hop samples with vintage drums and soulful melodies.",
      genre: "Hip Hop",
      mood: "Nostalgic",
      coverImage: "/placeholder.svg?height=400&width=400",
      cover: "/placeholder.svg?height=400&width=400",
      releaseDate: "2024-01-05",
      price: "$19.99",
      totalSamples: 32,
      bpmRange: "85-95",
      packSize: "150MB",
      duration: "10:20",
      samples: [],
    },
  ]
}
