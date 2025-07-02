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

// Mock data with valid dates
const mockAlbums: Album[] = [
  {
    slug: "midnight-dreams",
    title: "Midnight Dreams",
    artist: "Joecalih",
    cover: "/placeholder.svg?height=400&width=400",
    genre: "Electronic",
    releaseDate: "2024-01-15",
    totalTracks: 12,
    duration: "45:30",
    description: "A journey through electronic soundscapes",
    tags: ["electronic", "ambient", "chill"],
    price: "$15",
    content: "Midnight Dreams album content...",
  },
  {
    slug: "urban-vibes",
    title: "Urban Vibes",
    artist: "Joecalih",
    cover: "/placeholder.svg?height=400&width=400",
    genre: "Hip Hop",
    releaseDate: "2024-01-10",
    totalTracks: 10,
    duration: "38:20",
    description: "Urban beats and modern hip hop",
    tags: ["hip-hop", "urban", "beats"],
    price: "$12",
    content: "Urban Vibes album content...",
  },
  {
    slug: "acoustic-sessions",
    title: "Acoustic Sessions",
    artist: "Joecalih",
    cover: "/placeholder.svg?height=400&width=400",
    genre: "Acoustic",
    releaseDate: "2024-01-05",
    totalTracks: 8,
    duration: "32:15",
    description: "Intimate acoustic performances",
    tags: ["acoustic", "folk", "intimate"],
    price: "$10",
    content: "Acoustic Sessions album content...",
  },
]

export function getAllAlbums(): Album[] {
  try {
    if (!fs.existsSync(albumsDirectory)) {
      return mockAlbums
    }

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
          title: data.title || "",
          artist: data.artist || "Joecalih",
          cover: data.cover || "/placeholder.svg?height=400&width=400",
          genre: data.genre || "Electronic",
          releaseDate: data.releaseDate || "2024-01-01",
          totalTracks: data.totalTracks || 0,
          duration: data.duration || "0:00",
          description: data.description || "",
          tags: data.tags || [],
          price: data.price || "$0",
          content,
        }
      })

    return allAlbumsData.sort((a, b) => (new Date(a.releaseDate) > new Date(b.releaseDate) ? -1 : 1))
  } catch (error) {
    console.error("Error reading albums:", error)
    return mockAlbums
  }
}

export function getAlbumBySlug(slug: string): Album | null {
  try {
    const allAlbums = getAllAlbums()
    return allAlbums.find((album) => album.slug === slug) || null
  } catch (error) {
    console.error(`Error reading album ${slug}:`, error)
    return mockAlbums.find((album) => album.slug === slug) || null
  }
}
