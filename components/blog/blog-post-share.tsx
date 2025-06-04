"use client"

import { motion } from "framer-motion"
import { Share2, Music, Twitter, Facebook, Linkedin, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"
import type { BlogPost } from "@/lib/blog"

interface BlogPostShareProps {
  post: BlogPost
}

export function BlogPostShare({ post }: BlogPostShareProps) {
  const shareUrl = `https://artists.apple.com/blog/${post.slug}`
  const shareText = `Check out this article: ${post.title}`

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      toast({
        title: "Link copied!",
        description: "The article link has been copied to your clipboard.",
      })
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy the URL manually.",
        variant: "destructive",
      })
    }
  }

  const shareToAppleMusic = () => {
    // Apple Music sharing functionality
    const appleUrl = `https://music.apple.com/share?url=${encodeURIComponent(shareUrl)}`
    window.open(appleUrl, "_blank")
  }

  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
    window.open(twitterUrl, "_blank")
  }

  const shareToFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    window.open(facebookUrl, "_blank")
  }

  const shareToLinkedIn = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    window.open(linkedinUrl, "_blank")
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="sticky top-24"
    >
      <Card className="bg-[#1a1a1a] border-[#333]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <Share2 className="w-5 h-5" />
            Share Article
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button onClick={shareToAppleMusic} className="w-full bg-[#fc3c44] hover:bg-[#e63946] text-white">
            <Music className="w-4 h-4 mr-2" />
            Apple Music
          </Button>

          <Button
            onClick={shareToTwitter}
            variant="outline"
            className="w-full bg-[#1da1f2] hover:bg-[#1a91da] text-white border-[#1da1f2]"
          >
            <Twitter className="w-4 h-4 mr-2" />
            Twitter
          </Button>

          <Button
            onClick={shareToFacebook}
            variant="outline"
            className="w-full bg-[#4267B2] hover:bg-[#365899] text-white border-[#4267B2]"
          >
            <Facebook className="w-4 h-4 mr-2" />
            Facebook
          </Button>

          <Button
            onClick={shareToLinkedIn}
            variant="outline"
            className="w-full bg-[#0077b5] hover:bg-[#005885] text-white border-[#0077b5]"
          >
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>

          <Button
            onClick={copyToClipboard}
            variant="outline"
            className="w-full bg-[#333] hover:bg-[#444] text-white border-[#333]"
          >
            <LinkIcon className="w-4 h-4 mr-2" />
            Copy Link
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
