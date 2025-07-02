// Client-safe version without fs dependency
export interface LightroomPreset {
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
  downloadFormat: string[]
  compatibility: string[]
  adjustments: {
    exposure?: string
    contrast?: string
    highlights?: string
    shadows?: string
    whites?: string
    blacks?: string
    vibrance?: string
    saturation?: string
    temperature?: string
    tint?: string
  }
  datePublished: string
  featured: boolean
  content: string
}

// Mock data for client-side rendering
const mockPresets: LightroomPreset[] = [
  {
    id: "cinematic-film-look",
    slug: "cinematic-film-look",
    title: "Cinematic Film Look",
    description: "Professional cinematic preset with film-like characteristics",
    author: "Joecalih",
    price: "$15",
    originalPrice: "$25",
    category: "Cinematic",
    mood: "Dramatic",
    tags: ["cinematic", "film", "dramatic", "professional"],
    previewImage: "/placeholder.svg?height=400&width=600",
    beforeImage: "/placeholder.svg?height=400&width=600",
    afterImage: "/placeholder.svg?height=400&width=600",
    fileSize: "2.1 MB",
    downloadFormat: [".xmp", ".lrtemplate"],
    compatibility: ["Lightroom Classic", "Lightroom CC", "Camera Raw"],
    adjustments: {
      exposure: "+0.3",
      contrast: "+20",
      highlights: "-30",
      shadows: "+15",
      whites: "-10",
      blacks: "+5",
      vibrance: "+15",
      saturation: "+5",
      temperature: "+200",
      tint: "+5",
    },
    datePublished: "2024-01-15",
    featured: true,
    content:
      "Transform your photos with this professional cinematic preset that delivers the iconic film look seen in movies.",
  },
  {
    id: "vintage-analog",
    slug: "vintage-analog",
    title: "Vintage Analog",
    description: "Authentic vintage film emulation with warm tones",
    author: "Joecalih",
    price: "$12",
    category: "Vintage",
    mood: "Nostalgic",
    tags: ["vintage", "analog", "warm", "retro"],
    previewImage: "/placeholder.svg?height=400&width=600",
    beforeImage: "/placeholder.svg?height=400&width=600",
    afterImage: "/placeholder.svg?height=400&width=600",
    fileSize: "1.8 MB",
    downloadFormat: [".xmp", ".lrtemplate"],
    compatibility: ["Lightroom Classic", "Lightroom CC", "Camera Raw"],
    adjustments: {
      exposure: "+0.1",
      contrast: "+10",
      highlights: "-20",
      shadows: "+20",
      whites: "-5",
      blacks: "+10",
      vibrance: "+10",
      saturation: "-5",
      temperature: "+300",
      tint: "+3",
    },
    datePublished: "2024-01-10",
    featured: true,
    content: "Recreate the magic of vintage analog photography with warm, nostalgic tones.",
  },
  {
    id: "modern-portrait",
    slug: "modern-portrait",
    title: "Modern Portrait",
    description: "Clean, modern preset perfect for portrait photography",
    author: "Joecalih",
    price: "$10",
    category: "Portrait",
    mood: "Clean",
    tags: ["portrait", "modern", "clean", "professional"],
    previewImage: "/placeholder.svg?height=400&width=600",
    beforeImage: "/placeholder.svg?height=400&width=600",
    afterImage: "/placeholder.svg?height=400&width=600",
    fileSize: "1.5 MB",
    downloadFormat: [".xmp", ".lrtemplate"],
    compatibility: ["Lightroom Classic", "Lightroom CC", "Camera Raw"],
    adjustments: {
      exposure: "+0.2",
      contrast: "+15",
      highlights: "-15",
      shadows: "+10",
      whites: "0",
      blacks: "0",
      vibrance: "+8",
      saturation: "+3",
      temperature: "0",
      tint: "0",
    },
    datePublished: "2024-01-05",
    featured: false,
    content: "Perfect for modern portrait photography with clean, professional results.",
  },
  {
    id: "travel-adventure",
    slug: "travel-adventure",
    title: "Travel Adventure",
    description: "Vibrant preset for travel and adventure photography",
    author: "Joecalih",
    price: "$14",
    category: "Travel",
    mood: "Vibrant",
    tags: ["travel", "adventure", "vibrant", "landscape"],
    previewImage: "/placeholder.svg?height=400&width=600",
    beforeImage: "/placeholder.svg?height=400&width=600",
    afterImage: "/placeholder.svg?height=400&width=600",
    fileSize: "1.9 MB",
    downloadFormat: [".xmp", ".lrtemplate"],
    compatibility: ["Lightroom Classic", "Lightroom CC", "Camera Raw"],
    adjustments: {
      exposure: "+0.1",
      contrast: "+25",
      highlights: "-25",
      shadows: "+20",
      whites: "+5",
      blacks: "-5",
      vibrance: "+20",
      saturation: "+10",
      temperature: "+100",
      tint: "+2",
    },
    datePublished: "2024-01-20",
    featured: true,
    content: "Enhance your travel photos with vibrant colors and adventurous spirit.",
  },
]

export function getAllPresets(): LightroomPreset[] {
  try {
    return mockPresets.sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime())
  } catch (error) {
    console.error("Error loading presets data:", error)
    return []
  }
}

export function getPresetBySlug(slug: string): LightroomPreset | null {
  try {
    return mockPresets.find((preset) => preset.slug === slug) || null
  } catch (error) {
    console.error(`Error getting preset by slug ${slug}:`, error)
    return null
  }
}

export function getFeaturedPresets(limit = 4): LightroomPreset[] {
  try {
    return mockPresets.filter((preset) => preset.featured).slice(0, limit)
  } catch (error) {
    console.error("Error getting featured presets:", error)
    return []
  }
}

export function getPresetsByCategory(category: string): LightroomPreset[] {
  try {
    return mockPresets.filter((preset) => preset.category.toLowerCase() === category.toLowerCase())
  } catch (error) {
    console.error(`Error getting presets by category ${category}:`, error)
    return []
  }
}

export function getPresetCategories(): string[] {
  try {
    const categories = mockPresets.map((preset) => preset.category)
    return [...new Set(categories)].sort()
  } catch (error) {
    console.error("Error getting preset categories:", error)
    return []
  }
}

export function getRelatedPresets(currentSlug: string, limit = 4): LightroomPreset[] {
  try {
    const currentPreset = getPresetBySlug(currentSlug)
    if (!currentPreset) return []

    return mockPresets
      .filter((preset) => preset.slug !== currentSlug && preset.category === currentPreset.category)
      .slice(0, limit)
  } catch (error) {
    console.error(`Error getting related presets for ${currentSlug}:`, error)
    return []
  }
}
