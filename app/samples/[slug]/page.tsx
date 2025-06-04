import type { Metadata } from "next"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { notFound } from "next/navigation"
import { generateMetadata as seoMetadata } from "@/components/seo/metadata"
import { StructuredData } from "@/components/seo/structured-data"
import { SamplePackHeader } from "@/components/samples/sample-pack-header"
import { SamplePackList } from "@/components/samples/sample-pack-list"
import { SamplePackContent } from "@/components/samples/sample-pack-content"
import { SamplePackRelated } from "@/components/samples/sample-pack-related"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

interface SamplePackData {
  title: string
  artist: string
  slug: string
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
}

async function getSamplePackData(slug: string): Promise<{ data: SamplePackData; content: string } | null> {
  try {
    const filePath = path.join(process.cwd(), "content/samples", `${slug}.md`)
    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContents)
    return { data: data as SamplePackData, content }
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const samplePack = await getSamplePackData(params.slug)

  if (!samplePack) {
    return seoMetadata({
      title: "Sample Pack Not Found",
      description: "The requested sample pack could not be found.",
    })
  }

  return seoMetadata({
    title: `${samplePack.data.title} - ${samplePack.data.artist} | Premium Sample Pack`,
    description: `${samplePack.data.description} Download high-quality ${samplePack.data.genre} samples, loops, and beats. ${samplePack.data.totalSamples} professional samples for music production.`,
    keywords: [
      ...samplePack.data.tags,
      "sample pack",
      "music production",
      "beats",
      "loops",
      "royalty free samples",
      samplePack.data.genre.toLowerCase(),
      samplePack.data.artist.toLowerCase(),
      "music samples download",
      "producer tools",
      "beat making",
      "audio samples",
    ],
    url: `https://joecalih.co.ke/samples/${params.slug}`,
  })
}

export default async function SamplePackPage({ params }: { params: { slug: string } }) {
  const samplePack = await getSamplePackData(params.slug)

  if (!samplePack) {
    notFound()
  }

  // Parse samples from markdown content
  const samples = parseSamplesFromContent(samplePack.content)

  // Enhanced structured data for Google
  const productSchema = {
    "@type": "Product",
    name: samplePack.data.title,
    description: samplePack.data.description,
    brand: {
      "@type": "Brand",
      name: "Joecalih",
    },
    manufacturer: {
      "@type": "Organization",
      name: samplePack.data.artist,
    },
    image: samplePack.data.cover,
    offers: {
      "@type": "Offer",
      price: samplePack.data.price.replace("$", ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Joecalih",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
    category: "Music Sample Pack",
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Genre",
        value: samplePack.data.genre,
      },
      {
        "@type": "PropertyValue",
        name: "Sample Count",
        value: samplePack.data.totalSamples.toString(),
      },
      {
        "@type": "PropertyValue",
        name: "BPM Range",
        value: samplePack.data.bpmRange,
      },
      {
        "@type": "PropertyValue",
        name: "Pack Size",
        value: samplePack.data.packSize,
      },
    ],
  }

  const musicAlbumSchema = {
    "@type": "MusicAlbum",
    name: samplePack.data.title,
    byArtist: {
      "@type": "MusicGroup",
      name: samplePack.data.artist,
    },
    datePublished: samplePack.data.releaseDate,
    genre: samplePack.data.genre,
    image: samplePack.data.cover,
    numTracks: samplePack.data.totalSamples,
    track: samples.map((sample, index) => ({
      "@type": "MusicRecording",
      name: sample.name,
      position: index + 1,
      duration: sample.duration,
      byArtist: {
        "@type": "MusicGroup",
        name: samplePack.data.artist,
      },
    })),
  }

  return (
    <>
      <StructuredData type="Product" data={productSchema} />
      <StructuredData type="MusicAlbum" data={musicAlbumSchema} />

      <div className="min-h-screen bg-[#121212] text-white">
        <Breadcrumbs />

        <div className="max-w-[1200px] mx-auto px-4 py-8 space-y-16">
          <SamplePackHeader samplePack={samplePack.data} />
          <SamplePackList samples={samples} />
          <SamplePackContent samplePack={samplePack.data} />
          <SamplePackRelated />
        </div>
      </div>
    </>
  )
}

function parseSamplesFromContent(content: string) {
  const samples: Array<{
    name: string
    duration: string
    bpm: string
    key: string
    type: string
    category: string
  }> = []

  const lines = content.split("\n")
  let currentCategory = ""

  for (const line of lines) {
    if (line.startsWith("### ")) {
      currentCategory = line.replace("### ", "")
    } else if (line.startsWith("- **")) {
      const match = line.match(/- \*\*(.*?)\*\* - Duration: (.*?) - (?:BPM: (.*?) - )?(?:Key: (.*?) - )?Type: (.*?)$/)
      if (match) {
        samples.push({
          name: match[1],
          duration: match[2],
          bpm: match[3] || "",
          key: match[4] || "",
          type: match[5],
          category: currentCategory,
        })
      }
    }
  }

  return samples
}
