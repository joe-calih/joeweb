"use client"

import { motion } from "framer-motion"
import { Search, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ShopHeader() {
  return (
    <section className="bg-gradient-to-b from-background to-background/80 border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Creative Resources Shop
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground mb-8"
          >
            Browse our curated collection of premium creative resources for music producers, photographers,
            videographers, and content creators.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <Button className="whitespace-nowrap">
              <ShoppingCart className="w-4 h-4 mr-2" />
              View Cart
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
