import type { MetadataRoute } from "next"
import { getAllBlogPosts } from "@/lib/blog"
import { getAllSamples } from "@/lib/samples"
import { getAllLUTs } from "@/lib/luts"
import { getAllPresets } from "@/lib/lightroom-presets"
import { getAllLessons } from "@/lib/lessons"
import { getAllAlbums } from "@/lib/albums"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://joecalih.co.ke"

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/changelog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]

  // Dynamic blog pages
  const blogPosts = getAllBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Blog category pages
  const blogCategories = ["seo", "marketing", "content-creation", "digital-transformation", "ai-technology"].map(
    (category) => ({
      url: `${baseUrl}/blog/category/${category}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }),
  )

  // Dynamic sample pages
  const samplePacks = getAllSamples().map((sample) => ({
    url: `${baseUrl}/samples/${sample.slug}`,
    lastModified: new Date(sample.releaseDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Dynamic LUT pages
  const luts = getAllLUTs().map((lut) => ({
    url: `${baseUrl}/luts/${lut.slug}`,
    lastModified: new Date(lut.dateCreated),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Dynamic preset pages
  const presets = getAllPresets().map((preset) => ({
    url: `${baseUrl}/lightroom-presets/${preset.slug}`,
    lastModified: new Date(preset.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Dynamic lesson pages
  const lessons = getAllLessons().map((lesson) => ({
    url: `${baseUrl}/lessons/${lesson.category}/${lesson.subcategory}/${lesson.slug}`,
    lastModified: new Date(lesson.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Dynamic album pages
  const albums = getAllAlbums().map((album) => ({
    url: `${baseUrl}/album/${album.slug}`,
    lastModified: new Date(album.releaseDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Category pages
  const categoryPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/samples`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/luts`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lightroom-presets`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lessons`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/album`,
      lastModified: new Date(),
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
