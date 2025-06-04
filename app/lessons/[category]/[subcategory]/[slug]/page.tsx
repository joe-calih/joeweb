import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { generateMetadata as generateSEOMetadata } from "@/components/seo/metadata"
import { getLessonBySlug, getNextLesson, getPreviousLesson, getAllLessons } from "@/lib/lessons"
import { LessonHeader } from "@/components/lessons/lesson-header"
import { LessonContent } from "@/components/lessons/lesson-content"
import { LessonNavigation } from "@/components/lessons/lesson-navigation"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

interface LessonPageProps {
  params: {
    category: string
    subcategory: string
    slug: string
  }
}

export async function generateMetadata({ params }: LessonPageProps): Promise<Metadata> {
  const lesson = getLessonBySlug(params.category, params.subcategory, params.slug)

  if (!lesson) {
    return generateSEOMetadata({
      title: "Lesson Not Found",
      description: "The requested lesson could not be found.",
      keywords: ["lesson", "not found"],
      url: `https://joecalih.co.ke/lessons/${params.category}/${params.subcategory}/${params.slug}`,
    })
  }

  return generateSEOMetadata({
    title: lesson.title,
    description: lesson.description,
    keywords: [lesson.category, lesson.subcategory || "", ...lesson.tags],
    url: `https://joecalih.co.ke/lessons/${params.category}/${params.subcategory}/${params.slug}`,
    image: lesson.image,
    type: "article",
    author: lesson.instructor.name,
    publishedTime: lesson.publishedAt,
  })
}

export async function generateStaticParams() {
  const lessons = getAllLessons()
  return lessons.map((lesson) => ({
    category: lesson.category,
    subcategory: lesson.subcategory,
    slug: lesson.slug,
  }))
}

export default function LessonPage({ params }: LessonPageProps) {
  const lesson = getLessonBySlug(params.category, params.subcategory, params.slug)

  if (!lesson) {
    notFound()
  }

  const nextLesson = getNextLesson(params.slug, params.category, params.subcategory)
  const previousLesson = getPreviousLesson(params.slug, params.category, params.subcategory)

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Breadcrumbs />
      <LessonHeader lesson={lesson} />
      <LessonContent lesson={lesson} content={lesson.content} />
      <LessonNavigation currentLesson={lesson} nextLesson={nextLesson} previousLesson={previousLesson} />
    </div>
  )
}
