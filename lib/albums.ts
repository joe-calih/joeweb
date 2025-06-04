import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface Album {
  slug: string
  title: string
  artist: string
  cover: string
  genre: string
  releaseDate: string
  totalTracks: number
  duration: string
  description: string
  tags: string[]
  price: string
  content: string
}

const albumsDirectory = path.join(process.cwd(), "content/albums")

export function getAllAlbums(): Album[] {
  try {
    const fileNames = fs.readdirSync(albumsDirectory)
    const allAlbumsData = fileNames
      .filter((name) => name.endsWith(".md"))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, "")
        const fullPath = path.join(albumsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data, content } = matter(fileContents)

        return {
          slug,
          title: data.title,
          artist: data.artist,
          cover: data.cover,
          genre: data.genre,
          releaseDate: data.releaseDate,
          totalTracks: data.totalTracks,
          duration: data.duration,
          description: data.description,
          tags: data.tags || [],
          price: data.price,
          content,
        }
      })

    return allAlbumsData.sort((a, b) => (new Date(a.releaseDate) > new Date(b.releaseDate) ? -1 : 1))
  } catch (error) {
    console.error("Error reading albums:", error)
    return []
  }
}

export function getAlbumBySlug(slug: string): Album | null {
  try {
    const fullPath = path.join(albumsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      artist: data.artist,
      cover: data.cover,
      genre: data.genre,
      releaseDate: data.releaseDate,
      totalTracks: data.totalTracks,
      duration: data.duration,
      description: data.description,
      tags: data.tags || [],
      price: data.price,
      content,
    }
  } catch (error) {
    console.error(`Error reading album ${slug}:`, error)
    return null
  }
}
