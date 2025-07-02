// Client-safe version without fs dependency
export interface LUT {
  id: string
  slug: string
  title: string
  description: string
  author: string
  price: string
  originalPrice?: string
  category: string
  mood: string
  tags: string[]
  previewImage: string
  beforeImage?: string
  afterImage?: string
  fileSize: string
  format?: string
  downloadFormat: string[]
  compatibility: string[]
  colorTemp: string
  contrast: string
  saturation: string
  highlights: string
  shadows: string
  dateCreated: string
  datePublished?: string
  featured: boolean
  content: string
  colorSpecs?: {
    temperature?: string
    tint?: string
    exposure?: string
    contrast?: string
    highlights?: string
    shadows?: string
    vibrance?: string
    saturation?: string
  }
}

// Mock data for client-side rendering
const mockLUTs: LUT[] = [
  {
    id: "cinematic-orange-teal",
    slug: "cinematic-orange-teal",
    title: "Cinematic Orange & Teal",
    description: "Professional cinematic color grading with orange and teal tones",
    author: "Joecalih",
    price: "$12",
    originalPrice: "$20",
    category: "Cinematic",
    mood: "Dramatic",
    tags: ["cinematic", "orange", "teal", "blockbuster"],
    previewImage: "/placeholder.svg?height=400&width=600",
    beforeImage: "/placeholder.svg?height=400&width=600",
    afterImage: "/placeholder.svg?height=400&width=600",
    fileSize: "1.2 MB",
    format: ".cube",
    downloadFormat: [".cube", ".3dl"],
    compatibility: ["DaVinci Resolve", "Premiere Pro", "Final Cut Pro"],
    colorTemp: "+200K",
    contrast: "+15%",
    saturation: "+10%",
    highlights: "-20%",
    shadows: "+10%",
    dateCreated: "2024-01-15",
    datePublished: "2024-01-15",
    featured: true,
    content:
      "Transform your footage with this professional cinematic LUT that delivers the iconic orange and teal color grading seen in blockbuster movies.",
    colorSpecs: {
      temperature: "5600K",
      tint: "+5",
      exposure: "+0.5",
      contrast: "+15",
      highlights: "-10",
      shadows: "+15",
      vibrance: "+20",
      saturation: "+10",
    },
  },
  {
    id: "vintage-film-emulation",
    slug: "vintage-film-emulation",
    title: "Vintage Film Emulation",
    description: "Authentic vintage film look with grain and color characteristics",
    author: "Joecalih",
    price: "$10",
    category: "Vintage",
    mood: "Nostalgic",
    tags: ["vintage", "film", "retro", "analog"],
    previewImage: "/placeholder.svg?height=400&width=600",
    beforeImage: "/placeholder.svg?height=400&width=600",
    afterImage: "/placeholder.svg?height=400&width=600",
    fileSize: "0.8 MB",
    format: ".cube",
    downloadFormat: [".cube", ".3dl"],
    compatibility: ["DaVinci Resolve", "Premiere Pro", "Final Cut Pro"],
    colorTemp: "-100K",
    contrast: "+5%",
    saturation: "-5%",
    highlights: "-10%",
    shadows: "+5%",
    dateCreated: "2024-01-10",
    datePublished: "2024-01-10",
    featured: true,
    content:
      "Recreate the magic of vintage film photography with this authentic emulation that captures the grain and color characteristics of classic film stocks.",
    colorSpecs: {
      temperature: "5200K",
      tint: "-2",
      exposure: "0",
      contrast: "+5",
      highlights: "-10",
      shadows: "+5",
      vibrance: "+5",
      saturation: "-5",
    },
  },
  {
    id: "modern-clean-look",
    slug: "modern-clean-look",
    title: "Modern Clean Look",
    description: "Clean, modern color grading for contemporary content",
    author: "Joecalih",
    price: "$8",
    category: "Modern",
    mood: "Clean",
    tags: ["modern", "clean", "minimal", "corporate"],
    previewImage: "/placeholder.svg?height=400&width=600",
    beforeImage: "/placeholder.svg?height=400&width=600",
    afterImage: "/placeholder.svg?height=400&width=600",
    fileSize: "0.6 MB",
    format: ".cube",
    downloadFormat: [".cube", ".3dl"],
    compatibility: ["DaVinci Resolve", "Premiere Pro", "Final Cut Pro"],
    colorTemp: "0K",
    contrast: "+8%",
    saturation: "+3%",
    highlights: "-5%",
    shadows: "0%",
    dateCreated: "2024-01-05",
    datePublished: "2024-01-05",
    featured: false,
    content:
      "Perfect for modern, clean video content with balanced colors and professional appearance suitable for corporate and commercial use.",
    colorSpecs: {
      temperature: "5500K",
      tint: "0",
      exposure: "0",
      contrast: "+8",
      highlights: "-5",
      shadows: "0",
      vibrance: "+3",
      saturation: "+3",
    },
  },
  {
    id: "sunset-golden-hour",
    slug: "sunset-golden-hour",
    title: "Sunset Golden Hour",
    description: "Warm golden hour tones for romantic and dreamy footage",
    author: "Joecalih",
    price: "$15",
    category: "Warm",
    mood: "Romantic",
    tags: ["sunset", "golden", "warm", "romantic"],
    previewImage: "/placeholder.svg?height=400&width=600",
    beforeImage: "/placeholder.svg?height=400&width=600",
    afterImage: "/placeholder.svg?height=400&width=600",
    fileSize: "1.0 MB",
    format: ".cube",
    downloadFormat: [".cube", ".3dl"],
    compatibility: ["DaVinci Resolve", "Premiere Pro", "Final Cut Pro"],
    colorTemp: "+300K",
    contrast: "+12%",
    saturation: "+8%",
    highlights: "-15%",
    shadows: "+8%",
    dateCreated: "2024-01-20",
    datePublished: "2024-01-20",
    featured: true,
    content:
      "Capture the magic of golden hour with warm, romantic tones perfect for wedding videos, portraits, and dreamy cinematography.",
    colorSpecs: {
      temperature: "3200K",
      tint: "+3",
      exposure: "+0.3",
      contrast: "+12",
      highlights: "-15",
      shadows: "+8",
      vibrance: "+15",
      saturation: "+8",
    },
  },
  {
    id: "cyberpunk-neon",
    slug: "cyberpunk-neon",
    title: "Cyberpunk Neon",
    description: "Futuristic cyberpunk aesthetic with neon highlights",
    author: "Joecalih",
    price: "$18",
    category: "Futuristic",
    mood: "Edgy",
    tags: ["cyberpunk", "neon", "futuristic", "sci-fi"],
    previewImage: "/placeholder.svg?height=400&width=600",
    beforeImage: "/placeholder.svg?height=400&width=600",
    afterImage: "/placeholder.svg?height=400&width=600",
    fileSize: "1.5 MB",
    format: ".cube",
    downloadFormat: [".cube", ".3dl"],
    compatibility: ["DaVinci Resolve", "Premiere Pro", "Final Cut Pro"],
    colorTemp: "-50K",
    contrast: "+25%",
    saturation: "+20%",
    highlights: "+10%",
    shadows: "-10%",
    dateCreated: "2024-01-25",
    datePublished: "2024-01-25",
    featured: true,
    content:
      "Transform your footage into a cyberpunk masterpiece with electric neon colors and futuristic aesthetic perfect for sci-fi content.",
    colorSpecs: {
      temperature: "6500K",
      tint: "-5",
      exposure: "+0.2",
      contrast: "+25",
      highlights: "+10",
      shadows: "-10",
      vibrance: "+25",
      saturation: "+20",
    },
  },
]

