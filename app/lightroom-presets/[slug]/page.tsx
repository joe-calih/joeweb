import { notFound } from "next/navigation"
import { Suspense } from "react"
import { getPresetBySlug, getAllPresets, getRelatedPresets } from "@/lib/lightroom-presets"
import { generateMetadata as generateSEOMetadata } from "@/components/seo/metadata"
import { MusicAlbumSchema } from "@/components/seo/music-schema"
import { PresetHeader } from "@/components/lightroom-presets/preset-header"
import { PresetDetails } from "@/components/lightroom-presets/preset-details"
import { PresetSidebar } from "@/components/lightroom-presets/preset-sidebar"
import { PresetRelated } from "@/components/lightroom-presets/preset-related"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import ReactMarkdown from "react-markdown"
import type { Metadata } from "next"

interface PresetPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const presets = getAllPresets()
  return presets.map((preset) => ({
    slug: preset.slug,
  }))
}

export async function generateMetadata({ params }: PresetPageProps): Promise<Metadata> {
  const preset = getPresetBySlug(params.slug)

  if (!preset) {
    return {
      title: "Preset Not Found",
      description: "The requested Lightroom preset could not be found.",
    }
  }

  return generateSEOMetadata({
    title: `${preset.title} - Professional Lightroom Preset`,
    description: `${preset.description} Download this professional ${preset.category} Lightroom preset. Created by ${preset.author}.`,
    keywords: [
      preset.category,
      preset.mood,
      "Lightroom preset",
      "photo editing",
      "photography",
      "Adobe Lightroom",
      preset.author,
    ],
    url: `https://joecalih.co.ke/lightroom-presets/${preset.slug}`,
    image: preset.previewImage,
    type: "product",
    author: preset.author,
    publishedTime: preset.datePublished,
  })
}

function PresetPageSkeleton() {
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

export default function PresetPage({ params }: PresetPageProps) {
  const preset = getPresetBySlug(params.slug)
  const relatedPresets = getRelatedPresets(params.slug)

  if (!preset) {
    notFound()
  }

  return (
    <>
      <MusicAlbumSchema
        name={preset.title}
        artist={preset.author}
        description={preset.description}
        image={preset.previewImage}
        datePublished={preset.datePublished}
        genre={preset.category}
        tracks={[]}
        url={`https://joecalih.co.ke/lightroom-presets/${preset.slug}`}
      />

      <div className="min-h-screen bg-[#121212] text-white">
        <Breadcrumbs />

        <Suspense fallback={<PresetPageSkeleton />}>
          <PresetHeader preset={preset} />
        </Suspense>

        <div className="bg-[#121212] py-12">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8">
                <Suspense fallback={<div className="h-64 bg-gray-800 rounded animate-pulse" />}>
                  <div className="prose prose-lg max-w-none prose-invert mb-12">
                    <ReactMarkdown>{preset.content}</ReactMarkdown>
                  </div>
                </Suspense>

                <PresetDetails preset={preset} />
              </div>

              <div className="lg:col-span-4">
                <PresetSidebar preset={preset} />
              </div>
            </div>
          </div>
        </div>

        <Suspense fallback={<div className="h-96 bg-gray-800 animate-pulse" />}>
          <PresetRelated presets={relatedPresets} currentPresetSlug={preset.slug} />
        </Suspense>
      </div>
    </>
  )
}

export const dynamic = "force-static"
export const revalidate = 3600
