import { notFound } from "next/navigation"
import { Suspense } from "react"
import { getSampleBySlug, getAllSamples, getRelatedSamples } from "@/lib/samples"
import { generateMetadata as generateSEOMetadata } from "@/components/seo/metadata"
import { MusicAlbumSchema } from "@/components/seo/music-schema"
import { SamplePackHeader } from "@/components/samples/sample-pack-header"
import { SamplePackContent } from "@/components/samples/sample-pack-content"
import { SamplePackRelated } from "@/components/samples/sample-pack-related"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import type { Metadata } from "next"

interface SamplePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const samples = getAllSamples()
  return samples.map((sample) => ({
    slug: sample.slug,
  }))
}

export async function generateMetadata({ params }: SamplePageProps): Promise<Metadata> {
  const sample = getSampleBySlug(params.slug)

  if (!sample) {
    return {
      title: "Sample Pack Not Found",
      description: "The requested sample pack could not be found.",
    }
  }

  return generateSEOMetadata({
    title: `${sample.title} - Professional Sample Pack`,
    description: `${sample.description} Download this professional ${sample.genre} sample pack. Created by ${sample.artist}.`,
    keywords: [
      sample.genre,
      sample.mood || "music",
      "sample pack",
      "music production",
      "beats",
      "loops",
      sample.artist,
    ],
    url: `https://joecalih.co.ke/samples/${sample.slug}`,
    image: sample.coverImage || sample.cover || "/placeholder.svg?height=400&width=400",
    type: "article",
    author: sample.artist,
    publishedTime: sample.releaseDate || new Date().toISOString(),
  })
}

function SamplePageSkeleton() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="bg-[#1a1a1a] py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex gap-8">
            <div className="w-[35%] flex-shrink-0">
              <div className="w-full aspect-square bg-gray-800 rounded-lg animate-pulse" />
            </div>
            <div className="flex-1 space-y-4">
              <div className="h-8 bg-gray-800 rounded animate-pulse" />
              <div className="h-4 bg-gray-800 rounded animate-pulse w-3/4" />
              <div className="h-6 bg-gray-800 rounded animate-pulse w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SamplePage({ params }: SamplePageProps) {
  const sample = getSampleBySlug(params.slug)
  const relatedSamples = getRelatedSamples(params.slug)

  if (!sample) {
    notFound()
  }

  return (
    <>
      <MusicAlbumSchema
        name={sample.title}
        artist={sample.artist}
        description={sample.description}
        image={sample.coverImage}
        datePublished={sample.releaseDate}
        genre={sample.genre}
        tracks={sample.samples}
        url={`https://joecalih.co.ke/samples/${sample.slug}`}
      />

      <div className="min-h-screen bg-[#121212] text-white">
        <Breadcrumbs />

        <Suspense fallback={<SamplePageSkeleton />}>
          <SamplePackHeader samplePack={sample} />
        </Suspense>

        <div className="bg-[#121212] py-12">
          <div className="max-w-[1200px] mx-auto px-4">
            <SamplePackContent sample={sample} />
          </div>
        </div>

        <Suspense fallback={<div className="h-96 bg-gray-800 animate-pulse" />}>
          <SamplePackRelated samples={relatedSamples} currentSampleSlug={sample.slug} />
        </Suspense>
      </div>
    </>
  )
}

export const dynamic = "force-static"
export const revalidate = 3600
