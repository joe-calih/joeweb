export interface SamplePack {
  slug: string
  title: string
  artist: string
  description: string
  genre: string
  mood?: string
  coverImage?: string
  cover?: string
  releaseDate?: string
  price?: string
  totalSamples?: number
  bpmRange?: string
  packSize?: string
  duration?: string
  samples?: Array<{
    name: string
    duration: string
    bpm?: number
  }>
}

export interface Album {
  slug: string
  title: string
  artist: string
  description: string
  genre: string
  coverImage?: string
  releaseDate?: string
  price?: string
  tracks?: Array<{
    name: string
    duration: string
  }>
}

export interface LUT {
  slug: string
  title: string
  description: string
  category: string
  coverImage?: string
  price?: string
  compatibility?: string[]
}

export interface LightroomPreset {
  slug: string
  title: string
  description: string
  category: string
  coverImage?: string
  price?: string
  compatibility?: string[]
}
