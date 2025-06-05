import type { Metadata } from "next"
import Link from "next/link"
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  Heart,
  Share2,
  Download,
  Music,
  Headphones,
  Users,
  TrendingUp,
} from "lucide-react"
import { generateMetadata as generateSeoMetadata } from "@/components/seo/metadata"
import { StructuredData } from "@/components/seo/structured-data"
import { Breadcrumbs } from "@/components/layout/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { getAllAlbums } from "@/lib/albums"

export const metadata: Metadata = generateSeoMetadata({
  title: "Music - Stream & Download Original Tracks",
  description:
    "Discover and stream original music tracks, albums, and playlists. High-quality audio downloads and exclusive releases from independent artists.",
  keywords: [
    "music streaming",
    "original music",
    "independent artists",
    "music downloads",
    "albums",
    "playlists",
    "audio tracks",
  ],
  url: "https://joecalih.co.ke/music",
})

export default function MusicPage() {
  const albums = getAllAlbums()
  const featuredAlbums = albums.slice(0, 6)
  const recentTracks = [
    {
      id: 1,
      title: "Midnight Dreams",
      artist: "Joe Calih",
      album: "Urban Vibes",
      duration: "3:45",
      image: "/placeholder.svg?height=60&width=60",
      isPlaying: false,
    },
    {
      id: 2,
      title: "City Lights",
      artist: "Joe Calih",
      album: "Electronic Fusion",
      duration: "4:12",
      image: "/placeholder.svg?height=60&width=60",
      isPlaying: true,
    },
    {
      id: 3,
      title: "Acoustic Soul",
      artist: "Joe Calih",
      album: "Acoustic Sessions",
      duration: "3:28",
      image: "/placeholder.svg?height=60&width=60",
      isPlaying: false,
    },
  ]

  const stats = [
    { label: "Total Tracks", value: "150+", icon: Music },
    { label: "Monthly Listeners", value: "25K+", icon: Headphones },
    { label: "Albums Released", value: "12", icon: Users },
    { label: "Streams", value: "500K+", icon: TrendingUp },
  ]

  return (
    <>
      <StructuredData
        type="MusicGroup"
        data={{
          "@type": "MusicGroup",
          name: "Joe Calih Music",
          description: "Original music tracks, albums, and exclusive releases",
          url: "https://joecalih.co.ke/music",
          genre: ["Electronic", "Hip Hop", "Ambient", "House"],
        }}
      />

      <div className="min-h-screen bg-[#121212] text-white">
        <Breadcrumbs />

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#fc3c44]/20 via-[#121212] to-[#000] z-0"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10 z-0"></div>

          <div className="max-w-[1200px] mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-[#fc3c44] text-white hover:bg-[#fc3c44]/90 mb-4">Now Playing</Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Original Music
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-lg">
                  Stream and download high-quality original tracks, albums, and exclusive releases from independent
                  artists.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button className="bg-[#fc3c44] hover:bg-[#fc3c44]/90 text-white">
                    <Play className="mr-2 h-4 w-4" />
                    Start Listening
                  </Button>
                  <Button variant="outline" className="border-[#333] hover:bg-[#333] text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Download Tracks
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="h-6 w-6 mx-auto mb-2 text-[#fc3c44]" />
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#000] p-8 rounded-2xl border border-[#333] backdrop-blur-sm">
                  <div className="aspect-square rounded-xl overflow-hidden mb-6">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Now Playing"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">City Lights</h3>
                    <p className="text-gray-400">Joe Calih • Electronic Fusion</p>
                  </div>

                  <div className="space-y-4">
                    <Slider defaultValue={[33]} max={100} step={1} className="w-full" />

                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>1:23</span>
                      <span>4:12</span>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        <SkipBack className="h-4 w-4" />
                      </Button>
                      <Button size="lg" className="bg-[#fc3c44] hover:bg-[#fc3c44]/90 text-white rounded-full">
                        <Pause className="h-6 w-6" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        <SkipForward className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <div className="flex items-center gap-2">
                        <Volume2 className="h-4 w-4 text-gray-400" />
                        <Slider defaultValue={[70]} max={100} step={1} className="w-20" />
                      </div>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Tracks */}
        <section className="py-16 bg-[#1a1a1a]">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Recent Tracks</h2>
              <Link href="/album" className="text-[#fc3c44] hover:text-[#fc3c44]/80">
                View all tracks
              </Link>
            </div>

            <div className="space-y-4">
              {recentTracks.map((track, index) => (
                <div
                  key={track.id}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-[#222] transition-colors group"
                >
                  <div className="text-gray-400 w-6 text-center">
                    {track.isPlaying ? (
                      <div className="flex items-center justify-center">
                        <div className="w-3 h-3 bg-[#fc3c44] rounded-full animate-pulse"></div>
                      </div>
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>

                  <div className="relative">
                    <img
                      src={track.image || "/placeholder.svg"}
                      alt={track.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <Button
                      size="sm"
                      className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
                    >
                      {track.isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">{track.title}</h3>
                    <p className="text-sm text-gray-400 truncate">{track.artist}</p>
                  </div>

                  <div className="hidden md:block text-sm text-gray-400">{track.album}</div>

                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <span className="text-sm text-gray-400 w-12 text-right">{track.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Albums */}
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Featured Albums</h2>
              <Link href="/album" className="text-[#fc3c44] hover:text-[#fc3c44]/80">
                View all albums
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredAlbums.map((album) => (
                <Card
                  key={album.slug}
                  className="bg-[#1a1a1a] border-[#333] overflow-hidden group hover:bg-[#222] transition-colors"
                >
                  <div className="relative aspect-square">
                    <img
                      src={album.image || "/placeholder.svg?height=300&width=300"}
                      alt={album.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button className="bg-[#fc3c44] hover:bg-[#fc3c44]/90 text-white rounded-full">
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg font-semibold line-clamp-1">{album.title}</CardTitle>
                    <p className="text-sm text-gray-400">{album.artist}</p>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-[#333] text-gray-300">
                        {album.genre}
                      </Badge>
                      <Link href={`/album/${album.slug}`}>
                        <Button variant="ghost" size="sm" className="text-[#fc3c44] hover:text-[#fc3c44]/80">
                          Listen
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Music Categories */}
        <section className="py-16 bg-[#1a1a1a]">
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Explore by Genre</h2>

            <Tabs defaultValue="electronic" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-[#222] border border-[#333]">
                <TabsTrigger
                  value="electronic"
                  className="data-[state=active]:bg-[#fc3c44] data-[state=active]:text-white"
                >
                  Electronic
                </TabsTrigger>
                <TabsTrigger
                  value="hip-hop"
                  className="data-[state=active]:bg-[#fc3c44] data-[state=active]:text-white"
                >
                  Hip Hop
                </TabsTrigger>
                <TabsTrigger
                  value="ambient"
                  className="data-[state=active]:bg-[#fc3c44] data-[state=active]:text-white"
                >
                  Ambient
                </TabsTrigger>
                <TabsTrigger value="house" className="data-[state=active]:bg-[#fc3c44] data-[state=active]:text-white">
                  House
                </TabsTrigger>
              </TabsList>

              {["electronic", "hip-hop", "ambient", "house"].map((genre) => (
                <TabsContent key={genre} value={genre}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredAlbums.slice(0, 3).map((album) => (
                      <Card key={`${genre}-${album.slug}`} className="bg-[#222] border-[#333] overflow-hidden">
                        <div className="aspect-video">
                          <img
                            src={album.image || "/placeholder.svg?height=200&width=300"}
                            alt={album.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardHeader className="p-4">
                          <CardTitle className="text-lg font-semibold">{album.title}</CardTitle>
                          <p className="text-sm text-gray-400">
                            {album.artist} • {album.genre}
                          </p>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <Link href={`/album/${album.slug}`}>
                            <Button className="w-full bg-[#fc3c44] hover:bg-[#fc3c44]/90 text-white">
                              <Play className="mr-2 h-4 w-4" />
                              Play Album
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="bg-gradient-to-r from-[#fc3c44]/20 to-[#333] p-8 md:p-12 rounded-xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Musical Journey</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Discover exclusive tracks, download high-quality audio, and support independent artists. Join our
                community of music lovers today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#fc3c44] hover:bg-[#fc3c44]/90 text-white">
                  <Play className="mr-2 h-4 w-4" />
                  Start Streaming
                </Button>
                <Button variant="outline" className="border-[#333] hover:bg-[#333] text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download App
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
