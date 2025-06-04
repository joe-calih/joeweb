"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Home, Search, ArrowLeft, Music, ImageIcon, Palette, BookOpen, Camera, Headphones } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function NotFound() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Animated 404 with Apple-style glass effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="relative">
            {/* Glass morphism background */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl" />

            <div className="relative p-8 md:p-16">
              <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 leading-none select-none">
                404
              </h1>

              {/* Animated search icon */}
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-[#fc3c44] to-[#ff6b6b] flex items-center justify-center shadow-2xl backdrop-blur-sm">
                  <Search className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Content with Apple-style typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">Page Not Found</h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            The page you're looking for doesn't exist or has been moved.
            <br className="hidden md:block" />
            Let's get you back to creating amazing content.
          </p>

          {/* Action Buttons with Apple-style design */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button
              onClick={() => router.back()}
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm h-14 px-8 text-lg font-medium rounded-2xl transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-3" />
              Go Back
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#fc3c44] to-[#ff6b6b] hover:from-[#e63946] hover:to-[#ff5252] text-white shadow-2xl h-14 px-8 text-lg font-medium rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/">
                <Home className="w-5 h-5 mr-3" />
                Go Home
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Quick Links with enhanced Apple design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-12 tracking-tight">Popular Destinations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 group rounded-2xl overflow-hidden">
                  <Link href={link.href} className="block p-8">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${link.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                    >
                      <link.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3 tracking-tight">{link.title}</h4>
                    <p className="text-gray-400 text-base font-light leading-relaxed">{link.description}</p>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Apple-style footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 text-gray-500 text-sm font-light"
        >
          <p>
            Need help?{" "}
            <Link href="/support" className="text-white hover:text-gray-300 transition-colors">
              Contact Support
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
