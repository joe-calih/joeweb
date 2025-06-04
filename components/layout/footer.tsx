"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Music, Twitter, Instagram, Youtube, Facebook } from "lucide-react"

const footerSections = [
  {
    title: "Platform",
    links: [
      { name: "Dashboard", href: "/dashboard" },
      { name: "Studio", href: "/studio" },
      { name: "Lessons", href: "/lessons" },
      { name: "Members", href: "/members" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Samples", href: "/samples" },
      { name: "LUTs", href: "/luts" },
      { name: "Lightroom Presets", href: "/lightroom-presets" },
      { name: "Albums", href: "/album" },
      { name: "Shop", href: "/shop" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Changelog", href: "/changelog" },
      { name: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Disclaimer", href: "/disclaimer" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  },
]

const socialLinks = [
  { name: "Twitter", href: "https://twitter.com/joecalih", icon: Twitter },
  { name: "Instagram", href: "https://instagram.com/joecalih", icon: Instagram },
  { name: "YouTube", href: "https://youtube.com/joecalih", icon: Youtube },
  { name: "Facebook", href: "https://facebook.com/joecalih", icon: Facebook },
]

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#333]">
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-[#fc3c44] rounded-md w-10 h-10 flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <span className="font-semibold text-white text-lg">Joecalih</span>
            </motion.div>
            <motion.p
              className="text-gray-400 text-base mb-8 max-w-sm leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Empowering creators with premium resources, tools, and insights to elevate their creative projects and
              connect with audiences worldwide.
            </motion.p>
            <motion.div
              className="flex space-x-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-[#fc3c44] transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
            >
              <h3 className="font-semibold text-white mb-6 text-base">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm leading-relaxed"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-t border-[#333] mt-16 pt-10 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-400 text-base">© {new Date().getFullYear()} Joecalih. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
