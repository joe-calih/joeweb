import type { MetadataRoute } from "next"
import { getAllBlogPosts } from "@/lib/blog"
import { getAllSamples } from "@/lib/samples"
import { getAllLUTs } from "@/lib/luts"
import { getAllPresets } from "@/lib/lightroom-presets"
import { getAllLessons } from "@/lib/lessons"
import { getAllAlbums } from "@/lib/albums"

// Helper function to validate and format dates
function getValidDate(dateString: string | undefined): Date {
  if (!dateString) {
    return new Date()
  }

  const date = new Date(dateString)

  // Check if date is valid
  if (isNaN(date.getTime())) {
    console.warn(`Invalid date found: ${dateString}, using current date`)
    return new Date()
  }

  return date
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://joecalih.co.ke"
  const currentDate = new Date()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/graphics`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/changelog`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]

  // Dynamic blog pages with date validation
  const blogPosts = getAllBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: getValidDate(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Blog category pages
  const blogCategories = [
    "seo",
    "marketing",
    "content-creation",
    "digital-transformation",
    "ai-technology",
    "business",
  ].map((category) => ({
    url: `${baseUrl}/blog/category/${category}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Dynamic sample pages with date validation
  const samplePacks = getAllSamples().map((sample) => ({
    url: `${baseUrl}/samples/${sample.slug}`,
    lastModified: getValidDate(sample.releaseDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Dynamic LUT pages with date validation
  const luts = getAllLUTs().map((lut) => ({
    url: `${baseUrl}/luts/${lut.slug}`,
    lastModified: getValidDate(lut.dateCreated),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Dynamic preset pages with date validation
  const presets = getAllPresets().map((preset) => ({
    url: `${baseUrl}/lightroom-presets/${preset.slug}`,
    lastModified: getValidDate(preset.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Dynamic lesson pages with date validation
  let lessons: Array<{
    url: string
    lastModified: Date
    changeFrequency: "monthly"
    priority: number
  }> = []

  try {
    lessons = getAllLessons().map((lesson) => ({
      url: `${baseUrl}/lessons/${lesson.category}/${lesson.subcategory}/${lesson.slug}`,
      lastModified: getValidDate(lesson.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  } catch (error) {
    console.warn("Error loading lessons for sitemap:", error)
  }

  // Dynamic album pages with date validation
  const albums = getAllAlbums().map((album) => ({
    url: `${baseUrl}/album/${album.slug}`,
    lastModified: getValidDate(album.releaseDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Category pages
  const categoryPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/samples`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/luts`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lightroom-presets`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lessons`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/album`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ]

  return [
    ...staticPages,
    ...categoryPages,
    ...blogPosts,
    ...blogCategories,
    ...samplePacks,
    ...luts,
    ...presets,
    ...lessons,
    ...albums,
  ]
}
