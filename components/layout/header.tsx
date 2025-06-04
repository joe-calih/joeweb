"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Bell,
  Menu,
  X,
  Music,
  Sparkles,
  LineChart,
  LayoutGrid,
  Monitor,
  Settings,
  Mic,
  Radio,
  Disc,
  Users,
  User,
  Sun,
  Moon,
  Camera,
  Palette,
  FileText,
  DollarSign,
  HelpCircle,
  Info,
  Mail,
  FileCheck,
  History,
  Shield,
  Building,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useTheme } from "next-themes"
import { AuthModal } from "@/components/auth/auth-modal"

const navigation = [
  {
    name: "Music",
    items: [
      {
        section: "Music Resources",
        items: [
          {
            name: "Sample Packs",
            href: "/samples",
            description: "High-quality music samples and loops",
            icon: Disc,
          },
          {
            name: "Albums",
            href: "/album",
            description: "Complete music albums and releases",
            icon: Music,
          },
          {
            name: "Vocals",
            href: "/vocals",
            description: "Professional vocal samples and stems",
            icon: Mic,
          },
          {
            name: "Music Shop",
            href: "/shop",
            description: "Browse and purchase music content",
            icon: LayoutGrid,
          },
        ],
      },
      {
        section: "Tools & Analytics",
        items: [
          {
            name: "Dashboard",
            href: "/dashboard",
            description: "Track your music performance",
            icon: LineChart,
          },
          {
            name: "Studio Tools",
            href: "/studio",
            description: "Professional recording tools",
            icon: Settings,
          },
          {
            name: "Distribution",
            href: "/services",
            description: "Music distribution services",
            icon: Radio,
          },
          {
            name: "Promotion",
            href: "/products",
            description: "Music promotion and marketing",
            icon: Sparkles,
          },
        ],
      },
    ],
  },
  {
    name: "Visuals",
    items: [
      {
        name: "Lightroom Presets",
        href: "/lightroom-presets",
        description: "Professional photo editing presets",
        icon: Camera,
      },
      {
        name: "LUTs",
        href: "/luts",
        description: "Color grading lookup tables",
        icon: Palette,
      },
      {
        name: "Graphics",
        href: "/graphics",
        description: "Design templates and graphics",
        icon: Monitor,
      },
      {
        name: "Video Templates",
        href: "/video-templates",
        description: "Professional video templates",
        icon: FileText,
      },
    ],
  },
  {
    name: "Blog",
    items: [
      {
        name: "All Articles",
        href: "/blog",
        description: "Browse all blog content",
        icon: FileText,
      },
      {
        name: "SEO",
        href: "/blog/category/seo",
        description: "Search engine optimization",
        icon: LineChart,
      },
      {
        name: "Marketing",
        href: "/blog/category/marketing",
        description: "Digital marketing strategies",
        icon: Sparkles,
      },
      {
        name: "Content Creation",
        href: "/blog/category/content",
        description: "Content creation guides",
        icon: Palette,
      },
      {
        name: "Business",
        href: "/blog/category/business",
        description: "Business growth tips",
        icon: Building,
      },
    ],
  },
  {
    name: "Lessons",
    items: [
      {
        name: "Professional Courses",
        href: "/lessons",
        description: "Structured learning paths",
        icon: Users,
      },
      {
        name: "Photography",
        href: "/lessons/photography",
        description: "Professional photography courses",
        icon: Camera,
      },
      {
        name: "Music Production",
        href: "/lessons/music-production",
        description: "Music creation and production",
        icon: Music,
      },
    ],
  },
  {
    name: "Services",
    items: [
      {
        name: "Pricing",
        href: "/pricing",
        description: "Membership plans and pricing",
        icon: DollarSign,
      },
      {
        name: "Support",
        href: "/support",
        description: "Get help and documentation",
        icon: HelpCircle,
      },
      {
        name: "Members",
        href: "/members",
        description: "Community and member benefits",
        icon: Users,
      },
    ],
  },
  {
    name: "Company",
    items: [
      {
        name: "About",
        href: "/about",
        description: "Learn about our mission",
        icon: Info,
      },
      {
        name: "Contact",
        href: "/contact",
        description: "Get in touch with us",
        icon: Mail,
      },
      {
        name: "Changelog",
        href: "/changelog",
        description: "Latest updates and features",
        icon: History,
      },
      {
        name: "Privacy Policy",
        href: "/privacy",
        description: "Privacy policy and data protection",
        icon: Shield,
      },
      {
        name: "Disclaimer",
        href: "/disclaimer",
        description: "Terms and conditions",
        icon: FileCheck,
      },
    ],
  },
]