export function getAllLUTs(): LUT[] {
  try {
    return mockLUTs.sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime())
  } catch (error) {
    console.error("Error loading LUTs data:", error)
    return []
  }
}

export function getLUTBySlug(slug: string): LUT | null {
  try {
    return mockLUTs.find((lut) => lut.slug === slug) || null
  } catch (error) {
    console.error(`Error getting LUT by slug ${slug}:`, error)
    return null
  }
}

export function getFeaturedLUTs(limit = 4): LUT[] {
  try {
    return mockLUTs.filter((lut) => lut.featured).slice(0, limit)
  } catch (error) {
    console.error("Error getting featured LUTs:", error)
    return []
  }
}

export function getLUTsByCategory(category: string): LUT[] {
  try {
    return mockLUTs.filter((lut) => lut.category.toLowerCase() === category.toLowerCase())
  } catch (error) {
    console.error(`Error getting LUTs by category ${category}:`, error)
    return []
  }
}

export function getLUTCategories(): string[] {
  try {
    const categories = mockLUTs.map((lut) => lut.category)
    return [...new Set(categories)].sort()
  } catch (error) {
    console.error("Error getting LUT categories:", error)
    return []
  }
}

export function getRelatedLUTs(currentSlug: string, limit = 4): LUT[] {
  try {
    const currentLUT = getLUTBySlug(currentSlug)
    if (!currentLUT) return []

    return mockLUTs.filter((lut) => lut.slug !== currentSlug && lut.category === currentLUT.category).slice(0, limit)
  } catch (error) {
    console.error(`Error getting related LUTs for ${currentSlug}:`, error)
    return []
  }
}

// Legacy exports for backward compatibility
export const getAllLuts = getAllLUTs
export const getLutBySlug = getLUTBySlug
export const getRelatedLuts = getRelatedLUTs
