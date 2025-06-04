"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Play, Download, Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface Product {
  id: string
  title: string
  artist: string
  category: "samples" | "luts" | "presets" | "albums"
  price: string
  originalPrice?: string
  image: string
  slug: string
  tags: string[]
  isNew?: boolean
  isFeatured?: boolean
  downloadCount?: number
}

interface ShopProductGridProps {
  category: string
  sort: string
  price: string
  page: number
  itemsPerPage: number
}

export function ShopProductGrid({ category, sort, price, page, itemsPerPage }: ShopProductGridProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  // Mock data - replace with actual API call
  const mockProducts: Product[] = [
    {
      id: "1",
      title: "Afro House Essentials",
      artist: "Joecalih",
      category: "samples",
      price: "$19.99",
      originalPrice: "$29.99",
      image: "/placeholder.svg?height=300&width=300",
      slug: "afro-house-essentials",
      tags: ["house", "afro", "percussion"],
      isNew: true,
      downloadCount: 1250,
    },
    {
      id: "2",
      title: "Cinematic Orange Teal",
      artist: "Joecalih",
      category: "luts",
      price: "$12.99",
      image: "/placeholder.svg?height=300&width=300",
      slug: "cinematic-orange-teal",
      tags: ["cinematic", "orange", "teal"],
      isFeatured: true,
      downloadCount: 890,
    },
    {
      id: "3",
      title: "Vintage Film Look",
      artist: "Joecalih",
      category: "presets",
      price: "$15.99",
      image: "/placeholder.svg?height=300&width=300",
      slug: "vintage-film-look",
      tags: ["vintage", "film", "analog"],
      downloadCount: 2100,
    },
    {
      id: "4",
      title: "Midnight Dreams",
      artist: "Joecalih",
      category: "albums",
      price: "$9.99",
      image: "/placeholder.svg?height=300&width=300",
      slug: "midnight-dreams",
      tags: ["electronic", "ambient", "chill"],
      downloadCount: 567,
    },
    // Add more mock products to demonstrate pagination
    ...Array.from({ length: 44 }, (_, i) => ({
      id: `${i + 5}`,
      title: `Product ${i + 5}`,
      artist: "Joecalih",
      category: ["samples", "luts", "presets", "albums"][i % 4] as Product["category"],
      price: `$${(Math.random() * 50 + 5).toFixed(2)}`,
      image: "/placeholder.svg?height=300&width=300",
      slug: `product-${i + 5}`,
      tags: ["tag1", "tag2"],
      downloadCount: Math.floor(Math.random() * 3000),
    })),
  ]

  useEffect(() => {
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      let filteredProducts = mockProducts

      // Filter by category
      if (category !== "all") {
        filteredProducts = filteredProducts.filter((product) => product.category === category)
      }

      // Filter by price
      if (price !== "all") {
        filteredProducts = filteredProducts.filter((product) => {
          const productPrice = Number.parseFloat(product.price.replace("$", ""))
          switch (price) {
            case "free":
              return productPrice === 0
            case "under-10":
              return productPrice < 10
            case "10-25":
              return productPrice >= 10 && productPrice <= 25
            case "25-50":
              return productPrice >= 25 && productPrice <= 50
            case "over-50":
              return productPrice > 50
            default:
              return true
          }
        })
      }

      // Sort products
      filteredProducts.sort((a, b) => {
        switch (sort) {
          case "price-low":
            return Number.parseFloat(a.price.replace("$", "")) - Number.parseFloat(b.price.replace("$", ""))
          case "price-high":
            return Number.parseFloat(b.price.replace("$", "")) - Number.parseFloat(a.price.replace("$", ""))
          case "popular":
            return (b.downloadCount || 0) - (a.downloadCount || 0)
          case "name":
            return a.title.localeCompare(b.title)
          case "oldest":
            return Number.parseInt(a.id) - Number.parseInt(b.id)
          default: // newest
            return Number.parseInt(b.id) - Number.parseInt(a.id)
        }
      })

      // Paginate
      const startIndex = (page - 1) * itemsPerPage
      const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage)

      setProducts(paginatedProducts)
      setLoading(false)
    }, 500)
  }, [category, sort, price, page, itemsPerPage])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
        {Array.from({ length: 12 }).map((_, i) => (
          <Card key={i} className="bg-[#1a1a1a] border-gray-800 overflow-hidden">
            <div className="aspect-square bg-gray-800 animate-pulse" />
            <CardContent className="p-4">
              <div className="h-4 bg-gray-800 rounded animate-pulse mb-2" />
              <div className="h-3 bg-gray-800 rounded animate-pulse w-2/3 mb-2" />
              <div className="h-4 bg-gray-800 rounded animate-pulse w-1/3" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-400">
          Showing {(page - 1) * itemsPerPage + 1}-{Math.min(page * itemsPerPage, products.length)} of {products.length}{" "}
          products
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-[#1a1a1a] border-gray-800 overflow-hidden group hover:border-[#fc3c44] transition-all duration-300">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Play className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-2 left-2 flex gap-1">
                  {product.isNew && <Badge className="bg-[#fc3c44] text-white text-xs">New</Badge>}
                  {product.isFeatured && <Badge className="bg-yellow-500 text-black text-xs">Featured</Badge>}
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="text-xs capitalize">
                    {product.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="mb-2">
                  <Link
                    href={`/${product.category}/${product.slug}`}
                    className="font-medium text-white hover:text-[#fc3c44] transition-colors line-clamp-1"
                  >
                    {product.title}
                  </Link>
                  <p className="text-sm text-gray-400">{product.artist}</p>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#fc3c44]">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Download className="w-3 h-3" />
                    {product.downloadCount?.toLocaleString()}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-[#fc3c44] hover:bg-[#e63946]">
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Add to Cart
                  </Button>
                  <Button size="sm" variant="outline" className="border-gray-600">
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
