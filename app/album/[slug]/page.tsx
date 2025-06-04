import { notFound } from "next/navigation"
import type { Metadata } from "next"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"
import { AlbumHeader } from "@/components/album/album-header"
import { AlbumTrackList } from "@/components/album/album-track-list"
import { AlbumInfo } from "@/components/album/album-info"
import { AlbumActions } from "@/components/album/album-actions"
import { MusicAlbumSchema } from "@/components/seo/music-schema"
import { generateMetadata as generateMusicMetadata } from "@/components/seo/metadata"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

interface AlbumData {
  title: string
  artist: string
  slug: string
  cover: string
  releaseDate: string
  genre: string
  label: string
  producer: string
  totalTracks: number
  duration: string
  description: string
  price: string
  streamingLinks: {
    spotify: string
    appleMusic: string
    amazonMusic?: string
    youtubeMusic?: string
    youtube?: string
    soundcloud?: string
    deezer?: string
    tidal?: string
    pandora?: string
    anghami?: string
    shazam?: string
  }
  appleMusicEmbed?: string
}

async function getAlbumData(slug: string): Promise<{ data: AlbumData; content: string } | null> {
  try {
    const albumsDirectory = path.join(process.cwd(), "content/albums")
    const filePath = path.join(albumsDirectory, `${slug}.md`)

    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContents)

    const processedContent = await remark().use(html).process(content)
    const contentHtml = processedContent.toString()

    return {
      data: data as AlbumData,
      content: contentHtml,
    }
  } catch (error) {
    return null
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const albumData = await getAlbumData(params.slug)

  if (!albumData) {
    return {
      title: "Album Not Found",
    }
  }

  const { data } = albumData

  return generateMusicMetadata({
    title: `${data.title} by ${data.artist}`,
    description: data.description,
    keywords: [
      data.title,
      data.artist,
      data.genre,
      "music album",
      "streaming",
      "download",
      "apple music",
      "spotify",
      data.label,
      "new music",
      "latest release",
    ],
    url: `https://joecalih.co.ke/album/${data.slug}`,
    image: data.cover,
    type: "music.album",
    author: data.artist,
    publishedTime: data.releaseDate,
  })
}

export default async function AlbumPage({ params }: { params: { slug: string } }) {
  const albumData = await getAlbumData(params.slug)

  if (!albumData) {
    notFound()
  }

  const { data, content } = albumData

  // Extract track information from content
  const tracks =
    content.match(/\d+\.\s\*\*(.*?)\*\*.*?-.*?(\d+:\d+).*?-.*?\*(.*?)\*.*?-.*?(\d+)\sBPM/g)?.map((track, index) => {
      const match = track.match(/\d+\.\s\*\*(.*?)\*\*.*?-.*?(\d+:\d+).*?-.*?\*(.*?)\*.*?-.*?(\d+)\sBPM/)
      return {
        name: match?.[1] || `Track ${index + 1}`,
        duration: match?.[2] || "0:00",
        url: `https://music.apple.com/track/${data.slug}-${index + 1}`,
      }
    }) || []

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Breadcrumbs />

      <MusicAlbumSchema
        name={data.title}
        artist={data.artist}
        description={data.description}
        image={data.cover}
        datePublished={data.releaseDate}
        genre={data.genre}
        tracks={tracks}
        url={`https://joecalih.co.ke/album/${data.slug}`}
        streamingLinks={data.streamingLinks}
      />

      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <AlbumHeader data={data} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <AlbumTrackList content={content} albumSlug={data.slug} />
          </div>

          <div className="space-y-6">
            <AlbumActions data={data} />
            <AlbumInfo data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}
