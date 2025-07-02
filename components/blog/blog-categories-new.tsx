"use client"
import { Button } from "@/components/ui/button"
import type { BlogCategory } from "@/lib/blog"

interface BlogCategoriesNewProps {
  categories: BlogCategory[]
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
}

export function BlogCategoriesNew({ categories, selectedCategory, onCategoryChange }: BlogCategoriesNewProps) {
  return (
    <div className="sticky top-16 z-40 bg-black border-b border-[#333] py-4">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-wrap gap-3">
          {/* All Categories Button */}
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => onCategoryChange(null)}
            className={
              selectedCategory === null
                ? "bg-[#fc3c44] text-white hover:bg-[#e63946] rounded-full"
                : "bg-transparent border-[#333] text-white hover:bg-[#333] hover:border-[#fc3c44] rounded-full"
            }
          >
            All Categories
          </Button>

          {/* Category Buttons */}
          {categories.map((category) => (
            <Button
              key={category.slug}
              variant={selectedCategory === category.slug ? "default" : "outline"}
              onClick={() => onCategoryChange(category.slug)}
              className={
                selectedCategory === category.slug
                  ? "bg-[#fc3c44] text-white hover:bg-[#e63946] rounded-full"
                  : "bg-transparent border-[#333] text-white hover:bg-[#333] hover:border-[#fc3c44] rounded-full"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
