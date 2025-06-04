"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"

interface Category {
  name: string
  slug: string
  count: number
}

interface BlogCategoriesProps {
  categories: Category[]
}

export function BlogCategories({ categories }: BlogCategoriesProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || "all"

  return (
    <div className="bg-[#1a1a1a] border-b border-[#333] sticky top-16 z-40">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
          {categories.map((category, index) => {
            const isActive = currentCategory === category.slug
            const href = category.slug === "all" ? "/blog" : `/blog?category=${category.slug}`

            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    isActive ? "bg-[#fc3c44] text-white" : "bg-[#333] text-gray-400 hover:bg-[#444] hover:text-white"
                  }`}
                >
                  {category.name}
                  <span className={`text-xs px-2 py-1 rounded-full ${isActive ? "bg-white/20" : "bg-[#444]"}`}>
                    {category.count}
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
