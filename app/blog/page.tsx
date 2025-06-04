import type { Metadata } from "next"
import { generateMetadata } from "@/components/seo/metadata"
import { StructuredData } from "@/components/seo/structured-data"
import { BlogHeader } from "@/components/blog/blog-header"
import { BlogCategories } from "@/components/blog/blog-categories"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogPagination } from "@/components/blog/blog-pagination"
import { getAllBlogPosts, getBlogCategories } from "@/lib/blog"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"

export const metadata: Metadata = generateMetadata({
  title: "Blog - Creative Insights & Tutorials",
  description:
    "Discover the latest trends, tutorials, and insights in music production, photography, video editing, and creative design. Expert tips and industry knowledge.",
  keywords: [
    "creative blog",
    "music production tutorials",
    "photography tips",
    "video editing",
    "design insights",
    "creative industry",
  ],
  url: "https://joecalih.co.ke/blog",
})

const blogSchema = {
  "@type": "Blog",
  name: "Joecalih Creative Blog",
  description: "Creative insights, tutorials, and industry knowledge for artists and creators",
  url: "https://joecalih.co.ke/blog",
  publisher: {
    "@type": "Organization",
    name: "Joecalih",
    url: "https://joecalih.co.ke",
  },
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: {
    category?: string
    page?: string
  }
}) {
  const category = searchParams.category
  const currentPage = Number.parseInt(searchParams.page || "1", 10)
  const postsPerPage = 12

  const allPosts = getAllBlogPosts()
  const categories = getBlogCategories()

  // Filter posts by category if specified
  const filteredPosts = category ? allPosts.filter((post) => post.category === category) : allPosts

  // Paginate posts
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  return (
    <>
      <StructuredData type="Blog" data={blogSchema} />

      <div className="min-h-screen bg-[#121212] text-white">
        <Breadcrumbs />
        <BlogHeader />

        <div className="max-w-[1200px] mx-auto px-4 py-16">
          <BlogCategories categories={categories} activeCategory={category} />
          <BlogGrid posts={paginatedPosts} />
          <BlogPagination currentPage={currentPage} totalPages={totalPages} category={category} />
        </div>
      </div>
    </>
  )
}
