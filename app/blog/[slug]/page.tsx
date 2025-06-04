import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { generateMetadata as generateSEOMetadata } from "@/components/seo/metadata"
import { getBlogPostBySlug, getRelatedPosts, getAllBlogPosts } from "@/lib/blog"
import { BlogPostHeader } from "@/components/blog/blog-post-header"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import { BlogPostAuthor } from "@/components/blog/blog-post-author"
import { BlogRelatedPosts } from "@/components/blog/blog-related-posts"
import { BlogTableOfContents } from "@/components/blog/blog-table-of-contents"
import { BlogNewsletter } from "@/components/blog/blog-newsletter"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { StructuredData } from "@/components/seo/structured-data"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return generateSEOMetadata({
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
      keywords: ["blog", "not found"],
      url: `https://joecalih.co.ke/blog/${params.slug}`,
    })
  }

  return generateSEOMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, "blog", "tutorial", "guide", ...(post.tags || [])],
    url: `https://joecalih.co.ke/blog/${params.slug}`,
    image: post.image,
    type: "article",
    author: post.author.name,
    publishedTime: post.date,
  })
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3)

  // Generate structured data for the article
  const articleSchema = {
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      image: post.author.avatar,
    },
    publisher: {
      "@type": "Organization",
      name: "Joecalih",
      logo: {
        "@type": "ImageObject",
        url: "https://joecalih.co.ke/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://joecalih.co.ke/blog/${params.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags?.join(", "),
    wordCount: post.content.split(" ").length,
    timeRequired: post.readTime,
  }

  // Generate HowTo schema for tutorial posts
  const howToSchema =
    post.category.toLowerCase().includes("tutorial") || post.title.toLowerCase().includes("how to")
      ? {
          "@type": "HowTo",
          name: post.title,
          description: post.excerpt,
          image: post.image,
          totalTime: post.readTime,
          estimatedCost: {
            "@type": "MonetaryAmount",
            currency: "USD",
            value: "0",
          },
          supply: [],
          tool: [],
          step: [], // This would be populated based on the content structure
        }
      : null

  return (
    <>
      <StructuredData type="Article" data={articleSchema} />
      {howToSchema && <StructuredData type="HowTo" data={howToSchema} />}

      <div className="min-h-screen bg-[#121212] text-white">
        <Breadcrumbs />
        <BlogPostHeader post={post} />
        <div className="max-w-[1200px] mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content - 72% on desktop, full width on mobile */}
            <div className="flex-1 lg:w-[72%]">
              <BlogPostContent content={post.content} post={post} />
              <BlogPostAuthor author={post.author} />
            </div>

            {/* Sidebar - 28% on desktop, hidden on mobile */}
            <div className="lg:w-[28%] lg:sticky lg:top-8 space-y-8 lg:self-start">
              <div className="hidden lg:block">
                <BlogTableOfContents content={post.content} />
              </div>
              <BlogNewsletter />
            </div>
          </div>
        </div>
        <BlogRelatedPosts posts={relatedPosts} />
      </div>
    </>
  )
}
