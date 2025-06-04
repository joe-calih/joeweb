import type { Metadata } from "next"
import { Suspense } from "react"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { generateMetadata } from "@/components/seo/metadata"
import { AlbumListingHeader } from "@/components/album/album-listing-header"
import { AlbumGrid } from "@/components/album/album-grid"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

export const metadata: Metadata = generateMetadata({
  title: "Music Albums - Latest Releases & Digital Downloads",
  description:
    "Discover and stream the latest music albums from talented independent artists. High-quality digital downloads and streaming available.",
  keywords: [
    "music albums",
    "latest releases",
    "independent artists",
    "digital downloads",
    "streaming music",
    "new music",
    "album releases",
  ],
  url: "https://joecalih.co.ke/album",
})

interface AlbumData {
  title: string
  artist: string
  slug: string
  cover: string
  releaseDate: string
  genre: string
  totalTracks: number
  duration: string
  description: string
  price: string
}

async function getAlbumsData(): Promise<AlbumData[]> {
  try {
    const albumsDirectory = path.join(process.cwd(), "content/albums")

    if (!fs.existsSync(albumsDirectory)) {
      return []
    }

    const filenames = fs.readdirSync(albumsDirectory)

    const albums = filenames
      .filter((filename) => filename.endsWith(".md"))
      .map((filename) => {
        try {
          const filePath = path.join(albumsDirectory, filename)
          const fileContents = fs.readFileSync(filePath, "utf8")
          const { data } = matter(fileContents)
          return data as AlbumData
        } catch (error) {
          console.error(`Error reading album file ${filename}:`, error)
          return null
        }
      })
      .filter(Boolean) as AlbumData[]

    return albums.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())
  } catch (error) {
    console.error("Error loading albums data:", error)
    return []
  }
}

function AlbumPageSkeleton() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="h-32 bg-gray-800 rounded animate-pulse mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-800 rounded-lg p-4 animate-pulse">
              <div className="aspect-square bg-gray-700 rounded mb-4" />
              <div className="h-4 bg-gray-700 rounded mb-2" />
              <div className="h-3 bg-gray-700 rounded w-3/4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default async function AlbumPage() {
  const albums = await getAlbumsData()

  const albumsSchema = {
    "@type": "ItemList",
    name: "Music Albums Collection",
    description: "Latest music albums from independent artists",
    url: "https://joecalih.co.ke/album",
    numberOfItems: albums.length,
    itemListElement: albums.map((album, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "MusicAlbum",
        name: album.title,
        byArtist: {
          "@type": "MusicGroup",
          name: album.artist,
        },
        genre: album.genre,
        datePublished: album.releaseDate,
        image: album.cover,
        url: `https://joecalih.co.ke/album/${album.slug}`,
        offers: {
          "@type": "Offer",
          price: album.price,
          priceCurrency: "USD",
          availability: "InStock",
        },
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(albumsSchema),
        }}
      />

      <div className="min-h-screen bg-[#121212] text-white">
        <Breadcrumbs />

        <Suspense fallback={<AlbumPageSkeleton />}>
          <AlbumListingHeader />
          <div className="max-w-[1200px] mx-auto px-4 py-16">
            <AlbumGrid albums={albums} />
          </div>
        </Suspense>
      </div>
    </>
  )
}

export const dynamic = "force-static"
export const revalidate = 3600
