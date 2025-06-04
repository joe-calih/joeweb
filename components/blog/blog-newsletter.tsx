"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"

export function BlogNewsletter() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate newsletter subscription
    setTimeout(() => {
      toast({
        title: "Subscribed!",
        description: "You've been subscribed to our newsletter.",
      })
      setEmail("")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-sm"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-[#fc3c44]/10 flex items-center justify-center">
          <Mail className="w-4 h-4 text-[#fc3c44]" />
        </div>
        <h3 className="text-lg font-medium text-white">Newsletter</h3>
      </div>

      <p className="text-white/70 mb-6 text-sm leading-relaxed">
        Get weekly insights on music industry trends and artist growth strategies.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-[#fc3c44]/50 focus:ring-[#fc3c44]/20 rounded-lg h-11"
          required
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-white text-black hover:bg-white/90 font-medium rounded-lg h-11 transition-all duration-200"
        >
          {isLoading ? (
            "Subscribing..."
          ) : (
            <>
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </form>

      <p className="text-xs text-white/50 mt-4 text-center">No spam. Unsubscribe anytime.</p>
    </motion.div>
  )
}
