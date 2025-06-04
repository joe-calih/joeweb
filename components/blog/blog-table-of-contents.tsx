"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { List, ChevronDown } from "lucide-react"

interface TableOfContentsProps {
  content: string
}

interface TOCItem {
  id: string
  title: string
}

export function BlogTableOfContents({ content }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>("")
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    // Extract only H2 headings from markdown content
    const headingRegex = /^#{2}\s+(.+)$/gm
    const items: TOCItem[] = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      const title = match[1].trim()
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")

      items.push({
        id,
        title,
      })
    }

    setTocItems(items)
  }, [content])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0% -35% 0%" },
    )

    // Observe all headings
    tocItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [tocItems])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  if (tocItems.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="sticky top-8"
    >
      <div className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden">
        {/* Header */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-6 hover:bg-[#222] transition-colors duration-200"
        >
          <div className="flex items-center gap-2">
            <List className="w-5 h-5 text-[#fc3c44]" />
            <h3 className="text-lg font-semibold text-white">Table of Contents</h3>
          </div>
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </motion.div>
        </button>

        {/* Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <nav className="px-6 pb-6 space-y-2">
                {tocItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    onClick={() => scrollToHeading(item.id)}
                    className={`block w-full text-left py-2 px-3 rounded transition-all duration-200 ${
                      activeId === item.id
                        ? "text-[#fc3c44] shadow-[0_0_10px_rgba(252,60,68,0.3)]"
                        : "text-gray-400 hover:text-white hover:bg-[#333]"
                    }`}
                  >
                    <span className="text-sm leading-relaxed">
                      <span className="text-[#fc3c44] font-medium mr-2">{index + 1}.</span>
                      {item.title}
                    </span>
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
