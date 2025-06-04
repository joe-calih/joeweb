import type { Metadata } from "next"
import { generateMetadata } from "@/components/seo/metadata"
import { StructuredData } from "@/components/seo/structured-data"
import { LessonsHero } from "@/components/sections/lessons-hero"
import { LessonCategoryGrid } from "@/components/lessons/lesson-category-grid"
import { getLessonCategories } from "@/lib/lessons"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

export const metadata: Metadata = generateMetadata({
  title: "Professional Lessons - Master Your Craft",
  description:
    "Learn from industry experts with our structured courses in photography, music production, and creative skills. Professional lessons for all skill levels.",
  keywords: ["professional lessons", "online courses", "photography", "music production", "creative education"],
  url: "https://joecalih.co.ke/lessons",
})

const lessonsSchema = {
  "@type": "Course",
  name: "Professional Creative Lessons",
  description: "Structured learning paths for creative professionals",
  provider: {
    "@type": "Organization",
    name: "Joecalih",
    url: "https://joecalih.co.ke",
  },
}

export default function LessonsPage() {
  const categories = getLessonCategories()

  return (
    <>
      <StructuredData type="Course" data={lessonsSchema} />

      <main className="min-h-screen bg-[#121212] text-white">
        <Breadcrumbs />
        <LessonsHero />
        <LessonCategoryGrid categories={categories} />
      </main>
    </>
  )
}
