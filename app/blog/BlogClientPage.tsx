"use client"

import { useState, useMemo } from "react"
import { getAllBlogPosts, getBlogCategories } from "@/lib/blog"
import { BlogGridNew } from "@/components/blog/blog-grid-new"
import { BlogCategoriesNew } from "@/components/blog/blog-categories-new"
import { BlogFeaturedHero } from "@/components/blog/blog-featured-hero"
import { AdSenseSidebar } from "@/components/ads/adsense-sidebar"
import { BlogPaginationNew } from "@/components/blog/blog-pagination-new"

const POSTS_PER_PAGE = 10

export default function BlogClientPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  // Get data
  const allPosts = getAllBlogPosts()
  const categories = getBlogCategories()

  // Get featured post (first post) and remaining posts
  const featuredPost = allPosts[0]
  const remainingPosts = allPosts.slice(1)

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return remainingPosts
    return remainingPosts.filter((post) => post.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory)
  }, [remainingPosts, selectedCategory])

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {featuredPost && <BlogFeaturedHero post={featuredPost} />}

      <BlogCategoriesNew
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <div className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-[72%]">
            <BlogGridNew posts={currentPosts} />

            {totalPages > 1 && (
              <div className="mt-12">
                <BlogPaginationNew currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-[28%]">
            <div className="sticky top-8 space-y-6">
              <AdSenseSidebar />

              {/* Additional sidebar content can go here */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                <p className="text-gray-400 mb-4">Get the latest insights delivered to your inbox.</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#fc3c44]"
                  />
                  <button className="w-full bg-[#fc3c44] text-white py-2 rounded-lg hover:bg-[#e63946] transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