function getPageTitle(pathname: string): string {
  const baseTitle = "Joecalih"

  if (pathname === "/") return baseTitle

  const pathSegments = pathname.split("/").filter(Boolean)
  const firstSegment = pathSegments[0]

  const pageNames: { [key: string]: string } = {
    samples: "Samples",
    album: "Albums",
    luts: "LUTs",
    "lightroom-presets": "Lightroom Presets",
    blog: "Blog",
    pricing: "Pricing",
    support: "Support",
    contact: "Contact",
    about: "About",
    dashboard: "Dashboard",
    studio: "Studio",
    services: "Services",
    products: "Products",
    members: "Members",
    changelog: "Changelog",
    privacy: "Privacy",
    disclaimer: "Disclaimer",
    shop: "Shop",
    vocals: "Vocals",
    graphics: "Graphics",
  }

  const pageName = pageNames[firstSegment]
  return pageName ? `${baseTitle} - ${pageName}` : baseTitle
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const pageTitle = getPageTitle(pathname)

  return (
    <>
      <motion.header
        className="w-full bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-16">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-[#fc3c44] rounded-md w-8 h-8 flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium text-foreground">{pageTitle}</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-2">
                {navigation.map((section) => (
                  <NavigationMenuItem key={section.name}>
                    {section.items ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-accent data-[state=open]:bg-accent border-none rounded-md px-3 py-2 text-sm font-medium">
                          {section.name}
                        </NavigationMenuTrigger>
                        {section.name === "Music" ? (
                          <NavigationMenuContent>
                            <div className="grid grid-cols-2 gap-8 p-6 w-[800px] bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg">
                              {section.items.map((group, index) => (
                                <div key={index}>
                                  <h4 className="text-sm font-medium leading-none mb-4 text-muted-foreground">
                                    {group.section}
                                  </h4>
                                  <div className="grid gap-4">
                                    {group.items.map((item) => {
                                      const IconComponent = item.icon
                                      return (
                                        <NavigationMenuLink key={item.name} asChild>
                                          <Link
                                            href={item.href}
                                            className="group grid grid-cols-[40px_1fr] items-center gap-4 p-2 hover:bg-accent rounded-md transition-colors"
                                          >
                                            <div className="flex items-center justify-center size-10 rounded-md bg-[#fc3c44]/10 border border-[#fc3c44]/20">
                                              <IconComponent className="size-5 text-[#fc3c44]" />
                                            </div>
                                            <div>
                                              <div className="text-sm font-medium mb-1 text-foreground">
                                                {item.name}
                                              </div>
                                              <p className="text-sm text-muted-foreground">{item.description}</p>
                                            </div>
                                          </Link>
                                        </NavigationMenuLink>
                                      )
                                    })}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </NavigationMenuContent>
                        ) : (
                          <NavigationMenuContent>
                            <div className="grid w-[320px] gap-1 p-3 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg">
                              {section.items.map((item) => (
                                <NavigationMenuLink key={item.name} asChild>
                                  <Link
                                    href={item.href}
                                    className="flex items-center gap-3 select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    {item.icon && (
                                      <div className="flex items-center justify-center size-8 rounded-md bg-[#fc3c44]/10 border border-[#fc3c44]/20">
                                        <item.icon className="size-4 text-[#fc3c44]" />
                                      </div>
                                    )}
                                    <div>
                                      <div className="text-sm font-medium leading-none text-foreground">
                                        {item.name}
                                      </div>
                                      <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">
                                        {item.description}
                                      </p>
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </NavigationMenuContent>
                        )}
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={section.href}
                          className="bg-transparent text-foreground hover:bg-accent border-none rounded-md px-3 py-2 text-sm font-medium transition-colors"
                        >
                          {section.name}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="flex items-center gap-2">
            {/* Theme Switcher */}
            <motion.button
              onClick={toggleTheme}
              className="bg-muted rounded-full w-8 h-8 flex items-center justify-center cursor-pointer border border-border"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-foreground" />
              ) : (
                <Moon className="w-4 h-4 text-foreground" />
              )}
            </motion.button>

            {/* Notifications */}
            <motion.div
              className="bg-muted rounded-full w-8 h-8 flex items-center justify-center cursor-pointer border border-border"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell className="w-4 h-4 text-foreground" />
            </motion.div>

            {/* Sign In Button */}
            <motion.button
              onClick={() => setAuthModalOpen(true)}
              className="bg-muted rounded-full w-8 h-8 flex items-center justify-center cursor-pointer border border-border"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <User className="w-4 h-4 text-foreground" />
            </motion.button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-foreground hover:bg-accent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border"
            >
              <div className="max-w-[1200px] mx-auto px-4 py-4 space-y-4">
                {navigation.map((section) => (
                  <div key={section.name} className="space-y-2">
                    {section.items ? (
                      <>
                        <h3 className="font-medium text-foreground">{section.name}</h3>
                        <div className="pl-4 space-y-2">
                          {section.name === "Music"
                            ? section.items.map((group, groupIndex) => (
                                <div key={groupIndex} className="space-y-2">
                                  <h4 className="text-sm font-medium text-muted-foreground">{group.section}</h4>
                                  <div className="pl-2 space-y-1">
                                    {group.items.map((item) => (
                                      <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                      >
                                        {item.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))
                            : section.items.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={section.href}
                        className="block font-medium text-foreground hover:text-[#fc3c44] transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {section.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Auth Modal */}
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />

      {/* Blur overlay for main content when auth modal is open */}
      {authModalOpen && (
        <style jsx global>{`
          main {
            filter: blur(8px);
            transition: filter 0.3s ease-in-out;
          }
          footer {
            filter: blur(8px);
            transition: filter 0.3s ease-in-out;
          }
        `}</style>
      )}
    </>
  )
}
