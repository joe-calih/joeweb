"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface Category {
  name: string
  slug: string
  count: number
}

interface BlogCategoriesProps {
  categories: Category[]
}

export function BlogCategories({ categories }: BlogCategoriesProps) {
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || "all"

  // Add "All" category at the beginning
  const allCategories = [
    { name: "All", slug: "all", count: categories.reduce((sum, cat) => sum + cat.count, 0) },
    ...categories,
  ]

  return (
    <div className="bg-[#1a1a1a] border-b border-[#333] sticky top-16 z-40 w-full h-16">
      <div className="w-full bg-[#1a1a1a] h-full">
        <div className="max-w-[1200px] mx-auto px-4 h-full">
          <div className="flex items-center gap-1 h-full">
            {allCategories.map((category, index) => {
              const isActive = currentCategory === category.slug
              const href = category.slug === "all" ? "/blog" : `/blog?category=${category.slug}`

              return (
                <motion.div
                  key={category.slug}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex-shrink-0"
                >
                  <Link
                    href={href}
                    className={`px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-300 border-b-2 ${
                      isActive
                        ? "text-[#fc3c44] border-[#fc3c44]"
                        : "text-gray-400 border-transparent hover:text-white hover:border-gray-600"
                    }`}
                  >
                    {category.name}
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
