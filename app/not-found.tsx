import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Home, Search, ArrowLeft, Music, ImageIcon, Palette, BookOpen, Camera, Headphones } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function NotFound() {
  const quickLinks = [
    {
      title: "Sample Packs",
      description: "Professional music samples",
      href: "/samples",
      icon: Music,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "LUTs",
      description: "Color grading presets",
      href: "/luts",
      icon: ImageIcon,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Lightroom Presets",
      description: "Photo editing presets",
      href: "/lightroom-presets",
      icon: Palette,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Blog",
      description: "Tutorials and guides",
      href: "/blog",
      icon: BookOpen,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Lessons",
      description: "Learn new skills",
      href: "/lessons",
      icon: Camera,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Albums",
      description: "Music collections",
      href: "/album",
      icon: Headphones,
      gradient: "from-pink-500 to-rose-500",
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Static 404 */}
          <div className="mb-12">
            <div className="relative">
              <h1 className="text-[8rem] md:text-[12rem] font-black text-muted-foreground/20 leading-none select-none">
                404
              </h1>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-[#fc3c44] to-[#ff6b6b] flex items-center justify-center shadow-2xl">
                  <Search className="w-10 h-10 md:w-14 md:h-14 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Page Not Found</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved. Let's get you back to creating amazing
              content.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg" variant="outline" className="h-12 px-6">
                <Link href="javascript:history.back()">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Go Back
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#fc3c44] to-[#ff6b6b] hover:from-[#e63946] hover:to-[#ff5252] text-white h-12 px-6"
              >
                <Link href="/">
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">Popular Destinations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickLinks.map((link) => (
                <div key={link.href} className="transform hover:scale-105 transition-transform duration-300">
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 group">
                    <Link href={link.href} className="block">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${link.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <link.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{link.title}</h4>
                      <p className="text-muted-foreground text-sm">{link.description}</p>
                    </Link>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Help Link */}
          <div className="mt-16 text-muted-foreground text-sm">
            <p>
              Need help?{" "}
              <Link href="/support" className="text-[#fc3c44] hover:underline">
                Contact Support
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
