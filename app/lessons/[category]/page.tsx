import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { generateMetadata as generateSEOMetadata } from "@/components/seo/metadata"
import { getLessonCategories } from "@/lib/lessons"
import { LessonSubcategoryList } from "@/components/lessons/lesson-subcategory-list"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

interface LessonCategoryPageProps {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: LessonCategoryPageProps): Promise<Metadata> {
  const categories = getLessonCategories()
  const category = categories.find((cat) => cat.slug === params.category)

  if (!category) {
    return generateSEOMetadata({
      title: "Category Not Found",
      description: "The requested lesson category could not be found.",
      keywords: ["lessons", "not found"],
      url: `https://joecalih.co.ke/lessons/${params.category}`,
    })
  }

  return generateSEOMetadata({
    title: `${category.name} Lessons - Professional Training`,
    description: category.description,
    keywords: [category.name.toLowerCase(), "lessons", "professional training", "online course"],
    url: `https://joecalih.co.ke/lessons/${params.category}`,
    image: category.image,
  })
}

export async function generateStaticParams() {
  const categories = getLessonCategories()
  return categories.map((category) => ({
    category: category.slug,
  }))
}

export default function LessonCategoryPage({ params }: LessonCategoryPageProps) {
  const categories = getLessonCategories()
  const category = categories.find((cat) => cat.slug === params.category)

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Breadcrumbs />

      {/* Category Hero */}
      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] py-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
          <p className="text-xl text-gray-400 mb-8">{category.description}</p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <span>{category.subcategories.length} Topics</span>
            <span>{category.subcategories.reduce((total, sub) => total + sub.lessons.length, 0)} Lessons</span>
            <span>All Skill Levels</span>
          </div>
        </div>
      </div>

      <LessonSubcategoryList subcategories={category.subcategories} categorySlug={params.category} />
    </div>
  )
}
