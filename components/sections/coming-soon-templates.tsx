"use client"

import { motion } from "framer-motion"
import { Code, Download, Laptop, Sparkles, Wand2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ComingSoonTemplates() {
  return (
    <section className="py-16 bg-gradient-to-b from-background/80 to-background">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-primary/10 border border-primary/20"
          >
            <Wand2 className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Coming Soon</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Website Templates
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Premium website templates designed for creators, artists, and businesses. Built with modern frameworks and
            optimized for performance and SEO.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {templates.map((template, index) => (
            <motion.div
              key={template.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              className="bg-card/30 backdrop-blur-sm border border-border rounded-xl overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 relative flex items-center justify-center">
                <template.icon className="w-16 h-16 text-primary/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{template.title}</h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    Coming Soon
                  </span>
                </div>

                <p className="text-muted-foreground mb-4">{template.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {template.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-background border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Code className="w-4 h-4 mr-1" />
                    {template.framework}
                  </span>
                  <span className="flex items-center">
                    <Laptop className="w-4 h-4 mr-1" />
                    Responsive
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-border max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-2">Get Notified on Launch</h3>
          <p className="text-muted-foreground text-center mb-6">
            Subscribe to be notified when our website templates are available. Early subscribers receive exclusive
            templates for free.
          </p>

          <div className="flex flex-col sm:flex-row w-full max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button className="whitespace-nowrap">
              <Sparkles className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const templates = [
  {
    title: "Creator Portfolio",
    description: "Showcase your creative work with this elegant, minimalist portfolio template",
    framework: "Next.js",
    tags: ["Portfolio", "Creative", "Minimal"],
    icon: Sparkles,
  },
  {
    title: "Music Artist",
    description: "Perfect for musicians and bands to promote music, tours, and merchandise",
    framework: "React",
    tags: ["Music", "Artist", "Entertainment"],
    icon: Laptop,
  },
  {
    title: "Digital Store",
    description: "E-commerce template optimized for selling digital products and downloads",
    framework: "Next.js",
    tags: ["E-commerce", "Digital Products", "Store"],
    icon: Download,
  },
]
