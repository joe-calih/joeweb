import { notFound } from "next/navigation"
import { Suspense } from "react"
import { getLUTBySlug, getAllLUTs } from "@/lib/luts"
import { generateMetadata as generateSEOMetadata } from "@/components/seo/metadata"
import { MusicAlbumSchema } from "@/components/seo/music-schema"
import { LUTHeader } from "@/components/luts/lut-header"
import { LUTDetails } from "@/components/luts/lut-details"
import { LUTSidebar } from "@/components/luts/lut-sidebar"
import { LUTRelated } from "@/components/luts/lut-related"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import ReactMarkdown from "react-markdown"
import type { Metadata } from "next"

interface LUTPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all LUTs at build time
export async function generateStaticParams() {
  const luts = getAllLUTs()
  return luts.map((lut) => ({
    slug: lut.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: LUTPageProps): Promise<Metadata> {
  const lut = getLUTBySlug(params.slug)

  if (!lut) {
    return {
      title: "LUT Not Found",
      description: "The requested LUT could not be found.",
    }
  }

  return generateSEOMetadata({
    title: `${lut.title} - Professional Color Grading LUT`,
    description: `${lut.description} Download this professional ${lut.category} LUT for ${lut.compatibility.join(", ")}. Created by ${lut.author}.`,
    keywords: [
      ...lut.tags,
      lut.category,
      lut.mood,
      "LUT",
      "color grading",
      "video editing",
      "cinematic",
      "film",
      "premiere pro",
      "davinci resolve",
      "final cut pro",
      lut.author,
    ],
    url: `https://joecalih.co.ke/luts/${lut.slug}`,
    image: lut.previewImage,
    type: "product",
    author: lut.author,
    publishedTime: lut.dateCreated,
  })
}

// Loading component for better UX
function LUTPageSkeleton() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="bg-[#1a1a1a] py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex gap-8">
            <div className="w-[38%] flex-shrink-0">
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

export default function LUTPage({ params }: LUTPageProps) {
  const lut = getLUTBySlug(params.slug)
  const allLuts = getAllLUTs()

  if (!lut) {
    notFound()
  }

  // Filter related LUTs (same category, excluding current)
  const relatedLuts = allLuts.filter((l) => l.category === lut.category && l.id !== lut.id).slice(0, 4)

  return (
    <>
      <MusicAlbumSchema
        name={lut.title}
        artist={lut.author}
        description={lut.description}
        image={lut.previewImage}
        datePublished={lut.dateCreated}
        genre={lut.category}
        tracks={[]}
        url={`https://joecalih.co.ke/luts/${lut.slug}`}
      />

      <div className="min-h-screen bg-[#121212] text-white">
        <Breadcrumbs />

        {/* Header with optimized images */}
        <Suspense fallback={<LUTPageSkeleton />}>
          <LUTHeader lut={lut} />
        </Suspense>

        {/* Content with sticky sidebar */}
        <div className="bg-[#121212] py-12">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main content */}
              <div className="lg:col-span-8">
                {/* Content */}
                <Suspense fallback={<div className="h-64 bg-gray-800 rounded animate-pulse" />}>
                  <div className="prose prose-lg max-w-none prose-invert mb-12">
                    <ReactMarkdown>{lut.content}</ReactMarkdown>
                  </div>
                </Suspense>

                {/* Tabbed details */}
                <LUTDetails lut={lut} />
              </div>

              {/* Sticky Sidebar */}
              <div className="lg:col-span-4">
                <div className="sticky top-24">
                  <LUTSidebar lut={lut} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related LUTs */}
        <Suspense fallback={<div className="h-96 bg-gray-800 animate-pulse" />}>
          <LUTRelated luts={relatedLuts} currentLutId={lut.id} />
        </Suspense>
      </div>
    </>
  )
}

// Enable static generation for better performance
export const dynamic = "force-static"
export const revalidate = 3600 // Revalidate every hour
