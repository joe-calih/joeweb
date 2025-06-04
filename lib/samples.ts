import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface SamplePack {
  slug: string
  title: string
  artist: string
  cover: string
  genre: string
  totalSamples: number
  bpmRange: string
  keySignatures: string[]
  description: string
  tags: string[]
  price: string
  releaseDate: string
  duration: string
  packSize: string
  content: string
}

const samplesDirectory = path.join(process.cwd(), "content/samples")

export function getAllSamples(): SamplePack[] {
  try {
    const fileNames = fs.readdirSync(samplesDirectory)
    const allSamplesData = fileNames
      .filter((name) => name.endsWith(".md"))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, "")
        const fullPath = path.join(samplesDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data, content } = matter(fileContents)

        return {
          slug,
          title: data.title,
          artist: data.artist,
          cover: data.cover,
          genre: data.genre,
          totalSamples: data.totalSamples,
          bpmRange: data.bpmRange,
          keySignatures: data.keySignatures || [],
          description: data.description,
          tags: data.tags || [],
          price: data.price,
          releaseDate: data.releaseDate,
          duration: data.duration,
          packSize: data.packSize,
          content,
        }
      })

    return allSamplesData.sort((a, b) => (new Date(a.releaseDate) > new Date(b.releaseDate) ? -1 : 1))
  } catch (error) {
    console.error("Error reading sample packs:", error)
    return []
  }
}

export function getSampleBySlug(slug: string): SamplePack | null {
  try {
    const fullPath = path.join(samplesDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      artist: data.artist,
      cover: data.cover,
      genre: data.genre,
      totalSamples: data.totalSamples,
      bpmRange: data.bpmRange,
      keySignatures: data.keySignatures || [],
      description: data.description,
      tags: data.tags || [],
      price: data.price,
      releaseDate: data.releaseDate,
      duration: data.duration,
      packSize: data.packSize,
      content,
    }
  } catch (error) {
    console.error(`Error reading sample pack ${slug}:`, error)
    return null
  }
}
