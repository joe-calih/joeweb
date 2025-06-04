import type { Metadata } from "next"
import Link from "next/link"
import { Search, Filter, ArrowRight } from "lucide-react"
import { generateMetadata as generateSeoMetadata } from "@/components/seo/metadata"
import { StructuredData } from "@/components/seo/structured-data"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAllBlogPosts, getBlogCategories } from "@/lib/blog"

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = params.category
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, " ")

  return generateSeoMetadata({
    title: `${formattedCategory} Articles - Blog`,
    description: `Explore our collection of ${formattedCategory.toLowerCase()} articles, tutorials, and insights. Expert tips and industry knowledge.`,
    keywords: [
      `${category} blog`,
      `${category} tutorials`,
      `${category} tips`,
      `${category} insights`,
      "creative industry",
    ],
    url: `https://joecalih.co.ke/blog/category/${category}`,
  })
}

export async function generateStaticParams() {
  const categories = getBlogCategories()
  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, "-"),
  }))
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category
  const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, " ")

  const allPosts = getAllBlogPosts()
  const categoryPosts = allPosts.filter(
    (post) => post.category.toLowerCase().replace(/\s+/g, "-") === category.toLowerCase(),
  )

  // Get featured post (most viewed)
  const featuredPost = [...categoryPosts].sort((a, b) => b.views - a.views)[0]

  // Get remaining posts for the grid (4 per subcategory)
  const remainingPosts = categoryPosts.filter((post) => post.slug !== featuredPost?.slug)

  // Group posts by subcategory (if available)
  const subcategories: Record<string, typeof remainingPosts> = {}

  remainingPosts.forEach((post) => {
    const subcategory = post.subcategory || "General"
    if (!subcategories[subcategory]) {
      subcategories[subcategory] = []
    }
    subcategories[subcategory].push(post)
  })

  const subcategoryNames = Object.keys(subcategories)

  return (
    <>
      <StructuredData
        type="CollectionPage"
        data={{
          "@type": "CollectionPage",
          name: `${formattedCategory} Articles`,
          description: `Explore our collection of ${formattedCategory.toLowerCase()} articles and tutorials`,
          url: `https://joecalih.co.ke/blog/category/${category}`,
        }}
      />

      <div className="min-h-screen bg-[#121212] text-white">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#000] to-[#111] opacity-90 z-0"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20 z-0"></div>

          <div className="max-w-[1200px] mx-auto px-4 relative z-10">
            <Badge className="bg-[#fc3c44] text-white hover:bg-[#fc3c44]/90 mb-4">Category</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{formattedCategory}</h1>
            <p className="text-xl text-gray-300 max-w-2xl mb-8">
              Explore our collection of {formattedCategory.toLowerCase()} articles, tutorials, and insights to enhance
              your creative skills and knowledge.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  placeholder={`Search ${formattedCategory} articles...`}
                  className="pl-10 bg-[#1a1a1a] border-[#333] text-white"
                />
              </div>
              <Button className="bg-[#fc3c44] hover:bg-[#fc3c44]/90 text-white">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 bg-[#1a1a1a]">
            <div className="max-w-[1200px] mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold">Featured Article</h2>
                <Link href="/blog" className="text-[#fc3c44] hover:text-[#fc3c44]/80 flex items-center">
                  View all articles <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src={featuredPost.image || "/placeholder.svg?height=400&width=600"}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <Badge className="bg-[#fc3c44] text-white hover:bg-[#fc3c44]/90 mb-4">
                    {featuredPost.subcategory || featuredPost.category}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-400 mb-6">
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredPost.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredPost.views.toLocaleString()} views</span>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button className="bg-[#fc3c44] hover:bg-[#fc3c44]/90 text-white">Read Article</Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Category Posts */}
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">{formattedCategory} Articles</h2>

            {subcategoryNames.length > 1 ? (
              <Tabs defaultValue={subcategoryNames[0]} className="w-full">
                <TabsList className="mb-8 bg-[#1a1a1a] border-b border-[#333] p-0 h-auto flex flex-wrap">
                  {subcategoryNames.map((subcat) => (
                    <TabsTrigger
                      key={subcat}
                      value={subcat}
                      className="px-6 py-3 data-[state=active]:bg-transparent data-[state=active]:text-[#fc3c44] data-[state=active]:border-b-2 data-[state=active]:border-[#fc3c44] rounded-none"
                    >
                      {subcat}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {subcategoryNames.map((subcat) => (
                  <TabsContent key={subcat} value={subcat}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {subcategories[subcat].slice(0, 4).map((post) => (
                        <Card key={post.slug} className="bg-[#1a1a1a] border-[#333] overflow-hidden">
                          <div className="aspect-video">
                            <img
                              src={post.image || "/placeholder.svg?height=200&width=300"}
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardHeader className="p-4 pb-2">
                            <CardTitle className="text-lg font-semibold line-clamp-2">{post.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <p className="text-sm text-gray-400 line-clamp-3">{post.excerpt}</p>
                          </CardContent>
                          <CardFooter className="p-4 pt-0 flex justify-between items-center">
                            <span className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString()}</span>
                            <Link href={`/blog/${post.slug}`}>
                              <Button variant="ghost" size="sm" className="text-[#fc3c44] hover:text-[#fc3c44]/80 p-0">
                                Read more <ArrowRight className="ml-1 h-3 w-3" />
                              </Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>

                    {subcategories[subcat].length > 4 && (
                      <div className="mt-8 text-center">
                        <Button variant="outline" className="border-[#333] hover:bg-[#333] text-white">
                          Load more {subcat} articles
                        </Button>
                      </div>
                    )}
                  </TabsContent>
                ))}
              </Tabs>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {remainingPosts.slice(0, 8).map((post) => (
                  <Card key={post.slug} className="bg-[#1a1a1a] border-[#333] overflow-hidden">
                    <div className="aspect-video">
                      <img
                        src={post.image || "/placeholder.svg?height=200&width=300"}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-lg font-semibold line-clamp-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-gray-400 line-clamp-3">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between items-center">
                      <span className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString()}</span>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm" className="text-[#fc3c44] hover:text-[#fc3c44]/80 p-0">
                          Read more <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#1a1a1a]">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="bg-gradient-to-r from-[#fc3c44]/20 to-[#333] p-8 md:p-12 rounded-xl">
              <div className="max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with {formattedCategory}</h2>
                <p className="text-gray-300 mb-6">
                  Subscribe to our newsletter to receive the latest {formattedCategory.toLowerCase()} articles,
                  tutorials, and insights directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input placeholder="Enter your email address" className="bg-[#111] border-[#333] text-white" />
                  <Button className="bg-[#fc3c44] hover:bg-[#fc3c44]/90 text-white">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
