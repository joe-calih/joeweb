"use client"

import type React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: "default" | "dark" | "gradient"
  padding?: "default" | "large" | "small"
}

export function Section({ children, className, id, background = "default", padding = "default" }: SectionProps) {
  const backgroundClasses = {
    default: "bg-[#121212]",
    dark: "bg-[#0a0a0a]",
    gradient: "bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]",
  }

  const paddingClasses = {
    default: "py-16",
    large: "py-24",
    small: "py-8",
  }

  return (
    <motion.section
      id={id}
      className={cn("w-full", backgroundClasses[background], className)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className={cn("max-w-[1200px] mx-auto px-4", paddingClasses[padding])}>{children}</div>
    </motion.section>
  )
}
