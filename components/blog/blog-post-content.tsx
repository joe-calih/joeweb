"use client"

import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import type { BlogPost } from "@/lib/blog"
import { StructuredData } from "@/components/seo/structured-data"
import { useEffect, useState } from "react"

interface BlogPostContentProps {
  content: string
  post: BlogPost
}

export function BlogPostContent({ content, post }: BlogPostContentProps) {
  const [readingProgress, setReadingProgress] = useState(0)

  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setReadingProgress(progress)
    }

    window.addEventListener("scroll", updateReadingProgress)
    return () => window.removeEventListener("scroll", updateReadingProgress)
  }, [])

  // Generate FAQ schema if content contains Q&A
  const faqSchema = content.includes("##")
    ? {
        "@type": "FAQPage",
        mainEntity: content
          .split("\n")
          .filter((line) => line.startsWith("## "))
          .slice(0, 5) // Limit to 5 FAQ items
          .map((question) => ({
            "@type": "Question",
            name: question.replace("## ", ""),
            acceptedAnswer: {
              "@type": "Answer",
              text: "Detailed answer content...", // This would need to be extracted from content
            },
          })),
      }
    : null

  // Generate HowTo schema for tutorial content
  const howToSchema =
    post.title.toLowerCase().includes("how to") || post.category.toLowerCase().includes("tutorial")
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
          step: content
            .split("\n")
            .filter((line) => line.match(/^\d+\./))
            .slice(0, 10)
            .map((step, index) => ({
              "@type": "HowToStep",
              position: index + 1,
              name: step.replace(/^\d+\.\s*/, ""),
              text: step.replace(/^\d+\.\s*/, ""),
            })),
        }
      : null

  // Generate NewsArticle schema for news content
  const newsSchema =
    post.category.toLowerCase().includes("news") || post.tags?.some((tag) => tag.toLowerCase().includes("news"))
      ? {
          "@type": "NewsArticle",
          headline: post.title,
          description: post.excerpt,
          image: post.image,
          datePublished: post.date,
          dateModified: post.date,
          author: {
            "@type": "Person",
            name: post.author.name,
          },
          publisher: {
            "@type": "Organization",
            name: "Joecalih",
            logo: {
              "@type": "ImageObject",
              url: "https://joecalih.co.ke/logo.png",
            },
          },
          articleSection: post.category,
          keywords: post.tags?.join(", "),
        }
      : null

  return (
    <>
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#fc3c44] to-[#ff6b6b] transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Structured Data */}
      {faqSchema && <StructuredData type="FAQPage" data={faqSchema} />}
      {howToSchema && <StructuredData type="HowTo" data={howToSchema} />}
      {newsSchema && <StructuredData type="NewsArticle" data={newsSchema} />}

      <article className="prose prose-lg max-w-none prose-invert prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#fc3c44] prose-strong:text-white prose-code:text-[#fc3c44] prose-pre:bg-gray-900 prose-blockquote:border-l-[#fc3c44] prose-blockquote:text-gray-400">
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "")
              return !inline && match ? (
                <SyntaxHighlighter style={oneDark} language={match[1]} PreTag="div" className="rounded-lg" {...props}>
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
            h1: ({ children }) => (
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-white leading-tight">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-2xl md:text-3xl font-bold mb-4 mt-8 text-white leading-tight">{children}</h3>
            ),
            p: ({ children }) => <p className="text-lg leading-relaxed mb-6 text-gray-300">{children}</p>,
            ul: ({ children }) => <ul className="list-disc list-inside mb-6 space-y-2 text-gray-300">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-300">{children}</ol>,
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-[#fc3c44] pl-6 my-8 italic text-gray-400 bg-gray-900/50 py-4 rounded-r-lg">
                {children}
              </blockquote>
            ),
            img: ({ src, alt }) => (
              <img
                src={src || "/placeholder.svg"}
                alt={alt}
                className="rounded-lg shadow-lg my-8 w-full"
                loading="lazy"
              />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </>
  )
}
