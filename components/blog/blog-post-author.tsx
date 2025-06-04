"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface Author {
  name: string
  avatar: string
  description: string
}

interface BlogPostAuthorProps {
  author: Author
}

export function BlogPostAuthor({ author }: BlogPostAuthorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-16"
    >
      <Card className="bg-[#1a1a1a] border-[#333]">
        <CardContent className="p-8">
          <div className="flex items-start gap-6">
            <img
              src={author.avatar || "/placeholder.svg?height=80&width=80"}
              alt={author.name}
              className="w-20 h-20 rounded-full border-2 border-[#333]"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">About {author.name}</h3>
              <p className="text-gray-400 leading-relaxed text-lg">{author.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
